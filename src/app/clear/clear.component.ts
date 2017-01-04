/*  TapGameのクリアページ用コンポーネント  */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { GameService } from '../game.service';

@Component({
  selector: 'app-clear',
  templateUrl: './clear.component.html',
  styleUrls: ['./clear.component.css']
})
export class ClearComponent implements OnInit {

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
