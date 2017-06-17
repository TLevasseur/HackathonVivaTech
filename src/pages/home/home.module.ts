import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { BubbleComponent } from '../../components/bubble/bubble';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage,BubbleComponent
  ], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}