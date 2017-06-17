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

  url : Url;
  name : string;
  logoAddress : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var i = navParams.get("id");
    this.url = VIDEOS.filter( (e : Url) => e.id == i)[0];
    this.name = navParams.get("name");
    this.logoAddress = navParams.get("logo");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

}


export class Url{
  id : number;
  url : string;
}

/* Should be mapped from json file or something...*/
export const VIDEOS= [
  {
    "id": 1,
    "url": "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/habilebill.mp4?alt=media&token=aa081f88-9a4c-4f9a-be40-da2fa1dc67bb"
  }
];


