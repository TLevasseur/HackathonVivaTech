import{Component}from'@angular/core';
import {IonicPage, NavController, NavParams}from 'ionic-angular';

/**
* Generated class for the VideoPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  i : number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.i = navParams.get("id");
    console.log(this.i);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

}
