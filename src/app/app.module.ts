import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameService } from './game.service';
import { ClearComponent } from './clear/clear.component';
import { GameComponent } from './game/game.component';
import { routing } from './app.routing';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    GameComponent,
    ClearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
