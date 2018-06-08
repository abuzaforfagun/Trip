import { SigninPage } from './../signin/signin';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


/**
 * Generated class for the SplashscreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-splashscreen',
  templateUrl: 'splashscreen.html',
})
export class SplashscreenPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.navCtrl.push(SigninPage);
      
    }, 2000);
  }

}
