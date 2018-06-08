import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DestinationProvider } from '../../providers/destination/destination';

/**
 * Generated class for the DestinationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-destination',
  templateUrl: 'destination.html',
})
export class DestinationPage implements OnInit{
  rootDestination: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private destinationService: DestinationProvider) {
  }

  ngOnInit(){
    this.rootDestination = this.destinationService.getRootPlaces();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DestinationPage');
  }

}
