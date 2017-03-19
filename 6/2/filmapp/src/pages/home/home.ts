import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { FilmData } from '../../providers/film-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[FilmData]
})
export class HomePage {

  public movies = new Array();
  private detailPage;

  constructor(public navCtrl: NavController, public filmData:FilmData) {

    this.detailPage = DetailPage;
    this.filmData.getFilms().subscribe(films => {
      console.log('films', films);
      this.movies = films;
    });
  }

  loadDetail(movie) {
    this.navCtrl.push(this.detailPage, {movie:movie.url});
  }

}
