/*  TapGameのゲーム用サービス  */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GameService {

  constructor() { }

  //ゲーム開始時処理
  initPanels(): void {
    // パネルを動的にセット 9x9 の予定
  }

  //タップ画像枚数カウント
  chekTapCount(): void {
    // クリア画面へ自動遷移
    this.movePage();
  }

  //画面自動遷移
  movePage(): void {
    console.log("movePage()")
    return;
  }
}
