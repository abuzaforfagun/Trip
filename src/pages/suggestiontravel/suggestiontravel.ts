import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-suggestiontravel',
  templateUrl: 'suggestiontravel.html',
})
export class SuggestiontravelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuggestionPage');
  }

  ngOnInit(): void {
    $(".toggle_bar").click(function () {
      $(".toggl_view").animate({
        width: "toggle"
      });
    });
  }

  clickBackToDestination() {
    this.navCtrl.pop();
  }

}
