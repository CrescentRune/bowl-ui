import { BehaviorSubject, Observable } from "rxjs";

export class Bowl {

  private papers: string[] = ['Test', 'These', 'Strings', 'Are'];
  papers$ = new BehaviorSubject<string[]>([]);
  bowlEmpty$ = new BehaviorSubject<boolean>(true);
  private inBowl: string[] = [];

  constructor() {
    this.resetBowl();
  }

  shuffleBowl() {
    let bowl = this.inBowl;
    let currentIndex = bowl.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [bowl[currentIndex], bowl[randomIndex]] = [
        bowl[randomIndex], bowl[currentIndex]];
    }

    this.inBowl = bowl;
  }

  addPaper(text: string) {
    if (this.papers.indexOf(text) < 0) {
      this.papers.push(text);
      this.resetBowl();
    }
  }

  clearBowl() {
    this.papers = [];
    this.inBowl = [];
    this.onUpdateCards();
  }

  resetBowl() {
    this.inBowl = this.papers.slice();
    this.shuffleBowl();
  }

  drawPaper(): string | undefined {
    return this.inBowl.pop();
  }

  getCount() {
    return this.papers.length;
  }

  onUpdateCards() {
    this.papers$.next(this.papers.slice());
  }

}
