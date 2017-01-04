import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <h1>テスト</h1>
   <nav>
<!--
デバッグ用
-->
     <a routerLink="/top">game</a>
     <a routerLink="/clear">clear</a>
   </nav>
   <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
