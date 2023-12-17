import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Nivel } from 'src/app/utils/nivel.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public arregloNumeros: number[] = [];
  public arregloSize: number = 0;
  public numeroParaAdivinar: number | null = null;
  public puntos: number = 0;
  public nivel!: Nivel;
  public tiempoRestante: number = 0;

  constructor(
    private gameSvc: GameService
  ) { }

  ngOnInit(): void {
    this.arregloSize = this.gameSvc.arregloSize;
    this.gameSvc.numeroParaAdivinar$.subscribe((numero: number | null) => this.numeroParaAdivinar = numero);
    this.gameSvc.arregloNumeros$.subscribe((arreglo: number[]) => this.arregloNumeros = arreglo);
    this.gameSvc.puntuacion$.subscribe((puntos: number) => this.puntos = puntos);
    this.gameSvc.nivel$.subscribe((nivel: Nivel) => {
      this.nivel = nivel;
      this.tiempoRestante = this.nivel.tiempo / 1000;
    });
    this.gameSvc.conteoRegresivo$.subscribe( tiempo => this.tiempoRestante = tiempo);
  }

  public jugar() {
    this.gameSvc.iniciarJuego();
    console.table(this.arregloNumeros);
  }

}
