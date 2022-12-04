import { Injectable } from "@angular/core";
import { Bowl } from "./bowl.model";

enum GameState {
  init = 'INIT',
  creating = 'CREATING',
  playing = 'PLAYING',
}

interface Game {
  state: GameState;
  bowl: Bowl;
  players: string[];
  entriesPerPlayer: number;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  game!: Game;

  constructor() {
    this.initGame();
  }

  initGame() {
    this.game = {
      state: GameState.init,
      bowl: new Bowl(),
      players: [],
      entriesPerPlayer: 3
    }
  }

  resetGameBowl() {
    this.game.bowl.resetBowl();
  }

  shuffleBowl() {
    this.game.bowl.shuffleBowl();
  }

  drawPaper() {
    return this.game.bowl.drawPaper();
  }

  addPaper(text: string) {
    this.game.bowl.addPaper(text);
  }

}
