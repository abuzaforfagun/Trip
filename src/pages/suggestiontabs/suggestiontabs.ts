import { SuggestionresturantsPage } from './../suggestionresturants/suggestionresturants';
import { SuggestionhotelsPage } from './../suggestionhotels/suggestionhotels';
import { SuggestiontravelsPage } from './../suggestiontravels/suggestiontravels';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SuggestioneventsPage } from '../suggestionevents/suggestionevents';

// declare let $: any;
declare let $: any;

@Component({
  selector: 'page-suggestiontabs',
  templateUrl: 'suggestiontabs.html'
})


export class SuggestiontabsPage  implements OnInit{

  suggestiontravelsRoot = SuggestiontravelsPage
  suggestionhotelsRoot = SuggestionhotelsPage
  suggestionresturantsRoot = SuggestionresturantsPage
  suggestioneventsRoot = SuggestioneventsPage


  constructor(public navCtrl: NavController) {}
  
  
  ngOnInit(): void {
    $( "#datepicker3" ).datepicker();
    // $( "#toDatePicker" ).datepicker();

    // $( "#datepicker3" ).datepicker();
    $( ".toggle_bar" ).click(function () {
      $( ".toggl_view" ).animate({
        width: "toggle"
      });
    });
  }

  clickBackToDestination() {
    this.navCtrl.pop();
  }

}
