/*  TapGameのゲームページ用パーツコンポーネント  */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  tapflg;

  ngOnInit() {
    //htmlタグで書いた方がスマートだけど
    //チェック処理は、tsファイルに実装した方が良さそう
    // 画像のソース指定を切り替える方式にする
    this.tapflg = 'hima';
  }

  // タップした時の処理
  onTap(): void {
    //配列のフラグを帰るか、スタイルで判定するか・・・・。
    if (this.tapflg === 'hima') {
      this.tapflg = 'tsubushi';
    }
  }
}
