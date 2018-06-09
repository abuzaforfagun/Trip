import { SuggestionresturantsPage } from './../suggestionresturants/suggestionresturants';
import { SuggestionhotelsPage } from './../suggestionhotels/suggestionhotels';
import { SuggestiontravelsPage } from './../suggestiontravels/suggestiontravels';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SuggestioneventsPage } from '../suggestionevents/suggestionevents';

declare var $: any;

@Component({
  selector: 'page-suggestiontabs',
  templateUrl: 'suggestiontabs.html'
})


export class SuggestiontabsPage {

  suggestiontravelsRoot = SuggestiontravelsPage
  suggestionhotelsRoot = SuggestionhotelsPage
  suggestionresturantsRoot = SuggestionresturantsPage
  suggestioneventsRoot = SuggestioneventsPage


  constructor(public navCtrl: NavController) {}
  
  
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
