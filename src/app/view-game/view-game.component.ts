import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GameService } from "../shared/game.service";

@Component({
  selector: 'app-view-game',
  standalone: true,
  template: `
    <div class="row">
      <table class="table" *ngIf="gameService.game.bowl.papers$ | async as papers">
        <thead>
          <tr>
            <th scope="col">Text</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of papers; index as i">
            <td>{{row}}</td>
            <td>Actions</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  imports: [
    CommonModule
  ]
})
export class ViewGameComponent {
  constructor(
    public gameService: GameService
  ) {}
}
