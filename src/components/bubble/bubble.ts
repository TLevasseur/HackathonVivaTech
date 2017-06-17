import { Component } from '@angular/core';

/**
 * Generated class for the BubbleComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'bubble',
  templateUrl: 'bubble.html'
})
export class BubbleComponent {

  text: string;
  top: "100px";
  left: "100px";
  size: "60px";

  constructor() {
    console.log('Hello BubbleComponent Component');
    this.text = 'Hello World';
  }

}
