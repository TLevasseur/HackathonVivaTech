import{Component}from'@angular/core';
import {NavController , IonicPage}from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {
        /*var socket = null;
        var serverAddress : string = 'http://mapwize-cmx-server-vivatech2017-dev.azurewebsites.net/';
        startSocket();

        function startSocket() {
            socket = io(serverAddress);
            socket.on('position', receivePosition);
            socket.on('connect', function () {
                console.log('connect');

                socket.emit('addresses', { address: '10.102.163.5'});
            });
        }

        function receivePosition(position) {
            console.log('caaaaaaall ' + lat);

            var pos = position.position;

            lat = pos.latitude;
            lng = pos.longitude;

            console.log('laaaat ' + lat);
        }*/
    }
    goToVideo(i : number){
        this.navCtrl.push("VideoPage", { id: i, name: "oss117", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57VHGEzyp0HL477Ij4vHCdTTr4IAIuKvgQoENBTQlfazkF5kCfy91TOGf"});
    }

}
