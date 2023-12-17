import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
    private gameSvc: GameService
  ) { }

  cerrarJuego() {
    this.gameSvc.cerrarJuego();
  }

}
