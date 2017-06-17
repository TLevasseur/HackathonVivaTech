import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToVideo(i : number){
    this.navCtrl.push("VideoPage", { id: i, name: "oss117", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57VHGEzyp0HL477Ij4vHCdTTr4IAIuKvgQoENBTQlfazkF5kCfy91TOGf"});
  }

}
