import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  jugador: string = '';

  constructor(
    private route: Router,
    private gameSvc: GameService
  ) { }

  iniciar() {
    this.gameSvc.nombreJugador = this.jugador;
    this.route.navigate(['/game']);
  }
}
