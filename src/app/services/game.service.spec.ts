import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { Router } from '@angular/router';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('Debe crear el servicio GameService', () => {
    expect(service).toBeTruthy();
  });

  it('Debe generar arreglo numericos random', () => {
    const gameService = TestBed.inject(GameService);
    const size = 9;
    gameService.generarNumerosAleatorios(size);
    const arregloNumeros = gameService.arregloNumeros;
    
    expect(arregloNumeros.length).toBe(size);
  
    const uniqueNumbers = new Set(arregloNumeros);
    expect(uniqueNumbers.size).toBe(size);
  });

  it('Debe seleccionar un número aleatorio para adivinar', () => {
    const gameService = TestBed.inject(GameService);
    const arregloSize = 9;
    gameService.generarNumerosAleatorios(arregloSize);
    gameService.seleccionarNumeroAleatorio(arregloSize);
    const numeroParaAdivinar = gameService.numeroParaAdivinar;

    // Add your specific assertions here based on the expected behavior of your service
    expect(numeroParaAdivinar).not.toBeNull();
    // You can add more assertions depending on your service logic
  });

  it('Debería calcular la puntuación correctamente cuando se acierta', () => {
    const gameService = TestBed.inject(GameService);
    
    gameService.numeroParaAdivinar = 8;
    gameService._nivel = { puntos: 10 } as any;

    gameService.calcularPuntuacion(8);

    expect(gameService.puntos).toBe(10);
    
    gameService.puntuacion$.subscribe(puntos => {
      expect(puntos).toBe(10);
    });
  });

  it('Debería reiniciar los puntos correctamente', () => {
    const gameService = TestBed.inject(GameService);
    
    gameService.puntos = 20;

    gameService.reiniciarPuntos();

    expect(gameService.puntos).toBe(0);
    
    gameService.puntuacion$.subscribe(puntos => {
      expect(puntos).toBe(0);
    });
  });

  it('Debería iniciar el juego correctamente', () => {
    const gameService = TestBed.inject(GameService);
    
    spyOn(gameService, 'generarNumerosAleatorios');
    
    gameService.iniciarJuego();

    // Verifica que el arregloNumeros$ emita un nuevo arreglo vacío
    gameService.arregloNumeros$.subscribe(arregloNumeros => {
      expect(arregloNumeros.length).toBe(0);
    });
    // Verifica que se haya llamado a generarNumerosAleatorios
    expect(gameService.generarNumerosAleatorios).toHaveBeenCalledWith(gameService.arregloSize);
    // Verifica que el numeroParaAdivinar$ emita null
    gameService.numeroParaAdivinar$.subscribe(numeroParaAdivinar => {
      expect(numeroParaAdivinar).toBe(null);
    });
  });

  it('Deberia reiniciar el juego correctamente', () => {
    const gameService = TestBed.inject(GameService);
    
    spyOn(gameService.puntuacion$, 'next');
    spyOn(gameService.arregloNumeros$, 'next');
    spyOn(gameService.numeroParaAdivinar$, 'next');

    gameService.reiniciarJuego();

    expect(gameService.puntuacion$.next).toHaveBeenCalledWith(0);
    expect(gameService.arregloNumeros$.next).toHaveBeenCalledWith([]);
    expect(gameService.numeroParaAdivinar$.next).toHaveBeenCalledWith(null);
  });

  it('Deberia cerrar el juego y navegar a home', () => {
    const gameService = TestBed.inject(GameService);
    const router = TestBed.inject(Router);
    jasmine.clock().install();
    
    spyOn(sessionStorage, 'removeItem');
    spyOn(router, 'navigate');
    spyOn(gameService, 'reiniciarJuego');

    gameService.cerrarJuego();

    expect(sessionStorage.removeItem).toHaveBeenCalledWith('jugador');
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
    expect(gameService.reiniciarJuego).toHaveBeenCalled();
  });

});
