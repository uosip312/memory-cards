import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.scss']
})
export class NumberListComponent implements OnChanges {
  @Input() arregloNumeros: number[] = [];
  @Output() elegirNumeroParaAdivinar = new EventEmitter<number>();
  public indexNumeroClickeado: number | null = null;
  public numeroParaAdivinar: number | null = null;
  public mostrarNumero: boolean = true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const arregloNumeros = changes['arregloNumeros'];
    const iniciarJuego = arregloNumeros.previousValue != arregloNumeros.currentValue;
    if(iniciarJuego) {
      this.mostrarNumero = true;
      this.iniciarSeleccionNumero(this.arregloNumeros.length)
    };
  }

  private seleccionarNumeroAleatorio(arregloSize: number) {
    const indiceNumero = Math.floor( Math.random() * arregloSize );
    this.numeroParaAdivinar = this.arregloNumeros[indiceNumero];
    this.elegirNumeroParaAdivinar.emit(this.numeroParaAdivinar);
  }

  private iniciarSeleccionNumero(arregloSize: number) {
    setTimeout(() => {
      this.seleccionarNumeroAleatorio(arregloSize);
      this.mostrarNumero = false;
    }, 2000);
  }

  onNumeroClick(indice: number, numero: number) {
    console.warn(indice + ': ' + numero);
    this.indexNumeroClickeado = indice;
  }

}
