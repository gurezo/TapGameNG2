/*  TapGameのトップページ用コンポーネント  */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(
    private router: Router,
    private gameService: GameService) { }

  ngOnInit() {
  }

}
