import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Niveles } from 'src/app/utils/lista-niveles';
import { Nivel } from 'src/app/utils/nivel.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public jugador: string = '';
  public listaNiveles: Nivel[] = Niveles;
  public nivel!: any;
  @Output() nivelCambiado = new EventEmitter<boolean>();

  constructor(
    private gameSvc: GameService
  ) { }

  ngOnInit(): void {
    this.jugador = this.gameSvc.nombreJugador;
  }

  onNivelSeleccionado(event: any) {
    const idNivel = +event.value;
    this.nivelCambiado.emit(true);
    if(idNivel) {
      this.nivel = this.listaNiveles.find((nivel: Nivel) => nivel.id === idNivel );
      this.gameSvc.nivel = this.nivel;
      this.gameSvc.reiniciarJuego();
    } else {
      this.gameSvc.nivel = undefined;
      this.gameSvc.reiniciarJuego();
    }
  }

}
