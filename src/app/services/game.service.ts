import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Nivel } from '../utils/nivel.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private arregloNumeros!: number[];
  private numeroParaAdivinar: number | null = null;
  public arregloSize: number = 9;
  private puntos: number = 0;
  private _nivel!: Nivel;
  public numeroParaAdivinar$: Subject<number | null> = new Subject();
  public arregloNumeros$: Subject<number[]> = new Subject();
  public puntuacion$: Subject<number> = new Subject();
  public nivel$: Subject<Nivel> = new Subject();

  constructor() { }

  public generarNumerosAleatorios(size: number) {
    //crear un arreglo de numeros consecutivos
    const arregloConsecutivo = (size: number): number[] => Array.from({length: size}, (_, index) => index + 1);
    
    // Obtener un índice aleatorio y extraer el correspondiente
    const obtenerNumeroAleatorio = (arr: number[]) => {
      const indiceAleatorio = Math.floor(Math.random() * arr.length);
      return arr.splice(indiceAleatorio, 1)[0];
    }

    //Generar Arreglo Aleatorio
    const numerosConsecutivos = arregloConsecutivo(size);
    this.arregloNumeros = Array.from({length: size}, () => obtenerNumeroAleatorio(numerosConsecutivos));
    this.arregloNumeros$.next(this.arregloNumeros)
  }

  public seleccionarNumeroAleatorio(arregloSize: number) {
    const indiceNumero = Math.floor( Math.random() * arregloSize );
    this.numeroParaAdivinar = this.arregloNumeros[indiceNumero];
    this.numeroParaAdivinar$.next(this.numeroParaAdivinar);
  }

  public calcularPuntuacion(numeroClickeado: number) {
    const acertado = this.numeroParaAdivinar === numeroClickeado;
    if(acertado) {
      this.puntos += this._nivel.puntos;
      this.puntuacion$.next(this.puntos);
    } else {
      this.reiniciarPuntos();
    }
  }

  public reiniciarPuntos() {
    this.puntos = 0;
    this.puntuacion$.next(this.puntos);
    navigator.vibrate(500)
  }

  public iniciarJuego() {
    this.arregloNumeros$.next(new Array);
    this.generarNumerosAleatorios(this.arregloSize);
    this.numeroParaAdivinar$.next(null);
  }

  public reiniciarJuego() {
    this.puntuacion$.next(0);
    this.arregloNumeros$.next(new Array);
    this.numeroParaAdivinar$.next(null);
  }

  set nivel(nivel: any) {
    this._nivel = nivel;
    this.nivel$.next(this._nivel);
  }

  get nivel(): Nivel {
    return this._nivel;
  }

}
