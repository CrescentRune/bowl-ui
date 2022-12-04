import { Component } from "@angular/core";
import { RouterModule } from '@angular/router';
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  template: `
    <app-navigation></app-navigation>
    <div class="container mt-3">
      <router-outlet></router-outlet>
    </div>
  `,
  imports: [
    RouterModule,
    NavigationComponent
  ]
})
export class LayoutComponent {

}
