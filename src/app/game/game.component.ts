/*  TapGameのゲームプレイページ用コンポーネント  */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { GameService } from '../game.service';
import { pannelsInfo, pannel_size } from '../pannels.info';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  rec = pannelsInfo;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute) { }

  ngOnInit() {

  }

  // ここでサービルとかを呼び出して自動的に画面遷移したい。
  // ど〜ゆ〜タイミングでやったら良いか・・・・・。
  // this.router.navigate(['/clear']);
}
