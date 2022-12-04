import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: 'app-paper-card',
  standalone: true,
  template: `
    <div class="card card-body">
      <ng-container *ngIf="cardText && cardText !== ''; else placeholder">{{cardText}}</ng-container>
      <ng-template #placeholder>
        <p aria-hidden="true">
          <span class="placeholder col-6"></span>
        </p>
      </ng-template>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule
  ],
})
export class PaperCardComponent {
  @Input() cardText: string | undefined;
}
