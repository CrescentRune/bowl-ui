import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { GameService } from "../shared/game.service";

@Component({
  selector: 'app-add-paper',
  standalone: true,
  template: `
    <div class="container">
      <div class="row">
        <div class="mb-3">
          <label for="paperInput" class="form-label">Add paper</label>
          <input
            type="text"
            class="form-control"
            [formControl]="paper"
            id="paperInput"
            placeholder="add some stuff!"/>
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-primary" (click)="add()">Add</button>
        </div>
      </div>
    </div>
  `,
  imports: [ReactiveFormsModule]
})
export class AddPaperComponent {

  paper = new FormControl('');

  constructor(
    private gameService: GameService
  ) {}

  add() {
    const val = this.paper.value;
    if (val) {
      this.gameService.addPaper(val);
      this.paper.reset();
    }
  }


}
