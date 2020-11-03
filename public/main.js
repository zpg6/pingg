(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-data.ts":
/*!*****************************!*\
  !*** ./src/app/app-data.ts ***!
  \*****************************/
/*! exports provided: AppData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppData", function() { return AppData; });
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile */ "./src/app/profile.ts");

class AppData {
    constructor() {
        this.title = 'pingg';
        this.tagline = 'Where better matches are made.';
        this.selectedChannel = '';
        this.reportingIssue = false;
        this.searchBarOpen = false;
        this.newPostModalOpen = false;
        this.rateGameModalOpen = false;
        this.username = null;
        this.email = null;
        this.uid = null;
        this.isAuthenticated = false;
        this.isOnboarded = false;
        this.onboardingPage = 0;
        this.onboardingBasicsValid = false;
        this.onboardingScreenNamesValid = true;
        this.screenNames = [];
        this.avatarVal = 50;
        this.avatarSeed = Math.round(Math.random() * 100);
        this.locationEnabled = false;
        this.onboardingTempProfile = new _profile__WEBPACK_IMPORTED_MODULE_0__["Profile"]();
        this.profile = new _profile__WEBPACK_IMPORTED_MODULE_0__["Profile"]();
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _feed_container_feed_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed-container/feed-container.component */ "./src/app/feed-container/feed-container.component.ts");
/* harmony import */ var _map_container_map_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-container/map-container.component */ "./src/app/map-container/map-container.component.ts");
/* harmony import */ var _games_container_games_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./games-container/games-container.component */ "./src/app/games-container/games-container.component.ts");
/* harmony import */ var _profile_container_profile_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-container/profile-container.component */ "./src/app/profile-container/profile-container.component.ts");
/* harmony import */ var _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-detail/game-detail.component */ "./src/app/game-detail/game-detail.component.ts");









const routes = [
    {
        path: 'feed',
        component: _feed_container_feed_container_component__WEBPACK_IMPORTED_MODULE_2__["FeedContainerComponent"]
    },
    {
        path: 'map',
        component: _map_container_map_container_component__WEBPACK_IMPORTED_MODULE_3__["MapContainerComponent"]
    },
    {
        path: 'games',
        component: _games_container_games_container_component__WEBPACK_IMPORTED_MODULE_4__["GamesContainerComponent"]
    },
    {
        path: 'games/:id',
        component: _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_6__["GameDetailComponent"]
    },
    {
        path: 'profile/:id',
        component: _profile_container_profile_container_component__WEBPACK_IMPORTED_MODULE_5__["ProfileContainerComponent"],
    },
    {
        path: '**',
        redirectTo: 'feed'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'top' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'top' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./games.service */ "./src/app/games.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-lottie */ "./node_modules/ngx-lottie/__ivy_ngcc__/fesm2015/ngx-lottie.js");
/* harmony import */ var _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-box/login-box.component */ "./src/app/login-box/login-box.component.ts");
/* harmony import */ var _onboarding_modal_onboarding_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./onboarding-modal/onboarding-modal.component */ "./src/app/onboarding-modal/onboarding-modal.component.ts");
/* harmony import */ var _report_issue_report_issue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./report-issue/report-issue.component */ "./src/app/report-issue/report-issue.component.ts");
/* harmony import */ var _new_post_modal_new_post_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-post-modal/new-post-modal.component */ "./src/app/new-post-modal/new-post-modal.component.ts");
/* harmony import */ var _rate_game_modal_rate_game_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rate-game-modal/rate-game-modal.component */ "./src/app/rate-game-modal/rate-game-modal.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");















function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-lottie", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationCreated", function AppComponent_div_1_Template_ng_lottie_animationCreated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.options);
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-lottie", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationCreated", function AppComponent_div_2_Template_ng_lottie_animationCreated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.options);
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-login-box");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-onboarding-modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-report-issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-new-post-modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-rate-game-modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-search-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("modal ", (ctx_r4.appData == null ? null : ctx_r4.appData.reportingIssue) ? "is-active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("modal ", (ctx_r4.appData == null ? null : ctx_r4.appData.newPostModalOpen) ? "is-active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("modal ", (ctx_r4.appData == null ? null : ctx_r4.appData.rateGameModalOpen) ? "is-active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("modal ", (ctx_r4.appData == null ? null : ctx_r4.appData.searchBarOpen) ? "is-active" : "", "");
} }
class AppComponent {
    constructor(observerService, gamesService, router, ar) {
        this.observerService = observerService;
        this.gamesService = gamesService;
        this.router = router;
        this.ar = ar;
        this.title = 'pingg';
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.lottieConfig = {
            path: 'assets/lottie-files/greenCircleExpanding.json',
            renderer: 'canvas',
            autoplay: true,
            loop: true
        };
        this.animationSpeed = 1;
        this.options = {
            path: '/assets/lottie-files/greenCircleExpanding.json',
        };
        // subscribe to home component messages
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
        }));
    }
    ngOnInit() {
        this.ar.url.subscribe(url => {
            var page = url[0].path.toString();
            if (page && page[0]) {
                page = page[0].toUpperCase() + page.substring(1, page.length);
            }
            this.title = page;
        });
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    animationCreated(animationItem) {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_3__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_4__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 5, consts: [[1, "hero", "is-centered", "is-dark", "is-fullheight"], ["class", "modal is-active is-hidden-mobile", "style", "padding: 0px", 4, "ngIf"], ["class", "modal is-active is-hidden-desktop is-hidden-tablet", "style", "padding: 0px;", 4, "ngIf"], ["class", "modal is-active", "style", "margin: 10px;", 4, "ngIf"], ["class", "modal is-active", 4, "ngIf"], [4, "ngIf"], [1, "modal", "is-active", "is-hidden-mobile", 2, "padding", "0px"], ["width", "150vh", "height", "150vh", 3, "options", "animationCreated"], [1, "modal", "is-active", "is-hidden-desktop", "is-hidden-tablet", 2, "padding", "0px"], ["width", "200vw", "height", "200vw", 3, "options", "animationCreated"], [1, "modal", "is-active", 2, "margin", "10px"], [1, "modal", "is-active"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 10, 12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.appData == null ? null : ctx.appData.isAuthenticated) || !(ctx.appData == null ? null : ctx.appData.isOnboarded));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.appData == null ? null : ctx.appData.isAuthenticated) || !(ctx.appData == null ? null : ctx.appData.isOnboarded));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.appData.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appData.isAuthenticated && !ctx.appData.isOnboarded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appData == null ? null : ctx.appData.isAuthenticated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_lottie__WEBPACK_IMPORTED_MODULE_7__["LottieComponent"], _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_8__["LoginBoxComponent"], _onboarding_modal_onboarding_modal_component__WEBPACK_IMPORTED_MODULE_9__["OnboardingModalComponent"], _report_issue_report_issue_component__WEBPACK_IMPORTED_MODULE_10__["ReportIssueComponent"], _new_post_modal_new_post_modal_component__WEBPACK_IMPORTED_MODULE_11__["NewPostModalComponent"], _rate_game_modal_rate_game_modal_component__WEBPACK_IMPORTED_MODULE_12__["RateGameModalComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_13__["SearchBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: [".content-bg[_ngcontent-%COMP%] {\n  background-color: #232324;\n}\n\n.content-fg[_ngcontent-%COMP%] {\n  background-color: #292929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7O0FBRUg7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jaXJjbGVzLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL3BpbmdnQ2lyY2xlcy5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufSAqL1xuXG4uY29udGVudC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjQ7XG59XG5cbi5jb250ZW50LWZnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_3__["ObserverService"] }, { type: _games_service__WEBPACK_IMPORTED_MODULE_4__["GamesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: playerFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _feed_container_feed_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed-container/feed-container.component */ "./src/app/feed-container/feed-container.component.ts");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./games.service */ "./src/app/games.service.ts");
/* harmony import */ var _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-box/login-box.component */ "./src/app/login-box/login-box.component.ts");
/* harmony import */ var _sign_in_buttons_sign_in_buttons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-in-buttons/sign-in-buttons.component */ "./src/app/sign-in-buttons/sign-in-buttons.component.ts");
/* harmony import */ var _map_container_map_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map-container/map-container.component */ "./src/app/map-container/map-container.component.ts");
/* harmony import */ var _games_container_games_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./games-container/games-container.component */ "./src/app/games-container/games-container.component.ts");
/* harmony import */ var _profile_container_profile_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile-container/profile-container.component */ "./src/app/profile-container/profile-container.component.ts");
/* harmony import */ var _chat_container_chat_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chat-container/chat-container.component */ "./src/app/chat-container/chat-container.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-lottie */ "./node_modules/ngx-lottie/__ivy_ngcc__/fesm2015/ngx-lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var firebaseui_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! firebaseui-angular */ "./node_modules/firebaseui-angular/__ivy_ngcc__/fesm2015/firebaseui-angular.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! firebaseui */ "./node_modules/firebaseui/dist/esm.js");
/* harmony import */ var _report_issue_report_issue_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./report-issue/report-issue.component */ "./src/app/report-issue/report-issue.component.ts");
/* harmony import */ var _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./game-card/game-card.component */ "./src/app/game-card/game-card.component.ts");
/* harmony import */ var _game_card_list_game_card_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./game-card-list/game-card-list.component */ "./src/app/game-card-list/game-card-list.component.ts");
/* harmony import */ var _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./game-detail/game-detail.component */ "./src/app/game-detail/game-detail.component.ts");
/* harmony import */ var _conversations_conversations_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./conversations/conversations.component */ "./src/app/conversations/conversations.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _browse_channels_browse_channels_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./browse-channels/browse-channels.component */ "./src/app/browse-channels/browse-channels.component.ts");
/* harmony import */ var _browse_genres_browse_genres_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./browse-genres/browse-genres.component */ "./src/app/browse-genres/browse-genres.component.ts");
/* harmony import */ var _browse_platforms_browse_platforms_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./browse-platforms/browse-platforms.component */ "./src/app/browse-platforms/browse-platforms.component.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _new_post_modal_new_post_modal_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./new-post-modal/new-post-modal.component */ "./src/app/new-post-modal/new-post-modal.component.ts");
/* harmony import */ var _new_channel_modal_new_channel_modal_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./new-channel-modal/new-channel-modal.component */ "./src/app/new-channel-modal/new-channel-modal.component.ts");
/* harmony import */ var _post_cell_post_cell_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./post-cell/post-cell.component */ "./src/app/post-cell/post-cell.component.ts");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");
/* harmony import */ var _card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./card-grid/card-grid.component */ "./src/app/card-grid/card-grid.component.ts");
/* harmony import */ var _card_grid_container_card_grid_container_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./card-grid-container/card-grid-container.component */ "./src/app/card-grid-container/card-grid-container.component.ts");
/* harmony import */ var _onboarding_modal_onboarding_modal_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./onboarding-modal/onboarding-modal.component */ "./src/app/onboarding-modal/onboarding-modal.component.ts");
/* harmony import */ var _onboarding_steps_onboarding_steps_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./onboarding-steps/onboarding-steps.component */ "./src/app/onboarding-steps/onboarding-steps.component.ts");
/* harmony import */ var _ob_basic_ob_basic_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ob-basic/ob-basic.component */ "./src/app/ob-basic/ob-basic.component.ts");
/* harmony import */ var _ob_screen_names_ob_screen_names_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./ob-screen-names/ob-screen-names.component */ "./src/app/ob-screen-names/ob-screen-names.component.ts");
/* harmony import */ var _ob_customize_ob_customize_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./ob-customize/ob-customize.component */ "./src/app/ob-customize/ob-customize.component.ts");
/* harmony import */ var _game_search_game_search_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./game-search/game-search.component */ "./src/app/game-search/game-search.component.ts");
/* harmony import */ var _ping_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./ping.service */ "./src/app/ping.service.ts");
/* harmony import */ var _footer_card_footer_card_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./footer-card/footer-card.component */ "./src/app/footer-card/footer-card.component.ts");
/* harmony import */ var _user_cell_user_cell_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./user-cell/user-cell.component */ "./src/app/user-cell/user-cell.component.ts");
/* harmony import */ var _rate_game_modal_rate_game_modal_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./rate-game-modal/rate-game-modal.component */ "./src/app/rate-game-modal/rate-game-modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");







































// // currently there is a bug while building the app with --prod
// // - https://github.com/RaphaelJenni/FirebaseUI-Angular/issues/76
// // the plugin exposes the two libraries as well. You can use those:
// import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';























const firebaseUiAuthConfig = {
    signInFlow: 'popup',
    signInOptions: [
        firebase_app__WEBPACK_IMPORTED_MODULE_23__["auth"].GoogleAuthProvider.PROVIDER_ID,
        {
            scopes: [
                'public_profile',
                'email',
                'user_likes',
                'user_friends'
            ],
            customParameters: {
                'auth_type': 'reauthenticate'
            },
            provider: firebase_app__WEBPACK_IMPORTED_MODULE_23__["auth"].FacebookAuthProvider.PROVIDER_ID
        },
        firebase_app__WEBPACK_IMPORTED_MODULE_23__["auth"].TwitterAuthProvider.PROVIDER_ID,
        firebase_app__WEBPACK_IMPORTED_MODULE_23__["auth"].GithubAuthProvider.PROVIDER_ID,
        {
            requireDisplayName: true,
            provider: firebase_app__WEBPACK_IMPORTED_MODULE_23__["auth"].EmailAuthProvider.PROVIDER_ID
        },
    ],
    credentialHelper: firebaseui__WEBPACK_IMPORTED_MODULE_24__["auth"].CredentialHelper.ACCOUNT_CHOOSER_COM
};
// Note we need a separate function as it's required
// by the AOT compiler.
function playerFactory() {
    return lottie_web__WEBPACK_IMPORTED_MODULE_17___default.a;
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _observer_service__WEBPACK_IMPORTED_MODULE_6__["ObserverService"],
        _games_service__WEBPACK_IMPORTED_MODULE_7__["GamesService"],
        _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuthGuard"],
        _ping_service__WEBPACK_IMPORTED_MODULE_48__["PingService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["GoogleMapsModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_16__["LottieModule"].forRoot({ player: playerFactory }),
            _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
            firebaseui_angular__WEBPACK_IMPORTED_MODULE_22__["FirebaseUIModule"].forRoot(firebaseUiAuthConfig),
            //AngularFireStorageModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_39__["YouTubePlayerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _feed_container_feed_container_component__WEBPACK_IMPORTED_MODULE_5__["FeedContainerComponent"],
        _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_8__["LoginBoxComponent"],
        _sign_in_buttons_sign_in_buttons_component__WEBPACK_IMPORTED_MODULE_9__["SignInButtonsComponent"],
        _map_container_map_container_component__WEBPACK_IMPORTED_MODULE_10__["MapContainerComponent"],
        _games_container_games_container_component__WEBPACK_IMPORTED_MODULE_11__["GamesContainerComponent"],
        _profile_container_profile_container_component__WEBPACK_IMPORTED_MODULE_12__["ProfileContainerComponent"],
        _chat_container_chat_container_component__WEBPACK_IMPORTED_MODULE_13__["ChatContainerComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
        _report_issue_report_issue_component__WEBPACK_IMPORTED_MODULE_25__["ReportIssueComponent"],
        _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_26__["GameCardComponent"],
        _game_card_list_game_card_list_component__WEBPACK_IMPORTED_MODULE_27__["GameCardListComponent"],
        _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_28__["GameDetailComponent"],
        _conversations_conversations_component__WEBPACK_IMPORTED_MODULE_29__["ConversationsComponent"],
        _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_31__["SearchBarComponent"],
        _browse_channels_browse_channels_component__WEBPACK_IMPORTED_MODULE_32__["BrowseChannelsComponent"],
        _browse_genres_browse_genres_component__WEBPACK_IMPORTED_MODULE_33__["BrowseGenresComponent"],
        _browse_platforms_browse_platforms_component__WEBPACK_IMPORTED_MODULE_34__["BrowsePlatformsComponent"],
        _new_post_modal_new_post_modal_component__WEBPACK_IMPORTED_MODULE_36__["NewPostModalComponent"],
        _new_channel_modal_new_channel_modal_component__WEBPACK_IMPORTED_MODULE_37__["NewChannelModalComponent"],
        _post_cell_post_cell_component__WEBPACK_IMPORTED_MODULE_38__["PostCellComponent"],
        _card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_40__["CardGridComponent"],
        _card_grid_container_card_grid_container_component__WEBPACK_IMPORTED_MODULE_41__["CardGridContainerComponent"],
        _onboarding_modal_onboarding_modal_component__WEBPACK_IMPORTED_MODULE_42__["OnboardingModalComponent"],
        _onboarding_steps_onboarding_steps_component__WEBPACK_IMPORTED_MODULE_43__["OnboardingStepsComponent"],
        _ob_basic_ob_basic_component__WEBPACK_IMPORTED_MODULE_44__["ObBasicComponent"],
        _ob_screen_names_ob_screen_names_component__WEBPACK_IMPORTED_MODULE_45__["ObScreenNamesComponent"],
        _ob_customize_ob_customize_component__WEBPACK_IMPORTED_MODULE_46__["ObCustomizeComponent"],
        _game_search_game_search_component__WEBPACK_IMPORTED_MODULE_47__["GameSearchComponent"],
        _footer_card_footer_card_component__WEBPACK_IMPORTED_MODULE_49__["FooterCardComponent"],
        _user_cell_user_cell_component__WEBPACK_IMPORTED_MODULE_50__["UserCellComponent"],
        _rate_game_modal_rate_game_modal_component__WEBPACK_IMPORTED_MODULE_51__["RateGameModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["GoogleMapsModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_16__["LottieModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"], firebaseui_angular__WEBPACK_IMPORTED_MODULE_22__["FirebaseUIModule"], 
        //AngularFireStorageModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_39__["YouTubePlayerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["GoogleMapsModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_16__["LottieModule"].forRoot({ player: playerFactory }),
                    _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].firebase),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
                    firebaseui_angular__WEBPACK_IMPORTED_MODULE_22__["FirebaseUIModule"].forRoot(firebaseUiAuthConfig),
                    //AngularFireStorageModule,
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_39__["YouTubePlayerModule"],
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _feed_container_feed_container_component__WEBPACK_IMPORTED_MODULE_5__["FeedContainerComponent"],
                    _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_8__["LoginBoxComponent"],
                    _sign_in_buttons_sign_in_buttons_component__WEBPACK_IMPORTED_MODULE_9__["SignInButtonsComponent"],
                    _map_container_map_container_component__WEBPACK_IMPORTED_MODULE_10__["MapContainerComponent"],
                    _games_container_games_container_component__WEBPACK_IMPORTED_MODULE_11__["GamesContainerComponent"],
                    _profile_container_profile_container_component__WEBPACK_IMPORTED_MODULE_12__["ProfileContainerComponent"],
                    _chat_container_chat_container_component__WEBPACK_IMPORTED_MODULE_13__["ChatContainerComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                    _report_issue_report_issue_component__WEBPACK_IMPORTED_MODULE_25__["ReportIssueComponent"],
                    _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_26__["GameCardComponent"],
                    _game_card_list_game_card_list_component__WEBPACK_IMPORTED_MODULE_27__["GameCardListComponent"],
                    _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_28__["GameDetailComponent"],
                    _conversations_conversations_component__WEBPACK_IMPORTED_MODULE_29__["ConversationsComponent"],
                    _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_31__["SearchBarComponent"],
                    _browse_channels_browse_channels_component__WEBPACK_IMPORTED_MODULE_32__["BrowseChannelsComponent"],
                    _browse_genres_browse_genres_component__WEBPACK_IMPORTED_MODULE_33__["BrowseGenresComponent"],
                    _browse_platforms_browse_platforms_component__WEBPACK_IMPORTED_MODULE_34__["BrowsePlatformsComponent"],
                    _new_post_modal_new_post_modal_component__WEBPACK_IMPORTED_MODULE_36__["NewPostModalComponent"],
                    _new_channel_modal_new_channel_modal_component__WEBPACK_IMPORTED_MODULE_37__["NewChannelModalComponent"],
                    _post_cell_post_cell_component__WEBPACK_IMPORTED_MODULE_38__["PostCellComponent"],
                    _card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_40__["CardGridComponent"],
                    _card_grid_container_card_grid_container_component__WEBPACK_IMPORTED_MODULE_41__["CardGridContainerComponent"],
                    _onboarding_modal_onboarding_modal_component__WEBPACK_IMPORTED_MODULE_42__["OnboardingModalComponent"],
                    _onboarding_steps_onboarding_steps_component__WEBPACK_IMPORTED_MODULE_43__["OnboardingStepsComponent"],
                    _ob_basic_ob_basic_component__WEBPACK_IMPORTED_MODULE_44__["ObBasicComponent"],
                    _ob_screen_names_ob_screen_names_component__WEBPACK_IMPORTED_MODULE_45__["ObScreenNamesComponent"],
                    _ob_customize_ob_customize_component__WEBPACK_IMPORTED_MODULE_46__["ObCustomizeComponent"],
                    _game_search_game_search_component__WEBPACK_IMPORTED_MODULE_47__["GameSearchComponent"],
                    _footer_card_footer_card_component__WEBPACK_IMPORTED_MODULE_49__["FooterCardComponent"],
                    _user_cell_user_cell_component__WEBPACK_IMPORTED_MODULE_50__["UserCellComponent"],
                    _rate_game_modal_rate_game_modal_component__WEBPACK_IMPORTED_MODULE_51__["RateGameModalComponent"],
                ],
                providers: [
                    _observer_service__WEBPACK_IMPORTED_MODULE_6__["ObserverService"],
                    _games_service__WEBPACK_IMPORTED_MODULE_7__["GamesService"],
                    _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuthGuard"],
                    _ping_service__WEBPACK_IMPORTED_MODULE_48__["PingService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_profile_container_profile_container_component__WEBPACK_IMPORTED_MODULE_12__["ProfileContainerComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_52__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_53__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_53__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_53__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_53__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_53__["ɵangular_packages_router_router_l"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["GoogleMap"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["MapBaseLayer"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["MapBicyclingLayer"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["MapCircle"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["MapGroundOverlay"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["MapInfoWindow"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["MapKmlLayer"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["MapMarker"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["MapPolygon"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["MapPolyline"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["MapRectangle"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["MapTrafficLayer"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["MapTransitLayer"], ngx_lottie__WEBPACK_IMPORTED_MODULE_16__["BaseDirective"], ngx_lottie__WEBPACK_IMPORTED_MODULE_16__["LottieDirective"], ngx_lottie__WEBPACK_IMPORTED_MODULE_16__["LottieComponent"], firebaseui_angular__WEBPACK_IMPORTED_MODULE_22__["FirebaseuiAngularLibraryComponent"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_54__["Dir"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkScrollable"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkVirtualForOf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkVirtualScrollViewport"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_39__["YouTubePlayer"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
    _feed_container_feed_container_component__WEBPACK_IMPORTED_MODULE_5__["FeedContainerComponent"],
    _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_8__["LoginBoxComponent"],
    _sign_in_buttons_sign_in_buttons_component__WEBPACK_IMPORTED_MODULE_9__["SignInButtonsComponent"],
    _map_container_map_container_component__WEBPACK_IMPORTED_MODULE_10__["MapContainerComponent"],
    _games_container_games_container_component__WEBPACK_IMPORTED_MODULE_11__["GamesContainerComponent"],
    _profile_container_profile_container_component__WEBPACK_IMPORTED_MODULE_12__["ProfileContainerComponent"],
    _chat_container_chat_container_component__WEBPACK_IMPORTED_MODULE_13__["ChatContainerComponent"],
    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
    _report_issue_report_issue_component__WEBPACK_IMPORTED_MODULE_25__["ReportIssueComponent"],
    _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_26__["GameCardComponent"],
    _game_card_list_game_card_list_component__WEBPACK_IMPORTED_MODULE_27__["GameCardListComponent"],
    _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_28__["GameDetailComponent"],
    _conversations_conversations_component__WEBPACK_IMPORTED_MODULE_29__["ConversationsComponent"],
    _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_31__["SearchBarComponent"],
    _browse_channels_browse_channels_component__WEBPACK_IMPORTED_MODULE_32__["BrowseChannelsComponent"],
    _browse_genres_browse_genres_component__WEBPACK_IMPORTED_MODULE_33__["BrowseGenresComponent"],
    _browse_platforms_browse_platforms_component__WEBPACK_IMPORTED_MODULE_34__["BrowsePlatformsComponent"],
    _new_post_modal_new_post_modal_component__WEBPACK_IMPORTED_MODULE_36__["NewPostModalComponent"],
    _new_channel_modal_new_channel_modal_component__WEBPACK_IMPORTED_MODULE_37__["NewChannelModalComponent"],
    _post_cell_post_cell_component__WEBPACK_IMPORTED_MODULE_38__["PostCellComponent"],
    _card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_40__["CardGridComponent"],
    _card_grid_container_card_grid_container_component__WEBPACK_IMPORTED_MODULE_41__["CardGridContainerComponent"],
    _onboarding_modal_onboarding_modal_component__WEBPACK_IMPORTED_MODULE_42__["OnboardingModalComponent"],
    _onboarding_steps_onboarding_steps_component__WEBPACK_IMPORTED_MODULE_43__["OnboardingStepsComponent"],
    _ob_basic_ob_basic_component__WEBPACK_IMPORTED_MODULE_44__["ObBasicComponent"],
    _ob_screen_names_ob_screen_names_component__WEBPACK_IMPORTED_MODULE_45__["ObScreenNamesComponent"],
    _ob_customize_ob_customize_component__WEBPACK_IMPORTED_MODULE_46__["ObCustomizeComponent"],
    _game_search_game_search_component__WEBPACK_IMPORTED_MODULE_47__["GameSearchComponent"],
    _footer_card_footer_card_component__WEBPACK_IMPORTED_MODULE_49__["FooterCardComponent"],
    _user_cell_user_cell_component__WEBPACK_IMPORTED_MODULE_50__["UserCellComponent"],
    _rate_game_modal_rate_game_modal_component__WEBPACK_IMPORTED_MODULE_51__["RateGameModalComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_52__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/browse-channels/browse-channels.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/browse-channels/browse-channels.component.ts ***!
  \**************************************************************/
/*! exports provided: BrowseChannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseChannelsComponent", function() { return BrowseChannelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BrowseChannelsComponent {
    constructor() { }
    ngOnInit() {
    }
}
BrowseChannelsComponent.ɵfac = function BrowseChannelsComponent_Factory(t) { return new (t || BrowseChannelsComponent)(); };
BrowseChannelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrowseChannelsComponent, selectors: [["app-browse-channels"]], decls: 2, vars: 0, template: function BrowseChannelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "browse-channels works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jyb3dzZS1jaGFubmVscy9icm93c2UtY2hhbm5lbHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowseChannelsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-browse-channels',
                templateUrl: './browse-channels.component.html',
                styleUrls: ['./browse-channels.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/browse-genres/browse-genres.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/browse-genres/browse-genres.component.ts ***!
  \**********************************************************/
/*! exports provided: BrowseGenresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseGenresComponent", function() { return BrowseGenresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../games.service */ "./src/app/games.service.ts");



class BrowseGenresComponent {
    constructor(gamesService) {
        this.gamesService = gamesService;
    }
    ngOnInit() {
    }
}
BrowseGenresComponent.ɵfac = function BrowseGenresComponent_Factory(t) { return new (t || BrowseGenresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"])); };
BrowseGenresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrowseGenresComponent, selectors: [["app-browse-genres"]], decls: 2, vars: 0, template: function BrowseGenresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "browse-genres works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jyb3dzZS1nZW5yZXMvYnJvd3NlLWdlbnJlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowseGenresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-browse-genres',
                templateUrl: './browse-genres.component.html',
                styleUrls: ['./browse-genres.component.css']
            }]
    }], function () { return [{ type: _games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/browse-platforms/browse-platforms.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/browse-platforms/browse-platforms.component.ts ***!
  \****************************************************************/
/*! exports provided: BrowsePlatformsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowsePlatformsComponent", function() { return BrowsePlatformsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BrowsePlatformsComponent {
    constructor() { }
    ngOnInit() {
    }
}
BrowsePlatformsComponent.ɵfac = function BrowsePlatformsComponent_Factory(t) { return new (t || BrowsePlatformsComponent)(); };
BrowsePlatformsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrowsePlatformsComponent, selectors: [["app-browse-platforms"]], decls: 2, vars: 0, template: function BrowsePlatformsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "browse-platforms works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jyb3dzZS1wbGF0Zm9ybXMvYnJvd3NlLXBsYXRmb3Jtcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowsePlatformsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-browse-platforms',
                templateUrl: './browse-platforms.component.html',
                styleUrls: ['./browse-platforms.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/card-grid-container/card-grid-container.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/card-grid-container/card-grid-container.component.ts ***!
  \**********************************************************************/
/*! exports provided: CardGridContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardGridContainerComponent", function() { return CardGridContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-grid/card-grid.component */ "./src/app/card-grid/card-grid.component.ts");




class CardGridContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardGridContainerComponent.ɵfac = function CardGridContainerComponent_Factory(t) { return new (t || CardGridContainerComponent)(); };
CardGridContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardGridContainerComponent, selectors: [["app-card-grid-container"]], inputs: { list: "list" }, decls: 9, vars: 1, consts: [[1, "hero-head"], [1, "hero-body", "content-bg", 2, "padding", "0px"], [1, "dashboard", "is-full-height"], [1, "dashboard-main", "is-scrollable", "is-dark", 2, "max-width", "100%", "overflow-x", "hidden"], [2, "display", "inline-block"], [1, "section"], [1, "container", 2, "margin-bottom", "100px"], [3, "list"]], template: function CardGridContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-card-grid", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", ctx.list);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_2__["CardGridComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQtZ3JpZC1jb250YWluZXIvY2FyZC1ncmlkLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardGridContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-grid-container',
                templateUrl: './card-grid-container.component.html',
                styleUrls: ['./card-grid-container.component.css']
            }]
    }], function () { return []; }, { list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['list']
        }] }); })();


/***/ }),

/***/ "./src/app/card-grid/card-grid.component.ts":
/*!**************************************************!*\
  !*** ./src/app/card-grid/card-grid.component.ts ***!
  \**************************************************/
/*! exports provided: CardGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardGridComponent", function() { return CardGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-card/game-card.component */ "./src/app/game-card/game-card.component.ts");




function CardGridComponent_app_game_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-card", 3);
} if (rf & 2) {
    const game_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("game", game_r5);
} }
function CardGridComponent_app_game_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-card", 3);
} if (rf & 2) {
    const game_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("game", game_r6);
} }
function CardGridComponent_app_game_card_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-card", 3);
} if (rf & 2) {
    const game_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("game", game_r7);
} }
function CardGridComponent_app_game_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-card", 3);
} if (rf & 2) {
    const game_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("game", game_r8);
} }
function CardGridComponent_app_game_card_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-card", 3);
} if (rf & 2) {
    const game_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("game", game_r9);
} }
class CardGridComponent {
    constructor() {
        this.col1 = [];
        this.col2 = [];
        this.col3 = [];
        this.col4 = [];
        this.col5 = [];
    }
    ngOnInit() {
        var count = 1;
        this.list.forEach(game => {
            switch (count) {
                case 1:
                    this.col1.push(game);
                    count++;
                    break;
                case 2:
                    this.col2.push(game);
                    count++;
                    break;
                case 3:
                    this.col3.push(game);
                    count++;
                    break;
                case 4:
                    this.col4.push(game);
                    count++;
                    break;
                case 5:
                    this.col5.push(game);
                    count = 1;
                    break;
                default:
                    break;
            }
        });
    }
}
CardGridComponent.ɵfac = function CardGridComponent_Factory(t) { return new (t || CardGridComponent)(); };
CardGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardGridComponent, selectors: [["app-card-grid"]], inputs: { list: "list" }, decls: 11, vars: 5, consts: [[1, "columns"], [1, "column", "is-one-fifth"], [3, "game", 4, "ngFor", "ngForOf"], [3, "game"]], template: function CardGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardGridComponent_app_game_card_2_Template, 1, 1, "app-game-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardGridComponent_app_game_card_4_Template, 1, 1, "app-game-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardGridComponent_app_game_card_6_Template, 1, 1, "app-game-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CardGridComponent_app_game_card_8_Template, 1, 1, "app-game-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CardGridComponent_app_game_card_10_Template, 1, 1, "app-game-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.col1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.col2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.col3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.col4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.col5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_2__["GameCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQtZ3JpZC9jYXJkLWdyaWQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-grid',
                templateUrl: './card-grid.component.html',
                styleUrls: ['./card-grid.component.css']
            }]
    }], function () { return []; }, { list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['list']
        }] }); })();


/***/ }),

/***/ "./src/app/chat-container/chat-container.component.ts":
/*!************************************************************!*\
  !*** ./src/app/chat-container/chat-container.component.ts ***!
  \************************************************************/
/*! exports provided: ChatContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatContainerComponent", function() { return ChatContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChatContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChatContainerComponent.ɵfac = function ChatContainerComponent_Factory(t) { return new (t || ChatContainerComponent)(); };
ChatContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatContainerComponent, selectors: [["app-chat-container"]], decls: 4, vars: 0, consts: [[1, "section"], [1, "container", 2, "margin-bottom", "100px"]], template: function ChatContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chat-container works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtY29udGFpbmVyL2NoYXQtY29udGFpbmVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-container',
                templateUrl: './chat-container.component.html',
                styleUrls: ['./chat-container.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/conversations/conversations.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/conversations/conversations.component.ts ***!
  \**********************************************************/
/*! exports provided: ConversationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationsComponent", function() { return ConversationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ConversationsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "conversation cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
} }
class ConversationsComponent {
    constructor() {
        this.list = ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'];
    }
    ngOnInit() {
    }
}
ConversationsComponent.ɵfac = function ConversationsComponent_Factory(t) { return new (t || ConversationsComponent)(); };
ConversationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConversationsComponent, selectors: [["app-conversations"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function ConversationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConversationsComponent_div_0_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  display: block;\n  padding: 0.5em 0.75em;\n  border-left: 3px solid none;\n  transition-property: border,text;\n  transition-duration: 0.1s;\n  margin-bottom: 8px;\n}\n\n.menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #292929;\n  color:  whitesmoke;\n  border-left: 3px solid #95EF72;\n  font-weight: 600;\n}\n\n.menu-list[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {\n  background-color: #292929;\n  color:  whitesmoke;\n  border-left: 3px solid #95EF72;\n  font-weight: 600;\n}\n\n.menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  border-left: 1px solid #dbdbdb;\n  margin: 0.75em;\n  padding-left: 0.75em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVyc2F0aW9ucy9jb252ZXJzYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbnZlcnNhdGlvbnMvY29udmVyc2F0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtbGlzdCBhIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW07XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgbm9uZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLHRleHQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLm1lbnUtbGlzdCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcbiAgY29sb3I6ICB3aGl0ZXNtb2tlO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM5NUVGNzI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tZW51LWxpc3QgYS5pcy1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICBjb2xvcjogIHdoaXRlc21va2U7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzk1RUY3MjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1lbnUtbGlzdCBsaSB1bCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RiZGJkYjtcbiAgbWFyZ2luOiAwLjc1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConversationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-conversations',
                templateUrl: './conversations.component.html',
                styleUrls: ['./conversations.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/feed-container/feed-container.component.ts":
/*!************************************************************!*\
  !*** ./src/app/feed-container/feed-container.component.ts ***!
  \************************************************************/
/*! exports provided: FeedContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedContainerComponent", function() { return FeedContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../games.service */ "./src/app/games.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_card_footer_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer-card/footer-card.component */ "./src/app/footer-card/footer-card.component.ts");
/* harmony import */ var _post_cell_post_cell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../post-cell/post-cell.component */ "./src/app/post-cell/post-cell.component.ts");









function FeedContainerComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-cell", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r1);
} }
class FeedContainerComponent {
    constructor(observerService, gamesService) {
        this.observerService = observerService;
        this.gamesService = gamesService;
        this.example = 'Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post.';
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.title = 'Stock Manager';
        this.posts = [];
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
        }));
    }
    ngOnInit() {
        let games = this.gamesService.getSet('Most Rated');
        var i = 0, max = games.length;
        for (i = 0; i < max; i++) {
            let index = Math.round(Math.random() * max);
            this.posts.push({
                id: i,
                user: this.appData.profile,
                game: games[index],
                text: this.example,
                time: new Date(),
            });
        }
    }
    newPost() {
        this.appData.newPostModalOpen = true;
        this.updateObserver();
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
}
FeedContainerComponent.ɵfac = function FeedContainerComponent_Factory(t) { return new (t || FeedContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"])); };
FeedContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedContainerComponent, selectors: [["app-feed-hero"]], decls: 39, vars: 1, consts: [[1, "hero-head"], [1, "hero-body", "content-bg", 2, "padding", "0px"], [1, "dashboard", "is-full-height"], [1, "dashboard-main", "is-scrollable", "is-dark", 2, "max-width", "100%", "overflow-x", "hidden"], [2, "display", "inline-block"], [1, "section"], [1, "container", 2, "margin-bottom", "100px"], [1, "card", "post-card"], [1, "card-content", "is-dark"], [1, "media-content"], [1, "level", 2, "padding", "0px 10px"], [1, "level-left"], [1, "media", 2, "border-top", "none"], [1, "media-left"], ["src", "../../assets/images/pingg_logo.png", 2, "max-width", "100px"], [1, "title"], [1, "level-right"], [1, "level-item", "is-hidden-mobile", 2, "margin-right", "2.0rem", 3, "click"], [1, "button", "is-danger"], [1, "level-item", "is-hidden-desktop", "is-hidden-tablet", 3, "click"], [1, "level-item"], [1, "field", "has-addons"], [1, "control"], [1, "button", "is-info", "is-selected"], [1, "button"], [4, "ngFor", "ngForOf"], [3, "post"]], template: function FeedContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Main Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedContainerComponent_Template_div_click_20_listener() { return ctx.newPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "New Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedContainerComponent_Template_div_click_23_listener() { return ctx.newPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "New Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Newest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Popular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Trending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, FeedContainerComponent_div_37_Template, 2, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-footer-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _footer_card_footer_card_component__WEBPACK_IMPORTED_MODULE_6__["FooterCardComponent"], _post_cell_post_cell_component__WEBPACK_IMPORTED_MODULE_7__["PostCellComponent"]], styles: [".is-three-quarters[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.post-card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  margin-bottom: 25px;\n  background-color: #363636;\n}\n\n.content-bg[_ngcontent-%COMP%] {\n  background-color: #232324;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC1jb250YWluZXIvZmVlZC1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZmVlZC1jb250YWluZXIvZmVlZC1jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy10aHJlZS1xdWFydGVycyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ucG9zdC1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcbn1cblxuLmNvbnRlbnQtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzI0O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feed-hero',
                templateUrl: './feed-container.component.html',
                styleUrls: ['./feed-container.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"] }, { type: _games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer-card/footer-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/footer-card/footer-card.component.ts ***!
  \******************************************************/
/*! exports provided: FooterCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterCardComponent", function() { return FooterCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterCardComponent.ɵfac = function FooterCardComponent_Factory(t) { return new (t || FooterCardComponent)(); };
FooterCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterCardComponent, selectors: [["app-footer-card"]], decls: 22, vars: 0, consts: [[1, "card", "post-card"], [1, "card-content", "is-dark"], [1, "media-content"], [1, "level", 2, "padding", "0px 10px"], [1, "level-left"], [1, "level-item"], [1, "button", "is-danger"], [1, "button", "is-link"], [1, "button", "is-inverted", "is-outlined"], [1, "level-right"], [1, "heading", "has-text-light", "has-text-right"]], template: function FooterCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Fall 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " CS1530 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Group 11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".post-card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  margin-bottom: 25px;\n  background-color: #363636;\n}\n\n.content-bg[_ngcontent-%COMP%] {\n  background-color: #232324;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyLWNhcmQvZm9vdGVyLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyLWNhcmQvZm9vdGVyLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xufVxuXG4uY29udGVudC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-card',
                templateUrl: './footer-card.component.html',
                styleUrls: ['./footer-card.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/game-card-list/game-card-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/game-card-list/game-card-list.component.ts ***!
  \************************************************************/
/*! exports provided: GameCardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCardListComponent", function() { return GameCardListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _genre_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../genre.enum */ "./src/app/genre.enum.ts");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../games.service */ "./src/app/games.service.ts");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../game-card/game-card.component */ "./src/app/game-card/game-card.component.ts");










function GameCardListComponent_div_0_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-game-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("game", item_r3)("routerLink", "/games/" + item_r3.id);
} }
function GameCardListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GameCardListComponent_div_0_li_7_Template, 2, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](set_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.getFrom(set_r1));
} }
class GameCardListComponent {
    constructor(gamesService, observerService, router, http) {
        this.gamesService = gamesService;
        this.observerService = observerService;
        this.router = router;
        this.http = http;
        this.sections = new Set(['Top Rated', 'Most Rated']);
        this.appDataSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        for (const genre in _genre_enum__WEBPACK_IMPORTED_MODULE_2__["Genre"]) {
            this.sections.add(genre);
        }
    }
    ngOnInit() {
        this.appDataSubscription.add(this.observerService.getMessage().subscribe(message => {
            this.appData = message;
        }));
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.appDataSubscription.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    getFrom(set) {
        return this.gamesService.getSet(set);
    }
}
GameCardListComponent.ɵfac = function GameCardListComponent_Factory(t) { return new (t || GameCardListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_4__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
GameCardListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameCardListComponent, selectors: [["app-game-card-list"]], decls: 1, vars: 1, consts: [["class", "card post-card", 4, "ngFor", "ngForOf"], [1, "card", "post-card"], [1, "card-content", "is-dark"], [1, "media"], [1, "media-content"], [1, "title", "is-3", "has-text-light"], [1, "images"], [4, "ngFor", "ngForOf"], [3, "game", "routerLink"]], template: function GameCardListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GameCardListComponent_div_0_Template, 8, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_8__["GameCardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".images[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\nli[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin: 5px;\n}\n\n.post-card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  margin-bottom: 25px;\n  background-color: #363636;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1jYXJkLWxpc3QvZ2FtZS1jYXJkLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtY2FyZC1saXN0L2dhbWUtY2FyZC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxubGkge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5wb3N0LWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameCardListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-card-list',
                templateUrl: './game-card-list.component.html',
                styleUrls: ['./game-card-list.component.css']
            }]
    }], function () { return [{ type: _games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"] }, { type: _observer_service__WEBPACK_IMPORTED_MODULE_4__["ObserverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game-card/game-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/game-card/game-card.component.ts ***!
  \**************************************************/
/*! exports provided: GameCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCardComponent", function() { return GameCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../games.service */ "./src/app/games.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class GameCardComponent {
    constructor(gamesService) {
        this.gamesService = gamesService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.expanded = '';
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    getTitle() {
        let name = this.game.name;
        if (name.length > 25) {
            return name.substring(0, 24) + '...';
        }
        else {
            return name;
        }
    }
}
GameCardComponent.ɵfac = function GameCardComponent_Factory(t) { return new (t || GameCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"])); };
GameCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameCardComponent, selectors: [["app-game-card"]], inputs: { game: "game" }, decls: 9, vars: 6, consts: [[1, "game-container"], [1, "game-image", 3, "src"], [1, "game-overlay"], [1, "game-text"], [1, "game-text-title", 2, "font-weight", "bolder"]], template: function GameCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://", ctx.game.coverURL, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, ctx.game.rating, "1.2-2"), " / 100");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: [".game-image[_ngcontent-%COMP%] {\n  height: 266px;\n  border-radius: 4px;\n  padding: 0px;\n  transition: 0.1s ease-out;\n  \n}\n\n.game-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.game-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  border-radius: 4px;\n  transition: .1s;\n  background-color: #000000c1;\n}\n\n.game-container[_ngcontent-%COMP%]:hover   .game-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.game-container[_ngcontent-%COMP%]:hover   .game-image[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.game-text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n  position: absolute;\n  top: 20%;\n  padding: 5px;\n}\n\n.game-text-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1jYXJkL2dhbWUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBS1oseUJBQXlCO0VBQ3pCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtY2FyZC9nYW1lLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYW1lLWltYWdlIHtcbiAgaGVpZ2h0OiAyNjZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgLyogYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTsgKi9cbn1cblxuLmdhbWUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZ2FtZS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogLjFzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYzE7XG59XG5cbi5nYW1lLWNvbnRhaW5lcjpob3ZlciAuZ2FtZS1vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmdhbWUtY29udGFpbmVyOmhvdmVyIC5nYW1lLWltYWdlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmdhbWUtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5nYW1lLXRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-card',
                templateUrl: './game-card.component.html',
                styleUrls: ['./game-card.component.css']
            }]
    }], function () { return [{ type: _games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"] }]; }, { game: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/game-detail/game-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/game-detail/game-detail.component.ts ***!
  \******************************************************/
/*! exports provided: GameDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDetailComponent", function() { return GameDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../games.service */ "./src/app/games.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");
/* harmony import */ var _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../game-card/game-card.component */ "./src/app/game-card/game-card.component.ts");










function GameDetailComponent_section_6_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", genre_r7, " ");
} }
function GameDetailComponent_section_6_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const platform_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", platform_r8, " ");
} }
function GameDetailComponent_section_6_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r9);
} }
function GameDetailComponent_section_6_div_50_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://", item_r11, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GameDetailComponent_section_6_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Screenshots");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameDetailComponent_section_6_div_50_li_5_Template, 2, 1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.game == null ? null : ctx_r4.game.screenshots);
} }
function GameDetailComponent_section_6_div_51_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "youtube-player", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", item_r13.split("watch?v=")[1]);
} }
function GameDetailComponent_section_6_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Trailers and Gameplay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameDetailComponent_section_6_div_51_li_5_Template, 2, 1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.game == null ? null : ctx_r5.game.videos);
} }
const _c0 = function (a0) { return [a0]; };
function GameDetailComponent_section_6_div_52_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-game-card", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const similar_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("game", similar_r15)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "/games/" + similar_r15.id));
} }
function GameDetailComponent_section_6_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Recommended Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GameDetailComponent_section_6_div_52_li_7_Template, 2, 4, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.recommended);
} }
function GameDetailComponent_section_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Followers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "123");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Genres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, GameDetailComponent_section_6_span_29_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Platforms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, GameDetailComponent_section_6_span_35_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, GameDetailComponent_section_6_div_36_Template, 3, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "footer", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " New Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailComponent_section_6_Template_a_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.rateGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Rate Game ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailComponent_section_6_Template_a_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.changeFollow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, GameDetailComponent_section_6_div_50_Template, 6, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, GameDetailComponent_section_6_div_51_Template, 6, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, GameDetailComponent_section_6_div_52_Template, 8, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.game == null ? null : ctx_r0.game.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://", ctx_r0.game == null ? null : ctx_r0.game.coverURL, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 13, ctx_r0.game == null ? null : ctx_r0.game.rating), " / 100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.game == null ? null : ctx_r0.game.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.game == null ? null : ctx_r0.game.platforms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.game == null ? null : ctx_r0.game.description.split("\n"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card-footer-item ", ctx_r0.isFollowedLocally == true ? "is-active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Follow", ctx_r0.isFollowedLocally && ctx_r0.isFollowedLocally == true ? "ing" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.game == null ? null : ctx_r0.game.screenshots == null ? null : ctx_r0.game.screenshots.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.game == null ? null : ctx_r0.game.videos == null ? null : ctx_r0.game.videos.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.recommended == null ? null : ctx_r0.recommended.length) > 0);
} }
class GameDetailComponent {
    constructor(observerService, gamesService, ar, http) {
        this.observerService = observerService;
        this.gamesService = gamesService;
        this.ar = ar;
        this.http = http;
        this.followButtonCount = 0;
        // subscribe to home component messages
        this.observerService.getMessage().subscribe(msg => this.appData = msg);
    }
    ngOnInit() {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        this.ar.url.subscribe(url => {
            let id = url[url.length - 1];
            this.gamesService.getGame(id.path.toString()).then(game => {
                this.game = game;
                this.recommended = [];
                this.doesFollow();
                this.game.similarGames.forEach(similar => {
                    this.gamesService.getGame(similar).then(recGame => {
                        if (recGame) {
                            this.recommended.push(recGame);
                        }
                    });
                });
            });
        });
    }
    rateGame() {
        this.appData.gameBeingRated = this.game;
        this.appData.rateGameModalOpen = true;
        this.observerService.sendMessage(this.appData);
    }
    doesFollow() {
        let url = 'https://cs1530group11.uc.appspot.com/users/' + this.appData.profile.id + '/games-followed/';
        let body = { gameID: this.game.id };
        this.http.post(url, body).toPromise()
            .then(response => {
            console.log(response);
            if (response.response.properties) {
                if (response.response.properties.includes(this.game.id)) {
                    this.isFollowedLocally = true;
                }
            }
        })
            .catch(err => console.error(err));
    }
    changeFollow() {
        let prev = this.isFollowedLocally;
        this.isFollowedLocally = !this.isFollowedLocally;
        if (prev) {
            this.unFollowGame();
        }
        else {
            this.followGame();
        }
    }
    followGame() {
        let now = new Date().getSeconds();
        let then = this.lastFollow.getSeconds();
        let diff = now - then;
        if (!this.lastFollow || this.followButtonCount < 5 || diff > 2) {
            if (diff > 2) {
                this.followButtonCount = 0;
            }
            this.followButtonCount++;
            this.lastFollow = new Date();
            let url = 'https://cs1530group11.uc.appspot.com/users/' + this.appData.profile.id + '/followed-game/';
            let body = { gameID: this.game.id };
            this.http.post(url, body).toPromise()
                .then(response => {
                console.log(response);
                if (response.response == 'Success!') {
                    //this.isFollowedLocally = true
                }
            })
                .catch(err => console.error(err));
        }
    }
    unFollowGame() {
        let url = 'https://cs1530group11.uc.appspot.com/users/' + this.appData.profile.id + '/unfollowed-game/';
        let body = { gameID: this.game.id };
        this.http.post(url, body).toPromise()
            .then(response => {
            console.log(response);
            if (response.response == 'Success!') {
                //this.isFollowedLocally = false
            }
        })
            .catch(err => console.error(err));
    }
}
GameDetailComponent.ɵfac = function GameDetailComponent_Factory(t) { return new (t || GameDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_1__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
GameDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameDetailComponent, selectors: [["app-game-detail"]], decls: 7, vars: 1, consts: [[1, "hero-head"], [1, "hero-body", "content-bg", 2, "padding", "0px"], [1, "dashboard", "is-full-height"], [1, "dashboard-main", "is-scrollable", "is-dark", 2, "max-width", "100%", "overflow-x", "hidden"], [2, "display", "inline-block"], ["class", "section", 4, "ngIf"], [1, "section"], [1, "container", 2, "margin-bottom", "100px"], [1, "card", "post-card"], [1, "card-content", "is-dark"], [1, "title", "is-1"], [1, "columns", "is-centered", "is-vcentered", "has-text-light"], [1, "column", "has-text-centered", "is-centered", 2, "max-width", "264px"], [3, "src"], [1, "column", "has-text-light", 2, "margin-right", "20px"], [1, "level", "has-text-centered"], [1, "level-item", "has-text-centered"], [1, "heading"], [1, "title"], [1, "tags", "has-text-centered", 2, "max-width", "200px"], ["class", "tag is-warning", 4, "ngFor", "ngForOf"], [1, "tags", 2, "max-width", "200px"], ["class", "tag is-danger", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "card-footer-item"], [1, "icon", "has-text-light", "is-medium"], [1, "fas", "fa-pencil-alt"], [1, "card-footer-item", 3, "click"], [1, "fas", "fa-star"], [3, "click"], [1, "fas", "fa-rss"], ["class", "card post-card", 4, "ngIf"], [1, "tag", "is-warning"], [1, "tag", "is-danger"], [2, "margin-top", "10px"], [1, "title", "is-3", "has-text-light"], [1, "images"], [3, "videoId"], [1, "media"], [1, "media-content"], [3, "game", "routerLink"]], template: function GameDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GameDetailComponent_section_6_Template, 53, 15, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_7__["YouTubePlayer"], _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_8__["GameCardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: ["ul.images[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  overflow-x: auto;\n}\n\nli[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin: 5px;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 600px;\n}\n\n.post-card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  margin-bottom: 25px;\n  background-color: #363636;\n}\n\n.content-bg[_ngcontent-%COMP%] {\n  background-color: #232324;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #95EF72;\n}\n\n.card-footer-item[_ngcontent-%COMP%] {\n  \n  color: whitesmoke;\n}\n\n.card-footer-item[_ngcontent-%COMP%]:hover {\n  background-color: #171717;\n  color: whitesmoke;\n  font-weight: bolder;\n}\n\n.card-footer-item.is-active[_ngcontent-%COMP%] {\n  background-color: #171717;\n  color: whitesmoke;\n  font-weight: bolder;\n}\n\n.card-footer-item[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 1px solid #95EF72;\n}\n\n.heading[_ngcontent-%COMP%] {\n  margin-bottom: 1.0rem;\n}\n\n.level[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1kZXRhaWwvZ2FtZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1kZXRhaWwvZ2FtZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsLmltYWdlcyB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG5saSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW46IDVweDtcbn1cblxuaW1nIHtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG59XG5cbi5wb3N0LWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xufVxuXG4uY29udGVudC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjQ7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTVFRjcyO1xufVxuXG4uY2FyZC1mb290ZXItaXRlbSB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjQ7ICovXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uY2FyZC1mb290ZXItaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uY2FyZC1mb290ZXItaXRlbS5pcy1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmNhcmQtZm9vdGVyLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5NUVGNzI7XG59XG5cbi5oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMS4wcmVtO1xufVxuXG4ubGV2ZWwge1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-detail',
                templateUrl: './game-detail.component.html',
                styleUrls: ['./game-detail.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_1__["ObserverService"] }, { type: _games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game-search/game-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/game-search/game-search.component.ts ***!
  \******************************************************/
/*! exports provided: GameSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSearchComponent", function() { return GameSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../games.service */ "./src/app/games.service.ts");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function GameSearchComponent_div_9_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameSearchComponent_div_9_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.openGame(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://", item_r2 == null ? null : item_r2.coverURL, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, item_r2 == null ? null : item_r2.rating, "1.2-2"), "/100");
} }
function GameSearchComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Players");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GameSearchComponent_div_9_a_10_Template, 7, 6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.results);
} }
class GameSearchComponent {
    constructor(gamesService, observerService, router) {
        this.gamesService = gamesService;
        this.observerService = observerService;
        this.router = router;
        this.results = new Array();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.subscriptionResults = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.subscriptionResults.add(this.gamesService.searchResults.asObservable().subscribe(results => {
            this.results = results;
        }));
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
        }));
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
        this.subscriptionResults.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    onkeyup(e) {
        this.gamesService.search(e.target.value.toLowerCase());
    }
    closeModal() {
        this.appData.searchBarOpen = false;
        this.updateObserver();
    }
    openGame(game) {
        //this.gamesService.setGameID(game.id.toString());
        this.appData.searchBarOpen = false;
        this.updateObserver();
        this.router.navigate(['/games/' + game.id]);
    }
}
GameSearchComponent.ɵfac = function GameSearchComponent_Factory(t) { return new (t || GameSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_3__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
GameSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameSearchComponent, selectors: [["app-game-search"]], decls: 10, vars: 4, consts: [[1, "modal-background", 3, "click"], [1, "modal-content"], ["aria-label", "close", 1, "delete", 2, "float", "right", "margin", "10px", 3, "click"], [1, "panel", 2, "background-color", "whitesmoke"], [2, "background-color", "#3273dc", "padding", "20px"], [1, "control", "has-icons-left"], ["placeholder", "Search Games, Users, and Posts...", 1, "input", "is-info", 3, "keyup"], [1, "icon", "is-left"], ["aria-hidden", "true", 1, "fas", "fa-search"], [4, "ngIf"], [1, "panel-tabs"], [1, "is-active"], ["class", "panel-block is-active", 3, "click", 4, "ngFor", "ngForOf"], [1, "panel-block", "is-active", 3, "click"], [2, "max-height", "60px", 3, "src"], [1, "subtitle", "has-text-dark", 2, "margin-left", "10px", "margin-right", "10px"], [1, "subtitle", "has-text-dark"]], template: function GameSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameSearchComponent_Template_div_click_0_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameSearchComponent_Template_button_click_2_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function GameSearchComponent_Template_input_keyup_6_listener($event) { return ctx.onkeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GameSearchComponent_div_9_Template, 11, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("panel-heading ", (ctx.results == null ? null : ctx.results.length) == 0 ? "panel-heading-active" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.results == null ? null : ctx.results.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtc2VhcmNoL2dhbWUtc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-search',
                templateUrl: './game-search.component.html',
                styleUrls: ['./game-search.component.css']
            }]
    }], function () { return [{ type: _games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"] }, { type: _observer_service__WEBPACK_IMPORTED_MODULE_3__["ObserverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game.ts":
/*!*************************!*\
  !*** ./src/app/game.ts ***!
  \*************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
class Game {
    constructor() {
        this.id = 0;
        this.name = "";
        this.ageRatings = [];
        this.description = "";
        this.coverURL = "";
        this.firstReleaseDate = 0;
        this.franchise = "";
        this.genres = [];
        this.platforms = [];
        this.similarGames = [];
        this.rating = 0.0;
        this.ratingCount = 0;
        this.screenshots = [];
        this.searchableIndex = {};
        this.videos = [];
    }
}


/***/ }),

/***/ "./src/app/games-container/games-container.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/games-container/games-container.component.ts ***!
  \**************************************************************/
/*! exports provided: GamesContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesContainerComponent", function() { return GamesContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _game_card_list_game_card_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game-card-list/game-card-list.component */ "./src/app/game-card-list/game-card-list.component.ts");






class GamesContainerComponent {
    constructor(observerService) {
        this.observerService = observerService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
        }));
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
}
GamesContainerComponent.ɵfac = function GamesContainerComponent_Factory(t) { return new (t || GamesContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"])); };
GamesContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamesContainerComponent, selectors: [["app-games-container"]], decls: 9, vars: 0, consts: [[1, "hero-head"], [1, "hero-body", "content-bg", 2, "padding", "0px"], [1, "dashboard", "is-full-height"], [1, "dashboard-main", "is-scrollable", "is-dark", 2, "max-width", "100%", "overflow-x", "hidden"], [2, "display", "inline-block"], [1, "section"], [1, "container", 2, "margin-bottom", "100px"]], template: function GamesContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-game-card-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _game_card_list_game_card_list_component__WEBPACK_IMPORTED_MODULE_4__["GameCardListComponent"]], styles: ["p[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.content-bg[_ngcontent-%COMP%] {\n  background-color: #232324;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMtY29udGFpbmVyL2dhbWVzLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMtY29udGFpbmVyL2dhbWVzLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jb250ZW50LWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyNDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-games-container',
                templateUrl: './games-container.component.html',
                styleUrls: ['./games-container.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/games.service.ts":
/*!**********************************!*\
  !*** ./src/app/games.service.ts ***!
  \**********************************/
/*! exports provided: GamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesService", function() { return GamesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class GamesService {
    constructor(http) {
        this.http = http;
        this.serverURL = "https://cs1530group11.uc.r.appspot.com/";
        this.searchResults = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.gameNames = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.http.get(this.serverURL + 'genre-database')
            .toPromise()
            .then(db => {
            this.dbMap = db;
        })
            .catch(err => {
            console.error(err);
        });
    }
    getSet(set) {
        return this.dbMap ? this.dbMap[set] : [];
    }
    getGame(id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.serverURL + 'game/id/' + id)
                .toPromise()
                .then(game => {
                resolve(game);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    search(term) {
        this.http.get(this.serverURL + 'search/' + term)
            .toPromise()
            .then(games => {
            this.searchResults.next(games);
        })
            .catch(err => {
            console.error(err);
        });
    }
    getNames() {
        if (this.gameNames.value.length == 0) {
            this.http.get(this.serverURL + 'game-names')
                .toPromise()
                .then(games => {
                this.gameNames.next(games);
            })
                .catch(err => {
                console.error(err);
            });
        }
    }
}
GamesService.ɵfac = function GamesService_Factory(t) { return new (t || GamesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
GamesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GamesService, factory: GamesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/genre.enum.ts":
/*!*******************************!*\
  !*** ./src/app/genre.enum.ts ***!
  \*******************************/
/*! exports provided: Genre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Genre", function() { return Genre; });
var Genre;
(function (Genre) {
    Genre["Fighting"] = "Fighting";
    Genre["Shooter"] = "Shooter";
    Genre["Platform"] = "Platform";
    Genre["Puzzle"] = "Puzzle";
    Genre["Racing"] = "Racing";
    Genre["Simulator"] = "Simulator";
    Genre["Sport"] = "Sport";
    Genre["Tactical"] = "Tactical";
    Genre["Adventure"] = "Adventure";
    Genre["Arcade"] = "Arcade";
    Genre["Indie"] = "Indie";
    Genre["MOBA"] = "MOBA";
})(Genre || (Genre = {}));


/***/ }),

/***/ "./src/app/login-box/login-box.component.ts":
/*!**************************************************!*\
  !*** ./src/app/login-box/login-box.component.ts ***!
  \**************************************************/
/*! exports provided: LoginBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBoxComponent", function() { return LoginBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _sign_in_buttons_sign_in_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sign-in-buttons/sign-in-buttons.component */ "./src/app/sign-in-buttons/sign-in-buttons.component.ts");





class LoginBoxComponent {
    constructor(observerService) {
        this.observerService = observerService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.lottieConfig = {
            path: 'assets/lottie-files/greenCircleExpanding.json',
            renderer: 'canvas',
            autoplay: true,
            loop: true
        };
        this.animationSpeed = 1;
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
        }));
    }
    ngOnInit() { }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    reportIssue() {
        if (!(this.appData.reportingIssue)) {
            this.appData.reportingIssue = true;
            this.updateObserver();
        }
    }
    animationCreated(animationItem) {
    }
}
LoginBoxComponent.ɵfac = function LoginBoxComponent_Factory(t) { return new (t || LoginBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"])); };
LoginBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginBoxComponent, selectors: [["app-login-box"]], decls: 7, vars: 0, consts: [[1, "modal-card", "login-box-outer"], [1, "login-box-inner", "has-text-centered", 2, "overflow-y", "auto"], [2, "margin-bottom", "30px"], ["src", "../../assets/images/pingg_logo.png", "width", "250", "height", "95"], [1, "subtitle"]], template: function LoginBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Where better matches are made. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-sign-in-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sign_in_buttons_sign_in_buttons_component__WEBPACK_IMPORTED_MODULE_3__["SignInButtonsComponent"]], styles: [".login-box-inner[_ngcontent-%COMP%] {\n  background-color: #292929;\n  border: 10px solid #356700;\n  border-radius: 10px;\n  padding: 25px;\n}\n\n.login-box-outer[_ngcontent-%COMP%] {\n  border: 14px solid #95EF72;\n  border-radius: 24px;\n  padding: 0px;\n  margin: 0px;\n}\n\n.anim-parent[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.anim-child[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tYm94L2xvZ2luLWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHOztBQUVIO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0FBQ1QiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi1ib3gvbG9naW4tYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY2lyY2xlcy1iZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9waW5nZ0NpcmNsZXMucG5nJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn0gKi9cblxuLmxvZ2luLWJveC1pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjMzU2NzAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4ubG9naW4tYm94LW91dGVyIHtcbiAgYm9yZGVyOiAxNHB4IHNvbGlkICM5NUVGNzI7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5hbmltLXBhcmVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmFuaW0tY2hpbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-box',
                templateUrl: './login-box.component.html',
                styleUrls: ['./login-box.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/map-container/map-container.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/map-container/map-container.component.ts ***!
  \**********************************************************/
/*! exports provided: MapContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapContainerComponent", function() { return MapContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");




class MapContainerComponent {
    constructor() {
        // google maps zoom level
        this.zoom = 13;
        // initial center position for the map
        this.lat = 40.444265;
        this.lng = -79.953390;
        this.center = new google.maps.LatLng(40.444265, -79.953390);
        this.options = new google.maps.StyledMapType([
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ]);
    }
    ngOnInit() {
    }
}
MapContainerComponent.ɵfac = function MapContainerComponent_Factory(t) { return new (t || MapContainerComponent)(); };
MapContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapContainerComponent, selectors: [["app-map-container"]], decls: 5, vars: 3, consts: [[1, "hero-head"], [1, "hero-body", "content-bg", 2, "padding", "0px"], [1, "dashboard", "is-full-height"], ["width", "100vw", "height", "93vh", 2, "margin-bottom", "20px", "height", "calc(100vh - 57px)", 3, "zoom", "center", "options"]], template: function MapContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "google-map", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", ctx.zoom)("center", ctx.center)("options", ctx.options);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC1jb250YWluZXIvbWFwLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-container',
                templateUrl: './map-container.component.html',
                styleUrls: ['./map-container.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navbar-page.enum.ts":
/*!*************************************!*\
  !*** ./src/app/navbar-page.enum.ts ***!
  \*************************************/
/*! exports provided: NavbarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarPage", function() { return NavbarPage; });
var NavbarPage;
(function (NavbarPage) {
    NavbarPage["feed"] = "Feed";
    NavbarPage["map"] = "Map";
    NavbarPage["games"] = "Games";
    NavbarPage["profile"] = "Profile";
    NavbarPage["search"] = "Search";
    NavbarPage["channel"] = "Channel";
    NavbarPage["game"] = "Game";
})(NavbarPage || (NavbarPage = {}));


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar-page.enum */ "./src/app/navbar-page.enum.ts");
/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-data */ "./src/app/app-data.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game */ "./src/app/game.ts");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../games.service */ "./src/app/games.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function NavbarComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.description());
} }
function NavbarComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_20_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_21_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.showSearchBox = !ctx_r5.showSearchBox; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(observerService, router, afAuth, gamesService, ar) {
        this.observerService = observerService;
        this.router = router;
        this.afAuth = afAuth;
        this.gamesService = gamesService;
        this.ar = ar;
        this.searchResult = Array();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.subscriptionRoute = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.subscriptionGame = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.subscriptionResults = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.title = 'pingg';
        this.searchBox = '';
        this.updated = false;
        this.user = '';
        this.game = new _game__WEBPACK_IMPORTED_MODULE_4__["Game"]();
        this.showMenu = false;
        this.showSearchBox = false;
        this.subscriptionResults.add(this.gamesService.searchResults.asObservable().subscribe(games => {
            this.searchResult = games;
        }));
        this.subscription.add(this.observerService.getMessage().subscribe(message => {
            this.appData = message;
        }));
    }
    ngOnInit() {
        this.ar.url.subscribe(url => {
            if (url && url.length > 0) {
                var page = url[0].path.toString();
                if (page && page[0]) {
                    page = page[0].toUpperCase() + page.substring(1, page.length);
                    this.title = page;
                }
            }
        });
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
        this.subscriptionGame.unsubscribe();
        this.subscriptionResults.unsubscribe();
        this.subscriptionRoute.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    openSearchBar() {
        if (this.appData.searchBarOpen) {
            return;
        }
        this.appData.searchBarOpen = true;
        this.updateObserver();
    }
    getUser() {
        return this.appData.profile.avatarVal;
    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    toggleMenu() {
        this.showMenu = !this.showMenu;
        if (this.showSearchBox) {
            this.showSearchBox = false;
        }
    }
    search() {
        if (this.searchBox.length > 0) {
            this.searchBox = '';
        }
        else {
            this.showSearchBox = false;
        }
    }
    setPage(to) {
        if (!(this.appData.isAuthenticated)) {
            return;
        }
        if (this.title === this.pageFromString(to)) {
            return;
        }
        if (this.showMenu) {
            this.showMenu = false;
        }
        if (this.showSearchBox) {
            this.showSearchBox = false;
        }
        // let newPage = '/' + to.toLowerCase();
        // this.router.navigate([newPage]);
    }
    getPage() {
        // if (this.title === 'Games') {
        //   let name = this.game.name;
        //   if (name.length > 25) {
        //     return name.substring(0,24) + '...'
        //   } else {
        //     return name
        //   }
        // }
        return this.title;
    }
    active(page) {
        return (this.title === page) ? 'is-active' : '';
    }
    pageFromString(page) {
        if (page.toLowerCase() === 'feed') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].feed;
        }
        if (page.toLowerCase() === 'map') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].map;
        }
        if (page.toLowerCase() === 'games') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].games;
        }
        if (page.toLowerCase() === 'profile') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].profile;
        }
        if (page.toLowerCase() === 'search') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].search;
        }
        if (page.toLowerCase() === 'game') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].game;
        }
        return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].feed;
    }
    logSearchBox() {
    }
    showBar() {
        return this.title !== 'Games';
    }
    description() {
        if (this.title === 'Feed') {
            if (this.appData.selectedChannel === '' || this.appData.selectedChannel === '#all') {
                return 'Latest on your favorites...';
            }
            return this.appData.selectedChannel;
        }
        if (this.title === 'Map') {
            return 'Other players nearby...';
        }
        if (this.title === 'Games') {
            return 'So many games...';
        }
        if (this.title === 'Profile') {
            return 'What makes you unique...';
        }
        return '';
    }
    reportIssue() {
        if (!(this.appData.reportingIssue)) {
            if (this.showMenu) {
                this.showMenu = false;
            }
            this.appData.reportingIssue = true;
            this.updateObserver();
        }
    }
    logout() {
        this.afAuth.signOut();
        this.appData = new _app_data__WEBPACK_IMPORTED_MODULE_2__["AppData"]();
        this.updateObserver();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_5__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_8__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 87, vars: 13, consts: [[1, "navbar", "is-dark", 2, "border-bottom", "5px solid #95EF72"], [1, "navbar-brand", "is-hidden-touch"], ["routerLinkActive", "is-active", "routerLink", "/feed", 1, "navbar-item", 3, "click"], ["src", "../../assets/images/pingg_logo_wide.png", "alt", "pingg: Feed", "width", "112", "height", "28"], [1, "icon", "has-text-light", "is-hidden-touch"], [1, "fas", "fa-newspaper"], [1, "is-unselectable", "is-hidden-touch"], ["data-target", "navbarExampleTransparentExample", 1, "navbar-burger", "burger", 3, "click"], [1, "navbar-brand", "is-hidden-desktop"], ["class", "navbar-item", 4, "ngIf"], ["class", "navbar-item", "style", "margin-right: -25px;", 4, "ngIf"], ["class", "navbar-item", 3, "click", 4, "ngIf"], ["id", "navbarExampleTransparentExample"], [1, "navbar-start", "is-hidden-touch"], ["routerLinkActive", "is-active", "routerLink", "/map", 1, "navbar-item", 3, "click"], [1, "icon", "has-text-light"], [1, "fas", "fa-map-marked-alt"], [1, "is-unselectable"], ["routerLinkActive", "is-active", "routerLink", "/games", 1, "navbar-item", 3, "click"], [1, "fas", "fa-gamepad"], ["routerLinkActive", "is-active", 1, "navbar-item", 3, "routerLink", "click"], [2, "border-radius", "50%", "margin-right", "2px", "margin-top", "5px", "width", "22px", "height", "22px", 3, "src"], [1, "navbar-item", "has-dropdown", "is-hoverable"], [1, "navbar-link", "is-hidden-mobile"], [1, "navbar-dropdown", "is-left", 2, "background-color", "#363636"], [1, "navbar-item", 3, "click"], [1, "navbar-item", "subtitle", "is-hidden-touch", "is-unselectable", 2, "margin-left", "10px"], [2, "font-size", "x-large"], [1, "navbar-start", "is-hidden-desktop"], [1, "is-unselectable", "has-text-light"], [2, "border-radius", "50%", "margin-right", "2px", "width", "22px", "height", "22px", 3, "src"], [1, "navbar-divider"], [1, "navbar-item", "has-text-light", 3, "click"], [1, "navbar-end", "is-hidden-touch"], [1, "button", "is-link", "is-outlined", "is-inverted"], [1, "navbar-item"], [1, "subtitle", "is-size-7", "is-unselectable"], [2, "font-size", "larger"], [1, "navbar-item", 2, "margin-right", "-25px"], [1, "field", "has-addons"], [1, "control", "has-icons-left"], ["type", "text", "placeholder", "Search", 1, "input", "is-small", "is-dark"], [1, "icon", "is-left"], [1, "fas", "fa-search"], [1, "button", "is-small", "is-info", 3, "click"], [1, "icon"], [1, "button", "is-small", "is-info"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_2_listener() { return ctx.setPage("Feed"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_8_listener() { return ctx.showMenu = !ctx.showMenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_13_listener() { return ctx.setPage("Feed"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00A0Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavbarComponent_a_19_Template, 7, 2, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavbarComponent_div_20_Template, 9, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavbarComponent_a_21_Template, 4, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_22_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_28_listener() { return ctx.setPage("Map"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00A0Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_33_listener() { return ctx.setPage("Games"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u00A0Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_38_listener() { return ctx.setPage("Profile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u00A0Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_47_listener() { return ctx.reportIssue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Report an issue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_49_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_58_listener() { return ctx.setPage("Feed"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00A0Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_63_listener() { return ctx.setPage("Map"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u00A0Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_68_listener() { return ctx.setPage("Games"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u00A0Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_73_listener() { return ctx.setPage("Profile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u00A0Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_79_listener() { return ctx.reportIssue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Report an issue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_81_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_84_listener() { return ctx.openSearchBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSearchBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSearchBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSearchBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-menu ", ctx.showMenu ? "is-active" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx.appData.profile.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://avatars.dicebear.com/api/bottts/", ctx.getUser(), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", ctx.showBar() ? "|" : "", "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx.appData.profile.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://avatars.dicebear.com/api/bottts/", ctx.getUser(), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: ["span.red-number[_ngcontent-%COMP%] {\n  background: #f14668;\n  border-radius: 0.8em;\n  -moz-border-radius: 0.8em;\n  -webkit-border-radius: 0.8em;\n  color: #ffffff;\n  display: inline-block;\n  font-weight: bold;\n  line-height: 1.6em;\n  margin-right: 10.75px;\n  margin-left: 5.75px;\n  text-align: center;\n  width: 1.6em;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZOztBQUVkOztBQUVBOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Bhbi5yZWQtbnVtYmVyIHtcbiAgYmFja2dyb3VuZDogI2YxNDY2ODtcbiAgYm9yZGVyLXJhZGl1czogMC44ZW07XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMC44ZW07XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMC44ZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIG1hcmdpbi1yaWdodDogMTAuNzVweDtcbiAgbWFyZ2luLWxlZnQ6IDUuNzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMS42ZW07XG5cbn1cblxuLyogYS5uYXZiYXItaXRlbS5pcy1hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzk1RUY3Mjtcbn0gKi9cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_5__["ObserverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] }, { type: _games_service__WEBPACK_IMPORTED_MODULE_8__["GamesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/new-channel-modal/new-channel-modal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/new-channel-modal/new-channel-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: NewChannelModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewChannelModalComponent", function() { return NewChannelModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");




class NewChannelModalComponent {
    constructor(observerService) {
        this.observerService = observerService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
        }));
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    addChannel() {
        this.closeModal();
    }
    closeModal() {
        // this.appData.newChannelModalOpen = false;
        // this.updateObserver()
    }
}
NewChannelModalComponent.ɵfac = function NewChannelModalComponent_Factory(t) { return new (t || NewChannelModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"])); };
NewChannelModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewChannelModalComponent, selectors: [["app-new-channel-modal"]], decls: 13, vars: 0, consts: [[1, "modal-background", 3, "click"], [1, "modal-card", 2, "margin", "0px"], [1, "modal-card-head"], [1, "modal-card-title"], ["aria-label", "close", 1, "delete", 3, "click"], [1, "modal-card-body", "has-text-dark"], [1, "modal-card-foot"], [1, "button", "is-success", 3, "click"], [1, "button", 3, "click"]], template: function NewChannelModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewChannelModalComponent_Template_div_click_0_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewChannelModalComponent_Template_button_click_5_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " New Channel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewChannelModalComponent_Template_button_click_9_listener() { return ctx.addChannel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewChannelModalComponent_Template_button_click_11_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1jaGFubmVsLW1vZGFsL25ldy1jaGFubmVsLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewChannelModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-channel-modal',
                templateUrl: './new-channel-modal.component.html',
                styleUrls: ['./new-channel-modal.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/new-post-modal/new-post-modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/new-post-modal/new-post-modal.component.ts ***!
  \************************************************************/
/*! exports provided: NewPostModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostModalComponent", function() { return NewPostModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../games.service */ "./src/app/games.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function NewPostModalComponent_div_7_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", name_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](name_r4.name);
} }
function NewPostModalComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose a Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NewPostModalComponent_div_7_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "datalist", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewPostModalComponent_div_7_option_5_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.game);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.gameNames);
} }
function NewPostModalComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://", ctx_r1.game == null ? null : ctx_r1.game.coverURL, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NewPostModalComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPostModalComponent_div_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.removeGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NewPostModalComponent {
    constructor(observerService, gamesService) {
        this.observerService = observerService;
        this.gamesService = gamesService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
        }));
        this.gamesService.getNames();
        this.gamesService.gameNames.asObservable().subscribe(gameNames => {
            this.gameNames = gameNames;
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    addPost() {
        this.closeModal();
    }
    closeModal() {
        this.game = undefined;
        this.appData.newPostModalOpen = false;
        this.updateObserver();
    }
    getCover() {
        var _a;
        if (this.game && ((_a = this.game) === null || _a === void 0 ? void 0 : _a.id)) {
            this.gamesService.getGame(this.game.id).then(game => {
                this.game = game;
            });
        }
    }
    removeGame() {
        this.game = undefined;
    }
    onChange(event) {
        let newItem = this.gameNames.find(game => game.name === event.target.value);
        if (newItem) {
            this.game = newItem;
            this.getCover();
            this.updateObserver();
        }
        event.target.value = '';
    }
}
NewPostModalComponent.ɵfac = function NewPostModalComponent_Factory(t) { return new (t || NewPostModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"])); };
NewPostModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewPostModalComponent, selectors: [["app-new-post-modal"]], decls: 22, vars: 6, consts: [[1, "modal-background", 3, "click"], [1, "modal-card", 2, "margin", "0px"], [1, "modal-card-head"], [1, "modal-card-title"], ["aria-label", "close", 1, "delete", 3, "click"], [1, "modal-card-body", "has-text-dark"], [4, "ngIf"], [1, "level", 2, "margin-top", "1.0rem"], [1, "level-left"], ["class", "level-item", 4, "ngIf"], [1, "level-item"], [1, "subtitle", "has-text-dark", 2, "font-weight", "bolder"], [1, "level-right"], ["placeholder", "What's on your mind...", 1, "textarea", 3, "disabled"], [1, "modal-card-foot"], [1, "button", "is-success", 3, "disabled", "click"], [1, "button", 3, "click"], [1, "label"], ["list", "gameList", "type", "text", "placeholder", "start typing..", 1, "input", 3, "disabled", "change"], ["id", "gameList"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "max-height", "96px", 3, "src"], [1, "button", "is-small", "is-danger", 3, "click"], [1, "icon", "is-small"], [1, "fas", "fa-trash-alt"]], template: function NewPostModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPostModalComponent_Template_div_click_0_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPostModalComponent_Template_button_click_5_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewPostModalComponent_div_7_Template, 6, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NewPostModalComponent_div_10_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NewPostModalComponent_div_15_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "footer", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPostModalComponent_Template_button_click_18_listener() { return ctx.addPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPostModalComponent_Template_button_click_20_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.game);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game && (ctx.game == null ? null : ctx.game.coverURL));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.game == null ? null : ctx.game.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.game);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.game || !ctx.postText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1wb3N0LW1vZGFsL25ldy1wb3N0LW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewPostModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-post-modal',
                templateUrl: './new-post-modal.component.html',
                styleUrls: ['./new-post-modal.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"] }, { type: _games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ob-basic/ob-basic.component.ts":
/*!************************************************!*\
  !*** ./src/app/ob-basic/ob-basic.component.ts ***!
  \************************************************/
/*! exports provided: ObBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObBasicComponent", function() { return ObBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const _c0 = ["fn"];
const _c1 = ["ln"];
const _c2 = ["un"];
class ObBasicComponent {
    constructor(observerService, http) {
        this.observerService = observerService;
        this.http = http;
        this.fnTouched = false;
        this.lnTouched = false;
        this.unTouched = false;
        this.seeded = false;
        this.loading = false;
        this.observerService.getMessage().subscribe(msg => {
            this.appData = msg;
        });
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        if (!this.seeded) {
            this.seeded = true;
            this.fn.nativeElement.value = this.appData.onboardingTempProfile.firstName;
            this.ln.nativeElement.value = this.appData.onboardingTempProfile.lastName;
            this.un.nativeElement.value = this.appData.onboardingTempProfile.handle;
        }
    }
    fnChange(event) {
        if (!this.fnTouched)
            this.fnTouched = true;
        this.appData.onboardingTempProfile.firstName = event.target.value;
        this.validateFirstName();
    }
    lnChange(event) {
        if (!this.lnTouched)
            this.lnTouched = true;
        this.appData.onboardingTempProfile.lastName = event.target.value;
        this.validateLastName();
    }
    unChange(event) {
        if (!this.unTouched)
            this.unTouched = true;
        this.appData.onboardingTempProfile.handle = event.target.value;
        this.validateFields();
    }
    validateFirstName() {
        var issueFound = false;
        if (this.appData.onboardingTempProfile.firstName.length == 0) {
            issueFound = true;
            this.fnError = 'Please enter your first name.';
        }
        else if (false) {}
        else {
            this.fnError = '';
        }
        this.validateFields();
        return !issueFound;
    }
    validateLastName() {
        var issueFound = false;
        if (this.appData.onboardingTempProfile.lastName.length == 0) {
            issueFound = true;
            this.lnError = 'Please enter your last name.';
        }
        else if (false) {}
        else {
            this.lnError = '';
        }
        this.validateFields();
        return !issueFound;
    }
    validateUsername() {
        this.loading = true;
        return new Promise((resolve, reject) => {
            if (this.appData.onboardingTempProfile.handle.length == 0) {
                this.unError = 'Please enter your desired username.';
                this.loading = false;
                resolve(false);
            }
            else {
                // TODO: check for more issues with username
                let url = 'https://cs1530group11graph.uc.r.appspot.com/usernames/' + this.appData.onboardingTempProfile.handle;
                this.http.get(url)
                    .toPromise()
                    .then(response => {
                    let result = response.response;
                    if (result.includes('No')) {
                        this.unError = '';
                        this.unSuccess = result;
                        this.validateFields();
                        this.loading = false;
                        resolve(true);
                    }
                    else {
                        this.unSuccess = '';
                        this.unError = result;
                        this.validateFields();
                        this.loading = false;
                        resolve(false);
                    }
                }).catch(err => {
                    console.error(err);
                    this.unError = err;
                    this.loading = false;
                });
            }
        });
    }
    validateFields() {
        // let errorsDefined = this.fnError && this.lnError && this.unError
        let errorsEmpty = (this.fnError === '') && (this.lnError === '') && (this.unError === '');
        let allTouched = this.fnTouched && this.lnTouched && this.unTouched;
        this.appData.onboardingBasicsValid = errorsEmpty && allTouched;
        this.observerService.sendMessage(this.appData);
    }
}
ObBasicComponent.ɵfac = function ObBasicComponent_Factory(t) { return new (t || ObBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_1__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ObBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ObBasicComponent, selectors: [["app-ob-basic"]], viewQuery: function ObBasicComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ln = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.un = _t.first);
    } }, decls: 29, vars: 8, consts: [[1, "field"], [1, "label"], [1, "control"], ["type", "text", "placeholder", "John", "name", "fn", 1, "input", 3, "focus", "focusout"], ["fn", ""], [1, "help", "is-danger"], ["type", "text", "placeholder", "Smith", "name", "ln", 1, "input", 3, "focus", "focusout"], ["ln", ""], [1, "field", "has-addons"], ["type", "text", "placeholder", "daCaptain1530", "name", "un", 1, "input", 3, "focus", "focusout"], ["un", ""], [3, "disabled", "click"], [1, "help", "is-success"]], template: function ObBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ObBasicComponent_Template_input_focus_4_listener($event) { return ctx.fnChange($event); })("focusout", function ObBasicComponent_Template_input_focusout_4_listener($event) { return ctx.fnChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ObBasicComponent_Template_input_focus_12_listener($event) { return ctx.lnChange($event); })("focusout", function ObBasicComponent_Template_input_focusout_12_listener($event) { return ctx.lnChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Choose a Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ObBasicComponent_Template_input_focus_20_listener($event) { return ctx.unChange($event); })("focusout", function ObBasicComponent_Template_input_focusout_20_listener($event) { return ctx.unChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObBasicComponent_Template_button_click_23_listener() { return ctx.validateUsername(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Verify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fnError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lnError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button is-link ", ctx.loading ? "is-loading" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.unError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.unSuccess);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29iLWJhc2ljL29iLWJhc2ljLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObBasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ob-basic',
                templateUrl: './ob-basic.component.html',
                styleUrls: ['./ob-basic.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_1__["ObserverService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, { fn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fn']
        }], ln: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ln']
        }], un: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['un']
        }] }); })();


/***/ }),

/***/ "./src/app/ob-customize/ob-customize.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ob-customize/ob-customize.component.ts ***!
  \********************************************************/
/*! exports provided: ObCustomizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObCustomizeComponent", function() { return ObCustomizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _ng_web_apis_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-web-apis/geolocation */ "./node_modules/@ng-web-apis/geolocation/__ivy_ngcc__/fesm2015/ng-web-apis-geolocation.js");




class ObCustomizeComponent {
    constructor(observerService, geolocationService) {
        this.observerService = observerService;
        this.geolocationService = geolocationService;
        this.locationAttempted = false;
        observerService.getMessage().subscribe(msg => {
            this.appData = msg;
        });
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    ngOnInit() {
        this.appData.onboardingTempProfile.avatarVal = 50 * this.appData.avatarSeed;
    }
    imageKey() {
        return this.appData.avatarSeed * this.appData.avatarVal;
    }
    onChange(event) {
        this.appData.avatarVal = event.target.value;
        this.appData.onboardingTempProfile.avatarVal = event.target.value * this.appData.avatarSeed;
        this.updateObserver();
    }
    onToggle(event) {
        this.appData.locationEnabled = !this.appData.locationEnabled;
        if (!this.locationAttempted && this.appData.locationEnabled) {
            // geolocation
            this.geolocationService.subscribe(pos => {
                if (pos && pos.coords && pos.coords.latitude && pos.coords.longitude) {
                    this.appData.onboardingTempProfile.latitude = pos.coords.latitude;
                    this.appData.onboardingTempProfile.longitude = pos.coords.longitude;
                    this.updateObserver();
                }
            });
            this.locationAttempted = true;
        }
        this.updateObserver();
    }
}
ObCustomizeComponent.ɵfac = function ObCustomizeComponent_Factory(t) { return new (t || ObCustomizeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_1__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_web_apis_geolocation__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"])); };
ObCustomizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ObCustomizeComponent, selectors: [["app-ob-customize"]], decls: 17, vars: 3, consts: [[1, "columns", "is-centered", "is-vcentered"], [1, "column", "is-centered", "has-text-centered"], [1, ""], [2, "max-width", "150px", "border-radius", "50%", "margin-right", "2px", 3, "src"], [1, "column", "is-two-thirds"], [1, "subtitle", "is-6", "has-text-dark", 2, "margin-bottom", "0.5rem", "font-weight", "bolder"], ["step", "1", "min", "0", "max", "1000", "type", "range", 1, "slider", "is-link", 2, "width", "100%", 3, "value", "change"], [1, "column", "is-centered", "has-text-centered", "is-two-thirds"], [1, "ckbx-style-8"], ["type", "checkbox", "id", "ckbx-style-8-1", "value", "0", "name", "ckbx-style-8", 3, "checked", "change"], ["for", "ckbx-style-8-1"]], template: function ObCustomizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Choose an Avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ObCustomizeComponent_Template_input_change_7_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enable Location to access Player Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ObCustomizeComponent_Template_input_change_15_listener($event) { return ctx.onToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://avatars.dicebear.com/api/bottts/", ctx.imageKey(), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.appData.avatarVal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.appData.locationEnabled);
    } }, styles: [".ckbx-style-8[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before {\n  background-color: #3273dc;\n}\n\n.ckbx-style-8[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  background-color: lightgray;\n}\n\n@keyframes spinAround{from{transform:rotate(0)}to{transform:rotate(359deg)}}\n\ninput[type=range].slider[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:1rem 0;background:0 0;touch-action:none}\n\ninput[type=range].slider.is-fullwidth[_ngcontent-%COMP%]{display:block;width:100%}\n\ninput[type=range].slider[_ngcontent-%COMP%]:focus{outline:0}\n\ninput[type=range].slider[_ngcontent-%COMP%]:not([orient=vertical])::-webkit-slider-runnable-track{width:100%}\n\ninput[type=range].slider[_ngcontent-%COMP%]:not([orient=vertical])::-moz-range-track{width:100%}\n\ninput[type=range].slider[_ngcontent-%COMP%]:not([orient=vertical])::-ms-track{width:100%}\n\ninput[type=range].slider[_ngcontent-%COMP%]:not([orient=vertical]).has-output + output[_ngcontent-%COMP%], input[type=range].slider[_ngcontent-%COMP%]:not([orient=vertical]).has-output-tooltip + output[_ngcontent-%COMP%]{width:3rem;background:#4a4a4a;border-radius:4px;padding:.4rem .8rem;font-size:.75rem;line-height:.75rem;text-align:center;text-overflow:ellipsis;white-space:nowrap;color:#fff;overflow:hidden;pointer-events:none;z-index:200}\n\ninput[type=range].slider[_ngcontent-%COMP%]:not([orient=vertical]).has-output-tooltip:disabled + output[_ngcontent-%COMP%], input[type=range].slider[_ngcontent-%COMP%]:not([orient=vertical]).has-output:disabled + output[_ngcontent-%COMP%]{opacity:.5}\n\ninput[type=range].slider[_ngcontent-%COMP%]:not([orient=vertical]).has-output{display:inline-block;vertical-align:middle;width:calc(100% - (4.2rem))}\n\ninput[type=range].slider[_ngcontent-%COMP%]:not([orient=vertical]).has-output + output[_ngcontent-%COMP%]{display:inline-block;margin-left:.75rem;vertical-align:middle}\n\ninput[type=range].slider[_ngcontent-%COMP%]:not([orient=vertical]).has-output-tooltip{display:block}\n\ninput[type=range].slider[_ngcontent-%COMP%]:not([orient=vertical]).has-output-tooltip + output[_ngcontent-%COMP%]{position:absolute;left:0;top:-.1rem}\n\ninput[type=range].slider[orient=vertical][_ngcontent-%COMP%]{-webkit-appearance:slider-vertical;-moz-appearance:slider-vertical;appearance:slider-vertical;writing-mode:bt-lr}\n\ninput[type=range].slider[orient=vertical][_ngcontent-%COMP%]::-webkit-slider-runnable-track{height:100%}\n\ninput[type=range].slider[orient=vertical][_ngcontent-%COMP%]::-moz-range-track{height:100%}\n\ninput[type=range].slider[orient=vertical][_ngcontent-%COMP%]::-ms-track{height:100%}\n\ninput[type=range].slider[_ngcontent-%COMP%]::-webkit-slider-runnable-track{cursor:pointer;animate:.2s;box-shadow:0 0 0 #7a7a7a;background:#dbdbdb;border-radius:4px;border:0 solid #7a7a7a}\n\ninput[type=range].slider[_ngcontent-%COMP%]::-moz-range-track{cursor:pointer;animate:.2s;box-shadow:0 0 0 #7a7a7a;background:#dbdbdb;border-radius:4px;border:0 solid #7a7a7a}\n\ninput[type=range].slider[_ngcontent-%COMP%]::-ms-track{cursor:pointer;animate:.2s;box-shadow:0 0 0 #7a7a7a;background:#dbdbdb;border-radius:4px;border:0 solid #7a7a7a}\n\ninput[type=range].slider[_ngcontent-%COMP%]::-ms-fill-lower{background:#dbdbdb;border-radius:4px}\n\ninput[type=range].slider[_ngcontent-%COMP%]::-ms-fill-upper{background:#dbdbdb;border-radius:4px}\n\ninput[type=range].slider[_ngcontent-%COMP%]::-webkit-slider-thumb{box-shadow:none;border:1px solid #b5b5b5;border-radius:4px;background:#fff;cursor:pointer}\n\ninput[type=range].slider[_ngcontent-%COMP%]::-moz-range-thumb{box-shadow:none;border:1px solid #b5b5b5;border-radius:4px;background:#fff;cursor:pointer}\n\ninput[type=range].slider[_ngcontent-%COMP%]::-ms-thumb{box-shadow:none;border:1px solid #b5b5b5;border-radius:4px;background:#fff;cursor:pointer}\n\ninput[type=range].slider[_ngcontent-%COMP%]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none}\n\ninput[type=range].slider.is-circle[_ngcontent-%COMP%]::-webkit-slider-thumb{border-radius:290486px}\n\ninput[type=range].slider.is-circle[_ngcontent-%COMP%]::-moz-range-thumb{border-radius:290486px}\n\ninput[type=range].slider.is-circle[_ngcontent-%COMP%]::-ms-thumb{border-radius:290486px}\n\ninput[type=range].slider[_ngcontent-%COMP%]:active::-webkit-slider-thumb{transform:scale(1.25)}\n\ninput[type=range].slider[_ngcontent-%COMP%]:active::-moz-range-thumb{transform:scale(1.25)}\n\ninput[type=range].slider[_ngcontent-%COMP%]:active::-ms-thumb{transform:scale(1.25)}\n\ninput[type=range].slider[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}\n\ninput[type=range].slider[_ngcontent-%COMP%]:disabled::-webkit-slider-thumb{cursor:not-allowed;transform:scale(1)}\n\ninput[type=range].slider[_ngcontent-%COMP%]:disabled::-moz-range-thumb{cursor:not-allowed;transform:scale(1)}\n\ninput[type=range].slider[_ngcontent-%COMP%]:disabled::-ms-thumb{cursor:not-allowed;transform:scale(1)}\n\ninput[type=range].slider[_ngcontent-%COMP%]:not([orient=vertical]){min-height:calc((1rem + 2px) * 1.25)}\n\ninput[type=range].slider[_ngcontent-%COMP%]:not([orient=vertical])::-webkit-slider-runnable-track{height:.5rem}\n\ninput[type=range].slider[_ngcontent-%COMP%]:not([orient=vertical])::-moz-range-track{height:.5rem}\n\ninput[type=range].slider[_ngcontent-%COMP%]:not([orient=vertical])::-ms-track{height:.5rem}\n\ninput[type=range].slider[orient=vertical][_ngcontent-%COMP%]::-webkit-slider-runnable-track{width:.5rem}\n\ninput[type=range].slider[orient=vertical][_ngcontent-%COMP%]::-moz-range-track{width:.5rem}\n\ninput[type=range].slider[orient=vertical][_ngcontent-%COMP%]::-ms-track{width:.5rem}\n\ninput[type=range].slider[_ngcontent-%COMP%]::-webkit-slider-thumb{height:1rem;width:1rem}\n\ninput[type=range].slider[_ngcontent-%COMP%]::-moz-range-thumb{height:1rem;width:1rem}\n\ninput[type=range].slider[_ngcontent-%COMP%]::-ms-thumb{height:1rem;width:1rem}\n\ninput[type=range].slider[_ngcontent-%COMP%]::-ms-thumb{margin-top:0}\n\ninput[type=range].slider[_ngcontent-%COMP%]::-webkit-slider-thumb{margin-top:-.25rem}\n\ninput[type=range].slider[orient=vertical][_ngcontent-%COMP%]::-webkit-slider-thumb{margin-top:auto;margin-left:-.25rem}\n\ninput[type=range].slider.is-small[_ngcontent-%COMP%]:not([orient=vertical]){min-height:calc((.75rem + 2px) * 1.25)}\n\ninput[type=range].slider.is-small[_ngcontent-%COMP%]:not([orient=vertical])::-webkit-slider-runnable-track{height:.375rem}\n\ninput[type=range].slider.is-small[_ngcontent-%COMP%]:not([orient=vertical])::-moz-range-track{height:.375rem}\n\ninput[type=range].slider.is-small[_ngcontent-%COMP%]:not([orient=vertical])::-ms-track{height:.375rem}\n\ninput[type=range].slider.is-small[orient=vertical][_ngcontent-%COMP%]::-webkit-slider-runnable-track{width:.375rem}\n\ninput[type=range].slider.is-small[orient=vertical][_ngcontent-%COMP%]::-moz-range-track{width:.375rem}\n\ninput[type=range].slider.is-small[orient=vertical][_ngcontent-%COMP%]::-ms-track{width:.375rem}\n\ninput[type=range].slider.is-small[_ngcontent-%COMP%]::-webkit-slider-thumb{height:.75rem;width:.75rem}\n\ninput[type=range].slider.is-small[_ngcontent-%COMP%]::-moz-range-thumb{height:.75rem;width:.75rem}\n\ninput[type=range].slider.is-small[_ngcontent-%COMP%]::-ms-thumb{height:.75rem;width:.75rem}\n\ninput[type=range].slider.is-small[_ngcontent-%COMP%]::-ms-thumb{margin-top:0}\n\ninput[type=range].slider.is-small[_ngcontent-%COMP%]::-webkit-slider-thumb{margin-top:-.1875rem}\n\ninput[type=range].slider.is-small[orient=vertical][_ngcontent-%COMP%]::-webkit-slider-thumb{margin-top:auto;margin-left:-.1875rem}\n\ninput[type=range].slider.is-medium[_ngcontent-%COMP%]:not([orient=vertical]){min-height:calc((1.25rem + 2px) * 1.25)}\n\ninput[type=range].slider.is-medium[_ngcontent-%COMP%]:not([orient=vertical])::-webkit-slider-runnable-track{height:.625rem}\n\ninput[type=range].slider.is-medium[_ngcontent-%COMP%]:not([orient=vertical])::-moz-range-track{height:.625rem}\n\ninput[type=range].slider.is-medium[_ngcontent-%COMP%]:not([orient=vertical])::-ms-track{height:.625rem}\n\ninput[type=range].slider.is-medium[orient=vertical][_ngcontent-%COMP%]::-webkit-slider-runnable-track{width:.625rem}\n\ninput[type=range].slider.is-medium[orient=vertical][_ngcontent-%COMP%]::-moz-range-track{width:.625rem}\n\ninput[type=range].slider.is-medium[orient=vertical][_ngcontent-%COMP%]::-ms-track{width:.625rem}\n\ninput[type=range].slider.is-medium[_ngcontent-%COMP%]::-webkit-slider-thumb{height:1.25rem;width:1.25rem}\n\ninput[type=range].slider.is-medium[_ngcontent-%COMP%]::-moz-range-thumb{height:1.25rem;width:1.25rem}\n\ninput[type=range].slider.is-medium[_ngcontent-%COMP%]::-ms-thumb{height:1.25rem;width:1.25rem}\n\ninput[type=range].slider.is-medium[_ngcontent-%COMP%]::-ms-thumb{margin-top:0}\n\ninput[type=range].slider.is-medium[_ngcontent-%COMP%]::-webkit-slider-thumb{margin-top:-.3125rem}\n\ninput[type=range].slider.is-medium[orient=vertical][_ngcontent-%COMP%]::-webkit-slider-thumb{margin-top:auto;margin-left:-.3125rem}\n\ninput[type=range].slider.is-large[_ngcontent-%COMP%]:not([orient=vertical]){min-height:calc((1.5rem + 2px) * 1.25)}\n\ninput[type=range].slider.is-large[_ngcontent-%COMP%]:not([orient=vertical])::-webkit-slider-runnable-track{height:.75rem}\n\ninput[type=range].slider.is-large[_ngcontent-%COMP%]:not([orient=vertical])::-moz-range-track{height:.75rem}\n\ninput[type=range].slider.is-large[_ngcontent-%COMP%]:not([orient=vertical])::-ms-track{height:.75rem}\n\ninput[type=range].slider.is-large[orient=vertical][_ngcontent-%COMP%]::-webkit-slider-runnable-track{width:.75rem}\n\ninput[type=range].slider.is-large[orient=vertical][_ngcontent-%COMP%]::-moz-range-track{width:.75rem}\n\ninput[type=range].slider.is-large[orient=vertical][_ngcontent-%COMP%]::-ms-track{width:.75rem}\n\ninput[type=range].slider.is-large[_ngcontent-%COMP%]::-webkit-slider-thumb{height:1.5rem;width:1.5rem}\n\ninput[type=range].slider.is-large[_ngcontent-%COMP%]::-moz-range-thumb{height:1.5rem;width:1.5rem}\n\ninput[type=range].slider.is-large[_ngcontent-%COMP%]::-ms-thumb{height:1.5rem;width:1.5rem}\n\ninput[type=range].slider.is-large[_ngcontent-%COMP%]::-ms-thumb{margin-top:0}\n\ninput[type=range].slider.is-large[_ngcontent-%COMP%]::-webkit-slider-thumb{margin-top:-.375rem}\n\ninput[type=range].slider.is-large[orient=vertical][_ngcontent-%COMP%]::-webkit-slider-thumb{margin-top:auto;margin-left:-.375rem}\n\ninput[type=range].slider.is-white[_ngcontent-%COMP%]::-moz-range-track{background:#fff!important}\n\ninput[type=range].slider.is-white[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#fff!important}\n\ninput[type=range].slider.is-white[_ngcontent-%COMP%]::-ms-track{background:#fff!important}\n\ninput[type=range].slider.is-white[_ngcontent-%COMP%]::-ms-fill-lower{background:#fff}\n\ninput[type=range].slider.is-white[_ngcontent-%COMP%]::-ms-fill-upper{background:#fff}\n\ninput[type=range].slider.is-white[_ngcontent-%COMP%]   .has-output-tooltip[_ngcontent-%COMP%] + output[_ngcontent-%COMP%], input[type=range].slider.is-white.has-output[_ngcontent-%COMP%] + output[_ngcontent-%COMP%]{background-color:#fff;color:#0a0a0a}\n\ninput[type=range].slider.is-black[_ngcontent-%COMP%]::-moz-range-track{background:#0a0a0a!important}\n\ninput[type=range].slider.is-black[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#0a0a0a!important}\n\ninput[type=range].slider.is-black[_ngcontent-%COMP%]::-ms-track{background:#0a0a0a!important}\n\ninput[type=range].slider.is-black[_ngcontent-%COMP%]::-ms-fill-lower{background:#0a0a0a}\n\ninput[type=range].slider.is-black[_ngcontent-%COMP%]::-ms-fill-upper{background:#0a0a0a}\n\ninput[type=range].slider.is-black[_ngcontent-%COMP%]   .has-output-tooltip[_ngcontent-%COMP%] + output[_ngcontent-%COMP%], input[type=range].slider.is-black.has-output[_ngcontent-%COMP%] + output[_ngcontent-%COMP%]{background-color:#0a0a0a;color:#fff}\n\ninput[type=range].slider.is-light[_ngcontent-%COMP%]::-moz-range-track{background:#f5f5f5!important}\n\ninput[type=range].slider.is-light[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#f5f5f5!important}\n\ninput[type=range].slider.is-light[_ngcontent-%COMP%]::-ms-track{background:#f5f5f5!important}\n\ninput[type=range].slider.is-light[_ngcontent-%COMP%]::-ms-fill-lower{background:#f5f5f5}\n\ninput[type=range].slider.is-light[_ngcontent-%COMP%]::-ms-fill-upper{background:#f5f5f5}\n\ninput[type=range].slider.is-light[_ngcontent-%COMP%]   .has-output-tooltip[_ngcontent-%COMP%] + output[_ngcontent-%COMP%], input[type=range].slider.is-light.has-output[_ngcontent-%COMP%] + output[_ngcontent-%COMP%]{background-color:#f5f5f5;color:#363636}\n\ninput[type=range].slider.is-dark[_ngcontent-%COMP%]::-moz-range-track{background:#363636!important}\n\ninput[type=range].slider.is-dark[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#363636!important}\n\ninput[type=range].slider.is-dark[_ngcontent-%COMP%]::-ms-track{background:#363636!important}\n\ninput[type=range].slider.is-dark[_ngcontent-%COMP%]::-ms-fill-lower{background:#363636}\n\ninput[type=range].slider.is-dark[_ngcontent-%COMP%]::-ms-fill-upper{background:#363636}\n\ninput[type=range].slider.is-dark[_ngcontent-%COMP%]   .has-output-tooltip[_ngcontent-%COMP%] + output[_ngcontent-%COMP%], input[type=range].slider.is-dark.has-output[_ngcontent-%COMP%] + output[_ngcontent-%COMP%]{background-color:#363636;color:#f5f5f5}\n\ninput[type=range].slider.is-primary[_ngcontent-%COMP%]::-moz-range-track{background:#00d1b2!important}\n\ninput[type=range].slider.is-primary[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#00d1b2!important}\n\ninput[type=range].slider.is-primary[_ngcontent-%COMP%]::-ms-track{background:#00d1b2!important}\n\ninput[type=range].slider.is-primary[_ngcontent-%COMP%]::-ms-fill-lower{background:#00d1b2}\n\ninput[type=range].slider.is-primary[_ngcontent-%COMP%]::-ms-fill-upper{background:#00d1b2}\n\ninput[type=range].slider.is-primary[_ngcontent-%COMP%]   .has-output-tooltip[_ngcontent-%COMP%] + output[_ngcontent-%COMP%], input[type=range].slider.is-primary.has-output[_ngcontent-%COMP%] + output[_ngcontent-%COMP%]{background-color:#00d1b2;color:#fff}\n\ninput[type=range].slider.is-link[_ngcontent-%COMP%]::-moz-range-track{background:#3273dc!important}\n\ninput[type=range].slider.is-link[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#3273dc!important}\n\ninput[type=range].slider.is-link[_ngcontent-%COMP%]::-ms-track{background:#3273dc!important}\n\ninput[type=range].slider.is-link[_ngcontent-%COMP%]::-ms-fill-lower{background:#3273dc}\n\ninput[type=range].slider.is-link[_ngcontent-%COMP%]::-ms-fill-upper{background:#3273dc}\n\ninput[type=range].slider.is-link[_ngcontent-%COMP%]   .has-output-tooltip[_ngcontent-%COMP%] + output[_ngcontent-%COMP%], input[type=range].slider.is-link.has-output[_ngcontent-%COMP%] + output[_ngcontent-%COMP%]{background-color:#3273dc;color:#fff}\n\ninput[type=range].slider.is-info[_ngcontent-%COMP%]::-moz-range-track{background:#209cee!important}\n\ninput[type=range].slider.is-info[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#209cee!important}\n\ninput[type=range].slider.is-info[_ngcontent-%COMP%]::-ms-track{background:#209cee!important}\n\ninput[type=range].slider.is-info[_ngcontent-%COMP%]::-ms-fill-lower{background:#209cee}\n\ninput[type=range].slider.is-info[_ngcontent-%COMP%]::-ms-fill-upper{background:#209cee}\n\ninput[type=range].slider.is-info[_ngcontent-%COMP%]   .has-output-tooltip[_ngcontent-%COMP%] + output[_ngcontent-%COMP%], input[type=range].slider.is-info.has-output[_ngcontent-%COMP%] + output[_ngcontent-%COMP%]{background-color:#209cee;color:#fff}\n\ninput[type=range].slider.is-success[_ngcontent-%COMP%]::-moz-range-track{background:#23d160!important}\n\ninput[type=range].slider.is-success[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#23d160!important}\n\ninput[type=range].slider.is-success[_ngcontent-%COMP%]::-ms-track{background:#23d160!important}\n\ninput[type=range].slider.is-success[_ngcontent-%COMP%]::-ms-fill-lower{background:#23d160}\n\ninput[type=range].slider.is-success[_ngcontent-%COMP%]::-ms-fill-upper{background:#23d160}\n\ninput[type=range].slider.is-success[_ngcontent-%COMP%]   .has-output-tooltip[_ngcontent-%COMP%] + output[_ngcontent-%COMP%], input[type=range].slider.is-success.has-output[_ngcontent-%COMP%] + output[_ngcontent-%COMP%]{background-color:#23d160;color:#fff}\n\ninput[type=range].slider.is-warning[_ngcontent-%COMP%]::-moz-range-track{background:#ffdd57!important}\n\ninput[type=range].slider.is-warning[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#ffdd57!important}\n\ninput[type=range].slider.is-warning[_ngcontent-%COMP%]::-ms-track{background:#ffdd57!important}\n\ninput[type=range].slider.is-warning[_ngcontent-%COMP%]::-ms-fill-lower{background:#ffdd57}\n\ninput[type=range].slider.is-warning[_ngcontent-%COMP%]::-ms-fill-upper{background:#ffdd57}\n\ninput[type=range].slider.is-warning[_ngcontent-%COMP%]   .has-output-tooltip[_ngcontent-%COMP%] + output[_ngcontent-%COMP%], input[type=range].slider.is-warning.has-output[_ngcontent-%COMP%] + output[_ngcontent-%COMP%]{background-color:#ffdd57;color:rgba(0,0,0,.7)}\n\ninput[type=range].slider.is-danger[_ngcontent-%COMP%]::-moz-range-track{background:#ff3860!important}\n\ninput[type=range].slider.is-danger[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#ff3860!important}\n\ninput[type=range].slider.is-danger[_ngcontent-%COMP%]::-ms-track{background:#ff3860!important}\n\ninput[type=range].slider.is-danger[_ngcontent-%COMP%]::-ms-fill-lower{background:#ff3860}\n\ninput[type=range].slider.is-danger[_ngcontent-%COMP%]::-ms-fill-upper{background:#ff3860}\n\ninput[type=range].slider.is-danger[_ngcontent-%COMP%]   .has-output-tooltip[_ngcontent-%COMP%] + output[_ngcontent-%COMP%], input[type=range].slider.is-danger.has-output[_ngcontent-%COMP%] + output[_ngcontent-%COMP%]{background-color:#ff3860;color:#fff}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ItY3VzdG9taXplL29iLWN1c3RvbWl6ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUdpSixzQkFBc0IsS0FBaUMsbUJBQW1CLENBQUMsR0FBb0Msd0JBQXdCLENBQUM7O0FBQUMseUJBQXlCLHVCQUF1QixDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLGlCQUFpQjs7QUFBQyxzQ0FBc0MsYUFBYSxDQUFDLFVBQVU7O0FBQUMsK0JBQStCLFNBQVM7O0FBQUMsK0VBQStFLFVBQVU7O0FBQUMsa0VBQWtFLFVBQVU7O0FBQUMsMkRBQTJELFVBQVU7O0FBQUMsNElBQTRJLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLFdBQVc7O0FBQUMsOEpBQThKLFVBQVU7O0FBQUMsMkRBQTJELG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLDJCQUEyQjs7QUFBQyxrRUFBa0Usb0JBQW9CLENBQUMsa0JBQWtCLENBQUMscUJBQXFCOztBQUFDLG1FQUFtRSxhQUFhOztBQUFDLDBFQUEwRSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsVUFBVTs7QUFBQywwQ0FBMEMsa0NBQWtDLENBQUMsK0JBQStCLENBQUMsMEJBQTBCLENBQW1ELGtCQUFrQjs7QUFBQyx5RUFBeUUsV0FBVzs7QUFBQyw0REFBNEQsV0FBVzs7QUFBQyxxREFBcUQsV0FBVzs7QUFBQyx3REFBd0QsY0FBYyxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0I7O0FBQUMsMkNBQTJDLGNBQWMsQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCOztBQUFDLG9DQUFvQyxjQUFjLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLHNCQUFzQjs7QUFBQyx5Q0FBeUMsa0JBQWtCLENBQUMsaUJBQWlCOztBQUFDLHlDQUF5QyxrQkFBa0IsQ0FBQyxpQkFBaUI7O0FBQUMsK0NBQStDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsY0FBYzs7QUFBQywyQ0FBMkMsZUFBZSxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxjQUFjOztBQUFDLG9DQUFvQyxlQUFlLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLGNBQWM7O0FBQUMsK0NBQStDLHVCQUF1QixDQUFDLGVBQWU7O0FBQUMseURBQXlELHNCQUFzQjs7QUFBQyxxREFBcUQsc0JBQXNCOztBQUFDLDhDQUE4QyxzQkFBc0I7O0FBQUMsc0RBQW9GLHFCQUFxQjs7QUFBQyxrREFBa0QscUJBQXFCOztBQUFDLDJDQUEyQyxxQkFBcUI7O0FBQUMsa0NBQWtDLFVBQVUsQ0FBQyxrQkFBa0I7O0FBQUMsd0RBQXdELGtCQUFrQixDQUE0QixrQkFBa0I7O0FBQUMsb0RBQW9ELGtCQUFrQixDQUFDLGtCQUFrQjs7QUFBQyw2Q0FBNkMsa0JBQWtCLENBQUMsa0JBQWtCOztBQUFDLGdEQUFnRCxvQ0FBb0M7O0FBQUMsK0VBQStFLFlBQVk7O0FBQUMsa0VBQWtFLFlBQVk7O0FBQUMsMkRBQTJELFlBQVk7O0FBQUMseUVBQXlFLFdBQVc7O0FBQUMsNERBQTRELFdBQVc7O0FBQUMscURBQXFELFdBQVc7O0FBQUMsK0NBQStDLFdBQVcsQ0FBQyxVQUFVOztBQUFDLDJDQUEyQyxXQUFXLENBQUMsVUFBVTs7QUFBQyxvQ0FBb0MsV0FBVyxDQUFDLFVBQVU7O0FBQUMsb0NBQW9DLFlBQVk7O0FBQUMsK0NBQStDLGtCQUFrQjs7QUFBQyxnRUFBZ0UsZUFBZSxDQUFDLG1CQUFtQjs7QUFBQyx5REFBeUQsc0NBQXNDOztBQUFDLHdGQUF3RixjQUFjOztBQUFDLDJFQUEyRSxjQUFjOztBQUFDLG9FQUFvRSxjQUFjOztBQUFDLGtGQUFrRixhQUFhOztBQUFDLHFFQUFxRSxhQUFhOztBQUFDLDhEQUE4RCxhQUFhOztBQUFDLHdEQUF3RCxhQUFhLENBQUMsWUFBWTs7QUFBQyxvREFBb0QsYUFBYSxDQUFDLFlBQVk7O0FBQUMsNkNBQTZDLGFBQWEsQ0FBQyxZQUFZOztBQUFDLDZDQUE2QyxZQUFZOztBQUFDLHdEQUF3RCxvQkFBb0I7O0FBQUMseUVBQXlFLGVBQWUsQ0FBQyxxQkFBcUI7O0FBQUMsMERBQTBELHVDQUF1Qzs7QUFBQyx5RkFBeUYsY0FBYzs7QUFBQyw0RUFBNEUsY0FBYzs7QUFBQyxxRUFBcUUsY0FBYzs7QUFBQyxtRkFBbUYsYUFBYTs7QUFBQyxzRUFBc0UsYUFBYTs7QUFBQywrREFBK0QsYUFBYTs7QUFBQyx5REFBeUQsY0FBYyxDQUFDLGFBQWE7O0FBQUMscURBQXFELGNBQWMsQ0FBQyxhQUFhOztBQUFDLDhDQUE4QyxjQUFjLENBQUMsYUFBYTs7QUFBQyw4Q0FBOEMsWUFBWTs7QUFBQyx5REFBeUQsb0JBQW9COztBQUFDLDBFQUEwRSxlQUFlLENBQUMscUJBQXFCOztBQUFDLHlEQUF5RCxzQ0FBc0M7O0FBQUMsd0ZBQXdGLGFBQWE7O0FBQUMsMkVBQTJFLGFBQWE7O0FBQUMsb0VBQW9FLGFBQWE7O0FBQUMsa0ZBQWtGLFlBQVk7O0FBQUMscUVBQXFFLFlBQVk7O0FBQUMsOERBQThELFlBQVk7O0FBQUMsd0RBQXdELGFBQWEsQ0FBQyxZQUFZOztBQUFDLG9EQUFvRCxhQUFhLENBQUMsWUFBWTs7QUFBQyw2Q0FBNkMsYUFBYSxDQUFDLFlBQVk7O0FBQUMsNkNBQTZDLFlBQVk7O0FBQUMsd0RBQXdELG1CQUFtQjs7QUFBQyx5RUFBeUUsZUFBZSxDQUFDLG9CQUFvQjs7QUFBQyxvREFBb0QseUJBQXlCOztBQUFDLGlFQUFpRSx5QkFBeUI7O0FBQUMsNkNBQTZDLHlCQUF5Qjs7QUFBQyxrREFBa0QsZUFBZTs7QUFBQyxrREFBa0QsZUFBZTs7QUFBQyxpSEFBaUgscUJBQXFCLENBQUMsYUFBYTs7QUFBQyxvREFBb0QsNEJBQTRCOztBQUFDLGlFQUFpRSw0QkFBNEI7O0FBQUMsNkNBQTZDLDRCQUE0Qjs7QUFBQyxrREFBa0Qsa0JBQWtCOztBQUFDLGtEQUFrRCxrQkFBa0I7O0FBQUMsaUhBQWlILHdCQUF3QixDQUFDLFVBQVU7O0FBQUMsb0RBQW9ELDRCQUE0Qjs7QUFBQyxpRUFBaUUsNEJBQTRCOztBQUFDLDZDQUE2Qyw0QkFBNEI7O0FBQUMsa0RBQWtELGtCQUFrQjs7QUFBQyxrREFBa0Qsa0JBQWtCOztBQUFDLGlIQUFpSCx3QkFBd0IsQ0FBQyxhQUFhOztBQUFDLG1EQUFtRCw0QkFBNEI7O0FBQUMsZ0VBQWdFLDRCQUE0Qjs7QUFBQyw0Q0FBNEMsNEJBQTRCOztBQUFDLGlEQUFpRCxrQkFBa0I7O0FBQUMsaURBQWlELGtCQUFrQjs7QUFBQywrR0FBK0csd0JBQXdCLENBQUMsYUFBYTs7QUFBQyxzREFBc0QsNEJBQTRCOztBQUFDLG1FQUFtRSw0QkFBNEI7O0FBQUMsK0NBQStDLDRCQUE0Qjs7QUFBQyxvREFBb0Qsa0JBQWtCOztBQUFDLG9EQUFvRCxrQkFBa0I7O0FBQUMscUhBQXFILHdCQUF3QixDQUFDLFVBQVU7O0FBQUMsbURBQW1ELDRCQUE0Qjs7QUFBQyxnRUFBZ0UsNEJBQTRCOztBQUFDLDRDQUE0Qyw0QkFBNEI7O0FBQUMsaURBQWlELGtCQUFrQjs7QUFBQyxpREFBaUQsa0JBQWtCOztBQUFDLCtHQUErRyx3QkFBd0IsQ0FBQyxVQUFVOztBQUFDLG1EQUFtRCw0QkFBNEI7O0FBQUMsZ0VBQWdFLDRCQUE0Qjs7QUFBQyw0Q0FBNEMsNEJBQTRCOztBQUFDLGlEQUFpRCxrQkFBa0I7O0FBQUMsaURBQWlELGtCQUFrQjs7QUFBQywrR0FBK0csd0JBQXdCLENBQUMsVUFBVTs7QUFBQyxzREFBc0QsNEJBQTRCOztBQUFDLG1FQUFtRSw0QkFBNEI7O0FBQUMsK0NBQStDLDRCQUE0Qjs7QUFBQyxvREFBb0Qsa0JBQWtCOztBQUFDLG9EQUFvRCxrQkFBa0I7O0FBQUMscUhBQXFILHdCQUF3QixDQUFDLFVBQVU7O0FBQUMsc0RBQXNELDRCQUE0Qjs7QUFBQyxtRUFBbUUsNEJBQTRCOztBQUFDLCtDQUErQyw0QkFBNEI7O0FBQUMsb0RBQW9ELGtCQUFrQjs7QUFBQyxvREFBb0Qsa0JBQWtCOztBQUFDLHFIQUFxSCx3QkFBd0IsQ0FBQyxvQkFBb0I7O0FBQUMscURBQXFELDRCQUE0Qjs7QUFBQyxrRUFBa0UsNEJBQTRCOztBQUFDLDhDQUE4Qyw0QkFBNEI7O0FBQUMsbURBQW1ELGtCQUFrQjs7QUFBQyxtREFBbUQsa0JBQWtCOztBQUFDLG1IQUFtSCx3QkFBd0IsQ0FBQyxVQUFVIiwiZmlsZSI6InNyYy9hcHAvb2ItY3VzdG9taXplL29iLWN1c3RvbWl6ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNrYngtc3R5bGUtOCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjczZGM7XG59XG5cbi5ja2J4LXN0eWxlLTggbGFiZWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG5cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluQXJvdW5ke2Zyb217LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM1OWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpfX1Aa2V5ZnJhbWVzIHNwaW5Bcm91bmR7ZnJvbXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM1OWRlZyl9fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7bWFyZ2luOjFyZW0gMDtiYWNrZ3JvdW5kOjAgMDt0b3VjaC1hY3Rpb246bm9uZX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtZnVsbHdpZHRoe2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Zm9jdXN7b3V0bGluZTowfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjpub3QoW29yaWVudD12ZXJ0aWNhbF0pOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFja3t3aWR0aDoxMDAlfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjpub3QoW29yaWVudD12ZXJ0aWNhbF0pOjotbW96LXJhbmdlLXRyYWNre3dpZHRoOjEwMCV9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyOm5vdChbb3JpZW50PXZlcnRpY2FsXSk6Oi1tcy10cmFja3t3aWR0aDoxMDAlfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjpub3QoW29yaWVudD12ZXJ0aWNhbF0pLmhhcy1vdXRwdXQrb3V0cHV0LGlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjpub3QoW29yaWVudD12ZXJ0aWNhbF0pLmhhcy1vdXRwdXQtdG9vbHRpcCtvdXRwdXR7d2lkdGg6M3JlbTtiYWNrZ3JvdW5kOiM0YTRhNGE7Ym9yZGVyLXJhZGl1czo0cHg7cGFkZGluZzouNHJlbSAuOHJlbTtmb250LXNpemU6Ljc1cmVtO2xpbmUtaGVpZ2h0Oi43NXJlbTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtjb2xvcjojZmZmO292ZXJmbG93OmhpZGRlbjtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6MjAwfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjpub3QoW29yaWVudD12ZXJ0aWNhbF0pLmhhcy1vdXRwdXQtdG9vbHRpcDpkaXNhYmxlZCtvdXRwdXQsaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyOm5vdChbb3JpZW50PXZlcnRpY2FsXSkuaGFzLW91dHB1dDpkaXNhYmxlZCtvdXRwdXR7b3BhY2l0eTouNX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6bm90KFtvcmllbnQ9dmVydGljYWxdKS5oYXMtb3V0cHV0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt3aWR0aDpjYWxjKDEwMCUgLSAoNC4ycmVtKSl9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyOm5vdChbb3JpZW50PXZlcnRpY2FsXSkuaGFzLW91dHB1dCtvdXRwdXR7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLWxlZnQ6Ljc1cmVtO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6bm90KFtvcmllbnQ9dmVydGljYWxdKS5oYXMtb3V0cHV0LXRvb2x0aXB7ZGlzcGxheTpibG9ja31pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6bm90KFtvcmllbnQ9dmVydGljYWxdKS5oYXMtb3V0cHV0LXRvb2x0aXArb3V0cHV0e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6LS4xcmVtfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcltvcmllbnQ9dmVydGljYWxdey13ZWJraXQtYXBwZWFyYW5jZTpzbGlkZXItdmVydGljYWw7LW1vei1hcHBlYXJhbmNlOnNsaWRlci12ZXJ0aWNhbDthcHBlYXJhbmNlOnNsaWRlci12ZXJ0aWNhbDstd2Via2l0LXdyaXRpbmctbW9kZTpidC1scjstbXMtd3JpdGluZy1tb2RlOmJ0LWxyO3dyaXRpbmctbW9kZTpidC1scn1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXJbb3JpZW50PXZlcnRpY2FsXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2t7aGVpZ2h0OjEwMCV9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyW29yaWVudD12ZXJ0aWNhbF06Oi1tb3otcmFuZ2UtdHJhY2t7aGVpZ2h0OjEwMCV9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyW29yaWVudD12ZXJ0aWNhbF06Oi1tcy10cmFja3toZWlnaHQ6MTAwJX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNre2N1cnNvcjpwb2ludGVyO2FuaW1hdGU6LjJzO2JveC1zaGFkb3c6MCAwIDAgIzdhN2E3YTtiYWNrZ3JvdW5kOiNkYmRiZGI7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjAgc29saWQgIzdhN2E3YX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi1tb3otcmFuZ2UtdHJhY2t7Y3Vyc29yOnBvaW50ZXI7YW5pbWF0ZTouMnM7Ym94LXNoYWRvdzowIDAgMCAjN2E3YTdhO2JhY2tncm91bmQ6I2RiZGJkYjtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MCBzb2xpZCAjN2E3YTdhfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjo6LW1zLXRyYWNre2N1cnNvcjpwb2ludGVyO2FuaW1hdGU6LjJzO2JveC1zaGFkb3c6MCAwIDAgIzdhN2E3YTtiYWNrZ3JvdW5kOiNkYmRiZGI7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjAgc29saWQgIzdhN2E3YX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi1tcy1maWxsLWxvd2Vye2JhY2tncm91bmQ6I2RiZGJkYjtib3JkZXItcmFkaXVzOjRweH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi1tcy1maWxsLXVwcGVye2JhY2tncm91bmQ6I2RiZGJkYjtib3JkZXItcmFkaXVzOjRweH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1ie2JveC1zaGFkb3c6bm9uZTtib3JkZXI6MXB4IHNvbGlkICNiNWI1YjU7Ym9yZGVyLXJhZGl1czo0cHg7YmFja2dyb3VuZDojZmZmO2N1cnNvcjpwb2ludGVyfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYntib3gtc2hhZG93Om5vbmU7Ym9yZGVyOjFweCBzb2xpZCAjYjViNWI1O2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQ6I2ZmZjtjdXJzb3I6cG9pbnRlcn1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi1tcy10aHVtYntib3gtc2hhZG93Om5vbmU7Ym9yZGVyOjFweCBzb2xpZCAjYjViNWI1O2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQ6I2ZmZjtjdXJzb3I6cG9pbnRlcn1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iey13ZWJraXQtYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtY2lyY2xlOjotd2Via2l0LXNsaWRlci10aHVtYntib3JkZXItcmFkaXVzOjI5MDQ4NnB4fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1jaXJjbGU6Oi1tb3otcmFuZ2UtdGh1bWJ7Ym9yZGVyLXJhZGl1czoyOTA0ODZweH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtY2lyY2xlOjotbXMtdGh1bWJ7Ym9yZGVyLXJhZGl1czoyOTA0ODZweH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6YWN0aXZlOjotd2Via2l0LXNsaWRlci10aHVtYnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjI1KTt0cmFuc2Zvcm06c2NhbGUoMS4yNSl9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyOmFjdGl2ZTo6LW1vei1yYW5nZS10aHVtYnt0cmFuc2Zvcm06c2NhbGUoMS4yNSl9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyOmFjdGl2ZTo6LW1zLXRodW1ie3RyYW5zZm9ybTpzY2FsZSgxLjI1KX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6ZGlzYWJsZWR7b3BhY2l0eTouNTtjdXJzb3I6bm90LWFsbG93ZWR9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyOmRpc2FibGVkOjotd2Via2l0LXNsaWRlci10aHVtYntjdXJzb3I6bm90LWFsbG93ZWQ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjpkaXNhYmxlZDo6LW1vei1yYW5nZS10aHVtYntjdXJzb3I6bm90LWFsbG93ZWQ7dHJhbnNmb3JtOnNjYWxlKDEpfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjpkaXNhYmxlZDo6LW1zLXRodW1ie2N1cnNvcjpub3QtYWxsb3dlZDt0cmFuc2Zvcm06c2NhbGUoMSl9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyOm5vdChbb3JpZW50PXZlcnRpY2FsXSl7bWluLWhlaWdodDpjYWxjKCgxcmVtICsgMnB4KSAqIDEuMjUpfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjpub3QoW29yaWVudD12ZXJ0aWNhbF0pOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFja3toZWlnaHQ6LjVyZW19aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyOm5vdChbb3JpZW50PXZlcnRpY2FsXSk6Oi1tb3otcmFuZ2UtdHJhY2t7aGVpZ2h0Oi41cmVtfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjpub3QoW29yaWVudD12ZXJ0aWNhbF0pOjotbXMtdHJhY2t7aGVpZ2h0Oi41cmVtfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcltvcmllbnQ9dmVydGljYWxdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFja3t3aWR0aDouNXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXJbb3JpZW50PXZlcnRpY2FsXTo6LW1vei1yYW5nZS10cmFja3t3aWR0aDouNXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXJbb3JpZW50PXZlcnRpY2FsXTo6LW1zLXRyYWNre3dpZHRoOi41cmVtfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWJ7aGVpZ2h0OjFyZW07d2lkdGg6MXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWJ7aGVpZ2h0OjFyZW07d2lkdGg6MXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi1tcy10aHVtYntoZWlnaHQ6MXJlbTt3aWR0aDoxcmVtfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjo6LW1zLXRodW1ie21hcmdpbi10b3A6MH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1ie21hcmdpbi10b3A6LS4yNXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXJbb3JpZW50PXZlcnRpY2FsXTo6LXdlYmtpdC1zbGlkZXItdGh1bWJ7bWFyZ2luLXRvcDphdXRvO21hcmdpbi1sZWZ0Oi0uMjVyZW19aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXNtYWxsOm5vdChbb3JpZW50PXZlcnRpY2FsXSl7bWluLWhlaWdodDpjYWxjKCguNzVyZW0gKyAycHgpICogMS4yNSl9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXNtYWxsOm5vdChbb3JpZW50PXZlcnRpY2FsXSk6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNre2hlaWdodDouMzc1cmVtfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1zbWFsbDpub3QoW29yaWVudD12ZXJ0aWNhbF0pOjotbW96LXJhbmdlLXRyYWNre2hlaWdodDouMzc1cmVtfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1zbWFsbDpub3QoW29yaWVudD12ZXJ0aWNhbF0pOjotbXMtdHJhY2t7aGVpZ2h0Oi4zNzVyZW19aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXNtYWxsW29yaWVudD12ZXJ0aWNhbF06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNre3dpZHRoOi4zNzVyZW19aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXNtYWxsW29yaWVudD12ZXJ0aWNhbF06Oi1tb3otcmFuZ2UtdHJhY2t7d2lkdGg6LjM3NXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtc21hbGxbb3JpZW50PXZlcnRpY2FsXTo6LW1zLXRyYWNre3dpZHRoOi4zNzVyZW19aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXNtYWxsOjotd2Via2l0LXNsaWRlci10aHVtYntoZWlnaHQ6Ljc1cmVtO3dpZHRoOi43NXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtc21hbGw6Oi1tb3otcmFuZ2UtdGh1bWJ7aGVpZ2h0Oi43NXJlbTt3aWR0aDouNzVyZW19aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXNtYWxsOjotbXMtdGh1bWJ7aGVpZ2h0Oi43NXJlbTt3aWR0aDouNzVyZW19aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXNtYWxsOjotbXMtdGh1bWJ7bWFyZ2luLXRvcDowfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1zbWFsbDo6LXdlYmtpdC1zbGlkZXItdGh1bWJ7bWFyZ2luLXRvcDotLjE4NzVyZW19aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXNtYWxsW29yaWVudD12ZXJ0aWNhbF06Oi13ZWJraXQtc2xpZGVyLXRodW1ie21hcmdpbi10b3A6YXV0bzttYXJnaW4tbGVmdDotLjE4NzVyZW19aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLW1lZGl1bTpub3QoW29yaWVudD12ZXJ0aWNhbF0pe21pbi1oZWlnaHQ6Y2FsYygoMS4yNXJlbSArIDJweCkgKiAxLjI1KX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbWVkaXVtOm5vdChbb3JpZW50PXZlcnRpY2FsXSk6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNre2hlaWdodDouNjI1cmVtfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1tZWRpdW06bm90KFtvcmllbnQ9dmVydGljYWxdKTo6LW1vei1yYW5nZS10cmFja3toZWlnaHQ6LjYyNXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbWVkaXVtOm5vdChbb3JpZW50PXZlcnRpY2FsXSk6Oi1tcy10cmFja3toZWlnaHQ6LjYyNXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbWVkaXVtW29yaWVudD12ZXJ0aWNhbF06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNre3dpZHRoOi42MjVyZW19aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLW1lZGl1bVtvcmllbnQ9dmVydGljYWxdOjotbW96LXJhbmdlLXRyYWNre3dpZHRoOi42MjVyZW19aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLW1lZGl1bVtvcmllbnQ9dmVydGljYWxdOjotbXMtdHJhY2t7d2lkdGg6LjYyNXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbWVkaXVtOjotd2Via2l0LXNsaWRlci10aHVtYntoZWlnaHQ6MS4yNXJlbTt3aWR0aDoxLjI1cmVtfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1tZWRpdW06Oi1tb3otcmFuZ2UtdGh1bWJ7aGVpZ2h0OjEuMjVyZW07d2lkdGg6MS4yNXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbWVkaXVtOjotbXMtdGh1bWJ7aGVpZ2h0OjEuMjVyZW07d2lkdGg6MS4yNXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbWVkaXVtOjotbXMtdGh1bWJ7bWFyZ2luLXRvcDowfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1tZWRpdW06Oi13ZWJraXQtc2xpZGVyLXRodW1ie21hcmdpbi10b3A6LS4zMTI1cmVtfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1tZWRpdW1bb3JpZW50PXZlcnRpY2FsXTo6LXdlYmtpdC1zbGlkZXItdGh1bWJ7bWFyZ2luLXRvcDphdXRvO21hcmdpbi1sZWZ0Oi0uMzEyNXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbGFyZ2U6bm90KFtvcmllbnQ9dmVydGljYWxdKXttaW4taGVpZ2h0OmNhbGMoKDEuNXJlbSArIDJweCkgKiAxLjI1KX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbGFyZ2U6bm90KFtvcmllbnQ9dmVydGljYWxdKTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2t7aGVpZ2h0Oi43NXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbGFyZ2U6bm90KFtvcmllbnQ9dmVydGljYWxdKTo6LW1vei1yYW5nZS10cmFja3toZWlnaHQ6Ljc1cmVtfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1sYXJnZTpub3QoW29yaWVudD12ZXJ0aWNhbF0pOjotbXMtdHJhY2t7aGVpZ2h0Oi43NXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbGFyZ2Vbb3JpZW50PXZlcnRpY2FsXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2t7d2lkdGg6Ljc1cmVtfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1sYXJnZVtvcmllbnQ9dmVydGljYWxdOjotbW96LXJhbmdlLXRyYWNre3dpZHRoOi43NXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbGFyZ2Vbb3JpZW50PXZlcnRpY2FsXTo6LW1zLXRyYWNre3dpZHRoOi43NXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbGFyZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1ie2hlaWdodDoxLjVyZW07d2lkdGg6MS41cmVtfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1sYXJnZTo6LW1vei1yYW5nZS10aHVtYntoZWlnaHQ6MS41cmVtO3dpZHRoOjEuNXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbGFyZ2U6Oi1tcy10aHVtYntoZWlnaHQ6MS41cmVtO3dpZHRoOjEuNXJlbX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbGFyZ2U6Oi1tcy10aHVtYnttYXJnaW4tdG9wOjB9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWxhcmdlOjotd2Via2l0LXNsaWRlci10aHVtYnttYXJnaW4tdG9wOi0uMzc1cmVtfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1sYXJnZVtvcmllbnQ9dmVydGljYWxdOjotd2Via2l0LXNsaWRlci10aHVtYnttYXJnaW4tdG9wOmF1dG87bWFyZ2luLWxlZnQ6LS4zNzVyZW19aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXdoaXRlOjotbW96LXJhbmdlLXRyYWNre2JhY2tncm91bmQ6I2ZmZiFpbXBvcnRhbnR9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXdoaXRlOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFja3tiYWNrZ3JvdW5kOiNmZmYhaW1wb3J0YW50fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy13aGl0ZTo6LW1zLXRyYWNre2JhY2tncm91bmQ6I2ZmZiFpbXBvcnRhbnR9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXdoaXRlOjotbXMtZmlsbC1sb3dlcntiYWNrZ3JvdW5kOiNmZmZ9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXdoaXRlOjotbXMtZmlsbC11cHBlcntiYWNrZ3JvdW5kOiNmZmZ9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXdoaXRlIC5oYXMtb3V0cHV0LXRvb2x0aXArb3V0cHV0LGlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy13aGl0ZS5oYXMtb3V0cHV0K291dHB1dHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzBhMGEwYX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtYmxhY2s6Oi1tb3otcmFuZ2UtdHJhY2t7YmFja2dyb3VuZDojMGEwYTBhIWltcG9ydGFudH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtYmxhY2s6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNre2JhY2tncm91bmQ6IzBhMGEwYSFpbXBvcnRhbnR9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWJsYWNrOjotbXMtdHJhY2t7YmFja2dyb3VuZDojMGEwYTBhIWltcG9ydGFudH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtYmxhY2s6Oi1tcy1maWxsLWxvd2Vye2JhY2tncm91bmQ6IzBhMGEwYX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtYmxhY2s6Oi1tcy1maWxsLXVwcGVye2JhY2tncm91bmQ6IzBhMGEwYX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtYmxhY2sgLmhhcy1vdXRwdXQtdG9vbHRpcCtvdXRwdXQsaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWJsYWNrLmhhcy1vdXRwdXQrb3V0cHV0e2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtjb2xvcjojZmZmfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1saWdodDo6LW1vei1yYW5nZS10cmFja3tiYWNrZ3JvdW5kOiNmNWY1ZjUhaW1wb3J0YW50fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1saWdodDo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2t7YmFja2dyb3VuZDojZjVmNWY1IWltcG9ydGFudH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbGlnaHQ6Oi1tcy10cmFja3tiYWNrZ3JvdW5kOiNmNWY1ZjUhaW1wb3J0YW50fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1saWdodDo6LW1zLWZpbGwtbG93ZXJ7YmFja2dyb3VuZDojZjVmNWY1fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1saWdodDo6LW1zLWZpbGwtdXBwZXJ7YmFja2dyb3VuZDojZjVmNWY1fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1saWdodCAuaGFzLW91dHB1dC10b29sdGlwK291dHB1dCxpbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbGlnaHQuaGFzLW91dHB1dCtvdXRwdXR7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMzNjM2MzZ9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWRhcms6Oi1tb3otcmFuZ2UtdHJhY2t7YmFja2dyb3VuZDojMzYzNjM2IWltcG9ydGFudH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtZGFyazo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2t7YmFja2dyb3VuZDojMzYzNjM2IWltcG9ydGFudH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtZGFyazo6LW1zLXRyYWNre2JhY2tncm91bmQ6IzM2MzYzNiFpbXBvcnRhbnR9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWRhcms6Oi1tcy1maWxsLWxvd2Vye2JhY2tncm91bmQ6IzM2MzYzNn1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtZGFyazo6LW1zLWZpbGwtdXBwZXJ7YmFja2dyb3VuZDojMzYzNjM2fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1kYXJrIC5oYXMtb3V0cHV0LXRvb2x0aXArb3V0cHV0LGlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1kYXJrLmhhcy1vdXRwdXQrb3V0cHV0e2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtjb2xvcjojZjVmNWY1fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1wcmltYXJ5OjotbW96LXJhbmdlLXRyYWNre2JhY2tncm91bmQ6IzAwZDFiMiFpbXBvcnRhbnR9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXByaW1hcnk6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNre2JhY2tncm91bmQ6IzAwZDFiMiFpbXBvcnRhbnR9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXByaW1hcnk6Oi1tcy10cmFja3tiYWNrZ3JvdW5kOiMwMGQxYjIhaW1wb3J0YW50fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1wcmltYXJ5OjotbXMtZmlsbC1sb3dlcntiYWNrZ3JvdW5kOiMwMGQxYjJ9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXByaW1hcnk6Oi1tcy1maWxsLXVwcGVye2JhY2tncm91bmQ6IzAwZDFiMn1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtcHJpbWFyeSAuaGFzLW91dHB1dC10b29sdGlwK291dHB1dCxpbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtcHJpbWFyeS5oYXMtb3V0cHV0K291dHB1dHtiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjI7Y29sb3I6I2ZmZn1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbGluazo6LW1vei1yYW5nZS10cmFja3tiYWNrZ3JvdW5kOiMzMjczZGMhaW1wb3J0YW50fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1saW5rOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFja3tiYWNrZ3JvdW5kOiMzMjczZGMhaW1wb3J0YW50fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1saW5rOjotbXMtdHJhY2t7YmFja2dyb3VuZDojMzI3M2RjIWltcG9ydGFudH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbGluazo6LW1zLWZpbGwtbG93ZXJ7YmFja2dyb3VuZDojMzI3M2RjfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1saW5rOjotbXMtZmlsbC11cHBlcntiYWNrZ3JvdW5kOiMzMjczZGN9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWxpbmsgLmhhcy1vdXRwdXQtdG9vbHRpcCtvdXRwdXQsaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWxpbmsuaGFzLW91dHB1dCtvdXRwdXR7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2NvbG9yOiNmZmZ9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWluZm86Oi1tb3otcmFuZ2UtdHJhY2t7YmFja2dyb3VuZDojMjA5Y2VlIWltcG9ydGFudH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtaW5mbzo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2t7YmFja2dyb3VuZDojMjA5Y2VlIWltcG9ydGFudH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtaW5mbzo6LW1zLXRyYWNre2JhY2tncm91bmQ6IzIwOWNlZSFpbXBvcnRhbnR9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWluZm86Oi1tcy1maWxsLWxvd2Vye2JhY2tncm91bmQ6IzIwOWNlZX1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtaW5mbzo6LW1zLWZpbGwtdXBwZXJ7YmFja2dyb3VuZDojMjA5Y2VlfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1pbmZvIC5oYXMtb3V0cHV0LXRvb2x0aXArb3V0cHV0LGlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1pbmZvLmhhcy1vdXRwdXQrb3V0cHV0e2JhY2tncm91bmQtY29sb3I6IzIwOWNlZTtjb2xvcjojZmZmfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1zdWNjZXNzOjotbW96LXJhbmdlLXRyYWNre2JhY2tncm91bmQ6IzIzZDE2MCFpbXBvcnRhbnR9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXN1Y2Nlc3M6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNre2JhY2tncm91bmQ6IzIzZDE2MCFpbXBvcnRhbnR9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXN1Y2Nlc3M6Oi1tcy10cmFja3tiYWNrZ3JvdW5kOiMyM2QxNjAhaW1wb3J0YW50fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1zdWNjZXNzOjotbXMtZmlsbC1sb3dlcntiYWNrZ3JvdW5kOiMyM2QxNjB9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXN1Y2Nlc3M6Oi1tcy1maWxsLXVwcGVye2JhY2tncm91bmQ6IzIzZDE2MH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtc3VjY2VzcyAuaGFzLW91dHB1dC10b29sdGlwK291dHB1dCxpbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtc3VjY2Vzcy5oYXMtb3V0cHV0K291dHB1dHtiYWNrZ3JvdW5kLWNvbG9yOiMyM2QxNjA7Y29sb3I6I2ZmZn1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtd2FybmluZzo6LW1vei1yYW5nZS10cmFja3tiYWNrZ3JvdW5kOiNmZmRkNTchaW1wb3J0YW50fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy13YXJuaW5nOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFja3tiYWNrZ3JvdW5kOiNmZmRkNTchaW1wb3J0YW50fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy13YXJuaW5nOjotbXMtdHJhY2t7YmFja2dyb3VuZDojZmZkZDU3IWltcG9ydGFudH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtd2FybmluZzo6LW1zLWZpbGwtbG93ZXJ7YmFja2dyb3VuZDojZmZkZDU3fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy13YXJuaW5nOjotbXMtZmlsbC11cHBlcntiYWNrZ3JvdW5kOiNmZmRkNTd9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXdhcm5pbmcgLmhhcy1vdXRwdXQtdG9vbHRpcCtvdXRwdXQsaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXdhcm5pbmcuaGFzLW91dHB1dCtvdXRwdXR7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3O2NvbG9yOnJnYmEoMCwwLDAsLjcpfWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1kYW5nZXI6Oi1tb3otcmFuZ2UtdHJhY2t7YmFja2dyb3VuZDojZmYzODYwIWltcG9ydGFudH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtZGFuZ2VyOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFja3tiYWNrZ3JvdW5kOiNmZjM4NjAhaW1wb3J0YW50fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1kYW5nZXI6Oi1tcy10cmFja3tiYWNrZ3JvdW5kOiNmZjM4NjAhaW1wb3J0YW50fWlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1kYW5nZXI6Oi1tcy1maWxsLWxvd2Vye2JhY2tncm91bmQ6I2ZmMzg2MH1pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtZGFuZ2VyOjotbXMtZmlsbC11cHBlcntiYWNrZ3JvdW5kOiNmZjM4NjB9aW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWRhbmdlciAuaGFzLW91dHB1dC10b29sdGlwK291dHB1dCxpbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtZGFuZ2VyLmhhcy1vdXRwdXQrb3V0cHV0e2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MDtjb2xvcjojZmZmfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObCustomizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ob-customize',
                templateUrl: './ob-customize.component.html',
                styleUrls: ['./ob-customize.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_1__["ObserverService"] }, { type: _ng_web_apis_geolocation__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ob-screen-names/ob-screen-names.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ob-screen-names/ob-screen-names.component.ts ***!
  \**************************************************************/
/*! exports provided: ObScreenNamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObScreenNamesComponent", function() { return ObScreenNamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../games.service */ "./src/app/games.service.ts");
/* harmony import */ var _ping_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ping.service */ "./src/app/ping.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ObScreenNamesComponent_div_0_div_1_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", name_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](name_r6.name);
} }
function ObScreenNamesComponent_div_0_div_1_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObScreenNamesComponent_div_0_div_1_div_21_div_1_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const game_r8 = ctx.$implicit; const screenName_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.remove(screenName_r2.id, game_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r8.name);
} }
function ObScreenNamesComponent_div_0_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ObScreenNamesComponent_div_0_div_1_div_21_div_1_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const screenName_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", screenName_r2.games);
} }
function ObScreenNamesComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObScreenNamesComponent_div_0_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const screenName_r2 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.removeScreenName(screenName_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Screen Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ObScreenNamesComponent_div_0_div_1_Template_input_keyup_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const screenName_r2 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.unChange($event, screenName_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ObScreenNamesComponent_div_0_div_1_Template_input_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const screenName_r2 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.onChange($event, screenName_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "datalist", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ObScreenNamesComponent_div_0_div_1_option_18_Template, 2, 2, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ObScreenNamesComponent_div_0_div_1_div_21_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const screenName_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", screenName_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "un", screenName_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.gameNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](screenName_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", screenName_r2.games);
} }
function ObScreenNamesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ObScreenNamesComponent_div_0_div_1_Template, 23, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.appData.screenNames);
} }
class ObScreenNamesComponent {
    constructor(observerService, gamesService, ping) {
        this.observerService = observerService;
        this.gamesService = gamesService;
        this.ping = ping;
        this.gameNames = [];
        this.nextID = 0;
        this.observerService.getMessage().subscribe(msg => {
            this.appData = msg;
        });
        this.ping.pingStream.subscribe(pingVal => {
            if (this.appData) {
                this.appData.onboardingTempProfile.ping = pingVal;
            }
        });
        this.gamesService.getNames();
        this.gamesService.gameNames.asObservable().subscribe(gameNames => {
            this.gameNames = gameNames;
        });
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    addNew() {
        //this.appData.profile.screenNames[]
        this.appData.onboardingScreenNamesValid = false;
        this.appData.screenNames.push({ id: this.nextID, name: '', games: [], error: '' });
        this.updateObserver();
        this.nextID++;
    }
    removeScreenName(id) {
        this.appData.screenNames = this.appData.screenNames.filter(obj => {
            return obj.id !== id;
        });
        this.updateObserver();
    }
    unChange(event, screenNameID) {
        var index = 0;
        this.appData.screenNames.forEach(obj => {
            if (screenNameID === obj.id) {
                this.appData.screenNames[index].name = event.target.value;
                if (event.target.value.length > 3) {
                    this.appData.screenNames[index].error = '';
                    let validNames = this.appData.screenNames.filter(sName => sName.name.length > 3);
                    var dupe = false;
                    this.appData.screenNames.forEach(sName1 => {
                        this.appData.screenNames.forEach(sName2 => {
                            if (sName1.id !== sName2.id && sName1.name === sName2.name) {
                                dupe = true;
                                this.appData.screenNames[index].error = 'Must be unique.';
                            }
                        });
                    });
                    if (!dupe && validNames.length == this.appData.screenNames.length) {
                        this.appData.onboardingScreenNamesValid = true;
                    }
                    else {
                        this.appData.onboardingScreenNamesValid = false;
                    }
                    this.updateObserver();
                }
                else {
                    this.appData.screenNames[index].error = 'Must be > 3 characters.';
                    this.appData.onboardingScreenNamesValid = false;
                    this.updateObserver();
                }
            }
            index++;
        });
        this.updateObserver();
    }
    onChange(event, screenNameID) {
        let newItem = this.gameNames.find(game => game.name === event.target.value);
        if (newItem) {
            var index = 0;
            this.appData.screenNames.forEach(obj => {
                if (screenNameID === obj.id) {
                    if (!obj.games.find(gameName => event.target.value === gameName.name)) {
                        this.appData.screenNames[index].games.push(newItem);
                    }
                }
                index++;
            });
        }
        this.updateObserver();
        event.target.value = '';
    }
    remove(screenNameID, gameID) {
        var index = 0;
        this.appData.screenNames.forEach(obj => {
            if (screenNameID === obj.id) {
                this.appData.screenNames[index].games = this.appData.screenNames[index].games.filter(gameName => {
                    return gameName.id !== gameID;
                });
            }
            index++;
        });
        this.updateObserver();
    }
}
ObScreenNamesComponent.ɵfac = function ObScreenNamesComponent_Factory(t) { return new (t || ObScreenNamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_1__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ping_service__WEBPACK_IMPORTED_MODULE_3__["PingService"])); };
ObScreenNamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ObScreenNamesComponent, selectors: [["app-ob-screen-names"]], decls: 4, vars: 1, consts: [["class", "has-text-centered", 4, "ngIf"], [1, "has-text-centered"], [1, "button", "is-link", 3, "click"], [4, "ngFor", "ngForOf"], [1, "columns", "is-centered", "is-vcentered"], [1, "column", "is-2"], [1, "button", "is-danger", 2, "margin-top", "1.5rem", 3, "click"], [1, "icon", "is-medium"], [1, "fas", "fa-trash-alt"], [1, "column", "is-5"], [1, "field"], [1, "label"], [1, "control"], ["type", "text", "placeholder", "username", 1, "input", 3, "value", "name", "keyup"], ["un", ""], ["list", "gameList", "type", "text", "placeholder", "start typing..", 1, "input", 3, "change"], ["id", "gameList"], [3, "value", 4, "ngFor", "ngForOf"], [1, "help", "is-danger"], ["class", "field is-grouped is-grouped-multiline", 4, "ngIf"], [3, "value"], [1, "field", "is-grouped", "is-grouped-multiline"], ["class", "control", 4, "ngFor", "ngForOf"], [1, "tags", "has-addons"], [1, "tag", "is-info"], [1, "tag", "is-delete", 3, "click"]], template: function ObScreenNamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ObScreenNamesComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObScreenNamesComponent_Template_button_click_2_listener() { return ctx.addNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add a Screen Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appData.screenNames.length != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29iLXNjcmVlbi1uYW1lcy9vYi1zY3JlZW4tbmFtZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObScreenNamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ob-screen-names',
                templateUrl: './ob-screen-names.component.html',
                styleUrls: ['./ob-screen-names.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_1__["ObserverService"] }, { type: _games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"] }, { type: _ping_service__WEBPACK_IMPORTED_MODULE_3__["PingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/observer.service.ts":
/*!*************************************!*\
  !*** ./src/app/observer.service.ts ***!
  \*************************************/
/*! exports provided: ObserverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserverService", function() { return ObserverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-data */ "./src/app/app-data.ts");




class ObserverService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _app_data__WEBPACK_IMPORTED_MODULE_2__["AppData"]());
    }
    sendMessage(message) {
        this.subject.next(message);
    }
    clearMessage() {
        this.subject.next(new _app_data__WEBPACK_IMPORTED_MODULE_2__["AppData"]());
    }
    getMessage() {
        return this.subject.asObservable();
    }
    getMessageOnce() {
        return this.subject.value;
    }
}
ObserverService.ɵfac = function ObserverService_Factory(t) { return new (t || ObserverService)(); };
ObserverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ObserverService, factory: ObserverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObserverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/onboarding-modal/onboarding-modal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/onboarding-modal/onboarding-modal.component.ts ***!
  \****************************************************************/
/*! exports provided: OnboardingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingModalComponent", function() { return OnboardingModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _onboarding_steps_onboarding_steps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../onboarding-steps/onboarding-steps.component */ "./src/app/onboarding-steps/onboarding-steps.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ob_basic_ob_basic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ob-basic/ob-basic.component */ "./src/app/ob-basic/ob-basic.component.ts");
/* harmony import */ var _ob_screen_names_ob_screen_names_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ob-screen-names/ob-screen-names.component */ "./src/app/ob-screen-names/ob-screen-names.component.ts");
/* harmony import */ var _ob_customize_ob_customize_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ob-customize/ob-customize.component */ "./src/app/ob-customize/ob-customize.component.ts");









function OnboardingModalComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ob-basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OnboardingModalComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ob-screen-names");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OnboardingModalComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ob-customize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class OnboardingModalComponent {
    constructor(observerService, http) {
        this.observerService = observerService;
        this.http = http;
        this.firstPage = 0;
        this.lastPage = 2;
        this.observerService.getMessage().subscribe(msg => {
            this.appData = msg;
        });
    }
    ngOnInit() {
    }
    leftButtonText() {
        return 'Back';
    }
    rightButtonText() {
        if (this.appData.onboardingPage < this.lastPage)
            return 'Next';
        return 'Done';
    }
    leftButtonClick() {
        if (this.appData.onboardingPage > this.firstPage) {
            this.appData.onboardingPage--;
            this.observerService.sendMessage(this.appData);
        }
    }
    rightButtonClick() {
        if (this.appData.onboardingPage < this.lastPage) {
            this.appData.onboardingPage++;
        }
        else {
            let url = 'https://cs1530group11graph.uc.r.appspot.com/user/' + this.appData.profile.id;
            var body = this.appData.onboardingTempProfile;
            body.screenNames = this.appData.screenNames.map(nameObj => JSON.stringify(nameObj));
            this.http.post(url, body)
                .toPromise()
                .then(response => {
                this.appData.isOnboarded = true;
                this.observerService.sendMessage(this.appData);
            })
                .catch(err => {
                console.error(err);
            });
        }
        this.observerService.sendMessage(this.appData);
    }
    rightButtonDisabled() {
        return (this.appData.onboardingPage == 0 && !this.appData.onboardingBasicsValid) ||
            (this.appData.onboardingPage == 1 && !this.appData.onboardingScreenNamesValid);
    }
}
OnboardingModalComponent.ɵfac = function OnboardingModalComponent_Factory(t) { return new (t || OnboardingModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_1__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
OnboardingModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnboardingModalComponent, selectors: [["app-onboarding-modal"]], decls: 15, vars: 7, consts: [[1, "modal-background"], [1, "modal-card", 2, "margin", "0px"], [1, "modal-card-head"], [1, "modal-card-title"], [1, "modal-card-body", "has-text-dark"], ["style", "margin-top: 2.0rem;", 4, "ngIf"], [1, "modal-card-foot"], [1, "button", 3, "disabled", "click"], [1, "button", "is-success", 3, "disabled", "click"], [2, "margin-top", "2.0rem"]], template: function OnboardingModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-onboarding-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OnboardingModalComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OnboardingModalComponent_div_8_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OnboardingModalComponent_div_9_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnboardingModalComponent_Template_button_click_11_listener() { return ctx.leftButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnboardingModalComponent_Template_button_click_13_listener() { return ctx.rightButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appData.onboardingPage == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appData.onboardingPage == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appData.onboardingPage == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.appData.onboardingPage <= ctx.firstPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.leftButtonText());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.rightButtonDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rightButtonText());
    } }, directives: [_onboarding_steps_onboarding_steps_component__WEBPACK_IMPORTED_MODULE_3__["OnboardingStepsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ob_basic_ob_basic_component__WEBPACK_IMPORTED_MODULE_5__["ObBasicComponent"], _ob_screen_names_ob_screen_names_component__WEBPACK_IMPORTED_MODULE_6__["ObScreenNamesComponent"], _ob_customize_ob_customize_component__WEBPACK_IMPORTED_MODULE_7__["ObCustomizeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmRpbmctbW9kYWwvb25ib2FyZGluZy1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnboardingModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-onboarding-modal',
                templateUrl: './onboarding-modal.component.html',
                styleUrls: ['./onboarding-modal.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_1__["ObserverService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/onboarding-steps/onboarding-steps.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/onboarding-steps/onboarding-steps.component.ts ***!
  \****************************************************************/
/*! exports provided: OnboardingStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingStepsComponent", function() { return OnboardingStepsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0, a1) { return { "is-active": a0, "has-gaps": a1 }; };
class OnboardingStepsComponent {
    constructor(observerService) {
        this.observerService = observerService;
        this.firstPage = 0;
        this.lastPage = 2;
        this.observerService.getMessage().subscribe(msg => {
            this.appData = msg;
        });
    }
    ngOnInit() {
    }
}
OnboardingStepsComponent.ɵfac = function OnboardingStepsComponent_Factory(t) { return new (t || OnboardingStepsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_1__["ObserverService"])); };
OnboardingStepsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnboardingStepsComponent, selectors: [["app-onboarding-steps"]], decls: 24, vars: 12, consts: [[1, "steps", "is-narrow", "is-medium", "is-centered", "has-content-centered"], [1, "steps-segment", 3, "ngClass"], [1, "has-text-dark"], [1, "steps-marker"], [1, "icon"], [1, "fa", "fa-user"], [1, "steps-content"], [1, "heading"], [1, "fa", "fa-at"], [1, "fa", "fa-user-cog"]], template: function OnboardingStepsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The Basics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Screen Names");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Customize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.appData.onboardingPage == 0, ctx.appData.onboardingPage == ctx.firstPage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx.appData.onboardingPage == 1, ctx.appData.onboardingPage <= 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx.appData.onboardingPage == 2, ctx.appData.onboardingPage <= 2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmRpbmctc3RlcHMvb25ib2FyZGluZy1zdGVwcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnboardingStepsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-onboarding-steps',
                templateUrl: './onboarding-steps.component.html',
                styleUrls: ['./onboarding-steps.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_1__["ObserverService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ping.service.ts":
/*!*********************************!*\
  !*** ./src/app/ping.service.ts ***!
  \*********************************/
/*! exports provided: PingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PingService", function() { return PingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PingService {
    constructor(http) {
        this.http = http;
        this.pingStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ping = 0;
        this.url = "https://cors-test.appspot.com/test";
        let timeStart = performance.now();
        this.http.get(this.url)
            .subscribe((data) => {
            let timeEnd = performance.now();
            let ping = timeEnd - timeStart;
            this.ping = ping;
            this.pingStream.next(ping);
        });
    }
}
PingService.ɵfac = function PingService_Factory(t) { return new (t || PingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PingService, factory: PingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/platform.enum.ts":
/*!**********************************!*\
  !*** ./src/app/platform.enum.ts ***!
  \**********************************/
/*! exports provided: Platform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
var Platform;
(function (Platform) {
    Platform["NintendoeShop"] = "Nintendo eShop";
    Platform["Stadia"] = "Stadia";
    Platform["DVDPlayer"] = "DVD Player";
    Platform["AcornElectron"] = "Acorn Electron";
    Platform["SegaPico"] = "Sega Pico";
    Platform["XboxSeriesX"] = "Xbox Series X";
    Platform["PCMicrosoftWindows"] = "PC (Microsoft Windows)";
    Platform["FamilyComputerDiskSystem"] = "Family Computer Disk System";
    Platform["PlayStation2"] = "PlayStation 2";
    Platform["ColecoVision"] = "ColecoVision";
    Platform["CommodorePlus4"] = "Commodore Plus/4";
    Platform["SteamVR"] = "SteamVR";
    Platform["PlayStationVR"] = "PlayStation VR";
    Platform["GoogleStadia"] = "Google Stadia";
    Platform["BlurayPlayer"] = "Blu-ray Player";
    Platform["WonderSwanColor"] = "WonderSwan Color";
    Platform["PhilipsVideopacG7000"] = "Philips Videopac G7000";
    Platform["ExidySorcerer"] = "Exidy Sorcerer";
    Platform["NeoGeoCD"] = "Neo Geo CD";
    Platform["PC50XFamily"] = "PC-50X Family";
    Platform["TexasInstrumentsTI99"] = "Texas Instruments TI-99";
    Platform["AmstradCPC"] = "Amstrad CPC";
    Platform["MSX"] = "MSX";
    Platform["iOS"] = "iOS";
    Platform["AY38710"] = "AY-3-8710";
    Platform["TapwaveZodiac"] = "Tapwave Zodiac";
    Platform["AY38605"] = "AY-3-8605";
    Platform["ThomsonMO5"] = "Thomson MO5";
    Platform["Sol20"] = "Sol-20";
    Platform["AY38606"] = "AY-3-8606";
    Platform["AY38607"] = "AY-3-8607";
    Platform["PC98"] = "PC-98";
    Platform["HyperNeoGeo64"] = "Hyper Neo Geo 64";
    Platform["CommodoreCDTV"] = "Commodore CDTV";
    Platform["HP3000"] = "HP 3000";
    Platform["Odyssey"] = "Odyssey";
    Platform["CommodorePET"] = "Commodore PET";
    Platform["SegaGameGear"] = "Sega Game Gear";
    Platform["Daydream"] = "Daydream";
    Platform["XboxLiveArcade"] = "Xbox Live Arcade";
    Platform["VirtualConsoleNintendo"] = "Virtual Console (Nintendo)";
    Platform["AppleIIGS"] = "Apple IIGS";
    Platform["SwanCrystal"] = "SwanCrystal";
    Platform["Xbox"] = "Xbox";
    Platform["PlayStationNetwork"] = "PlayStation Network";
    Platform["AtariJaguar"] = "Atari Jaguar";
    Platform["Atari7800"] = "Atari 7800";
    Platform["MSX2"] = "MSX2";
    Platform["Atari8bit"] = "Atari 8-bit";
    Platform["VirtualBoy"] = "Virtual Boy";
    Platform["DECGT40"] = "DEC GT40";
    Platform["PDP8"] = "PDP-8";
    Platform["FairchildChannelF"] = "Fairchild Channel F";
    Platform["TRS80"] = "TRS-80";
    Platform["PCEngineSuperGrafx"] = "PC Engine SuperGrafx";
    Platform["FerrantiNimrodComputer"] = "Ferranti Nimrod Computer";
    Platform["Turbografx16PCEngineCD"] = "Turbografx-16/PC Engine CD";
    Platform["Dragon3264"] = "Dragon 32/64";
    Platform["TatungEinstein"] = "Tatung Einstein";
    Platform["ThreeDOInteractiveMultiplayer"] = "3DO Interactive Multiplayer";
    Platform["NintendoDSi"] = "Nintendo DSi";
    Platform["AmstradPCW"] = "Amstrad PCW";
    Platform["Pok\u00E9monmini"] = "Pok\u00E9mon mini";
    Platform["PDP11"] = "PDP-11";
    Platform["SuperFamicom"] = "Super Famicom";
    Platform["Vectrex"] = "Vectrex";
    Platform["NeoGeoPocket"] = "Neo Geo Pocket";
    Platform["NintendoSwitch"] = "Nintendo Switch";
    Platform["AmazonFireTV"] = "Amazon Fire TV";
    Platform["VC4000"] = "VC 4000";
    Platform["One292AdvancedProgrammableVideoSystem"] = "1292 Advanced Programmable Video System";
    Platform["DonnerModel30"] = "Donner Model 30";
    Platform["PDP1"] = "PDP-1";
    Platform["PC8801"] = "PC-8801";
    Platform["Microvision"] = "Microvision";
    Platform["Microcomputer"] = "Microcomputer";
    Platform["PCDOS"] = "PC DOS";
    Platform["Dreamcast"] = "Dreamcast";
    Platform["ZXSpectrum"] = "ZX Spectrum";
    Platform["Sega32X"] = "Sega 32X";
    Platform["WiiU"] = "Wii U";
    Platform["Nintendo3DS"] = "Nintendo 3DS";
    Platform["AY38500"] = "AY-3-8500";
    Platform["SharpX68000"] = "Sharp X68000";
    Platform["PlayStation5"] = "PlayStation 5";
    Platform["Analogueelectronics"] = "Analogue electronics";
    Platform["AY38610"] = "AY-3-8610";
    Platform["AY38760"] = "AY-3-8760";
    Platform["AmigaCD32"] = "Amiga CD32";
    Platform["Nintendo64"] = "Nintendo 64";
    Platform["SDSSigma7"] = "SDS Sigma 7";
    Platform["PDP7"] = "PDP-7";
    Platform["CDCCyber70"] = "CDC Cyber 70";
    Platform["AcornArchimedes"] = "Acorn Archimedes";
    Platform["TRS80ColorComputer"] = "TRS-80 Color Computer";
    Platform["EDSAC"] = "EDSAC";
    Platform["HP2100"] = "HP 2100";
    Platform["NintendoEntertainmentSystemNES"] = "Nintendo Entertainment System (NES)";
    Platform["Amiga"] = "Amiga";
    Platform["GameBoyAdvance"] = "Game Boy Advance";
    Platform["SegaMegaDriveGenesis"] = "Sega Mega Drive/Genesis";
    Platform["Atari2600"] = "Atari 2600";
    Platform["SegaMasterSystem"] = "Sega Master System";
    Platform["Webbrowser"] = "Web browser";
    Platform["SharpX1"] = "Sharp X1";
    Platform["SegaCD"] = "Sega CD";
    Platform["OnLiveGameSystem"] = "OnLive Game System";
    Platform["FamilyComputerFAMICOM"] = "Family Computer (FAMICOM)";
    Platform["AY38603"] = "AY-3-8603";
    Platform["PhilipsCDi"] = "Philips CD-i";
    Platform["NeoGeoPocketColor"] = "Neo Geo Pocket Color";
    Platform["CallAComputerTimeSharedMainframeComputerSystem"] = "Call-A-Computer time-shared mainframe computer system";
    Platform["PLATO"] = "PLATO";
    Platform["Zeebo"] = "Zeebo";
    Platform["PCFX"] = "PC-FX";
    Platform["GameBoyColor"] = "Game Boy Color";
    Platform["Nuon"] = "Nuon";
    Platform["Playdia"] = "Playdia";
    Platform["Commodore16"] = "Commodore 16";
    Platform["AtariLynx"] = "Atari Lynx";
    Platform["AtariSTSTE"] = "Atari ST/STE";
    Platform["NintendoPlayStation"] = "Nintendo PlayStation";
    Platform["ImlacPDS1"] = "Imlac PDS-1";
    Platform["Evercade"] = "Evercade";
    Platform["GameAndWatch"] = "Game & Watch";
    Platform["FM7"] = "FM-7";
    Platform["NintendoDS"] = "Nintendo DS";
    Platform["Satellaview"] = "Satellaview";
    Platform["SuperNintendoEntertainmentSystemSNES"] = "Super Nintendo Entertainment System (SNES)";
    Platform["Mac"] = "Mac";
    Platform["CommodoreC64128"] = "Commodore C64/128";
    Platform["PlayStation3"] = "PlayStation 3";
    Platform["NintendoGameCube"] = "Nintendo GameCube";
    Platform["Xbox360"] = "Xbox 360";
    Platform["PlayStationPortable"] = "PlayStation Portable";
    Platform["BlackBerryOS"] = "BlackBerry OS";
    Platform["TurboGrafx16PCEngine"] = "TurboGrafx-16/PC Engine";
    Platform["NECPC6000Series"] = "NEC PC-6000 Series";
    Platform["OculusVR"] = "Oculus VR";
    Platform["FMTowns"] = "FM Towns";
    Platform["SegaSaturn"] = "Sega Saturn";
    Platform["NGage"] = "N-Gage";
    Platform["Android"] = "Android";
    Platform["PlayStationVita"] = "PlayStation Vita";
    Platform["XboxOne"] = "Xbox One";
    Platform["PlayStation4"] = "PlayStation 4";
    Platform["Intellivision"] = "Intellivision";
    Platform["Atari5200"] = "Atari 5200";
    Platform["BBCMicrocomputerSystem"] = "BBC Microcomputer System";
    Platform["SG1000"] = "SG-1000";
    Platform["NeoGeoAES"] = "Neo Geo AES";
    Platform["BallyAstrocade"] = "Bally Astrocade";
    Platform["WindowsMixedReality"] = "Windows Mixed Reality";
    Platform["Mobile"] = "Mobile";
    Platform["Arcade"] = "Arcade";
    Platform["Wii"] = "Wii";
    Platform["Linux"] = "Linux";
    Platform["PlayStation"] = "PlayStation";
    Platform["NewNintendo3DS"] = "New Nintendo 3DS";
    Platform["CommodoreVIC20"] = "Commodore VIC-20";
    Platform["AppleII"] = "Apple II";
    Platform["GameBoy"] = "Game Boy";
    Platform["Ouya"] = "Ouya";
    Platform["WindowsPhone"] = "Windows Phone";
    Platform["NeoGeoMVS"] = "Neo Geo MVS";
    Platform["SteamOS"] = "SteamOS";
    Platform["PDP10"] = "PDP-10";
    Platform["WonderSwan"] = "WonderSwan";
    Platform["WiiWare"] = "WiiWare";
})(Platform || (Platform = {}));


/***/ }),

/***/ "./src/app/post-cell/post-cell.component.ts":
/*!**************************************************!*\
  !*** ./src/app/post-cell/post-cell.component.ts ***!
  \**************************************************/
/*! exports provided: PostCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCellComponent", function() { return PostCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PostCellComponent {
    constructor() {
        this.votes = 0;
        this.voted = false;
        this.rand = Math.round(Math.random() * 1000);
    }
    ngOnInit() {
    }
    vote() {
        if (this.voted) {
            if (this.votes > 0)
                this.votes--;
        }
        else {
            this.votes++;
        }
        this.voted = !this.voted;
    }
    gameName() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if ((_b = (_a = this.post) === null || _a === void 0 ? void 0 : _a.game) === null || _b === void 0 ? void 0 : _b.name) {
            if (((_d = (_c = this.post) === null || _c === void 0 ? void 0 : _c.game) === null || _d === void 0 ? void 0 : _d.name.length) > 15) {
                return ((_f = (_e = this.post) === null || _e === void 0 ? void 0 : _e.game) === null || _f === void 0 ? void 0 : _f.name.slice(0, 15)) + '...';
            }
            else {
                return (_h = (_g = this.post) === null || _g === void 0 ? void 0 : _g.game) === null || _h === void 0 ? void 0 : _h.name;
            }
        }
    }
}
PostCellComponent.ɵfac = function PostCellComponent_Factory(t) { return new (t || PostCellComponent)(); };
PostCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostCellComponent, selectors: [["app-post-cell"]], inputs: { post: "post" }, decls: 64, vars: 17, consts: [[1, "columns", "is-hidden-touch", "is-vcentered"], [1, "column", "is-1", "is-centered", "has-text-centered"], [1, "subtitle", "is-4", 2, "font-weight", "bolder"], [3, "click"], [1, "column", "is-11"], [1, "card", "post-card"], [1, "card-content", "is-dark"], [1, "media", "has-text-light"], [1, "media-left", 2, "border-top", "none", "border-right", "solid 1px grey"], [1, "media", 2, "border-top", "none", "margin-right", "2.5rem"], [1, "media-left"], [1, "image", "is-96x96"], [2, "width", "96px", 3, "src"], [1, "media-content"], [1, "title", "is-4"], [1, "subtitle", "is-6"], [1, "heading"], [1, "media-content", 2, "margin-left", "2.0rem"], [1, "media", 2, "border", "none"], [1, "media-left", "has-text-centered", 3, "routerLink"], [2, "max-height", "80px", 3, "src"], [1, "subtitle", "has-text-light", 2, "font-weight", "bolder"], [1, "body", "has-text-light", 2, "padding-right", "1.0rem"], ["href", "#"], [1, "columns", "is-mobile", "is-vcentered", "is-hidden-desktop"], [1, "column", "is-2", "has-text-centered"], [1, "column", "is-10"], [1, "image", "is-48x48"], [2, "border-radius", "50%", "margin-right", "2px", "width", "96px", 3, "src"], [1, "body", "has-text-light"]], template: function PostCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostCellComponent_Template_span_click_3_listener() { return ctx.vote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "figure", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "10 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "#channel1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "#channel2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostCellComponent_Template_span_click_42_listener() { return ctx.vote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "figure", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "#channel1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "#channel2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("vote ", ctx.voted ? "on" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.votes, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://avatars.dicebear.com/api/bottts/", ctx.post == null ? null : ctx.post.user == null ? null : ctx.post.user.avatarVal, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.post == null ? null : ctx.post.user == null ? null : ctx.post.user.firstName, " ", ctx.post == null ? null : ctx.post.user == null ? null : ctx.post.user.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", ctx.post == null ? null : ctx.post.user == null ? null : ctx.post.user.handle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/games/", ctx.post == null ? null : ctx.post.game == null ? null : ctx.post.game.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://", ctx.post == null ? null : ctx.post.game == null ? null : ctx.post.game.coverURL, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.gameName(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("vote ", ctx.voted ? "on" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.votes, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://avatars.dicebear.com/api/bottts/", ctx.rand, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", ctx.post == null ? null : ctx.post.user == null ? null : ctx.post.user.handle, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".post-card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  margin-bottom: 25px;\n  background-color: #363636;\n}\n\na[_ngcontent-%COMP%] {\n  color: #95EF72;\n}\n\n.vote-box[_ngcontent-%COMP%] {\n  margin-left: 1.0rem;\n}\n\n.vote[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  width: 40px;\n  height: 25px;\n  cursor: pointer;\n  background: url('upvote.png');\n  background-position: 0 -25px;\n}\n\n.vote.on[_ngcontent-%COMP%] {\n  background-position: 0 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1jZWxsL3Bvc3QtY2VsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZiw2QkFBaUQ7RUFDakQsNEJBQTRCO0FBQzlCOztBQUdBO0VBQ0UsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1jZWxsL3Bvc3QtY2VsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XG59XG5cbmEge1xuICBjb2xvcjogIzk1RUY3Mjtcbn1cblxuLnZvdGUtYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDEuMHJlbTtcbn1cblxuLnZvdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3Vwdm90ZS5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjVweDtcbn1cblxuXG4udm90ZS5vbiB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMnB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-cell',
                templateUrl: './post-cell.component.html',
                styleUrls: ['./post-cell.component.css']
            }]
    }], function () { return []; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['post']
        }] }); })();


/***/ }),

/***/ "./src/app/profile-container/profile-container.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/profile-container/profile-container.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfileContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileContainerComponent", function() { return ProfileContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../games.service */ "./src/app/games.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






function ProfileContainerComponent_li_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-cell", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", person_r4);
} }
function ProfileContainerComponent_li_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-cell", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", person_r5);
} }
function ProfileContainerComponent_li_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-game-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("game", game_r6)("routerLink", "/games/" + game_r6.id);
} }
function ProfileContainerComponent_app_post_cell_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-cell", 25);
} if (rf & 2) {
    const post_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r7);
} }
class ProfileContainerComponent {
    constructor(observerService, gamesService, ar, http, router) {
        this.observerService = observerService;
        this.gamesService = gamesService;
        this.ar = ar;
        this.http = http;
        this.router = router;
        this.posts = [];
        this.example = 'Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post.';
        this.followers = [];
        this.following = [];
    }
    ngOnInit() {
        this.ar.url.subscribe(url => {
            let id = url[url.length - 1].path.toString();
            let profile = this.observerService.getMessageOnce().profile;
            if (id === profile.id) {
                this.user = profile;
                this.games = this.gamesService.getSet('Most Rated');
                var i = 0, max = this.games.length;
                for (i = 0; i < max; i++) {
                    this.followers.push(this.user);
                    this.following.push(this.user);
                    let index = Math.round(Math.random() * max);
                    this.posts.push({
                        id: i,
                        user: this.user,
                        game: this.games[index],
                        text: this.example,
                        time: new Date(),
                    });
                }
            }
            else {
                let url = 'https://cs1530group11graph.uc.r.appspot.com/user/' + id;
                this.http.get(url).toPromise().then(profileObj => {
                    var data = profileObj.response.properties;
                    if (data) {
                        this.user = data;
                        this.games = this.gamesService.getSet('Most Rated');
                        var i = 0, max = this.games.length;
                        for (i = 0; i < max; i++) {
                            console.log(i);
                            let index = Math.round(Math.random() * max);
                            this.posts.push({
                                id: i,
                                user: this.user,
                                game: this.games[index],
                                text: this.example,
                                time: new Date(),
                            });
                        }
                    }
                    else {
                        this.router.navigate(['/profile/' + profile.id]);
                    }
                });
            }
        });
    }
}
ProfileContainerComponent.ɵfac = function ProfileContainerComponent_Factory(t) { return new (t || ProfileContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_1__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProfileContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileContainerComponent, selectors: [["app-profile-container"]], decls: 48, vars: 8, consts: [[1, "hero-head"], [1, "hero-body", "content-bg", 2, "padding", "0px"], [1, "dashboard", "is-full-height"], [1, "dashboard-main", "is-scrollable", "is-dark", 2, "max-width", "100%", "overflow-x", "hidden"], [2, "display", "inline-block"], [1, "section"], [1, "container", 2, "margin-bottom", "100px"], [1, "card", "post-card"], [1, "card-content", "is-dark"], [1, "media"], [1, "media-left"], [1, "image", "is-128x128"], [2, "border-radius", "50%", "margin-right", "2px", 3, "src"], [1, "media-content"], [1, "title", "is-2", "has-text-light"], [1, "subtitle", "is-4", "has-text-light"], [1, "subtitle", "is-6", "has-text-light", 2, "font-weight", "bolder"], ["datetime", "2016-1-1"], [1, "title", "is-3", "has-text-light"], [1, "users"], [4, "ngFor", "ngForOf"], [1, "images"], [3, "post", 4, "ngFor", "ngForOf"], [3, "user"], [3, "game", "routerLink"], [3, "post"]], template: function ProfileContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "figure", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Last Online:\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "time", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "11:09 PM - 1 Jan 2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Screen Names");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProfileContainerComponent_li_32_Template, 2, 1, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProfileContainerComponent_li_38_Template, 2, 1, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Favorite Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ProfileContainerComponent_li_46_Template, 2, 2, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ProfileContainerComponent_app_post_cell_47_Template, 1, 1, "app-post-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://avatars.dicebear.com/api/bottts/", ctx.user.avatarVal, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user.firstName, " ", ctx.user.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.handle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.followers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.following);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.games);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, styles: [".post-card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  margin-bottom: 25px;\n  background-color: #363636;\n}\n\na[_ngcontent-%COMP%] {\n  color: #95EF72;\n}\n\n.content-bg[_ngcontent-%COMP%] {\n  background-color: #232324;\n}\n\n.images[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.users[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  flex-direction: row;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\nli[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtY29udGFpbmVyL3Byb2ZpbGUtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcbn1cblxuYSB7XG4gIGNvbG9yOiAjOTVFRjcyO1xufVxuXG4uY29udGVudC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjQ7XG59XG5cblxuLmltYWdlcyB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi51c2VycyB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG5saSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW46IDVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-container',
                templateUrl: './profile-container.component.html',
                styleUrls: ['./profile-container.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_1__["ObserverService"] }, { type: _games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile.ts":
/*!****************************!*\
  !*** ./src/app/profile.ts ***!
  \****************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
class Profile {
    constructor() {
        this.id = "";
        this.ping = 1;
        this.city = "";
        this.state = "";
        this.firstName = "";
        this.lastName = "";
        this.handle = "";
        this.screenNames = {};
        this.latitude = 1;
        this.longitude = 1;
        this.avatarVal = 50;
    }
}


/***/ }),

/***/ "./src/app/rate-game-modal/rate-game-modal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/rate-game-modal/rate-game-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: RateGameModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateGameModalComponent", function() { return RateGameModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function RateGameModalComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://", ctx_r0.game == null ? null : ctx_r0.game.coverURL, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function RateGameModalComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Current Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 1, ctx_r1.game == null ? null : ctx_r1.game.rating, "1.2-2"), " ");
} }
class RateGameModalComponent {
    constructor(observerService) {
        this.observerService = observerService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.rating = 75.000;
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
            this.game = message.gameBeingRated;
            this.rating = this.game;
        }));
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    closeModal() {
        this.appData.rateGameModalOpen = false;
        this.updateObserver();
    }
    onChange(event) {
        this.rating = event.target.value;
        console.log(this.rating);
    }
    getName() {
        if (this.game && this.game.name) {
            if (this.game.name.length > 25) {
                return this.game.name.slice(0, 25) + '...';
            }
            else {
                return this.game.name;
            }
        }
        else {
            return 'Game';
        }
    }
}
RateGameModalComponent.ɵfac = function RateGameModalComponent_Factory(t) { return new (t || RateGameModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"])); };
RateGameModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RateGameModalComponent, selectors: [["app-rate-game-modal"]], decls: 23, vars: 5, consts: [[1, "modal-background", 3, "click"], [1, "modal-card", 2, "margin", "0px"], [1, "modal-card-head"], [1, "modal-card-title"], ["aria-label", "close", 1, "delete", 3, "click"], [1, "modal-card-body", "has-text-dark"], [1, "level", 2, "margin-top", "1.0rem"], [1, "level-left"], ["class", "level-item", 4, "ngIf"], [1, "level-item"], [1, "subtitle", "has-text-dark", 2, "font-weight", "bolder", "max-width", "200px"], [1, "level-right"], [1, "subtitle", "is-6", "has-text-dark", 2, "margin-bottom", "0.5rem", "font-weight", "bolder"], ["step", "0.001", "min", "0.000", "max", "100.000", "type", "range", 1, "slider", "is-link", 2, "width", "100%", 3, "value", "change"], [1, "modal-card-foot"], [1, "button", "is-success"], [1, "button", 3, "click"], [2, "max-height", "96px", 3, "src"], [1, "subtitle", "is-6", "has-text-dark", 2, "margin-bottom", "1.5rem", "font-weight", "bolder"], [1, "tag", "is-warning", "is-medium"], [1, "icon", "is-medium"], [1, "fas", "fa-star"]], template: function RateGameModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RateGameModalComponent_Template_div_click_0_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RateGameModalComponent_Template_button_click_5_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RateGameModalComponent_div_9_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RateGameModalComponent_div_14_Template, 9, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Your Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RateGameModalComponent_Template_input_change_17_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "footer", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RateGameModalComponent_Template_button_click_21_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rate ", ctx.getName(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game && (ctx.game == null ? null : ctx.game.coverURL));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.game == null ? null : ctx.game.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.appData.avatarVal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGUtZ2FtZS1tb2RhbC9yYXRlLWdhbWUtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RateGameModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rate-game-modal',
                templateUrl: './rate-game-modal.component.html',
                styleUrls: ['./rate-game-modal.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/report-issue/report-issue.component.ts":
/*!********************************************************!*\
  !*** ./src/app/report-issue/report-issue.component.ts ***!
  \********************************************************/
/*! exports provided: ReportIssueComponent, Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportIssueComponent", function() { return ReportIssueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





const _c0 = ["issue"];
class ReportIssueComponent {
    constructor(observerService, http) {
        this.observerService = observerService;
        this.http = http;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.expanded = '';
        this.loading = false;
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
        }));
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    closeModal() {
        this.appData.reportingIssue = false;
        this.updateObserver();
    }
    sendReport() {
        this.loading = true;
        // send report here
        const now = new Date();
        let time = Math.round(now.getTime() / 1000);
        let body = { "userID": this.appData.profile.id, "time": time, "text": this.issue.nativeElement.value };
        let url = 'https://cs1530group11graph.uc.r.appspot.com/report-issue';
        this.http.post(url, body).toPromise()
            .then(response => {
            this.loading = false;
            this.closeModal();
        })
            .catch(err => {
            this.loading = false;
            console.error(err);
            this.closeModal();
        });
    }
}
ReportIssueComponent.ɵfac = function ReportIssueComponent_Factory(t) { return new (t || ReportIssueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ReportIssueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportIssueComponent, selectors: [["app-report-issue"]], viewQuery: function ReportIssueComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.issue = _t.first);
    } }, decls: 14, vars: 1, consts: [[1, "modal-background", 3, "click"], [1, "modal-card", 2, "margin", "0px"], [1, "modal-card-head"], [1, "modal-card-title"], ["aria-label", "close", 1, "delete", 3, "click"], [1, "modal-card-body", "has-text-dark"], ["id", "issuefield", "name", "issue", "placeholder", "Describe the issue you're having...", 1, "textarea", 3, "disabled"], ["issue", ""], [1, "modal-card-foot"], [1, "button", "is-success", 3, "click"], [1, "button", 3, "click"]], template: function ReportIssueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportIssueComponent_Template_div_click_0_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Report an Issue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportIssueComponent_Template_button_click_5_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "textarea", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "footer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportIssueComponent_Template_button_click_10_listener() { return ctx.sendReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportIssueComponent_Template_button_click_12_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC1pc3N1ZS9yZXBvcnQtaXNzdWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportIssueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-issue',
                templateUrl: './report-issue.component.html',
                styleUrls: ['./report-issue.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, { issue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['issue']
        }] }); })();
class Error {
    constructor() {
        this.text = "";
        this.userID = "";
    }
}


/***/ }),

/***/ "./src/app/search-bar/search-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../games.service */ "./src/app/games.service.ts");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function SearchBarComponent_div_9_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_div_9_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.openGame(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://", item_r2 == null ? null : item_r2.coverURL, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 3, item_r2 == null ? null : item_r2.rating, "1.2-2"), " ");
} }
function SearchBarComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Players");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchBarComponent_div_9_a_10_Template, 15, 6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.results);
} }
class SearchBarComponent {
    constructor(gamesService, observerService, router) {
        this.gamesService = gamesService;
        this.observerService = observerService;
        this.router = router;
        this.results = new Array();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.subscriptionResults = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.subscriptionResults.add(this.gamesService.searchResults.asObservable().subscribe(results => {
            this.results = results;
        }));
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
        }));
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
        this.subscriptionResults.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    onkeyup(e) {
        this.gamesService.search(e.target.value.toLowerCase());
    }
    closeModal() {
        this.appData.searchBarOpen = false;
        this.updateObserver();
    }
    openGame(game) {
        //this.gamesService.setGameID(game.id.toString());
        this.appData.searchBarOpen = false;
        this.updateObserver();
        this.router.navigate(['/games/' + game.id]);
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_3__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], decls: 10, vars: 4, consts: [[1, "modal-background", 3, "click"], [1, "modal-content"], ["aria-label", "close", 1, "delete", 2, "float", "right", "margin", "10px", 3, "click"], [1, "panel", 2, "background-color", "whitesmoke"], [2, "background-color", "#3273dc", "padding", "20px"], [1, "control", "has-icons-left"], ["placeholder", "Search Games, Users, and Posts...", 1, "input", "is-info", 3, "keyup"], [1, "icon", "is-left"], ["aria-hidden", "true", 1, "fas", "fa-search"], [4, "ngIf"], [1, "panel-tabs"], [1, "is-active"], ["class", "panel-block is-active", 3, "click", 4, "ngFor", "ngForOf"], [1, "panel-block", "is-active", 3, "click"], [1, "level", 2, "width", "100%"], [1, "level-left"], [1, "level-item"], [2, "max-height", "80px", 3, "src"], [1, "subtitle", "is-6", "has-text-dark", 2, "margin-left", "10px", "margin-right", "10px", "font-weight", "bold"], [1, "level-right"], [1, "tag", "is-warning", "is-medium"], [1, "icon", "is-medium"], [1, "fas", "fa-star"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_Template_div_click_0_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_Template_button_click_2_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchBarComponent_Template_input_keyup_6_listener($event) { return ctx.onkeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchBarComponent_div_9_Template, 11, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("panel-heading ", (ctx.results == null ? null : ctx.results.length) == 0 ? "panel-heading-active" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.results == null ? null : ctx.results.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: [".panel-heading-empty[_ngcontent-%COMP%] {\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbC1oZWFkaW5nLWVtcHR5IHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-bar',
                templateUrl: './search-bar.component.html',
                styleUrls: ['./search-bar.component.css']
            }]
    }], function () { return [{ type: _games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"] }, { type: _observer_service__WEBPACK_IMPORTED_MODULE_3__["ObserverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _genre_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../genre.enum */ "./src/app/genre.enum.ts");
/* harmony import */ var _platform_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platform.enum */ "./src/app/platform.enum.ts");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function SidebarComponent_div_3_div_12_ul_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_3_div_12_ul_3_div_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const channel_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r6.channelClicked(channel_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](channel_r5 === ctx_r4.activeChannel ? "is-active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r5);
} }
function SidebarComponent_div_3_div_12_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_div_3_div_12_ul_3_div_1_Template, 4, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.channels);
} }
function SidebarComponent_div_3_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_div_3_div_12_ul_3_Template, 2, 1, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", title_r2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.channels.length > 0);
} }
function SidebarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.newPost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.newChannel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "New Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SidebarComponent_div_3_div_12_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.getTitles());
} }
class SidebarComponent {
    constructor(observerService, ar) {
        this.observerService = observerService;
        this.ar = ar;
        this.title = '';
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.expanded = '';
        this.activeChannel = '#all';
        this.channels = ['#all', '#channel1', '#channel2', '#channel3'];
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
        }));
    }
    ngOnInit() {
        this.ar.url.subscribe(url => {
            var page = url[0].path.toString();
            page = page[0].toUpperCase() + page.substring(1, page.length);
            this.title = page;
        });
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    toggleExpand(section) {
        if (this.expanded === section) {
            this.expanded = '';
        }
        else {
            this.expanded = section;
        }
    }
    newPost() {
        this.appData.newPostModalOpen = true;
        this.updateObserver();
    }
    // newChannel() {
    //   this.appData.newChannelModalOpen = true;
    //   this.updateObserver();
    // }
    channelClicked(channel) {
        this.activeChannel = channel;
        this.appData.selectedChannel = channel;
        this.updateObserver();
    }
    getOptions(section) {
        if (!(this.expanded === section)) {
            return [];
        }
        if (section === 'Genre') {
            return Object.values(_genre_enum__WEBPACK_IMPORTED_MODULE_2__["Genre"]).sort();
        }
        if (section === 'Platform') {
            return Object.values(_platform_enum__WEBPACK_IMPORTED_MODULE_3__["Platform"]).sort();
        }
        return [];
    }
    getSections(title) {
        if (title === 'Channels') {
            return this.channels;
        }
        if (title === 'Filter By') {
            return ['Genre', 'Platform'];
        }
        if (title === 'Sort By') {
            return ['Top Rated', 'Most Rated', 'Newest', 'Oldest'];
        }
        if (title === 'Games') {
            return ['Genre', 'Platform'];
        }
        return [];
    }
    getTitles() {
        if (this.title === 'Feed') {
            return ['Channels'];
        }
        if (this.title === 'Games') {
            return ['Sort By', 'Filter By'];
        }
        return [];
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_4__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 6, vars: 1, consts: [[1, "dashboard-panel", "is-medium", "has-thick-padding", "is-hidden-mobile", 2, "height", "100%", "width", "100%", "background-color", "#292929"], [1, "dashboard-panel-content", "is-scrollable"], [1, "menu", "has-text-light"], [4, "ngIf"], [1, "button", "is-danger", 2, "margin-bottom", "20px", 3, "click"], [1, "icon"], [1, "fas", "fa-pencil-alt"], [1, "button", "is-info", 3, "click"], [1, "fas", "fa-hashtag"], [4, "ngFor", "ngForOf"], [1, "menu-label", 2, "margin-top", "1.5em"], ["class", "menu-list", 4, "ngIf"], [1, "menu-list"], [3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aside", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_div_3_Template, 13, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title === "Feed");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  display: block;\n  padding: 0.5em 0.75em;\n  border-left: 3px solid none;\n  transition-property: border,text;\n  transition-duration: 0.1s;\n  margin-bottom: 8px;\n}\n\n.menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #292929;\n  color:  whitesmoke;\n  border-left: 3px solid #95EF72;\n  font-weight: 600;\n}\n\n.menu-list[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {\n  background-color: #292929;\n  color:  whitesmoke;\n  border-left: 3px solid #95EF72;\n  font-weight: 600;\n}\n\n.menu-list-item[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%] {\n  background-color: #292929;\n  color:  whitesmoke;\n  border-left: 3px solid #95EF72;\n  font-weight: 600;\n}\n\n.menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  border-left: 1px solid #dbdbdb;\n  margin: 0.75em;\n  padding-left: 0.75em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtbGlzdCBhIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW07XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgbm9uZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLHRleHQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLm1lbnUtbGlzdCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcbiAgY29sb3I6ICB3aGl0ZXNtb2tlO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM5NUVGNzI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tZW51LWxpc3QgYS5pcy1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICBjb2xvcjogIHdoaXRlc21va2U7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzk1RUY3MjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1lbnUtbGlzdC1pdGVtIC5pcy1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICBjb2xvcjogIHdoaXRlc21va2U7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzk1RUY3MjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1lbnUtbGlzdCBsaSB1bCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RiZGJkYjtcbiAgbWFyZ2luOiAwLjc1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_4__["ObserverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sign-in-buttons/sign-in-buttons.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/sign-in-buttons/sign-in-buttons.component.ts ***!
  \**************************************************************/
/*! exports provided: SignInButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInButtonsComponent", function() { return SignInButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var firebaseui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebaseui-angular */ "./node_modules/firebaseui-angular/__ivy_ngcc__/fesm2015/firebaseui-angular.js");








function SignInButtonsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignInButtonsComponent {
    constructor(observerService, afAuth, http) {
        this.observerService = observerService;
        this.afAuth = afAuth;
        this.http = http;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.loading = true;
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
        }));
    }
    ngOnInit() {
        this.afAuth.authState.subscribe(d => {
            if (d != null) {
                this.appData.username = d.displayName;
                this.appData.email = d.email;
                this.appData.uid = d.uid;
                this.appData.profile.id = d.uid;
                this.appData.onboardingTempProfile.id = d.uid;
                let url = 'https://cs1530group11graph.uc.r.appspot.com/user/' + d.uid;
                this.http.get(url).toPromise().then(profileObj => {
                    var data = profileObj.response.properties;
                    console.log(data);
                    if (data) {
                        data.screenNames = data.screenNames.map(nameObj => {
                            return JSON.parse(nameObj);
                        });
                        this.appData.profile = data;
                        this.appData.isOnboarded = true;
                        this.updateObserver();
                    }
                    this.appData.isAuthenticated = true;
                    this.updateObserver();
                });
            }
            else {
                this.appData.isAuthenticated = false;
                this.updateObserver();
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    bypassLogin() {
        this.appData.isAuthenticated = true;
        this.updateObserver();
    }
    reportIssue() {
        if (!(this.appData.reportingIssue)) {
            this.appData.reportingIssue = true;
            this.updateObserver();
        }
    }
    successCallback(data) {
        this.appData.isAuthenticated = true;
        this.updateObserver();
    }
    errorCallback(data) {
    }
    uiShownCallback() {
        this.loading = false;
    }
}
SignInButtonsComponent.ɵfac = function SignInButtonsComponent_Factory(t) { return new (t || SignInButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
SignInButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInButtonsComponent, selectors: [["app-sign-in-buttons"]], decls: 5, vars: 1, consts: [[4, "ngIf"], [3, "signInSuccessWithAuthResult", "signInFailure", "uiShown"], [1, "button", "is-small", "is-danger", "is-outlined", "is-inverted", 2, "margin-right", "15px", 3, "click"], [1, "button", "is-large", "is-text", "is-loading"]], template: function SignInButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SignInButtonsComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "firebase-ui", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("signInSuccessWithAuthResult", function SignInButtonsComponent_Template_firebase_ui_signInSuccessWithAuthResult_1_listener($event) { return ctx.successCallback($event); })("signInFailure", function SignInButtonsComponent_Template_firebase_ui_signInFailure_1_listener($event) { return ctx.errorCallback($event); })("uiShown", function SignInButtonsComponent_Template_firebase_ui_uiShown_1_listener() { return ctx.uiShownCallback(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInButtonsComponent_Template_button_click_3_listener() { return ctx.reportIssue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Report an Issue\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], firebaseui_angular__WEBPACK_IMPORTED_MODULE_6__["FirebaseuiAngularLibraryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4tYnV0dG9ucy9zaWduLWluLWJ1dHRvbnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in-buttons',
                templateUrl: './sign-in-buttons.component.html',
                styleUrls: ['./sign-in-buttons.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user-cell/user-cell.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-cell/user-cell.component.ts ***!
  \**************************************************/
/*! exports provided: UserCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCellComponent", function() { return UserCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");



class UserCellComponent {
    constructor(observerService) {
        this.observerService = observerService;
        observerService.getMessage().subscribe(msg => this.user = msg.profile);
    }
    ngOnInit() {
    }
}
UserCellComponent.ɵfac = function UserCellComponent_Factory(t) { return new (t || UserCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_1__["ObserverService"])); };
UserCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserCellComponent, selectors: [["app-user-cell"]], inputs: { user: "user" }, decls: 5, vars: 2, consts: [[1, "has-text-centered", 2, "margin", "1.0rem"], [1, "image", "is-96x96"], [3, "src"], [1, "subtitle", "has-text-light", 2, "font-weight", "bolder"]], template: function UserCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://avatars.dicebear.com/api/bottts/", ctx.user.avatarVal, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.handle);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItY2VsbC91c2VyLWNlbGwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-cell',
                templateUrl: './user-cell.component.html',
                styleUrls: ['./user-cell.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_1__["ObserverService"] }]; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['user']
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCvJ7fjvweZlcJhOSWyfJ8m7ZwwUO6L0VQ",
        authDomain: "cs1530group11.firebaseapp.com",
        databaseURL: "https://cs1530group11.firebaseio.com",
        projectId: "cs1530group11",
        storageBucket: "cs1530group11.appspot.com",
        messagingSenderId: "928236810256",
        appId: "1:928236810256:web:af0c30b9e9bfa0a2535a95",
        measurementId: "G-RBLJG5JC0D"
    },
    maps: {
        apiKey: "AIzaSyCvJ7fjvweZlcJhOSWyfJ8m7ZwwUO6L0VQ"
    },
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zacharygrimaldi/Documents/Fall2020/CS1530/pingg/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map