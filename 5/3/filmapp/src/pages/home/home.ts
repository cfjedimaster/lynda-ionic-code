import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public movies = new Array();
  private detailPage;

  constructor(public navCtrl: NavController) {
    this.movies.push({title:"Movie 1",id:1});
    this.movies.push({title:"Movie 2",id:2});
    this.movies.push({title:"Movie 3",id:3});

    this.detailPage = DetailPage;
  }

  loadDetail(movie) {
    this.navCtrl.push(this.detailPage, {movie:movie.id});
  }

}
