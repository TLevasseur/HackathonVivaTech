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
    this.url = VIDEOS.filter( (e : Url) => e.id === i)[0];
    this.name = navParams.get("name");
    this.logoAddress = navParams.get("logo");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

}


export class Url{
  id : string;
  url : string;
  name : string;
}

/* Should be mapped from json file or something...*/
/*
Ladiv
LOreal
LVMH
Reeport
RTRobotic
Widilo
BNP
easy
*/
export const VIDEOS= [
  {
    "id": "1",
    "url": "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/habilebill.mp4?alt=media&token=aa081f88-9a4c-4f9a-be40-da2fa1dc67bb",
    "name" : "OSS117"
  },{
    "id": "593ec7cd2d8a020010aa123b",
    "url" : "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/Ladiv.MP4?alt=media&token=6da129ed-0735-4e77-9f2b-15e7e4bc89bc",
    "name" : "Ladiv"
  },{
    "id": "593fcf9e4967d8001028eb6e",
    "url" : "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/lOreal.MP4?alt=media&token=13a99afc-8d0b-4f5d-8e2c-87545a16a216",
    "name" : "lOreal"
  },{
    "id": "593ec7e66f4e0f001072ab00",
    "url" : "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/LVMH.MP4?alt=media&token=de3bedbb-28dc-452e-8afa-36b65057b652",
    "name" : "LVMH"
  },{
    "id": "593ec7b1bc296100109aef6e",
    "url" : "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/Reeport.MP4?alt=media&token=f2ceecac-07fb-4d41-9a9e-50d0f5ccc8fd",
    "name" : "Reeport"
  },{
    "id": "-1",
    "url" : "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/RtRobotic.MP4?alt=media&token=639771c0-d1d0-411d-9c06-ef92dbbbc06b",
    "name" : "RtRobotic"
  },{
    "id": "593ec7d880db880010c75b46",
    "url" : "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/Widilo.MP4?alt=media&token=05d80f54-a233-4fca-b49b-dacc66fe1792",
    "name" : "Widilo"
  },{
    "id": "593fcf9fef3f86001a47e3fa",
    "url" : "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/BNP.MP4?alt=media&token=b019e5ec-be4c-4c3f-9387-578debc4fca5",
    "name" : "BNP"
  },{
    "id": "-1",
    "url" : "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/easy.MP4?alt=media&token=209845d4-572b-4abe-ac67-bbb107f69a2b",
    "name" : "easy"
  }
];


