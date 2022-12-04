import { BehaviorSubject, Observable } from "rxjs";

export class Bowl {

  private papers: string[] = [];
  papers$ = new BehaviorSubject<string[]>([]);
  private inBowl: string[] = [];

  constructor() {}

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
      this.shuffleBowl();
      this.onUpdateCards();
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
