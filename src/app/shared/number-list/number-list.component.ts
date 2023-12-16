import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.scss']
})
export class NumberListComponent {
  @Input() numeros: number[] = [];
  @Input() numeroSeleccionado: number | null = null;

  constructor() { }

  onNumeroClick(indice: number, numero: number) {
    console.warn(indice + ': ' + numero);
    if(this.numeroSeleccionado == numero){
      console.log('Ganaste')
    }
  }

}
