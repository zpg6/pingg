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
/* harmony import */ var _app_navbar_page_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/navbar-page.enum */ "./src/app/navbar-page.enum.ts");

class AppData {
    constructor() {
        this.title = 'pingg';
        this.tagline = 'Where better matches are made.';
        this.navbarPage = _app_navbar_page_enum__WEBPACK_IMPORTED_MODULE_0__["NavbarPage"].feed;
        this.selectedChannel = '';
        this.reportingIssue = false;
        this.searchBarOpen = false;
        this.newPostModalOpen = false;
        this.newChannelModalOpen = false;
        this.username = null;
        this.email = null;
        this.uid = null;
        this.isAuthenticated = false;
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
/* harmony import */ var _chat_container_chat_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-container/chat-container.component */ "./src/app/chat-container/chat-container.component.ts");
/* harmony import */ var _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-detail/game-detail.component */ "./src/app/game-detail/game-detail.component.ts");










const routes = [
    { path: '', component: _feed_container_feed_container_component__WEBPACK_IMPORTED_MODULE_2__["FeedContainerComponent"] },
    { path: 'feed', component: _feed_container_feed_container_component__WEBPACK_IMPORTED_MODULE_2__["FeedContainerComponent"] },
    { path: 'map', component: _map_container_map_container_component__WEBPACK_IMPORTED_MODULE_3__["MapContainerComponent"] },
    { path: 'games', component: _games_container_games_container_component__WEBPACK_IMPORTED_MODULE_4__["GamesContainerComponent"] },
    { path: 'profile', component: _profile_container_profile_container_component__WEBPACK_IMPORTED_MODULE_5__["ProfileContainerComponent"] },
    { path: 'chat', component: _chat_container_chat_container_component__WEBPACK_IMPORTED_MODULE_6__["ChatContainerComponent"] },
    { path: 'game', component: _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_7__["GameDetailComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_page_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar-page.enum */ "./src/app/navbar-page.enum.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./games.service */ "./src/app/games.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _report_issue_report_issue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./report-issue/report-issue.component */ "./src/app/report-issue/report-issue.component.ts");
/* harmony import */ var _new_post_modal_new_post_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-post-modal/new-post-modal.component */ "./src/app/new-post-modal/new-post-modal.component.ts");
/* harmony import */ var _new_channel_modal_new_channel_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./new-channel-modal/new-channel-modal.component */ "./src/app/new-channel-modal/new-channel-modal.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-lottie */ "./node_modules/ngx-lottie/__ivy_ngcc__/fesm2015/ngx-lottie.js");
/* harmony import */ var _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login-box/login-box.component */ "./src/app/login-box/login-box.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");




















function AppComponent_app_navbar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng-lottie", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function AppComponent_div_3_Template_ng_lottie_animationCreated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.options);
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng-lottie", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function AppComponent_div_4_Template_ng_lottie_animationCreated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r2.options);
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-login-box");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-sidebar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_15_router_outlet_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
} }
function AppComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_15_router_outlet_1_Template, 1, 0, "router-outlet", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.appData == null ? null : ctx_r5.appData.isAuthenticated);
} }
class AppComponent {
    constructor(observerService, gamesService, router, ar) {
        this.observerService = observerService;
        this.gamesService = gamesService;
        this.router = router;
        this.ar = ar;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
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
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"];
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
            console.log('Subscription updated @ AppComponent');
        }));
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => {
            return (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]);
        })).subscribe((event) => {
            let url = event.url;
            url = url.replace('/', '');
            if (url.includes('?')) {
                url = url.substring(0, url.indexOf('?'));
            }
            console.log('url from appComp = ' + url);
            let page = this.pageFromString(url);
            if (page === _navbar_page_enum__WEBPACK_IMPORTED_MODULE_5__["NavbarPage"].game) {
                this.ar.queryParamMap
                    .subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    let id = params.get('id');
                    console.log(`setting game id as ${id}`);
                    this.gamesService.setGameID(id);
                }));
            }
            if (this.appData.navbarPage !== page) {
                this.appData.navbarPage = page;
                this.updateObserver();
            }
        });
        console.log('Subscription created @ AppComponent');
    }
    ngOnInit() { }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    animationCreated(animationItem) {
        console.log(animationItem);
    }
    pageFromString(page) {
        if (page.toLowerCase() === 'feed' || page.length == 0) {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_5__["NavbarPage"].feed;
        }
        if (page.toLowerCase() === 'map') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_5__["NavbarPage"].map;
        }
        if (page.toLowerCase() === 'games') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_5__["NavbarPage"].games;
        }
        if (page.toLowerCase() === 'profile') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_5__["NavbarPage"].profile;
        }
        if (page.toLowerCase() === 'search') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_5__["NavbarPage"].search;
        }
        if (page.toLowerCase() === 'game') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_5__["NavbarPage"].game;
        }
        return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_5__["NavbarPage"].feed;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_7__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_8__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 18, consts: [[1, "hero", "is-centered", "is-dark", "is-fullheight"], [1, "hero-head"], [4, "ngIf"], ["class", "modal is-active is-hidden-mobile", "style", "padding: 0px", 4, "ngIf"], ["class", "modal is-active is-hidden-desktop is-hidden-tablet", "style", "padding: 0px;", 4, "ngIf"], ["class", "modal is-active", "style", "margin: 10px;", 4, "ngIf"], ["class", "hero-body content-bg", "style", "padding: 0px;", 4, "ngIf"], [1, "modal", "is-active", "is-hidden-mobile", 2, "padding", "0px"], ["width", "150vh", "height", "150vh", 3, "options", "animationCreated"], [1, "modal", "is-active", "is-hidden-desktop", "is-hidden-tablet", 2, "padding", "0px"], ["width", "200vw", "height", "200vw", 3, "options", "animationCreated"], [1, "modal", "is-active", 2, "margin", "10px"], [1, "hero-body", "content-bg", 2, "padding", "0px"], [1, "dashboard", "is-full-height"], [1, "is-hidden-mobile", 2, "height", "-webkit-fill-available", "min-width", "200px"], [1, "dashboard-main", "is-scrollable", "is-dark", 2, "max-width", "100%", "overflow-x", "hidden"], [2, "display", "inline-block"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_app_navbar_2_Template, 1, 0, "app-navbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_div_5_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-report-issue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-new-post-modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-new-channel-modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-search-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppComponent_div_14_Template, 6, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AppComponent_div_15_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appData == null ? null : ctx.appData.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.appData == null ? null : ctx.appData.isAuthenticated));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.appData == null ? null : ctx.appData.isAuthenticated));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.appData.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("modal ", (ctx.appData == null ? null : ctx.appData.reportingIssue) ? "is-active" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("modal ", (ctx.appData == null ? null : ctx.appData.newPostModalOpen) ? "is-active" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("modal ", (ctx.appData == null ? null : ctx.appData.newChannelModalOpen) ? "is-active" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("modal ", (ctx.appData == null ? null : ctx.appData.searchBarOpen) ? "is-active" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.appData == null ? null : ctx.appData.isAuthenticated) && (ctx.appData == null ? null : ctx.appData.navbarPage) !== "Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.appData == null ? null : ctx.appData.isAuthenticated) && (ctx.appData == null ? null : ctx.appData.navbarPage) === "Map");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _report_issue_report_issue_component__WEBPACK_IMPORTED_MODULE_10__["ReportIssueComponent"], _new_post_modal_new_post_modal_component__WEBPACK_IMPORTED_MODULE_11__["NewPostModalComponent"], _new_channel_modal_new_channel_modal_component__WEBPACK_IMPORTED_MODULE_12__["NewChannelModalComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_13__["SearchBarComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"], ngx_lottie__WEBPACK_IMPORTED_MODULE_15__["LottieComponent"], _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_16__["LoginBoxComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_17__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".content-bg[_ngcontent-%COMP%] {\n  background-color: #232324;\n}\n\n.content-fg[_ngcontent-%COMP%] {\n  background-color: #292929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7O0FBRUg7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jaXJjbGVzLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL3BpbmdnQ2lyY2xlcy5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufSAqL1xuXG4uY29udGVudC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjQ7XG59XG5cbi5jb250ZW50LWZnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_7__["ObserverService"] }, { type: _games_service__WEBPACK_IMPORTED_MODULE_8__["GamesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var firebaseui_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! firebaseui-angular */ "./node_modules/firebaseui-angular/__ivy_ngcc__/fesm2015/firebaseui-angular.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_23__);
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











































// // currently there is a bug while building the app with --prod
// // - https://github.com/RaphaelJenni/FirebaseUI-Angular/issues/76
// // the plugin exposes the two libraries as well. You can use those:
// import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
const firebaseUiAuthConfig = {
    signInFlow: 'popup',
    signInOptions: [
        firebase__WEBPACK_IMPORTED_MODULE_23__["auth"].GoogleAuthProvider.PROVIDER_ID,
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
            provider: firebase__WEBPACK_IMPORTED_MODULE_23__["auth"].FacebookAuthProvider.PROVIDER_ID
        },
        firebase__WEBPACK_IMPORTED_MODULE_23__["auth"].TwitterAuthProvider.PROVIDER_ID,
        firebase__WEBPACK_IMPORTED_MODULE_23__["auth"].GithubAuthProvider.PROVIDER_ID,
        {
            requireDisplayName: true,
            provider: firebase__WEBPACK_IMPORTED_MODULE_23__["auth"].EmailAuthProvider.PROVIDER_ID
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
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_observer_service__WEBPACK_IMPORTED_MODULE_6__["ObserverService"], _games_service__WEBPACK_IMPORTED_MODULE_7__["GamesService"], { provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__["BUCKET"], useValue: 'cs1530group11.appspot.com' }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["GoogleMapsModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_16__["LottieModule"].forRoot({ player: playerFactory }),
            _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
            firebaseui_angular__WEBPACK_IMPORTED_MODULE_22__["FirebaseUIModule"].forRoot(firebaseUiAuthConfig),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__["AngularFireStorageModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"],
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
        _post_cell_post_cell_component__WEBPACK_IMPORTED_MODULE_38__["PostCellComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["GoogleMapsModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_16__["LottieModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"], firebaseui_angular__WEBPACK_IMPORTED_MODULE_22__["FirebaseUIModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__["AngularFireStorageModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"]] }); })();
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
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__["AngularFireStorageModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"],
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
                ],
                providers: [_observer_service__WEBPACK_IMPORTED_MODULE_6__["ObserverService"], _games_service__WEBPACK_IMPORTED_MODULE_7__["GamesService"], { provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__["BUCKET"], useValue: 'cs1530group11.appspot.com' }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar-page.enum */ "./src/app/navbar-page.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _post_cell_post_cell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post-cell/post-cell.component */ "./src/app/post-cell/post-cell.component.ts");







function FeedContainerComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FeedContainerComponent {
    constructor(observerService) {
        this.observerService = observerService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.title = 'Stock Manager';
        this.nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
            console.log('Subscription updated @ FeedContainerComponent');
        }));
        console.log('Subscription created @ FeedContainerComponent');
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
    isFeed() {
        return this.appData.navbarPage == _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].feed;
    }
    getPage() {
        return this.appData.navbarPage;
    }
}
FeedContainerComponent.ɵfac = function FeedContainerComponent_Factory(t) { return new (t || FeedContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_3__["ObserverService"])); };
FeedContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedContainerComponent, selectors: [["app-feed-hero"]], decls: 17, vars: 1, consts: [[1, "section"], [1, "container", 2, "margin-bottom", "100px"], [1, "card", "post-card"], [1, "card-content", "is-dark"], [1, "media"], [1, "media-content"], [1, "field", "has-addons"], [1, "control"], [1, "button", "is-info", "is-selected"], [1, "button"], [4, "ngFor", "ngForOf"]], template: function FeedContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Newest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Popular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Trending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FeedContainerComponent_div_16_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nums);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _post_cell_post_cell_component__WEBPACK_IMPORTED_MODULE_5__["PostCellComponent"]], styles: [".is-three-quarters[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.post-card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  margin-bottom: 25px;\n  background-color: #363636;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC1jb250YWluZXIvZmVlZC1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZmVlZC1jb250YWluZXIvZmVlZC1jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy10aHJlZS1xdWFydGVycyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ucG9zdC1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feed-hero',
                templateUrl: './feed-container.component.html',
                styleUrls: ['./feed-container.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_3__["ObserverService"] }]; }, null); })();


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
/* harmony import */ var _navbar_page_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar-page.enum */ "./src/app/navbar-page.enum.ts");
/* harmony import */ var _genre_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../genre.enum */ "./src/app/genre.enum.ts");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../games.service */ "./src/app/games.service.ts");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../game-card/game-card.component */ "./src/app/game-card/game-card.component.ts");











function GameCardListComponent_div_0_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-game-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameCardListComponent_div_0_li_4_Template_app_game_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.openGame(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("game", item_r3);
} }
function GameCardListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameCardListComponent_div_0_li_4_Template, 2, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
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
        this.list = Array();
        this.sections = ['Top Rated', 'Most Rated'];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.appDataSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.arrayOfMiniGames = new Array();
        this.serverURL = "https://smapi.ngrok.io";
        this.topSevenGenres = {};
        for (const genre in _genre_enum__WEBPACK_IMPORTED_MODULE_3__["Genre"]) {
            this.sections.push(genre);
        }
        this.gamesService.getAllMiniGames().subscribe(gamesArray => {
            this.arrayOfMiniGames = gamesArray;
        });
    }
    openGame(miniGame) {
        this.appData.navbarPage = _navbar_page_enum__WEBPACK_IMPORTED_MODULE_2__["NavbarPage"].game;
        this.gamesService.setGameID(miniGame.id.toString());
        this.updateObserver();
        this.router.navigate(['/game'], { queryParams: { id: miniGame.id } });
    }
    ngOnInit() {
        this.getSetArray('set');
        this.appDataSubscription.add(this.observerService.getMessage().subscribe(message => {
            this.appData = message;
            console.log('Subscription updated @ GameCardListComponent');
        }));
        console.log('Subscription created @ GameCardListComponent');
        console.log('Games Subscription being created @ GameCardListComponent');
        this.getTopRated();
        this.getMostRated();
        for (const genre in _genre_enum__WEBPACK_IMPORTED_MODULE_3__["Genre"]) {
            this.getGamesByGenre(genre);
        }
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
        this.appDataSubscription.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    getSetArray(set) {
        console.log("get set array");
        //let result = this.arrayService.getArray(set);
    }
    getFrom(set) {
        if (set === 'Top Rated') {
            return this.topSevenTopRated;
        }
        else if (set === 'Most Rated') {
            return this.topSevenMostRated;
        }
        else {
            return this.topSevenGenres[set];
        }
    }
    getTopRated() {
        var body = { 'offset': 0 };
        return this.http.post(this.serverURL + '/top-rated', { body })
            .toPromise()
            .then(games => {
            this.topSevenTopRated = games;
        })
            .catch(err => {
            console.error(err);
        });
    }
    getMostRated() {
        var body = { 'offset': 0 };
        this.http.post(this.serverURL + '/most-rated', { body })
            .toPromise()
            .then(games => {
            this.topSevenMostRated = games;
        })
            .catch(err => {
            console.error(err);
        });
    }
    getGamesByGenre(genre) {
        var body = { 'genre': genre, 'offset': 0 };
        this.http.post(this.serverURL + '/most-rated', { body })
            .toPromise()
            .then(games => {
            this.topSevenGenres[genre] = games;
        })
            .catch(err => {
            console.error(err);
        });
    }
}
GameCardListComponent.ɵfac = function GameCardListComponent_Factory(t) { return new (t || GameCardListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_4__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_5__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"])); };
GameCardListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameCardListComponent, selectors: [["app-game-card-list"]], decls: 1, vars: 1, consts: [["style", "margin-top: 40px; margin-bottom: 40px;", 4, "ngFor", "ngForOf"], [2, "margin-top", "40px", "margin-bottom", "40px"], [1, "title"], [1, "images"], [4, "ngFor", "ngForOf"], [3, "game", "click"]], template: function GameCardListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GameCardListComponent_div_0_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_9__["GameCardComponent"]], styles: [".images[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\nli[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin: 5px;\n}\n\nexample-viewport[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n  border: 1px solid white;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1jYXJkLWxpc3QvZ2FtZS1jYXJkLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2dhbWUtY2FyZC1saXN0L2dhbWUtY2FyZC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxubGkge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgbWFyZ2luOiA1cHg7XG59XG5cbmV4YW1wbGUtdmlld3BvcnQge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmV4YW1wbGUtaXRlbSB7XG4gIGhlaWdodDogYXV0bztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameCardListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-card-list',
                templateUrl: './game-card-list.component.html',
                styleUrls: ['./game-card-list.component.css']
            }]
    }], function () { return [{ type: _games_service__WEBPACK_IMPORTED_MODULE_4__["GamesService"] }, { type: _observer_service__WEBPACK_IMPORTED_MODULE_5__["ObserverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _navbar_page_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar-page.enum */ "./src/app/navbar-page.enum.ts");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../games.service */ "./src/app/games.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../game-card/game-card.component */ "./src/app/game-card/game-card.component.ts");









function GameDetailComponent_br_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
function GameDetailComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genre_r4);
} }
function GameDetailComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5);
} }
function GameDetailComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-game-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailComponent_li_25_Template_app_game_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const similar_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openGame(similar_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const similar_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("game", similar_r6);
} }
class GameDetailComponent {
    constructor(observerService, gamesService, router) {
        this.observerService = observerService;
        this.gamesService = gamesService;
        this.router = router;
        this.subscriptionRecommended = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.subscriptionGame = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        // subscribe to home component messages
        this.subscriptionGame.add(gamesService.observeGame().subscribe(game => {
            var _a, _b;
            this.game = game;
            if (((_a = game === null || game === void 0 ? void 0 : game.similarGames) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                var similarGames = [];
                for (var i = 0; i < ((_b = game.similarGames) === null || _b === void 0 ? void 0 : _b.length); i++) {
                    var similarGame = this.gamesService.getMiniGame(game.similarGames[i].toString());
                    if (similarGame) {
                        similarGames.push(similarGame);
                    }
                }
                this.recommended = similarGames;
            }
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
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
    }
    openGame(game) {
        this.appData.navbarPage = _navbar_page_enum__WEBPACK_IMPORTED_MODULE_2__["NavbarPage"].game;
        this.gamesService.setGameID(game.id.toString());
        this.updateObserver();
        this.router.navigate(['/game'], { queryParams: { id: game.id } });
    }
}
GameDetailComponent.ɵfac = function GameDetailComponent_Factory(t) { return new (t || GameDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_3__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_4__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
GameDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameDetailComponent, selectors: [["app-game-detail"]], decls: 26, vars: 12, consts: [[1, "section"], [1, "container", 2, "margin-bottom", "100px"], [1, "card", "post-card"], [1, "card-content", "is-dark"], [1, "media"], [1, "media-left"], [3, "src"], [1, "media-content", "has-text-light"], [1, "title", "is-1"], [4, "ngIf"], [1, ""], ["max", "100", 1, "progress", "is-small", "is-info", 2, "max-width", "100px", 3, "value"], ["class", "tag is-light", "style", "margin-right: 5px; margin-top: 20px; margin-bottom: 20px; cursor: pointer;", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "media-content"], [1, "title", "is-3", "has-text-light"], [1, "images"], [1, "tag", "is-light", 2, "margin-right", "5px", "margin-top", "20px", "margin-bottom", "20px", "cursor", "pointer"], [2, "margin-top", "10px"], [3, "game", "click"]], template: function GameDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GameDetailComponent_br_10_Template, 1, 0, "br", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "progress", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GameDetailComponent_span_16_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GameDetailComponent_div_17_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Recommended Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, GameDetailComponent_li_25_Template, 2, 1, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://", ctx.game == null ? null : ctx.game.coverURL, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.game == null ? null : ctx.game.name.split(" - ")[0]) + ((ctx.game == null ? null : ctx.game.name.split(" - ").length) > 1 ? " -" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.game == null ? null : ctx.game.name.split(" - ").length) > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.game == null ? null : ctx.game.name.split(" - ")[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 9, ctx.game == null ? null : ctx.game.rating, "1.2-2"), " / 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.game == null ? null : ctx.game.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.game == null ? null : ctx.game.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.game == null ? null : ctx.game.description.split("\n"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recommended);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_7__["GameCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: ["ul.images[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  overflow-x: auto;\n}\n\nli[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin: 5px;\n}\n\n.post-card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  margin-bottom: 25px;\n  background-color: #363636;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1kZXRhaWwvZ2FtZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1kZXRhaWwvZ2FtZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsLmltYWdlcyB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG5saSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW46IDVweDtcbn1cblxuLnBvc3QtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-detail',
                templateUrl: './game-detail.component.html',
                styleUrls: ['./game-detail.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_3__["ObserverService"] }, { type: _games_service__WEBPACK_IMPORTED_MODULE_4__["GamesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


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
/* harmony import */ var _game_card_list_game_card_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-card-list/game-card-list.component */ "./src/app/game-card-list/game-card-list.component.ts");





class GamesContainerComponent {
    constructor(observerService) {
        this.observerService = observerService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
            console.log('Subscription updated @ GamesContainerComponent');
        }));
        console.log('Subscription created @ GamesContainerComponent');
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
GamesContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamesContainerComponent, selectors: [["app-games-container"]], decls: 3, vars: 0, consts: [[1, "section"], [1, "container", 2, "margin-bottom", "100px"]], template: function GamesContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-game-card-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_game_card_list_game_card_list_component__WEBPACK_IMPORTED_MODULE_3__["GameCardListComponent"]], styles: ["p[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMtY29udGFpbmVyL2dhbWVzLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMtY29udGFpbmVyL2dhbWVzLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4iXX0= */"] });
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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/app/game.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class GamesService {
    constructor(firestore, storage, http) {
        this.firestore = firestore;
        this.storage = storage;
        this.http = http;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Map());
        this.miniSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Map());
        this.subjectArray = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Array());
        this.miniSubjectArray = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Array());
        this.detailing = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _game__WEBPACK_IMPORTED_MODULE_2__["Game"]());
        this.searchResults = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Array());
        this.serverURL = "https://smapi.ngrok.io";
        console.log("games service constructed");
        this.httpClient = http;
        this.httpClient.get(this.serverURL + '/mini-game-database').toPromise().then(response => {
            var map = response;
            this.miniSubject.next(map);
            var array = [];
            for (const key in map) {
                array.push(map[key]);
            }
            this.miniSubjectArray.next(array.slice(0, 7));
        })
            .catch(err => {
            console.error(err);
        });
    }
    getGames() {
        return this.subject.asObservable();
        // return new Promise<Array<Game>>((resolve,reject) => {
        //   this.gamesCollection.snapshotChanges()
        //     .subscribe(snapshots=>{
        //       resolve(snapshots.map(game => {
        //         return game.payload.doc.data() as Game;
        //       }));
        //     })
        // })
    }
    observeGame() {
        return this.detailing.asObservable();
    }
    setGameID(id) {
        this.detailing.next(null);
        if (!id || id.length == 0) {
            return;
        }
        this.subscription = this.firestore.collection('GameList').doc(id).snapshotChanges().subscribe(change => {
            console.log(`updating game ${change.payload.id}`);
            if (change.type === 'added' || change.type === 'modified' || change.type === 'value') {
                this.detailing.next(change.payload.data());
            }
            else if (change.type === 'removed') {
                this.detailing.next(new _game__WEBPACK_IMPORTED_MODULE_2__["Game"]());
            }
        });
    }
    getResults() {
        return this.searchResults.asObservable();
    }
    getGame(id) {
        var found = this.subject.value[id];
        return found;
    }
    search(query) {
        this.searchResults.next(this.subject.value.values.prototype.filter(game => {
            return game.searchableIndex[query];
        }).sort((a, b) => {
            if (a.rating > b.rating) {
                return -1;
            }
            if (a.rating < b.rating) {
                return 1;
            }
            return 0;
        }).slice(0, 5));
    }
    getAll() {
        return this.subjectArray.asObservable();
    }
    getAllMiniGames() {
        return this.miniSubjectArray.asObservable();
    }
    getMiniGame(id) {
        return this.miniSubject.value[id];
    }
}
GamesService.ɵfac = function GamesService_Factory(t) { return new (t || GamesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
GamesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GamesService, factory: GamesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


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
    Genre["Music"] = "Music";
    Genre["Platform"] = "Platform";
    Genre["Puzzle"] = "Puzzle";
    Genre["Racing"] = "Racing";
    Genre["RealTimeStrategy"] = "Real Time Strategy (RTS)";
    Genre["RolePlaying"] = "Role-Playing (RPG)";
    Genre["Simulator"] = "Simulator";
    Genre["Sport"] = "Sport";
    Genre["Strategy"] = "Strategy";
    Genre["TurnBasedStrategy"] = "Turn-based strategy (TBS)";
    Genre["Tactical"] = "Tactical";
    Genre["QuizTrivia"] = "Quiz/Trivia";
    Genre["HackSlashBeatEmUp"] = "Hack and slash/Beat 'em up";
    Genre["Pinball"] = "Pinball";
    Genre["Adventure"] = "Adventure";
    Genre["Arcade"] = "Arcade";
    Genre["VisualNovel"] = "Visual Novel";
    Genre["Indie"] = "Indie";
    Genre["CardBoardGame"] = "Card & Board Game";
    Genre["MOBA"] = "MOBA";
    Genre["PointAndClick"] = "Point-and-click";
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
            console.log('Subscription updated @ LoginBoxComponent');
        }));
        console.log('Subscription created @ LoginBoxComponent');
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
        console.log(animationItem);
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
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");



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
MapContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapContainerComponent, selectors: [["app-map-container"]], decls: 1, vars: 3, consts: [["width", "100vw", "height", "93vh", 2, "margin-bottom", "20px", "height", "calc(100vh - 57px)", 3, "zoom", "center", "options"]], template: function MapContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "google-map", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", ctx.zoom)("center", ctx.center)("options", ctx.options);
    } }, directives: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC1jb250YWluZXIvbWFwLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIn0= */"] });
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
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../games.service */ "./src/app/games.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function NavbarComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 34);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_20_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_21_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.showSearchBox = !ctx_r5.showSearchBox; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(observerService, router, afAuth, gamesService) {
        this.observerService = observerService;
        this.router = router;
        this.afAuth = afAuth;
        this.gamesService = gamesService;
        this.searchResult = Array();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.subscriptionRoute = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.subscriptionGame = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.subscriptionResults = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.title = 'Stock Manager';
        this.searchBox = '';
        this.updated = false;
        this.user = '';
        this.showMenu = false;
        this.showSearchBox = false;
    }
    ngOnInit() {
        this.user = '' + this.randomIntFromInterval(1, 100);
        this.subscriptionResults.add(this.gamesService.getResults().subscribe(games => {
            this.searchResult = games;
        }));
        this.subscriptionGame.add(this.gamesService.observeGame().subscribe(game => {
            console.log('game retrieved in navbar component:');
            this.game = game;
        }));
        this.subscription.add(this.observerService.getMessage().subscribe(message => {
            this.appData = message;
            console.log('Subscription updated @ NavbarComponent');
        }));
        console.log('Subscription created @ NavbarComponent');
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
        return this.user;
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
            console.log('searched for: ' + this.searchBox);
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
        if (this.appData.navbarPage === this.pageFromString(to)) {
            return;
        }
        if (this.showMenu) {
            this.showMenu = false;
        }
        if (this.showSearchBox) {
            this.showSearchBox = false;
        }
        let newPage = '/' + to.toLowerCase();
        this.appData.navbarPage = this.pageFromString(to);
        console.log('Navbar Page is now ' + this.appData.navbarPage);
        this.updateObserver();
        this.router.navigate([newPage]);
    }
    getPage() {
        if (this.appData.navbarPage === _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].game) {
            let name = this.game.name;
            if (name.length > 25) {
                return name.substring(0, 24) + '...';
            }
            else {
                return name;
            }
        }
        return this.appData.navbarPage;
    }
    active(page) {
        return (this.appData.navbarPage === page) ? 'is-active' : '';
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
        console.log(this.searchBox);
    }
    showBar() {
        return this.appData.navbarPage !== _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].game;
    }
    description() {
        if (this.appData.navbarPage === 'Feed') {
            if (this.appData.selectedChannel === '' || this.appData.selectedChannel === '#all') {
                return 'Latest on your favorites...';
            }
            return this.appData.selectedChannel;
        }
        if (this.appData.navbarPage === 'Map') {
            return 'Other players nearby...';
        }
        if (this.appData.navbarPage === 'Games') {
            return 'So many games...';
        }
        if (this.appData.navbarPage === 'Profile') {
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
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_4__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_7__["GamesService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 87, vars: 38, consts: [[1, "navbar", "is-dark", 2, "border-bottom", "5px solid #95EF72"], [1, "navbar-brand", "is-hidden-touch"], [3, "click"], ["src", "../../assets/images/pingg_logo_wide.png", "alt", "pingg: Feed", "width", "112", "height", "28"], [1, "icon", "has-text-light", "is-hidden-touch"], [1, "fas", "fa-newspaper"], [1, "is-unselectable", "is-hidden-touch"], ["data-target", "navbarExampleTransparentExample", 1, "navbar-burger", "burger", 3, "click"], [1, "navbar-brand", "is-hidden-desktop"], ["class", "navbar-item", 4, "ngIf"], ["class", "navbar-item", "style", "margin-right: -25px;", 4, "ngIf"], ["class", "navbar-item", 3, "click", 4, "ngIf"], ["id", "navbarExampleTransparentExample"], [1, "navbar-start", "is-hidden-touch"], [1, "icon", "has-text-light"], [1, "fas", "fa-map-marked-alt"], [1, "is-unselectable"], [1, "fas", "fa-gamepad"], [2, "border-radius", "50%", "margin-right", "2px", "margin-top", "5px", "width", "22px", "height", "22px", 3, "src"], [1, "navbar-item", "has-dropdown", "is-hoverable"], [1, "navbar-link", "is-hidden-mobile"], [1, "navbar-dropdown", "is-left", 2, "background-color", "#363636"], [1, "navbar-item", 3, "click"], [1, "navbar-item", "subtitle", "is-hidden-touch", "is-unselectable", 2, "margin-left", "10px"], [2, "font-size", "x-large"], [1, "navbar-start", "is-hidden-desktop"], [1, "is-unselectable", "has-text-light"], [2, "border-radius", "50%", "margin-right", "2px", "width", "22px", "height", "22px", 3, "src"], [1, "navbar-divider"], [1, "navbar-item", "has-text-light", 3, "click"], [1, "navbar-end", "is-hidden-touch"], [1, "button", "is-link", "is-outlined", "is-inverted"], [1, "navbar-item"], [1, "subtitle", "is-size-7", "is-unselectable"], [2, "font-size", "larger"], [1, "navbar-item", 2, "margin-right", "-25px"], [1, "field", "has-addons"], [1, "control", "has-icons-left"], ["type", "text", "placeholder", "Search", 1, "input", "is-small", "is-dark"], [1, "icon", "is-left"], [1, "fas", "fa-search"], [1, "button", "is-small", "is-info", 3, "click"], [1, "icon"], [1, "button", "is-small", "is-info"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_28_listener() { return ctx.setPage("Map"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00A0Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_33_listener() { return ctx.setPage("Games"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u00A0Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_38_listener() { return ctx.setPage("Profile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u00A0Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_47_listener() { return ctx.reportIssue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Report an issue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_49_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_58_listener() { return ctx.setPage("Feed"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00A0Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_63_listener() { return ctx.setPage("Map"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u00A0Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_68_listener() { return ctx.setPage("Games"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u00A0Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_73_listener() { return ctx.setPage("Profile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u00A0Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "hr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_79_listener() { return ctx.reportIssue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Report an issue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_81_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_84_listener() { return ctx.openSearchBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Feed"), " is-unselectable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Feed"), " is-unselectable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSearchBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSearchBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSearchBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-menu ", ctx.showMenu ? "is-active" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Map"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Games"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Profile"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://api.adorable.io/avatars/100/", ctx.getUser(), "@adorable.io.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", ctx.showBar() ? "|" : "", "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Feed"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Map"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Games"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Profile"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://api.adorable.io/avatars/100/", ctx.getUser(), "@adorable.io.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["span.red-number[_ngcontent-%COMP%] {\n  background: #f14668;\n  border-radius: 0.8em;\n  -moz-border-radius: 0.8em;\n  -webkit-border-radius: 0.8em;\n  color: #ffffff;\n  display: inline-block;\n  font-weight: bold;\n  line-height: 1.6em;\n  margin-right: 10.75px;\n  margin-left: 5.75px;\n  text-align: center;\n  width: 1.6em;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZOztBQUVkOztBQUVBOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Bhbi5yZWQtbnVtYmVyIHtcbiAgYmFja2dyb3VuZDogI2YxNDY2ODtcbiAgYm9yZGVyLXJhZGl1czogMC44ZW07XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMC44ZW07XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMC44ZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIG1hcmdpbi1yaWdodDogMTAuNzVweDtcbiAgbWFyZ2luLWxlZnQ6IDUuNzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMS42ZW07XG5cbn1cblxuLyogYS5uYXZiYXItaXRlbS5pcy1hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzk1RUY3Mjtcbn0gKi9cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_4__["ObserverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] }, { type: _games_service__WEBPACK_IMPORTED_MODULE_7__["GamesService"] }]; }, null); })();


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
            console.log('Subscription updated @ ReportIssueComponent');
        }));
        console.log('Subscription created @ ReportIssueComponent');
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
        this.appData.newChannelModalOpen = false;
        this.updateObserver();
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




class NewPostModalComponent {
    constructor(observerService) {
        this.observerService = observerService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
            console.log('Subscription updated @ ReportIssueComponent');
        }));
        console.log('Subscription created @ ReportIssueComponent');
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
        this.appData.newPostModalOpen = false;
        this.updateObserver();
    }
}
NewPostModalComponent.ɵfac = function NewPostModalComponent_Factory(t) { return new (t || NewPostModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"])); };
NewPostModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewPostModalComponent, selectors: [["app-new-post-modal"]], decls: 13, vars: 0, consts: [[1, "modal-background", 3, "click"], [1, "modal-card", 2, "margin", "0px"], [1, "modal-card-head"], [1, "modal-card-title"], ["aria-label", "close", 1, "delete", 3, "click"], [1, "modal-card-body", "has-text-dark"], [1, "modal-card-foot"], [1, "button", "is-success", 3, "click"], [1, "button", 3, "click"]], template: function NewPostModalComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " New Post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPostModalComponent_Template_button_click_9_listener() { return ctx.addPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPostModalComponent_Template_button_click_11_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1wb3N0LW1vZGFsL25ldy1wb3N0LW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewPostModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-post-modal',
                templateUrl: './new-post-modal.component.html',
                styleUrls: ['./new-post-modal.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"] }]; }, null); })();


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


class PostCellComponent {
    constructor() {
        this.rand = Math.round(Math.random() * 10000 + Math.random() * 100);
    }
    ngOnInit() {
    }
}
PostCellComponent.ɵfac = function PostCellComponent_Factory(t) { return new (t || PostCellComponent)(); };
PostCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostCellComponent, selectors: [["app-post-cell"]], decls: 43, vars: 3, consts: [[1, "card", "post-card"], [1, "card-content", "is-dark"], [1, "columns", "is-vcentered", 2, "margin-left", "-20px"], [1, "column", "is-1", "has-text-centered", "is-hidden-touch"], [1, "button", "is-medium", "is-text"], [1, "icon", "is-medium"], [1, "fas", "fa-arrow-up", "fa-2x"], [2, "color", "#95EF72", "margin", "5px"], [1, "fas", "fa-arrow-down", "fa-2x"], [1, "column", "is-1", "has-text-centered", "is-centered", "is-hidden-desktop"], [1, "buttons", 2, "color", "#95EF72", "margin", "5px"], [1, "button", "is-medium", "is-text", 2, "margin", "5px"], [2, "margin", "5px"], [1, "column", "is-11"], [1, "media"], [1, "media-left"], [1, "image", "is-48x48"], [2, "border-radius", "50%", "margin-right", "2px", "width", "96px", 3, "src"], [1, "media-content"], [1, "title", "is-4", "has-text-light"], [1, "subtitle", "is-6", "has-text-light"], [1, "content", "has-text-light"], ["href", "#"], ["datetime", "2016-1-1", 2, "font-weight", "bold"]], template: function PostCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "figure", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "@johnsmith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "#channel1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "#channel2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "time", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "11:09 PM - 1 Jan 2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rand % 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rand % 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://api.adorable.io/avatars/100/", ctx.rand, "@adorable.io.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".post-card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  margin-bottom: 25px;\n  background-color: #363636;\n}\n\na[_ngcontent-%COMP%] {\n  color: #95EF72;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1jZWxsL3Bvc3QtY2VsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1jZWxsL3Bvc3QtY2VsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XG59XG5cbmEge1xuICBjb2xvcjogIzk1RUY3Mjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-cell',
                templateUrl: './post-cell.component.html',
                styleUrls: ['./post-cell.component.css']
            }]
    }], function () { return []; }, null); })();


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


class ProfileContainerComponent {
    constructor() {
        this.rand = Math.round(Math.random() * 10000 + Math.random() * 100);
    }
    ngOnInit() {
    }
}
ProfileContainerComponent.ɵfac = function ProfileContainerComponent_Factory(t) { return new (t || ProfileContainerComponent)(); };
ProfileContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileContainerComponent, selectors: [["app-profile-container"]], decls: 35, vars: 1, consts: [[1, "section"], [1, "container", 2, "margin-bottom", "100px"], [1, "card", "post-card"], [1, "card-content", "is-dark"], [1, "media"], [1, "media-left"], [1, "image", "is-128x128"], [2, "border-radius", "50%", "margin-right", "2px", 3, "src"], [1, "media-content"], [1, "title", "is-2", "has-text-light"], [1, "subtitle", "is-4", "has-text-light"], [1, "subtitle", "is-6", "has-text-light", 2, "font-weight", "bolder"], ["datetime", "2016-1-1"], [1, "title", "is-3", "has-text-light"]], template: function ProfileContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "figure", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "@johnsmith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last Online:\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "time", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "11:09 PM - 1 Jan 2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Recent Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Favorite Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://api.adorable.io/avatars/100/", ctx.rand, "@adorable.io.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".post-card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  margin-bottom: 25px;\n  background-color: #363636;\n}\n\na[_ngcontent-%COMP%] {\n  color: #95EF72;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtY29udGFpbmVyL3Byb2ZpbGUtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcbn1cblxuYSB7XG4gIGNvbG9yOiAjOTVFRjcyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-container',
                templateUrl: './profile-container.component.html',
                styleUrls: ['./profile-container.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");





class ReportIssueComponent {
    constructor(observerService, firestore) {
        this.observerService = observerService;
        this.firestore = firestore;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.expanded = '';
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
            console.log('Subscription updated @ ReportIssueComponent');
        }));
        console.log('Subscription created @ ReportIssueComponent');
        this.afs = firestore;
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
        // send report here
        var input = document.getElementById("issuefield").value;
        this.closeModal();
        let error = new Error();
        error.text = input;
        error.userID = this.appData.uid;
        return new Promise((resolve, reject) => {
            this.afs
                .collection("Reports") // specify the collection
                .doc(this.appData.uid.toString()) // specify the document
                .set(JSON.parse(JSON.stringify(error))) //set all data
                .then(res => { }, err => reject(err));
        });
    }
}
ReportIssueComponent.ɵfac = function ReportIssueComponent_Factory(t) { return new (t || ReportIssueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"])); };
ReportIssueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportIssueComponent, selectors: [["app-report-issue"]], decls: 14, vars: 0, consts: [[1, "modal-background", 3, "click"], [1, "modal-card", 2, "margin", "0px"], [1, "modal-card-head"], [1, "modal-card-title"], ["aria-label", "close", 1, "delete", 3, "click"], [1, "modal-card-body", "has-text-dark"], ["id", "issuefield", "name", "issuefield", "rows", "4", "cols", "50"], [1, "modal-card-foot"], [1, "button", "is-success", 3, "click"], [1, "button", 3, "click"]], template: function ReportIssueComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "      Report an issue fields go here.\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportIssueComponent_Template_button_click_10_listener() { return ctx.sendReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportIssueComponent_Template_button_click_12_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC1pc3N1ZS9yZXBvcnQtaXNzdWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportIssueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-issue',
                templateUrl: './report-issue.component.html',
                styleUrls: ['./report-issue.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }]; }, null); })();
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
/* harmony import */ var _navbar_page_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar-page.enum */ "./src/app/navbar-page.enum.ts");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../games.service */ "./src/app/games.service.ts");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function SearchBarComponent_div_9_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_div_9_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.openGame(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://", item_r2 == null ? null : item_r2.coverURL, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r2 == null ? null : item_r2.rating, "/100");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchBarComponent_div_9_a_10_Template, 6, 3, "a", 12);
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
        this.subscriptionResults.add(this.gamesService.getResults().subscribe(results => {
            this.results = results;
        }));
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
            console.log('Subscription updated @ ReportIssueComponent');
        }));
        console.log('Subscription created @ ReportIssueComponent');
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
        this.appData.navbarPage = _navbar_page_enum__WEBPACK_IMPORTED_MODULE_2__["NavbarPage"].game;
        this.gamesService.setGameID(game.id.toString());
        this.appData.searchBarOpen = false;
        this.updateObserver();
        this.router.navigate(['/game'], { queryParams: { id: game.id } });
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_4__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], decls: 10, vars: 1, consts: [[1, "modal-background", 3, "click"], [1, "modal-content"], ["aria-label", "close", 1, "delete", 2, "float", "right", "margin", "10px", 3, "click"], [1, "panel", 2, "background-color", "whitesmoke"], [1, "panel-heading", 2, "background-color", "#3273dc", "padding", "20px"], [1, "control", "has-icons-left"], ["placeholder", "search games...", 1, "input", "is-info", 3, "keyup"], [1, "icon", "is-left"], ["aria-hidden", "true", 1, "fas", "fa-search"], [4, "ngIf"], [1, "panel-tabs"], [1, "is-active"], ["class", "panel-block is-active", 3, "click", 4, "ngFor", "ngForOf"], [1, "panel-block", "is-active", 3, "click"], [2, "max-height", "60px", 3, "src"], [1, "subtitle", "has-text-dark", 2, "margin-left", "10px", "margin-right", "10px"], [1, "subtitle", "has-text-dark"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.results == null ? null : ctx.results.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-bar',
                templateUrl: './search-bar.component.html',
                styleUrls: ['./search-bar.component.css']
            }]
    }], function () { return [{ type: _games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"] }, { type: _observer_service__WEBPACK_IMPORTED_MODULE_4__["ObserverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


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
/* harmony import */ var _navbar_page_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar-page.enum */ "./src/app/navbar-page.enum.ts");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function SidebarComponent_div_0_div_3_div_12_ul_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_0_div_3_div_12_ul_3_div_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const channel_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r8.channelClicked(channel_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](channel_r7 === ctx_r6.activeChannel ? "is-active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r7);
} }
function SidebarComponent_div_0_div_3_div_12_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_div_0_div_3_div_12_ul_3_div_1_Template, 4, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.channels);
} }
function SidebarComponent_div_0_div_3_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_div_0_div_3_div_12_ul_3_Template, 2, 1, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", title_r4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.channels.length > 0);
} }
function SidebarComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_0_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.newPost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_0_div_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.newChannel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "New Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SidebarComponent_div_0_div_3_div_12_Template, 4, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.getTitles());
} }
function SidebarComponent_div_0_div_4_div_1_ul_3_div_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r19);
} }
function SidebarComponent_div_0_div_4_div_1_ul_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_0_div_4_div_1_ul_3_div_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const section_r17 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r20.toggleExpand(section_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_div_0_div_4_div_1_ul_3_div_1_ul_4_Template, 4, 1, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r16.getOptions(section_r17).length > 0 ? "is-active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.getOptions(section_r17));
} }
function SidebarComponent_div_0_div_4_div_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_div_0_div_4_div_1_ul_3_div_1_Template, 5, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.getSections(title_r14));
} }
function SidebarComponent_div_0_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_div_0_div_4_div_1_ul_3_Template, 2, 1, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", title_r14, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.getSections(title_r14).length > 0);
} }
function SidebarComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_div_0_div_4_div_1_Template, 4, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.getTitles());
} }
function SidebarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aside", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_div_0_div_3_Template, 13, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_div_0_div_4_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.appData.navbarPage === "Feed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.appData.navbarPage !== "Feed");
} }
class SidebarComponent {
    constructor(observerService) {
        this.observerService = observerService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.expanded = '';
        this.activeChannel = '#all';
        this.channels = ['#all', '#channel1', '#channel2', '#channel3'];
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
            console.log('Subscription updated @ SidebarComponent');
        }));
        console.log('Subscription created @ SidebarComponent');
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
    newChannel() {
        this.appData.newChannelModalOpen = true;
        this.updateObserver();
    }
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
        if (this.appData.navbarPage === _navbar_page_enum__WEBPACK_IMPORTED_MODULE_4__["NavbarPage"].feed) {
            return ['Channels'];
        }
        if (this.appData.navbarPage === _navbar_page_enum__WEBPACK_IMPORTED_MODULE_4__["NavbarPage"].games) {
            return ['Sort By', 'Filter By'];
        }
        return [];
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_5__["ObserverService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 1, vars: 1, consts: [["class", "dashboard-panel is-medium has-thick-padding is-hidden-mobile", "style", "height: 100%; width: 100%; background-color: #292929;", 4, "ngIf"], [1, "dashboard-panel", "is-medium", "has-thick-padding", "is-hidden-mobile", 2, "height", "100%", "width", "100%", "background-color", "#292929"], [1, "dashboard-panel-content", "is-scrollable"], [1, "menu", "has-text-light"], [4, "ngIf"], [1, "button", "is-danger", 2, "margin-bottom", "20px", 3, "click"], [1, "icon"], [1, "fas", "fa-pencil-alt"], [1, "button", "is-info", 3, "click"], [1, "fas", "fa-hashtag"], [4, "ngFor", "ngForOf"], [1, "menu-label", 2, "margin-top", "1.5em"], ["class", "menu-list", 4, "ngIf"], [1, "menu-list"], [3, "click"], ["style", "padding-left: 15px;", 4, "ngFor", "ngForOf"], [2, "padding-left", "15px"], [1, "menu-list-item"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidebarComponent_div_0_Template, 7, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.appData.navbarPage === "Map"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  display: block;\n  padding: 0.5em 0.75em;\n  border-left: 3px solid none;\n  transition-property: border,text;\n  transition-duration: 0.1s;\n  margin-bottom: 8px;\n}\n\n.menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #292929;\n  color:  whitesmoke;\n  border-left: 3px solid #95EF72;\n  font-weight: 600;\n}\n\n.menu-list[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {\n  background-color: #292929;\n  color:  whitesmoke;\n  border-left: 3px solid #95EF72;\n  font-weight: 600;\n}\n\n.menu-list-item[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%] {\n  background-color: #292929;\n  color:  whitesmoke;\n  border-left: 3px solid #95EF72;\n  font-weight: 600;\n}\n\n.menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  border-left: 1px solid #dbdbdb;\n  margin: 0.75em;\n  padding-left: 0.75em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtbGlzdCBhIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW07XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgbm9uZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLHRleHQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLm1lbnUtbGlzdCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcbiAgY29sb3I6ICB3aGl0ZXNtb2tlO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM5NUVGNzI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tZW51LWxpc3QgYS5pcy1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICBjb2xvcjogIHdoaXRlc21va2U7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzk1RUY3MjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1lbnUtbGlzdC1pdGVtIC5pcy1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICBjb2xvcjogIHdoaXRlc21va2U7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzk1RUY3MjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1lbnUtbGlzdCBsaSB1bCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RiZGJkYjtcbiAgbWFyZ2luOiAwLjc1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_5__["ObserverService"] }]; }, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var firebaseui_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebaseui-angular */ "./node_modules/firebaseui-angular/__ivy_ngcc__/fesm2015/firebaseui-angular.js");







function SignInButtonsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignInButtonsComponent {
    constructor(observerService, afAuth) {
        this.observerService = observerService;
        this.afAuth = afAuth;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.loading = true;
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
            console.log('Subscription updated @ SignInButtonsComponent');
        }));
        console.log('Subscription created @ SignInButtonsComponent');
    }
    ngOnInit() {
        this.afAuth.authState.subscribe(d => {
            //console.log(d);
            if (d != null) {
                this.appData.isAuthenticated = true;
                this.appData.username = d.displayName;
                this.appData.email = d.email;
                this.appData.uid = d.uid;
                this.updateObserver();
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
        console.log('successCallback', data);
        this.appData.isAuthenticated = true;
        this.updateObserver();
    }
    errorCallback(data) {
        console.warn('errorCallback', data);
    }
    uiShownCallback() {
        console.log('firebase ui shown.');
        this.loading = false;
    }
}
SignInButtonsComponent.ɵfac = function SignInButtonsComponent_Factory(t) { return new (t || SignInButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"])); };
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], firebaseui_angular__WEBPACK_IMPORTED_MODULE_5__["FirebaseuiAngularLibraryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4tYnV0dG9ucy9zaWduLWluLWJ1dHRvbnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in-buttons',
                templateUrl: './sign-in-buttons.component.html',
                styleUrls: ['./sign-in-buttons.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }]; }, null); })();


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