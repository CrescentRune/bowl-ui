import { Component } from "@angular/core";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  template: `
    <div>Bowl</div>
    <router-outlet></router-outlet>
    <div>Made by Hank</div>
  `,
  imports: [
    RouterModule
  ]
})
export class LayoutComponent {

}
