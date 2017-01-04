import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClearComponent } from './clear/clear.component';
import { GameComponent } from './game/game.component';
import { TopComponent } from './top/top.component';

const appRoute: Routes = [
  {
    path: 'heroes',
    component: ClearComponent
  },
  {
    path: 'dashboard',
    component: TopComponent
  },
  {
    path: 'detail/:id',
    component: GameComponent
  },
  {
    path: '',
    redirectTo: '/top',
    pathMatch: 'full'
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);
