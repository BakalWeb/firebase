import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div class="full-outer-wrapper">
  <app-top-nav></app-top-nav>
    <router-outlet></router-outlet>

    <app-chat-toggle></app-chat-toggle>
  </div>
  `
})
export class AppComponent {
}
