import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameGuard } from './utils/game.guard';

const routes: Routes = 
[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./pages/game/game.module').then(m => m.GameModule),
    canActivate: [GameGuard]
  },
  {
    path: '**',
    redirectTo: 'home',
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
