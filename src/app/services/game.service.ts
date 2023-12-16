import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private arregloNumeros!: number[];
  private numeroParaAdivinar!: number;
  public arregloSize: number = 0;
  public numeroParaAdivinar$: Subject<number> = new Subject();
  public arregloNumeros$: Subject<number[]> = new Subject();
  public puntos: number = 0;

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

}
