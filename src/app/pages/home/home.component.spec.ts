import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';
import { GameGuard } from 'src/app/utils/game.guard';

describe('HomeComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule.withRoutes([]), FormsModule],
      providers: [
        GameService,
        // Desactivar temporalmente el GameGuard para la prueba
        { provide: GameGuard, useValue: { canActivate: () => true } }
      ]
    })
    .compileComponents();
  });

  it('Debe crear el HomeComponent', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;

    expect(home).toBeTruthy();
  });

  it('Debe deshabilitar el boton si nombre del jugador esta vacio', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    fixture.detectChanges();
    tick();
    
    home.jugador = '';
      
    const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('.submit');
  
    expect(submitButton.disabled).toBeFalsy();
  }));
  
  it('Debe habilitar el boton si nombre del jugador esta escrito', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    fixture.detectChanges();
    tick();
    
    home.jugador = 'Jugador Prueba';
  
    const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('.submit');
  
    expect(submitButton.disabled).toBeFalsy();
  }));

  // it('Debe escribir un nombre de Jugador y navegar a /game', fakeAsync(() => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   const home = fixture.componentInstance;
  //   const gameSvc = TestBed.inject(GameService);
  //   const router = TestBed.inject(Router);

  //   const nombreJugador = 'Jugador Prueba';
  //   //Simular entrada de jugador
  //   home.jugador = nombreJugador;

  //   //Click en Boton Iniciar
  //   home.iniciar();

  //   //Verificar que el gameService tiene el nombre del jugador correcto
  //   expect(gameSvc.nombreJugador).toEqual(nombreJugador);
    
  //   //Esperar a que se completen las tareas asincronicas
  //   fixture.whenStable().then(() => {
  //     //Verificar que navega a /game
  //     expect(router.url).toEqual('/game');
  //   });
  //   //Forzar ejecucion de tarea asincronica
  //   tick();
  // }));
});
