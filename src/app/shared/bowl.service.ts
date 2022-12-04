import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class BowlService {

  private papers: string[] = [];

  constructor() {}

  shuffleBowl() {
    let bowl = this.papers;
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

    this.papers = bowl;
  }

  addPaper(text: string) {
    if (this.papers.indexOf(text) < 0) {
      this.papers.push(text);
      this.shuffleBowl();
    }
  }

  clearBowl() {
    this.papers = [];
  }

  drawPaper(): string | undefined {
    return this.papers.pop();
  }

  getCount() {
    return this.papers.length;
  }

}
