import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public people = new Array();
  private detailPage;

  constructor(public navCtrl: NavController) {
    this.people.push({name:"Person One", id:1});
    this.people.push({name:"Person Two", id:2});
    this.people.push({name:"Person Three", id:3});

    this.detailPage = DetailPage;
  }

  loadDetail(person) {
    console.log(person);
    this.navCtrl.push(this.detailPage, {person:person.id});
  }

}
