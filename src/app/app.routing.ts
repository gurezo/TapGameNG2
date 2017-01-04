import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClearComponent } from './clear/clear.component';
import { GameComponent } from './game/game.component';
import { TopComponent } from './top/top.component';

const appRoute: Routes = [
  {
    path: 'clear',
    component: ClearComponent
  },
  {
    path: 'top',
    component: TopComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: '',
    redirectTo: '/top',
    pathMatch: 'full'
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);
