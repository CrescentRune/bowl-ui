import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GameService } from "../shared/game.service";
import { PaperCardComponent } from "./paper-card/paper-card.component";

@Component({
  selector: 'app-pull-paper',
  standalone: true,
  template: `
     <div class="container">
      <div class="row">
        <div class="mb-3">
          <app-paper-card [cardText]="paper"></app-paper-card>
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-primary" (click)="onPull()">Pull</button>
        </div>
      </div>
    </div>
  `,
  imports: [
    CommonModule,
    PaperCardComponent
  ]
})
export class PullPaperComponent {

  paper: string | undefined;

  constructor(
    private gameService: GameService
  ) {}

  onPull() {
    this.paper = this.gameService.drawPaper();
  }
}
