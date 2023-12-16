import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private arregloNumeros!: number[];
  private numeroParaAdivinar: number | undefined;
  public arregloSize: number = 0;
  public puntos: number = 0;
  public numeroParaAdivinar$: Subject<number> = new Subject();
  public arregloNumeros$: Subject<number[]> = new Subject();
  public puntuacion$: Subject<number> = new Subject();

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
      this.puntos += 1;
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

}
