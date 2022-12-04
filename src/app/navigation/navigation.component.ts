import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-navigation',
  standalone: true,
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" routerLink="add-paper" routerLinkActive="active">Add paper</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="pull" routerLinkActive="active">Draw paper</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="view-game"  routerLinkActive="active">View Game</a>
      </li>
    </ul>
  `,
  imports: [
    RouterModule
  ]
})
export class NavigationComponent {

}
