/*  TapGameのゲームページ用パーツコンポーネント  */
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements DoCheck {

  constructor() { }

  //タップ時画像入れ替えメソッド
  //memo NgClass,NgStyleで可能かも。
  //https://is.gd/VqJuQ4
  ngDoCheck(){
    //htmlタグで書いた方がスマートだけど
    //チェック処理は、tsファイルに実装した方が良さそう
  }

}
