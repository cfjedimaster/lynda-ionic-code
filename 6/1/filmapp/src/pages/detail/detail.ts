import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  movie = {
    title:"",
    id:""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let movieId = navParams.data.movie;
    this.movie.title = 'Something about '+movieId;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
