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
/* harmony import */ var _connect_container_connect_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connect-container/connect-container.component */ "./src/app/connect-container/connect-container.component.ts");
/* harmony import */ var _profile_container_profile_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-container/profile-container.component */ "./src/app/profile-container/profile-container.component.ts");
/* harmony import */ var _chat_container_chat_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-container/chat-container.component */ "./src/app/chat-container/chat-container.component.ts");









const routes = [
    { path: '', component: _feed_container_feed_container_component__WEBPACK_IMPORTED_MODULE_2__["FeedContainerComponent"] },
    { path: 'feed', component: _feed_container_feed_container_component__WEBPACK_IMPORTED_MODULE_2__["FeedContainerComponent"] },
    { path: 'map', component: _map_container_map_container_component__WEBPACK_IMPORTED_MODULE_3__["MapContainerComponent"] },
    { path: 'connect', component: _connect_container_connect_container_component__WEBPACK_IMPORTED_MODULE_4__["ConnectContainerComponent"] },
    { path: 'profile', component: _profile_container_profile_container_component__WEBPACK_IMPORTED_MODULE_5__["ProfileContainerComponent"] },
    { path: 'chat', component: _chat_container_chat_container_component__WEBPACK_IMPORTED_MODULE_6__["ChatContainerComponent"] },
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_page_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar-page.enum */ "./src/app/navbar-page.enum.ts");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-lottie */ "./node_modules/ngx-lottie/__ivy_ngcc__/fesm2015/ngx-lottie.js");
/* harmony import */ var _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-box/login-box.component */ "./src/app/login-box/login-box.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");













function AppComponent_app_navbar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-lottie", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationCreated", function AppComponent_div_3_Template_ng_lottie_animationCreated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.options);
} }
function AppComponent_app_login_box_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login-box");
} }
function AppComponent_div_6_router_outlet_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
} }
function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_6_router_outlet_8_Template, 1, 0, "router-outlet", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.appData == null ? null : ctx_r3.appData.isAuthenticated);
} }
function AppComponent_div_7_router_outlet_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_7_router_outlet_1_Template, 1, 0, "router-outlet", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.appData == null ? null : ctx_r4.appData.isAuthenticated);
} }
class AppComponent {
    constructor(observerService, activatedRoute, router) {
        this.observerService = observerService;
        this.activatedRoute = activatedRoute;
        this.router = router;
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
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
            console.log('Subscription updated @ AppComponent');
        }));
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => {
            return (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]);
        })).subscribe((event) => {
            let url = event.url;
            url = url.replace('/', '');
            console.log('url from appComp = ' + url);
            let page = this.pageFromString(url);
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
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_4__["NavbarPage"].feed;
        }
        if (page.toLowerCase() === 'map') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_4__["NavbarPage"].map;
        }
        if (page.toLowerCase() === 'connect') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_4__["NavbarPage"].connect;
        }
        if (page.toLowerCase() === 'profile') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_4__["NavbarPage"].profile;
        }
        if (page.toLowerCase() === 'chat') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_4__["NavbarPage"].chat;
        }
        if (page.toLowerCase() === 'search') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_4__["NavbarPage"].search;
        }
        return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_4__["NavbarPage"].feed;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_5__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 5, consts: [[1, "hero", "is-centered", "is-dark", "is-fullheight"], [1, "hero-head"], [4, "ngIf"], ["class", "modal is-active", "style", "padding: 0px", 4, "ngIf"], [1, "modal", "is-active"], ["class", "hero-body content-bg", "style", "padding: 0px;", 4, "ngIf"], [1, "modal", "is-active", 2, "padding", "0px"], ["width", "100vh", "height", "100vh", 3, "options", "animationCreated"], [1, "hero-body", "content-bg", 2, "padding", "0px"], [1, "dashboard", "is-full-height"], [1, "is-hidden-mobile", 2, "height", "-webkit-fill-available", "min-width", "200px"], [1, "dashboard-main", "is-scrollable", "is-dark", 2, "max-width", "100%", "overflow-x", "hidden"], [2, "display", "inline-block"], [1, "columns", "is-centered"], [1, "column", "is-three-quarters", "content-fg"], [1, "container", 2, "margin-bottom", "60px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_navbar_2_Template, 1, 0, "app-navbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_app_login_box_5_Template, 1, 0, "app-login-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_6_Template, 9, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appData == null ? null : ctx.appData.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.appData == null ? null : ctx.appData.isAuthenticated));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.appData.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.appData == null ? null : ctx.appData.isAuthenticated) && (ctx.appData == null ? null : ctx.appData.navbarPage) !== "Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.appData == null ? null : ctx.appData.isAuthenticated) && (ctx.appData == null ? null : ctx.appData.navbarPage) === "Map");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], ngx_lottie__WEBPACK_IMPORTED_MODULE_8__["LottieComponent"], _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_9__["LoginBoxComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".circles-bg[_ngcontent-%COMP%] {\n  \n}\n\n.content-bg[_ngcontent-%COMP%] {\n  background-color: #232324;\n}\n\n.content-fg[_ngcontent-%COMP%] {\n  background-color: #292929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTs7O2lDQUcrQjtBQUNqQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmNsZXMtYmcge1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWFnZXMvcGluZ2dDaXJjbGVzLnBuZycpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICovXG59XG5cbi5jb250ZW50LWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyNDtcbn1cblxuLmNvbnRlbnQtZmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_5__["ObserverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
/* harmony import */ var _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-box/login-box.component */ "./src/app/login-box/login-box.component.ts");
/* harmony import */ var _sign_in_buttons_sign_in_buttons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-in-buttons/sign-in-buttons.component */ "./src/app/sign-in-buttons/sign-in-buttons.component.ts");
/* harmony import */ var _map_container_map_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map-container/map-container.component */ "./src/app/map-container/map-container.component.ts");
/* harmony import */ var _connect_container_connect_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./connect-container/connect-container.component */ "./src/app/connect-container/connect-container.component.ts");
/* harmony import */ var _profile_container_profile_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile-container/profile-container.component */ "./src/app/profile-container/profile-container.component.ts");
/* harmony import */ var _chat_container_chat_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chat-container/chat-container.component */ "./src/app/chat-container/chat-container.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-lottie */ "./node_modules/ngx-lottie/__ivy_ngcc__/fesm2015/ngx-lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var firebaseui_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! firebaseui-angular */ "./node_modules/firebaseui-angular/__ivy_ngcc__/fesm2015/firebaseui-angular.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! firebaseui */ "./node_modules/firebaseui/dist/esm.js");



























// // currently there is a bug while building the app with --prod
// // - https://github.com/RaphaelJenni/FirebaseUI-Angular/issues/76
// // the plugin exposes the two libraries as well. You can use those:
// import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
const firebaseUiAuthConfig = {
    signInFlow: 'popup',
    signInOptions: [
        firebase_app__WEBPACK_IMPORTED_MODULE_21__["auth"].GoogleAuthProvider.PROVIDER_ID,
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
            provider: firebase_app__WEBPACK_IMPORTED_MODULE_21__["auth"].FacebookAuthProvider.PROVIDER_ID
        },
        firebase_app__WEBPACK_IMPORTED_MODULE_21__["auth"].TwitterAuthProvider.PROVIDER_ID,
        firebase_app__WEBPACK_IMPORTED_MODULE_21__["auth"].GithubAuthProvider.PROVIDER_ID,
        {
            requireDisplayName: true,
            provider: firebase_app__WEBPACK_IMPORTED_MODULE_21__["auth"].EmailAuthProvider.PROVIDER_ID
        },
    ],
    credentialHelper: firebaseui__WEBPACK_IMPORTED_MODULE_22__["auth"].CredentialHelper.ACCOUNT_CHOOSER_COM
};
// Note we need a separate function as it's required
// by the AOT compiler.
function playerFactory() {
    return lottie_web__WEBPACK_IMPORTED_MODULE_16___default.a;
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_observer_service__WEBPACK_IMPORTED_MODULE_6__["ObserverService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_14__["GoogleMapsModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_15__["LottieModule"].forRoot({ player: playerFactory }),
            _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"],
            firebaseui_angular__WEBPACK_IMPORTED_MODULE_20__["FirebaseUIModule"].forRoot(firebaseUiAuthConfig),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _feed_container_feed_container_component__WEBPACK_IMPORTED_MODULE_5__["FeedContainerComponent"],
        _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_7__["LoginBoxComponent"],
        _sign_in_buttons_sign_in_buttons_component__WEBPACK_IMPORTED_MODULE_8__["SignInButtonsComponent"],
        _map_container_map_container_component__WEBPACK_IMPORTED_MODULE_9__["MapContainerComponent"],
        _connect_container_connect_container_component__WEBPACK_IMPORTED_MODULE_10__["ConnectContainerComponent"],
        _profile_container_profile_container_component__WEBPACK_IMPORTED_MODULE_11__["ProfileContainerComponent"],
        _chat_container_chat_container_component__WEBPACK_IMPORTED_MODULE_12__["ChatContainerComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_14__["GoogleMapsModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_15__["LottieModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"], firebaseui_angular__WEBPACK_IMPORTED_MODULE_20__["FirebaseUIModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_google_maps__WEBPACK_IMPORTED_MODULE_14__["GoogleMapsModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_15__["LottieModule"].forRoot({ player: playerFactory }),
                    _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebase),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"],
                    firebaseui_angular__WEBPACK_IMPORTED_MODULE_20__["FirebaseUIModule"].forRoot(firebaseUiAuthConfig),
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _feed_container_feed_container_component__WEBPACK_IMPORTED_MODULE_5__["FeedContainerComponent"],
                    _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_7__["LoginBoxComponent"],
                    _sign_in_buttons_sign_in_buttons_component__WEBPACK_IMPORTED_MODULE_8__["SignInButtonsComponent"],
                    _map_container_map_container_component__WEBPACK_IMPORTED_MODULE_9__["MapContainerComponent"],
                    _connect_container_connect_container_component__WEBPACK_IMPORTED_MODULE_10__["ConnectContainerComponent"],
                    _profile_container_profile_container_component__WEBPACK_IMPORTED_MODULE_11__["ProfileContainerComponent"],
                    _chat_container_chat_container_component__WEBPACK_IMPORTED_MODULE_12__["ChatContainerComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
                ],
                providers: [_observer_service__WEBPACK_IMPORTED_MODULE_6__["ObserverService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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
ChatContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatContainerComponent, selectors: [["app-chat-container"]], decls: 4, vars: 0, consts: [[1, "columns", "is-centered"], [1, "column", "is-half", "has-text-centered"]], template: function ChatContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
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

/***/ "./src/app/connect-container/connect-container.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/connect-container/connect-container.component.ts ***!
  \******************************************************************/
/*! exports provided: ConnectContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectContainerComponent", function() { return ConnectContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");




class ConnectContainerComponent {
    constructor(observerService) {
        this.observerService = observerService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
            console.log('Subscription updated @ ConnectContainerComponent');
        }));
        console.log('Subscription created @ ConnectContainerComponent');
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
ConnectContainerComponent.ɵfac = function ConnectContainerComponent_Factory(t) { return new (t || ConnectContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"])); };
ConnectContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConnectContainerComponent, selectors: [["app-connect-container"]], decls: 4, vars: 0, consts: [[1, "columns", "is-centered"], [1, "column", "is-half", "has-text-centered"]], template: function ConnectContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "connect-container works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvbm5lY3QtY29udGFpbmVyL2Nvbm5lY3QtY29udGFpbmVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-connect-container',
                templateUrl: './connect-container.component.html',
                styleUrls: ['./connect-container.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"] }]; }, null); })();


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






function FeedContainerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Post #", number_r1, "");
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
FeedContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedContainerComponent, selectors: [["app-feed-hero"]], decls: 3, vars: 1, consts: [[1, "section"], [1, "container", 2, "overflow-y", "auto", "overflow-x", "hidden"], [4, "ngFor", "ngForOf"]], template: function FeedContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FeedContainerComponent_div_2_Template, 5, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nums);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".is-three-quarters[_ngcontent-%COMP%] {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC1jb250YWluZXIvZmVlZC1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQtY29udGFpbmVyL2ZlZWQtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtdGhyZWUtcXVhcnRlcnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feed-hero',
                templateUrl: './feed-container.component.html',
                styleUrls: ['./feed-container.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_3__["ObserverService"] }]; }, null); })();


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
    animationCreated(animationItem) {
        console.log(animationItem);
    }
}
LoginBoxComponent.ɵfac = function LoginBoxComponent_Factory(t) { return new (t || LoginBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"])); };
LoginBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginBoxComponent, selectors: [["app-login-box"]], decls: 14, vars: 0, consts: [[1, "modal-card", "login-box-outer", "is-hidden-mobile"], [1, "login-box-inner", "has-text-centered"], [2, "margin-bottom", "50px"], ["src", "../../assets/images/pingg_logo.png", "width", "250", "height", "95"], [1, "subtitle"], [1, "modal-card", "login-box-outer", "is-hidden-tablet", "is-hidden-desktop"], [2, "margin-bottom", "30px"], ["src", "../../assets/images/pingg_logo.png", "width", "185", "height", "75"], [1, "subtitle", "is-6"]], template: function LoginBoxComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Where better matches are made. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-sign-in-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sign_in_buttons_sign_in_buttons_component__WEBPACK_IMPORTED_MODULE_3__["SignInButtonsComponent"]], styles: [".circles-bg[_ngcontent-%COMP%] {\n  \n}\n\n.login-box-inner[_ngcontent-%COMP%] {\n  background-color: #292929;\n  border: 10px solid #356700;\n  border-radius: 10px;\n  padding: 25px;\n}\n\n.login-box-outer[_ngcontent-%COMP%] {\n  border: 14px solid #95EF72;\n  border-radius: 24px;\n  padding: 0px;\n  margin: 0px;\n}\n\n.anim-parent[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.anim-child[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tYm94L2xvZ2luLWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7OztpQ0FHK0I7QUFDakM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87QUFDVCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWJveC9sb2dpbi1ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGVzLWJnIHtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3BpbmdnQ2lyY2xlcy5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAqL1xufVxuXG4ubG9naW4tYm94LWlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICMzNTY3MDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5sb2dpbi1ib3gtb3V0ZXIge1xuICBib3JkZXI6IDE0cHggc29saWQgIzk1RUY3MjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmFuaW0tcGFyZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYW5pbS1jaGlsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuIl19 */"] });
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
    NavbarPage["connect"] = "Connect";
    NavbarPage["profile"] = "Profile";
    NavbarPage["chat"] = "Chat";
    NavbarPage["search"] = "Search";
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function NavbarComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 44);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.appData.navbarPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.description());
} }
function NavbarComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_20_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_21_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.showSearchBox = !ctx_r5.showSearchBox; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(observerService, router) {
        this.observerService = observerService;
        this.router = router;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.subscriptionRoute = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.title = 'Stock Manager';
        this.searchBox = '';
        this.updated = false;
        this.showMenu = false;
        this.showSearchBox = false;
        // subscribe to home component messages
        //console.log('constructor load up url = ' + router.url)
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
            console.log('Subscription updated @ NavbarComponent');
        }));
        console.log('Subscription created @ NavbarComponent');
    }
    ngOnInit() { }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    updateObserver() {
        this.observerService.sendMessage(this.appData);
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
        let newPage = '/' + to.toLowerCase();
        this.appData.navbarPage = this.pageFromString(to);
        console.log('Navbar Page is now ' + this.appData.navbarPage);
        this.updateObserver();
        this.router.navigate([newPage]);
    }
    getPage() {
        return this.appData.navbarPage;
    }
    active(page) {
        return this.appData.navbarPage === page ? 'is-active' : '';
    }
    pageFromString(page) {
        if (page.toLowerCase() === 'feed') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].feed;
        }
        if (page.toLowerCase() === 'map') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].map;
        }
        if (page.toLowerCase() === 'connect') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].connect;
        }
        if (page.toLowerCase() === 'profile') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].profile;
        }
        if (page.toLowerCase() === 'chat') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].chat;
        }
        if (page.toLowerCase() === 'search') {
            return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].search;
        }
        return _navbar_page_enum__WEBPACK_IMPORTED_MODULE_1__["NavbarPage"].feed;
    }
    logSearchBox() {
        console.log(this.searchBox);
    }
    description() {
        if (this.appData.navbarPage === 'Feed') {
            return 'Latest on your favorites...';
        }
        if (this.appData.navbarPage === 'Map') {
            return 'Other players nearby...';
        }
        if (this.appData.navbarPage === 'Connect') {
            return 'Recommendations from us...';
        }
        if (this.appData.navbarPage === 'Profile') {
            return 'What makes you unique...';
        }
        if (this.appData.navbarPage === 'Chat') {
            return 'Direct + Group Messaging...';
        }
        return '';
    }
    logout() {
        this.appData = new _app_data__WEBPACK_IMPORTED_MODULE_2__["AppData"]();
        this.updateObserver();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_4__["ObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 107, vars: 41, consts: [[1, "navbar", "is-dark", 2, "border-bottom", "5px solid #95EF72"], [1, "navbar-brand", "is-hidden-touch"], [3, "click"], ["src", "../../assets/images/pingg_logo_wide.png", "alt", "pingg: Feed", "width", "112", "height", "28"], [1, "icon", "has-text-light", "is-hidden-touch"], [1, "fas", "fa-newspaper"], [1, "is-unselectable", "is-hidden-touch"], ["data-target", "navbarExampleTransparentExample", 1, "navbar-burger", "burger", 3, "click"], [1, "navbar-brand", "is-hidden-desktop"], ["class", "navbar-item", 4, "ngIf"], ["class", "navbar-item", "style", "margin-right: -25px;", 4, "ngIf"], ["class", "navbar-item", 3, "click", 4, "ngIf"], ["id", "navbarExampleTransparentExample"], [1, "navbar-start", "is-hidden-touch"], [1, "icon", "has-text-light"], [1, "fas", "fa-map-marked-alt"], [1, "is-unselectable"], [1, "fas", "fa-address-card"], [1, "navbar-item", "has-dropdown", "is-hoverable"], [1, "navbar-link", "is-hidden-mobile"], [1, "navbar-dropdown", "is-left", 2, "background-color", "#363636"], [1, "icon"], [1, "fas", "fa-user-edit"], [1, "fas", "fa-envelope"], [1, "red-number"], [1, "navbar-item"], [1, "navbar-item", 3, "click"], [1, "navbar-item", "subtitle", "is-hidden-touch", "is-unselectable", 2, "margin-left", "10px"], [2, "font-size", "x-large"], [1, "navbar-start", "is-hidden-desktop"], [1, "is-unselectable", "has-text-light"], [1, "fas", "fa-user-edit", "has-text-light"], [1, "navbar-divider"], [1, "navbar-item", "has-text-light"], [1, "navbar-item", "has-text-light", 3, "click"], [1, "navbar-end", "is-hidden-touch"], [1, "navbar-item", "field", "has-addons"], [1, "control", "has-icons-left"], ["type", "text", "placeholder", "Search", 1, "input"], [1, "icon", "is-left"], [1, "fas", "fa-search"], [1, "control"], [1, "button", "is-info"], [1, "subtitle", "is-size-7", "is-unselectable"], [2, "font-size", "larger"], [1, "navbar-item", 2, "margin-right", "-25px"], [1, "field", "has-addons"], ["type", "text", "placeholder", "Search", 1, "input", "is-small", "is-dark"], [1, "button", "is-small", "is-info", 3, "click"], [1, "button", "is-small", "is-info"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_33_listener() { return ctx.setPage("Connect"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u00A0Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_43_listener() { return ctx.setPage("Profile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u00A0Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_48_listener() { return ctx.setPage("Chat"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u00A0Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Report an issue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_57_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_66_listener() { return ctx.setPage("Feed"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u00A0Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_71_listener() { return ctx.setPage("Map"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u00A0Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_76_listener() { return ctx.setPage("Connect"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u00A0Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_81_listener() { return ctx.setPage("Profile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u00A0Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_86_listener() { return ctx.setPage("Chat"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u00A0Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "hr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Report an issue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_96_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Feed"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Feed"), "");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Connect"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Profile"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Chat"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.appData.navbarPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Feed"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Map"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Connect"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Profile"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar-item ", ctx.active("Chat"), "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["span.red-number[_ngcontent-%COMP%] {\n  background: #f14668;\n  border-radius: 0.8em;\n  -moz-border-radius: 0.8em;\n  -webkit-border-radius: 0.8em;\n  color: #ffffff;\n  display: inline-block;\n  font-weight: bold;\n  line-height: 1.6em;\n  margin-right: 10.75px;\n  margin-left: 5.75px;\n  text-align: center;\n  width: 1.6em;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZOztBQUVkOztBQUVBOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Bhbi5yZWQtbnVtYmVyIHtcbiAgYmFja2dyb3VuZDogI2YxNDY2ODtcbiAgYm9yZGVyLXJhZGl1czogMC44ZW07XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMC44ZW07XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMC44ZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIG1hcmdpbi1yaWdodDogMTAuNzVweDtcbiAgbWFyZ2luLWxlZnQ6IDUuNzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMS42ZW07XG5cbn1cblxuLyogYS5uYXZiYXItaXRlbS5pcy1hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzk1RUY3Mjtcbn0gKi9cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_4__["ObserverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


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
    constructor() { }
    ngOnInit() {
    }
}
ProfileContainerComponent.ɵfac = function ProfileContainerComponent_Factory(t) { return new (t || ProfileContainerComponent)(); };
ProfileContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileContainerComponent, selectors: [["app-profile-container"]], decls: 4, vars: 0, consts: [[1, "columns", "is-centered"], [1, "column", "is-half", "has-text-centered"]], template: function ProfileContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "profile-container works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtY29udGFpbmVyL3Byb2ZpbGUtY29udGFpbmVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-container',
                templateUrl: './profile-container.component.html',
                styleUrls: ['./profile-container.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _navbar_page_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar-page.enum */ "./src/app/navbar-page.enum.ts");
/* harmony import */ var _observer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observer.service */ "./src/app/observer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SidebarComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_0_div_4_ul_3_div_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r8);
} }
function SidebarComponent_div_0_div_4_ul_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_0_div_4_ul_3_div_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const section_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r9.toggleExpand(section_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_div_0_div_4_ul_3_div_1_ul_4_Template, 4, 1, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r5.getOptions(section_r6).length > 0 ? "is-active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.getOptions(section_r6));
} }
function SidebarComponent_div_0_div_4_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_div_0_div_4_ul_3_div_1_Template, 5, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.getSections(title_r3));
} }
function SidebarComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_div_0_div_4_ul_3_Template, 2, 1, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", title_r3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getSections(title_r3).length > 0);
} }
function SidebarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aside", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_div_0_div_3_Template, 6, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_div_0_div_4_Template, 4, 2, "div", 5);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.getTitles());
} }
class SidebarComponent {
    constructor(observerService) {
        this.observerService = observerService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.expanded = '';
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
    getOptions(section) {
        if (!(this.expanded === section)) {
            return [];
        }
        if (section === 'Genre') {
            return ['Arcade', 'Fantasy', 'Puzzle', 'Shooter'];
        }
        if (section === 'Platform') {
            return ['Console', 'Desktop', 'Mobile'];
        }
        return [];
    }
    getSections(title) {
        if (title === 'Filter By') {
            return ['Genre', 'Platform'];
        }
        if (title === 'Sort By') {
            return ['Top Rated', 'Most Rated', 'Newest', 'Oldest'];
        }
        if (title === 'Connect With') {
            return ['Games', 'Players'];
        }
        return [];
    }
    getTitles() {
        if (this.appData.navbarPage === _navbar_page_enum__WEBPACK_IMPORTED_MODULE_2__["NavbarPage"].feed) {
            return ['Filter By'];
        }
        if (this.appData.navbarPage === _navbar_page_enum__WEBPACK_IMPORTED_MODULE_2__["NavbarPage"].connect) {
            return ['Connect With', 'Sort By', 'Filter By'];
        }
        return [];
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_3__["ObserverService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 1, vars: 1, consts: [["class", "dashboard-panel is-medium has-thick-padding is-hidden-mobile", "style", "height: 100%; width: 100%; background-color: #292929;", 4, "ngIf"], [1, "dashboard-panel", "is-medium", "has-thick-padding", "is-hidden-mobile", 2, "height", "100%", "width", "100%", "background-color", "#292929"], [1, "dashboard-panel-content", "is-scrollable"], [1, "menu", "has-text-light"], ["class", "control", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "control"], [1, "button", "is-danger"], [1, "icon"], [1, "fas", "fa-pencil-alt"], [1, "menu-label", 2, "margin-top", "1.5em"], ["class", "menu-list", 4, "ngIf"], [1, "menu-list"], [3, "click"], ["style", "padding-left: 15px;", 4, "ngFor", "ngForOf"], [2, "padding-left", "15px"], [1, "menu-list-item"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidebarComponent_div_0_Template, 7, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.appData.navbarPage === "Map"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  display: block;\n  padding: 0.5em 0.75em;\n  border-left: 3px solid none;\n  transition-property: border,text;\n  transition-duration: 0.1s;\n  margin-bottom: 8px;\n}\n\n.menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #292929;\n  color:  whitesmoke;\n  border-left: 3px solid #95EF72;\n  font-weight: 600;\n}\n\n.menu-list[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {\n  background-color: #292929;\n  color:  whitesmoke;\n  border-left: 3px solid #95EF72;\n  font-weight: 600;\n}\n\n.menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  border-left: 1px solid #dbdbdb;\n  margin: 0.75em;\n  padding-left: 0.75em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtbGlzdCBhIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW07XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgbm9uZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLHRleHQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLm1lbnUtbGlzdCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcbiAgY29sb3I6ICB3aGl0ZXNtb2tlO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM5NUVGNzI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tZW51LWxpc3QgYS5pcy1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICBjb2xvcjogIHdoaXRlc21va2U7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzk1RUY3MjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1lbnUtbGlzdCBsaSB1bCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RiZGJkYjtcbiAgbWFyZ2luOiAwLjc1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_3__["ObserverService"] }]; }, null); })();


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
/* harmony import */ var firebaseui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebaseui-angular */ "./node_modules/firebaseui-angular/__ivy_ngcc__/fesm2015/firebaseui-angular.js");





class SignInButtonsComponent {
    constructor(observerService) {
        this.observerService = observerService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.title = 'Stock Manager';
        // subscribe to home component messages
        this.subscription.add(observerService.getMessage().subscribe(message => {
            this.appData = message;
            console.log('Subscription updated @ SignInButtonsComponent');
        }));
        console.log('Subscription created @ SignInButtonsComponent');
    }
    ngOnInit() { }
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
}
SignInButtonsComponent.ɵfac = function SignInButtonsComponent_Factory(t) { return new (t || SignInButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"])); };
SignInButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInButtonsComponent, selectors: [["app-sign-in-buttons"]], decls: 7, vars: 0, consts: [[1, "has-text-light", 3, "click"]], template: function SignInButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "firebase-ui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInButtonsComponent_Template_a_click_3_listener() { return ctx.bypassLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BYPASS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [firebaseui_angular__WEBPACK_IMPORTED_MODULE_3__["FirebaseuiAngularLibraryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4tYnV0dG9ucy9zaWduLWluLWJ1dHRvbnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in-buttons',
                templateUrl: './sign-in-buttons.component.html',
                styleUrls: ['./sign-in-buttons.component.css']
            }]
    }], function () { return [{ type: _observer_service__WEBPACK_IMPORTED_MODULE_2__["ObserverService"] }]; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyApAZDiQfHi16v24XDG0ajJLD-MeeheoTM",
        authDomain: "cs1530group11.firebaseapp.com",
        databaseURL: "https://cs1530group11.firebaseio.com",
        projectId: "cs1530group11",
        storageBucket: "cs1530group11.appspot.com",
        messagingSenderId: "928236810256",
        appId: "1:928236810256:web:af0c30b9e9bfa0a2535a95",
        measurementId: "G-RBLJG5JC0D"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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