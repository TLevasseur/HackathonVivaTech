webpackJsonp([0],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video__ = __webpack_require__(264);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VideoPageModule = (function () {
    function VideoPageModule() {
    }
    return VideoPageModule;
}());
VideoPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__video__["a" /* VideoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__video__["a" /* VideoPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__video__["a" /* VideoPage */]
        ]
    })
], VideoPageModule);

//# sourceMappingURL=video.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* unused harmony export Url */
/* unused harmony export VIDEOS */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
* Generated class for the VideoPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
var VideoPage = (function () {
    function VideoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var i = navParams.get("id");
        this.url = VIDEOS.filter(function (e) { return e.id == i; })[0];
        this.name = navParams.get("name");
        this.logoAddress = navParams.get("logo");
    }
    VideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoPage');
    };
    return VideoPage;
}());
VideoPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-video',template:/*ion-inline-start:"C:\opt\HackathonVivaTech\src\pages\video\video.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <img style="float:left;" alt="vivateck" height="30" src="assets/img/viva_tech_logo.png">\n\n    <img style="float:right;" alt="logo" height="18" src="assets/img/nelson_logo_white.png">\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content fullscreen>\n\n  <h1>{{name}}</h1>\n\n    <img src="{{logoAddress}}"/>\n\n  <video controls class="video_content" width="360" height="260">\n\n    <source\n\n      src="{{url.url}}"\n\n      type=\'video/mp4\'/>\n\n  </video>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\opt\HackathonVivaTech\src\pages\video\video.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], VideoPage);

var Url = (function () {
    function Url() {
    }
    return Url;
}());

/* Should be mapped from json file or something...*/
var VIDEOS = [
    {
        "id": 1,
        "url": "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/habilebill.mp4?alt=media&token=aa081f88-9a4c-4f9a-be40-da2fa1dc67bb"
    }
];
//# sourceMappingURL=video.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map