import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "./environments/environment";
import { tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) {}

  joinRoom(roomCode: string, name: string) {
    this.http.post(environment.gameAPI + '/join', {roomCode, name})
      .pipe(tap((resp) => {console.log(resp)}))
      .subscribe(() => {});
  }

  createRoom(name: string) {
    this.http.post(environment.gameAPI + '/create', {name})
      .pipe(tap((resp) => console.log(resp)))
      .subscribe(() => ({}));
  }
}
