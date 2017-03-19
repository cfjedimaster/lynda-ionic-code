import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FilmData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FilmData {

  constructor(public http: Http) {
    console.log('Hello FilmData Provider');
  }

  getFilms() {
    return this.http.get('https://swapi.co/api/films')
    .map(res => res.json())
    .map(res => res.results);
  }

  getFilm(id) {
    return this.http.get('https://swapi.co/api/films/'+id)
    .map(res => res.json());
  }

}
