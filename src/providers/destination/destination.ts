import { Injectable } from '@angular/core';

/*
  Generated class for the DestinationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DestinationProvider {

  constructor() {
    console.log('Hello DestinationProvider Provider');
  }
  getRootPlaces(){
    let rootPlaces = [
      "Volvo",
      "Saab",
      "Opel",
      "Audi"
    ]
    return rootPlaces;
  }

}
