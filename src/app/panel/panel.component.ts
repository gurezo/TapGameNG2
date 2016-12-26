/*  TapGameのゲームページ用パーツコンポーネント  */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //タップ時画像入れ替えメソッド
  //memo NgClass,NgStyleで可能かも。
  //https://is.gd/VqJuQ4
}
