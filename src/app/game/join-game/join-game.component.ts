import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { RoomService } from "src/app/shared/room.service";

@Component({
  selector: 'app-join-game',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="container">
      <div class="row">
      <div class="mb-3">
          <label for="gameId">Choose a name</label>
          <input
              type="text"
              class="form-control"
              [formControl]="name"
              id="paperInput"
              maxLength="24"
              placeholder="DonkeyDoug"/>
        </div>
        <div class="mb-3" *ngIf="!isCreate.value">
          <label for="gameId">Enter room number</label>
          <input
              type="text"
              class="form-control"
              [formControl]="roomNum"
              minLength="2"
              maxlength="6"
              id="paperInput"/>
        </div>
        <div class="mb-3">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" [formControl]="isCreate" role="switch" id="createRoomSwitch">
            <label class="form-check-label" for="createRoomSwitch">Create room</label>
          </div>
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-primary" (click)="onClick()">{{ isCreate.value ? 'Create room': 'Join room'}}</button>
        </div>
      </div>
    </div>
  `
})
export class JoinGameComponent {
  name = new FormControl('');
  roomNum = new FormControl('');

  isCreate = new FormControl(false);

  constructor(
    private roomService: RoomService
  ) {

    this.isCreate.valueChanges.subscribe((newVal) =>  newVal ? this.roomNum.disable() : this.roomNum.enable());
  }

  onClick() {
    if (this.isCreate.value) {
      if (this.name.valid && this.name.value) {
        this.roomService.createRoom(this.name.value);
      }
    }
    else {
      if (this.name.valid && this.name.value && this.roomNum.valid && this.roomNum.value) {
        this.roomService.joinRoom(this.roomNum.value, this.name.value);
      }
    }
  }

}
