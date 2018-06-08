import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DestinationPage } from './destination';

@NgModule({
  declarations: [
    DestinationPage,
  ],
  imports: [
    IonicPageModule.forChild(DestinationPage),
  ],
})
export class DestinationPageModule {}
