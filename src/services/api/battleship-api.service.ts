import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Difficulty} from "../../enumeration/difficulty";
import {Game} from "../../entity/game";
import {Coordinates} from "../../entity/coordinates";

@Injectable({
  providedIn: 'root'
})
export class BattleshipApiService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')


  startGameWithDifficulty(difficulty: Difficulty) : Observable<Game> {
    return this.http.post<Game>(
      'http://localhost:8080/game',
      {difficulty: difficulty},
      {headers: this.headers}
    )
  }

  placeShips(game: Game) : Observable<Game> {
    let ships = game.fieldPlayerOne.ships

    return this.http.put<Game>(
      'http://localhost:8080/game/' + game.id + '/placeShips',
      {ships},
      {headers: this.headers}
    )
  }

  shoot(game: Game, coordinates: Coordinates) : Observable<Game> {
    return this.http.put<Game>(
      'http://localhost:8080/game/' + game.id + '/shoot',
      {x: coordinates.x, y: coordinates.y},
      {headers: this.headers}
    )
  }

}
