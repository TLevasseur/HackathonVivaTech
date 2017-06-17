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
        this.url = VIDEOS.filter(function (e) { return e.id === i; })[0];
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
        selector: 'page-video',template:/*ion-inline-start:"/Users/amar/WebstormProjects/HackathonVivaTech2/src/pages/video/video.html"*/'<ion-header>\n\n  <ion-navbar>\n    <img style="float:left;" alt="vivateck" height="30" src="assets/img/viva_tech_logo.png">\n    <img style="float:right;" alt="logo" height="18" src="assets/img/nelson_logo_white.png">\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen>\n  <h1>{{url.name}}</h1>\n    <!--<img src="{{logoAddress}}"/>-->\n  <video controls class="video_content" width="360" height="500">\n    <source\n      src="{{url.url}}"\n      type=\'video/mp4\'/>\n  </video>\n</ion-content>\n'/*ion-inline-end:"/Users/amar/WebstormProjects/HackathonVivaTech2/src/pages/video/video.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
], VideoPage);

var Url = (function () {
    function Url() {
    }
    return Url;
}());

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
var VIDEOS = [
    {
        "id": "1",
        "url": "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/habilebill.mp4?alt=media&token=aa081f88-9a4c-4f9a-be40-da2fa1dc67bb",
        "name": "OSS117"
    }, {
        "id": "593ec7cd2d8a020010aa123b",
        "url": "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/Ladiv.MP4?alt=media&token=6da129ed-0735-4e77-9f2b-15e7e4bc89bc",
        "name": "Ladiv"
    }, {
        "id": "593fcf9e4967d8001028eb6e",
        "url": "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/lOreal.MP4?alt=media&token=13a99afc-8d0b-4f5d-8e2c-87545a16a216",
        "name": "lOreal"
    }, {
        "id": "593ec7e66f4e0f001072ab00",
        "url": "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/LVMH.MP4?alt=media&token=de3bedbb-28dc-452e-8afa-36b65057b652",
        "name": "LVMH"
    }, {
        "id": "593ec7b1bc296100109aef6e",
        "url": "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/Reeport.MP4?alt=media&token=f2ceecac-07fb-4d41-9a9e-50d0f5ccc8fd",
        "name": "Reeport"
    }, {
        "id": "-1",
        "url": "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/RtRobotic.MP4?alt=media&token=639771c0-d1d0-411d-9c06-ef92dbbbc06b",
        "name": "RtRobotic"
    }, {
        "id": "593ec7d880db880010c75b46",
        "url": "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/Widilo.MP4?alt=media&token=05d80f54-a233-4fca-b49b-dacc66fe1792",
        "name": "Widilo"
    }, {
        "id": "593fcf9fef3f86001a47e3fa",
        "url": "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/BNP.MP4?alt=media&token=b019e5ec-be4c-4c3f-9387-578debc4fca5",
        "name": "BNP"
    }, {
        "id": "-1",
        "url": "https://firebasestorage.googleapis.com/v0/b/nelson-88332.appspot.com/o/easy.MP4?alt=media&token=209845d4-572b-4abe-ac67-bbb107f69a2b",
        "name": "easy"
    }
];
var _a, _b;
//# sourceMappingURL=video.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map