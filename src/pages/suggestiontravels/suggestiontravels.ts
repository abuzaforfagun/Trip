import { SuggestiontravelProvider } from './../../providers/suggestiontravel/suggestiontravel';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SuggestiontravelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-suggestiontravels',
  templateUrl: 'suggestiontravels.html',
})
export class SuggestiontravelsPage implements OnInit {
  
  list: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private listProvider: SuggestiontravelProvider) {
  }

  ngOnInit(): void {
    this.list = this.listProvider.getList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuggestiontravelsPage');
  }

}
