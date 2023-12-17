import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Injectable({
  providedIn: 'root'
})
export class GameGuard implements CanActivate {
  private nombreJugador: string = '';

  constructor(
    private gameSvc: GameService,
    private router: Router
  ) {}

  canActivate( ): boolean {
    this.nombreJugador = this.gameSvc.nombreJugador;
    if(this.nombreJugador == 'null') {
      this.router.navigate(['/home']);
    }
    return true;
  }
  
}
