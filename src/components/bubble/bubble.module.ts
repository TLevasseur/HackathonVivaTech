import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BubbleComponent } from './bubble';

@NgModule({
  declarations: [
    BubbleComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    BubbleComponent
  ]
})
export class BubbleComponentModule {}
