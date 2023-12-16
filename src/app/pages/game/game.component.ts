import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public arregloAleatorio: number[] = []
  public arregloSize: number = 9;
  public numeroParaAdivinar: number | null = null;

  constructor() { }

  ngOnInit(): void {
    // this.jugar(this.arregloSize);
  }

  private generarNumerosAleatorios(size: number): number[] {
    //crear un arreglo de numeros consecutivos
    const arregloConsecutivo = [1,2,3,4,5,6,7,8,9];
    
    // Obtener un índice aleatorio y extraer el correspondiente
    const obtenerNumeroAleatorio = (arr: number[]) => {
      const indiceAleatorio = Math.floor(Math.random() * arr.length);
      return arr.splice(indiceAleatorio, 1)[0];
    }

    //Generar Arreglo Aleatorio
    const arregloAleatorio = Array.from({length: size}, () => obtenerNumeroAleatorio(arregloConsecutivo));

    return arregloAleatorio;
  }

  elegirNumeroParaAdivinar(numero: number){
    this.numeroParaAdivinar = numero;
  }

  public jugar(size: number) {
    this.arregloAleatorio = this.generarNumerosAleatorios(size);
    this.numeroParaAdivinar = null;
    console.table(this.arregloAleatorio);
  }

}
