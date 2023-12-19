import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Nivel } from 'src/app/utils/nivel.interface';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.scss']
})
export class NumberListComponent implements OnInit, OnChanges {
  @Input() arregloNumeros: number[] = [];
  @Output() numeroAcertado = new EventEmitter<boolean>();
  public indexNumeroClickeado: number | null = null;
  public numeroParaAdivinar: number | null = null;
  public mostrarNumero: boolean = true;
  public inhabilitarClick: boolean = true;
  public nivel!: Nivel;
  public clasePadNumerico: string = '';

  constructor(
    private gameSvc: GameService
  ) { }

  ngOnInit(): void {
    this.gameSvc.numeroParaAdivinar$.subscribe((numero: number | null) => this.numeroParaAdivinar = numero);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const arregloNumeros = changes['arregloNumeros'];
    const iniciarJuego = arregloNumeros.previousValue != arregloNumeros.currentValue;
    if(iniciarJuego) {
      this.nivel = this.gameSvc.nivel;
      this.clasePadNumerico = '';
      this.mostrarNumero = true;
      this.indexNumeroClickeado = null;
      this.gameSvc.iniciarConteoRegresivo();
      this.iniciarSeleccionNumero(this.arregloNumeros.length)
    };
  }

  private iniciarSeleccionNumero(arregloSize: number) {
    setTimeout(() => {
      this.gameSvc.seleccionarNumeroAleatorio(arregloSize);
      this.mostrarNumero = false;
      this.inhabilitarClick = false;
    }, this.nivel.tiempo);
  }

  onNumeroClick(indice: number, numero: number) {
    this.indexNumeroClickeado = indice;
    const acertado = this.numeroParaAdivinar == numero;
    this.clasePadNumerico = (acertado) ? 'pad-acertado' : 'pad-fallado';
    this.numeroAcertado.emit(acertado)
    this.gameSvc.calcularPuntuacion(numero);
    this.inhabilitarClick = true;
  }

}
