import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GameRoutingModule
  ]
})
export class GameModule { }
