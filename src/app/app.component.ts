import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <nav>
<!--
デバッグ用
<a routerLink="/game">game</a>
-->
    <a routerLink="/top">top</a>
    <a routerLink="/clear">clear</a>
   </nav>
   <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '暇潰し';
}
