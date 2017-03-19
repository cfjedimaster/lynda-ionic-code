import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FilmData } from '../../providers/film-data';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  providers:[FilmData]
})
export class DetailPage {

  movie = {
    title:"",
    id:""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public filmData:FilmData) {
    let movieId = navParams.data.movie;
    this.filmData.getFilm(movieId).subscribe( (film) => {
      console.log(film);
      this.movie = film;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
