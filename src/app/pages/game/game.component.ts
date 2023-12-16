import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public arregloNumeros: number[] = [];
  public arregloSize: number = 9;
  public numeroParaAdivinar: number | null = null;
  public puntos: number = 0;

  constructor(
    private gameSvc: GameService
  ) { }

  ngOnInit(): void {
    this.gameSvc.numeroParaAdivinar$.subscribe((numero: number) => this.numeroParaAdivinar = numero);
    this.gameSvc.arregloNumeros$.subscribe((arreglo: number[]) => this.arregloNumeros = arreglo);
  }

  public jugar(size: number) {
    this.gameSvc.generarNumerosAleatorios(size);
    this.numeroParaAdivinar = null;
    console.table(this.arregloNumeros);
  }

}
