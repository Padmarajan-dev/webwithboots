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

/***/ "./node_modules/raw-loader/index.js!./src/app/about-component/about-component.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-component/about-component.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n\t<div class=\"col-12 col-sm-12 col-md-12 col-lg-12 about ml-2\">\n        <h4>About</h4>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n<app-sidebar-component></app-sidebar-component>\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-component/home-component.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-component/home-component.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row justify-content-center\">\n\t<div class=\"col-12 col-sm-12 col-md-12 col-lg-12 home ml-2\">\n\t\t<h4>Home</h4>\n\t\t<form>\n\t\t\t<div>\n\t\t\t\t<label>User</label>\n\t\t\t\t<input type=\"text\" name=\"user\" class=\"form-control border-left-0 border-right-0 border-top-0 border-dark\"\n\t\t\t  ngModel>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>Email</label>\n\t\t\t\t<input type=\"text\" name=\"email\" class=\"form-control border-left-0 border-right-0 border-top-0 border-dark\"\n\t\t\t\tngModel>\n\t\t\t</div>\n\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\n\t\t\t\t<input type=\"radio\" class=\"custom-control-input\" name=\"radiobtn\" id=\"customRadio\"\n\t\t\t\t\tvalue=\"male\"   ngModel>\n\t\t\t\t<label class=\"custom-control-label\" for=\"customRadio\">Male</label>\n\t\t\t</div>\n\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\n\t\t\t\t<input type=\"radio\" class=\"custom-control-input\" name=\"radiobtn\" id=\"customRadio2\"\n\t\t\t\t\tvalue=\"female\"   ngModel>\n\t\t\t\t<label class=\"custom-control-label\" for=\"customRadio2\">Female</label>\n\t\t\t</div>\n\t\t\t<div class=\"mt-2\">\n\t\t\t\t<div class=\"form-check-inline\" >\n\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t<input type=\"checkbox\" name='india' class=\"form-check-input\" value=\"India\"   ngModel>India\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-check-inline\" >\n\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" name='usa' value=\"USA\"   ngModel>USA\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-check-inline\">\n\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" name='russia' value=\"Russia\"   ngModel>Russia\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<button class=\"btn btn-success\" (click)=\"adddiv()\">Add Div</button>\n\t\t\t<!--<div class=\"form mt-4\" formArrayName=\"dynamicform\"\n\t\t\t\t*ngFor=\"let dymfrm of myform.get('dynamicform').controls;let i=index;\">\n\t\t\t\t<div class=\"form-group\" [formGroupName]=\"i\">\n\t\t\t\t\t<label class=\"form-check-label\">language</label>\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"languages\">\n\t\t\t\t\t\t<option>Tamil</option>\n\t\t\t\t\t\t<option>Hindi</option>\n\t\t\t\t\t\t<option>English</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<label class=\"form-check-label\">Intrests</label>\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"intrests\">\n\t\t\t\t\t\t<option>Cricket</option>\n\t\t\t\t\t\t<option>Football</option>\n\t\t\t\t\t\t<option>VolleyBall</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"btn btn-warning\" (click)=\"remdiv(i)\">removeDiv</button>\n\t\t\t</div>-->\n\t\t\t<button type=\"submit\" class=\"btn btn-info mt-2\" >Click</button>\n\t\t</form><br><br>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mainpage/mainpage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mainpage/mainpage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n\t<div class=\"col-12 col-sm-12 col-md-12 col-lg-12 main ml-2\">\n\t\t<h4>Main-page</h4>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/materialtraining/materialtraining.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/materialtraining/materialtraining.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 train ml-2 p-2\">\n        <h5 class=\"ml-4\">Material Training</h5>\n        <div class=\"col-10 col-sm-10 col-lg-5 col-md-5 mainform\" class=\"ml-n5 ml-auto mt-4\">\n            <div class=\"mt-4\">\n                <h6 class=\"ml-auto ml-sm-auto ml-md-auto ml-lg-auto\">Inputfields</h6>\n                <mat-form-field class=\"ml-1\">\n                    <input matInput type=\"text\" placeholder=\"Enter Your FirstName\">\n                </mat-form-field>\n                <mat-form-field class=\"ml-1 ml-lg-4\">\n                    <input matInput type=\"text\" placeholder=\"Enter Your LastName\">\n                </mat-form-field>\n            </div>\n            <div class=\"mt-4\">\n                <h6 class=\"ml-auto ml-sm-auto ml-md-auto ml-lg-auto\">Checkbox</h6>\n                <mat-checkbox class=\"ml-2\">value1</mat-checkbox>\n                <mat-checkbox class=\"ml-2\">value2</mat-checkbox>\n                <mat-checkbox class=\"ml-sm-4 ml-2\">value3</mat-checkbox>\n            </div>\n            <div class=\"mt-4\">\n                <h6 class=\"ml-auto ml-sm-auto ml-md-auto ml-lg-auto\">RadioButtons</h6>\n                <mat-radio-group>\n                    <mat-radio-button class=\"ml-1\" value=\"0\">Option1</mat-radio-button>\n                    <mat-radio-button class=\"ml-1\" value=\"1\">Option2</mat-radio-button>\n                </mat-radio-group>\n            </div>\n            <div class=\"mt-4\">\n                <h6 class=\"ml-auto ml-sm-auto ml-md-auto ml-lg-auto\">SelectBox</h6>\n                <mat-form-field>\n                    <mat-label>Programmingin</mat-label>\n                    <mat-select>\n                        <mat-option *ngFor=\"let lang of langs\" [value]=\"lang\">{{lang}}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project-component/project-component.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project-component/project-component.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>project-component works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar-component/sidebar-component.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar-component/sidebar-component.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-dark sidebar float-left\">\n\t<ul class=\"list-unstyled m-4 m-md-4 ml-sm-4 m-lg-4\">\n\t\t<li><a routerLink=\"/home\"><button class=\"btn btn-info\">Home</button></a></li>\n\t\t<li class=\"mt-md-4 mt-4 mt-sm-4 mt-lg-4\"><a routerLink=\"/about\"><button class=\"btn btn-info\">About</button></a>\n\t\t</li>\n\t\t<li class=\"mt-md-4 mt-4 mt-sm-4 mt-lg-4\"><a routerLink=\"/traning\"><button class=\"btn btn-info\">Training</button></a>\n\t\t</li>\n\t\t<li class=\"mt-md-4 mt-4 mt-sm-4 mt-lg-4\"><a routerLink=\"/materialtraning\"><button class=\"btn btn-info\">Material</button></a>\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/training/training.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/training/training.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"train\">\n        <ul *ngFor=\"let car of cars\">\n                <li style=\"color:black;\">{{car}}</li>\n            </ul>\n    <form>\n        <div *ngIf=\"myname=='raju';then mydiv else others\"></div>\n        <ng-template #mydiv>\n            <h4>my div</h4>\n                \n            <ul class=\"nav nav-pills ml-3\">\n                    <li class=\"ml-3\"><a class=\"btn btn-info\" (click)=\"view='view1'\">View1</a></li>\n                    <li class=\"ml-3\"><a class=\"btn btn-info\" (click)=\"view='view2'\">View2</a></li>\n                </ul>\n                <div [ngSwitch]=\"view\">\n                  <div *ngSwitchCase=\"'view1'\">viewmode1</div>\n                  <div *ngSwitchCase=\"'view2'\">viewmode2</div>\n                </div>\n        </ng-template>\n        <ng-template #others>\n            <h4>others</h4>\n        </ng-template>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/about-component/about-component.component.css":
/*!***************************************************************!*\
  !*** ./src/app/about-component/about-component.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LWNvbXBvbmVudC9hYm91dC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/about-component/about-component.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/about-component/about-component.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-component',
            template: __webpack_require__(/*! raw-loader!./about-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-component/about-component.component.html"),
            styles: [__webpack_require__(/*! ./about-component.component.css */ "./src/app/about-component/about-component.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'My-Angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _project_component_project_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project-component/project-component.component */ "./src/app/project-component/project-component.component.ts");
/* harmony import */ var _sidebar_component_sidebar_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar-component/sidebar-component.component */ "./src/app/sidebar-component/sidebar-component.component.ts");
/* harmony import */ var _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-component/home-component.component */ "./src/app/home-component/home-component.component.ts");
/* harmony import */ var _about_component_about_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about-component/about-component.component */ "./src/app/about-component/about-component.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _training_training_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./training/training.component */ "./src/app/training/training.component.ts");
/* harmony import */ var _newapp_route__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./newapp.route */ "./src/app/newapp.route.ts");
/* harmony import */ var _materialtraining_materialtraining_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./materialtraining/materialtraining.component */ "./src/app/materialtraining/materialtraining.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _project_component_project_component_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponentComponent"],
                _sidebar_component_sidebar_component_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponentComponent"],
                _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _about_component_about_component_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_14__["MainpageComponent"],
                _training_training_component__WEBPACK_IMPORTED_MODULE_16__["TrainingComponent"],
                _materialtraining_materialtraining_component__WEBPACK_IMPORTED_MODULE_18__["MaterialtrainingComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_12__["Approute"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(_newapp_route__WEBPACK_IMPORTED_MODULE_17__["trainingroutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: Approute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Approute", function() { return Approute; });
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _training_training_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training/training.component */ "./src/app/training/training.component.ts");
/* harmony import */ var _materialtraining_materialtraining_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materialtraining/materialtraining.component */ "./src/app/materialtraining/materialtraining.component.ts");
/* harmony import */ var _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-component/home-component.component */ "./src/app/home-component/home-component.component.ts");
/* harmony import */ var _about_component_about_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-component/about-component.component */ "./src/app/about-component/about-component.component.ts");





var Approute = [
    {
        path: "traning",
        component: _training_training_component__WEBPACK_IMPORTED_MODULE_1__["TrainingComponent"]
    },
    {
        path: "materialtraning",
        component: _materialtraining_materialtraining_component__WEBPACK_IMPORTED_MODULE_2__["MaterialtrainingComponent"]
    },
    {
        path: '',
        component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_0__["MainpageComponent"]
    },
    {
        path: 'home',
        component: _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'about',
        component: _about_component_about_component_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }
];


/***/ }),

/***/ "./src/app/home-component/home-component.component.css":
/*!*************************************************************!*\
  !*** ./src/app/home-component/home-component.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form\r\n{\r\n    height:10em;\r\n    width:100%;\r\n    border:1px solid gray;\r\n    padding:4%;\r\n    overflow-y:scroll;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1jb21wb25lbnQvaG9tZS1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1jb21wb25lbnQvaG9tZS1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtXHJcbntcclxuICAgIGhlaWdodDoxMGVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgZ3JheTtcclxuICAgIHBhZGRpbmc6NCU7XHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home-component/home-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home-component/home-component.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-component',
            template: __webpack_require__(/*! raw-loader!./home-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/home-component/home-component.component.html"),
            styles: [__webpack_require__(/*! ./home-component.component.css */ "./src/app/home-component/home-component.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainpageComponent = /** @class */ (function () {
    function MainpageComponent() {
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    MainpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! raw-loader!./mainpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.css */ "./src/app/mainpage/mainpage.component.css")]
        })
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/materialtraining/materialtraining.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/materialtraining/materialtraining.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainform\r\n{\r\n    height:14em;\r\n    width:100%;\r\n    border:1px solid blueviolet;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWx0cmFpbmluZy9tYXRlcmlhbHRyYWluaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztJQUNYLFVBQVU7SUFDViwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhbHRyYWluaW5nL21hdGVyaWFsdHJhaW5pbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluZm9ybVxyXG57XHJcbiAgICBoZWlnaHQ6MTRlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsdWV2aW9sZXQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/materialtraining/materialtraining.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/materialtraining/materialtraining.component.ts ***!
  \****************************************************************/
/*! exports provided: MaterialtrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialtrainingComponent", function() { return MaterialtrainingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MaterialtrainingComponent = /** @class */ (function () {
    function MaterialtrainingComponent() {
        this.isCheck = true;
        this.langs = ["Jquery", "js", "python", "angular"];
    }
    MaterialtrainingComponent.prototype.ngOnInit = function () {
    };
    MaterialtrainingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-materialtraining',
            template: __webpack_require__(/*! raw-loader!./materialtraining.component.html */ "./node_modules/raw-loader/index.js!./src/app/materialtraining/materialtraining.component.html"),
            styles: [__webpack_require__(/*! ./materialtraining.component.css */ "./src/app/materialtraining/materialtraining.component.css")]
        })
    ], MaterialtrainingComponent);
    return MaterialtrainingComponent;
}());



/***/ }),

/***/ "./src/app/newapp.route.ts":
/*!*********************************!*\
  !*** ./src/app/newapp.route.ts ***!
  \*********************************/
/*! exports provided: trainingroutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trainingroutes", function() { return trainingroutes; });
var trainingroutes = [];


/***/ }),

/***/ "./src/app/project-component/project-component.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/project-component/project-component.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtY29tcG9uZW50L3Byb2plY3QtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/project-component/project-component.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/project-component/project-component.component.ts ***!
  \******************************************************************/
/*! exports provided: ProjectComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponentComponent", function() { return ProjectComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectComponentComponent = /** @class */ (function () {
    function ProjectComponentComponent() {
    }
    ProjectComponentComponent.prototype.ngOnInit = function () {
    };
    ProjectComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-component',
            template: __webpack_require__(/*! raw-loader!./project-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/project-component/project-component.component.html"),
            styles: [__webpack_require__(/*! ./project-component.component.css */ "./src/app/project-component/project-component.component.css")]
        })
    ], ProjectComponentComponent);
    return ProjectComponentComponent;
}());



/***/ }),

/***/ "./src/app/sidebar-component/sidebar-component.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/sidebar-component/sidebar-component.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXItY29tcG9uZW50L3NpZGViYXItY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sidebar-component/sidebar-component.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sidebar-component/sidebar-component.component.ts ***!
  \******************************************************************/
/*! exports provided: SidebarComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponentComponent", function() { return SidebarComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponentComponent = /** @class */ (function () {
    function SidebarComponentComponent() {
    }
    SidebarComponentComponent.prototype.ngOnInit = function () {
    };
    SidebarComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar-component',
            template: __webpack_require__(/*! raw-loader!./sidebar-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar-component/sidebar-component.component.html"),
            styles: [__webpack_require__(/*! ./sidebar-component.component.css */ "./src/app/sidebar-component/sidebar-component.component.css")]
        })
    ], SidebarComponentComponent);
    return SidebarComponentComponent;
}());



/***/ }),

/***/ "./src/app/training/training.component.css":
/*!*************************************************!*\
  !*** ./src/app/training/training.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWluaW5nL3RyYWluaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/training/training.component.ts":
/*!************************************************!*\
  !*** ./src/app/training/training.component.ts ***!
  \************************************************/
/*! exports provided: TrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingComponent", function() { return TrainingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrainingComponent = /** @class */ (function () {
    function TrainingComponent() {
        this.myname = "raju";
        this.view = 'view2';
        this.cars = ['toyota', 'scorpio', 'bmW'];
    }
    TrainingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-training',
            template: __webpack_require__(/*! raw-loader!./training.component.html */ "./node_modules/raw-loader/index.js!./src/app/training/training.component.html"),
            styles: [__webpack_require__(/*! ./training.component.css */ "./src/app/training/training.component.css")]
        })
    ], TrainingComponent);
    return TrainingComponent;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular\My-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map