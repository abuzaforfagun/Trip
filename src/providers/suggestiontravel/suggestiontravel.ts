import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SuggestiontravelProvider {
  private travelList: any[];
  constructor() {
    this.travelList = [
      {
        "image": "https://picsum.photos/372/141/",
        "start_time": "8:30 AM",
        "end_time": "8:00 PM"
      },
      {
        "image": "https://picsum.photos/372/141/",
        "start_time": "8:30 AM",
        "end_time": "8:00 PM"
      },{
        "image": "https://picsum.photos/372/141/",
        "start_time": "8:30 AM",
        "end_time": "8:00 PM"
      },
      {
        "image": "https://picsum.photos/372/141/",
        "start_time": "8:30 AM",
        "end_time": "8:00 PM"
      },
      {
        "image": "https://picsum.photos/372/141/",
        "start_time": "8:30 AM",
        "end_time": "8:00 PM"
      },
      {
        "image": "https://picsum.photos/372/141/",
        "start_time": "8:30 AM",
        "end_time": "8:00 PM"
      }
    ]
  }

  getList(){
    return this.travelList;
  }
}
