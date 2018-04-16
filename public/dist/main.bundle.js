webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container  py-5\">\r\n    <router-outlet></router-outlet>\r\n    <app-error></app-error>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(LoginServices) {
        this.LoginServices = LoginServices;
        this.title = 'app';
    }
    AppComponent.prototype.isLoggedIn = function () {
        return this.LoginServices.isLoggedIn();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_header_header_component__ = __webpack_require__("./src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_signup_service__ = __webpack_require__("./src/app/signup/signup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__errors_error_component__ = __webpack_require__("./src/app/errors/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__errors_error_service__ = __webpack_require__("./src/app/errors/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_helper_auth_gaurd_service__ = __webpack_require__("./src/app/common_helper/auth-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__feestructure_feestructure_component__ = __webpack_require__("./src/app/feestructure/feestructure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__feestructure_feestructure_service__ = __webpack_require__("./src/app/feestructure/feestructure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__manage_session_manage_session_component__ = __webpack_require__("./src/app/manage-session/manage-session.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_13__errors_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__feestructure_feestructure_component__["a" /* FeestructureComponent */],
                __WEBPACK_IMPORTED_MODULE_21__manage_session_manage_session_component__["a" /* ManageSessionComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot([
                    { path: "signup", component: __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */] },
                    { path: "login", component: __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */] },
                    { path: "home", component: __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__common_helper_auth_gaurd_service__["a" /* AuthGaurd */]] },
                    { path: "settings/fee-structure", component: __WEBPACK_IMPORTED_MODULE_19__feestructure_feestructure_component__["a" /* FeestructureComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__common_helper_auth_gaurd_service__["a" /* AuthGaurd */]] },
                    { path: "settings/manage-session", component: __WEBPACK_IMPORTED_MODULE_21__manage_session_manage_session_component__["a" /* ManageSessionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__common_helper_auth_gaurd_service__["a" /* AuthGaurd */]] }
                ])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__signup_signup_service__["a" /* SignupService */],
                __WEBPACK_IMPORTED_MODULE_14__errors_error_service__["a" /* ErrorService */],
                __WEBPACK_IMPORTED_MODULE_16__login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_20__feestructure_feestructure_service__["a" /* FeestructureService */],
                __WEBPACK_IMPORTED_MODULE_18__common_helper_auth_gaurd_service__["a" /* AuthGaurd */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common_helper/auth-gaurd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGaurd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGaurd = /** @class */ (function () {
    function AuthGaurd(router, AuthServices) {
        this.router = router;
        this.AuthServices = AuthServices;
    }
    AuthGaurd.prototype.canActivate = function (route, state) {
        if (this.AuthServices.isLoggedIn())
            return true;
        this.router.navigate(['/login']);
    };
    AuthGaurd = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */]])
    ], AuthGaurd);
    return AuthGaurd;
}());



/***/ }),

/***/ "./src/app/errors/error.component.css":
/***/ (function(module, exports) {

module.exports = ".backdrop{ \r\n    width:100%; \r\n    height:100vh; \r\n    background-color:#000; \r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    opacity: .6;\r\n}"

/***/ }),

/***/ "./src/app/errors/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"backdrop\" [ngStyle]=\"{'display': display}\"></div>\n<div class=\"modal\"  [ngStyle]=\"{'display': display}\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\"><span class=\"text-danger\">{{ error?.title }}</span></h5>\n        <button type=\"button\" class=\"close\" (click)='onErrorHandled()' aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n          <span class=\"text-danger\">\n            <p><i class=\"fa fa-close\">{{ error?.message }}</i></p>\n      </span>\n      </div>\n      <div class=\"modal-footer\">\n       \n        <button type=\"button\" class=\"btn btn-secondary\" (click)='onErrorHandled()' >Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/errors/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_service__ = __webpack_require__("./src/app/errors/error.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(errorService) {
        this.errorService = errorService;
        this.display = "none";
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorService.errorOccured
            .subscribe(function (error) {
            _this.error = error;
            _this.display = 'block';
        });
    };
    ErrorComponent.prototype.onErrorHandled = function () {
        this.display = "none";
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error',
            template: __webpack_require__("./src/app/errors/error.component.html"),
            styles: [__webpack_require__("./src/app/errors/error.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__error_service__["a" /* ErrorService */]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/errors/error.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error; });
var Error = /** @class */ (function () {
    function Error(title, message) {
        this.title = title;
        this.message = message;
    }
    return Error;
}());



/***/ }),

/***/ "./src/app/errors/error.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_model__ = __webpack_require__("./src/app/errors/error.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorService = /** @class */ (function () {
    function ErrorService() {
        this.errorOccured = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ErrorService.prototype.handelError = function (error) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2_util__["isObject"])(error)) {
            error.title = error.title === undefined ? "Unknown Error" : error.title;
            error.error.message = error.error === undefined ? "Uncatchable error found." : error.error.message;
            var errorData = new __WEBPACK_IMPORTED_MODULE_1__error_model__["a" /* Error */](error.title, error.error.message);
            this.errorOccured.emit(errorData);
        }
        else {
            var errorData = new __WEBPACK_IMPORTED_MODULE_1__error_model__["a" /* Error */]({ error: { title: 'Unknown Error', error: { message: 'Unknown error occurred.' } } });
            this.errorOccured.emit(errorData);
        }
    };
    ErrorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ErrorService);
    return ErrorService;
}());



/***/ }),

/***/ "./src/app/feestructure/feestructure.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feestructure/feestructure.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"feeStructureForm\" novalidate>\n    <input class=\"form-control\" formControlName=\"_id\" name=\"_id\" id=\"_id\" type=\"hidden\">\n  <fieldset>\n    <legend>\n      Update Fee Component\n    </legend>\n    <div *ngIf=\"errorMsg\" class='alert alert-danger'>\n      {{ errorMsg }}\n    </div>\n    <div class='alert alert-success' *ngIf=\"successMsg\">Fee Structure Records Updated Successfully.</div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-6\">\n        <label for=\"item_name\">Item Name</label>\n        <input class=\"form-control\" formControlName=\"item_name\" name=\"item_name\" id=\"item_name\" type=\"text\">\n        <div class=\"alert alert-danger\" *ngIf=\"feeStructureForm.get('item_name').invalid && feeStructureForm.get('item_name').touched\">\n          Item Name is required.\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <label for=\"item_amount\">Item Amount</label>\n        <input class=\"form-control\" formControlName=\"item_amount\" name=\"item_amount\" id=\"item_amount\" type=\"text\">\n        <div class=\"alert alert-danger\" *ngIf=\"feeStructureForm.get('item_amount').invalid && feeStructureForm.get('item_amount').touched\">\n          Item Amount is required.\n        </div>\n      </div>\n\n    </div>\n\n    <button type=\"submit\" [disabled]=\"feeStructureForm.invalid\" (click)=\" saveFeeStructure()\" class=\"btn btn-primary float-right\">Save</button>\n  </fieldset>\n</form>\n<hr>\n<table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Item Name</th>\n      <th scope=\"col\">Item Amount</th>\n      <th scope=\"col\">Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngIf=\"!fee_structure_data\">\n      <td colspan=\"4\">\n        <div class=\"alert alert-warning\">Data not found.</div>\n      </td>\n    </tr>\n    <tr *ngFor=\"let feeStru of fee_structure_data | paginate: { itemsPerPage: 5, currentPage: p }\">\n      <td>{{ feeStru.item_name }}</td>\n      <td>{{ feeStru.item_amount }}</td>\n      <td>\n      <a (click)='getFeeStructureById(feeStru)'>\n          <i class=\"fa fa-pencil text-danger\"></i>\n      </a>\n\n      <a (click)='deleteFeeStructureById(feeStru)'>\n        <i class=\"fa fa-trash-o text-danger\"></i>\n    </a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<pagination-controls (pageChange)=\"p = $event\" *ngIf=\"fee_structure_data\"></pagination-controls>"

/***/ }),

/***/ "./src/app/feestructure/feestructure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeestructureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feestructure_service__ = __webpack_require__("./src/app/feestructure/feestructure.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeestructureComponent = /** @class */ (function () {
    function FeestructureComponent(FeeServices) {
        this.FeeServices = FeeServices;
        this.p = 1;
        this.showSettingNav = false;
    }
    FeestructureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.FeeServices.getAllFeeStructure()
            .subscribe(function (fee_structure_data) { return _this.fee_structure_data = fee_structure_data; });
        this.feeStructureForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            item_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            item_amount: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            _id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [])
        });
    };
    FeestructureComponent.prototype.saveFeeStructure = function () {
        var _this = this;
        var formData = this.feeStructureForm.value;
        this.FeeServices.saveFeeStructure(formData)
            .subscribe(function (res) {
            _this.successMsg = 'Records updated successfully.';
            _this.feeStructureForm.reset;
            _this.ngOnInit();
        }, function (error) {
            _this.errorMsg = error;
        });
    };
    // get fee structure by ID
    FeestructureComponent.prototype.getFeeStructureById = function (feeStr) {
        //this.feeStructureForm.setValue({fee_item_name:feeStr.item_name, fee_item_cost: feeStr.item_amount});
        this.feeStructureForm.setValue(feeStr);
    };
    FeestructureComponent.prototype.deleteFeeStructureById = function (feeStr) {
        var _this = this;
        var formData = { _id: feeStr._id, is_deleted: true };
        this.FeeServices.deleteFeeStructure(formData)
            .subscribe(function (res) {
            _this.successMsg = 'Record deleted successfully.';
            _this.feeStructureForm.reset;
            _this.ngOnInit();
        }, function (error) {
            _this.errorMsg = error;
        });
    };
    FeestructureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feestructure',
            template: __webpack_require__("./src/app/feestructure/feestructure.component.html"),
            styles: [__webpack_require__("./src/app/feestructure/feestructure.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__feestructure_service__["a" /* FeestructureService */]])
    ], FeestructureComponent);
    return FeestructureComponent;
}());



/***/ }),

/***/ "./src/app/feestructure/feestructure.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeestructureService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__errors_error_service__ = __webpack_require__("./src/app/errors/error.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeestructureService = /** @class */ (function () {
    function FeestructureService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
    }
    FeestructureService.prototype.saveFeeStructure = function (formData) {
        var _this = this;
        return this.http.post('save-fee-structure', formData)
            .catch(function (error) {
            _this.errorService.handelError(error.json());
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    // delete fee structure
    FeestructureService.prototype.deleteFeeStructure = function (formData) {
        var _this = this;
        return this.http.post('delete-fee-structure', formData)
            .catch(function (error) {
            _this.errorService.handelError(error.json());
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    FeestructureService.prototype.getAllFeeStructure = function () {
        var _this = this;
        return this.http.get('get-feestructures')
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handelError(error.json());
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    FeestructureService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__errors_error_service__["a" /* ErrorService */]])
    ], FeestructureService);
    return FeestructureService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\">\n    <h1>{{ user_name }}</h1>\n  </div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.user_name = localStorage.getItem('name');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadein', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(2000)
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"row\">\n              <div class=\"col-md-9 mx-auto\">\n\n                  <!-- form card login -->\n                  <div class=\"card rounded-0\">\n                        <div class=\"card-header\">\n                            <h3 class=\"mb-0\">Login</h3>\n                        </div>\n                        <div class=\"card-body\">\n                            <form class=\"form-horizontal\" [formGroup]=\"loginFrom\">\n                                <div class=\"form-group\">\n                                    <label for=\"email\">Email</label>\n                                    <input type=\"email\" formControlName=\"email\" class=\"form-control form-control-lg rounded-0\" name=\"email\" id=\"email\" required=\"\">\n                                    <div class=\"form-control-feedback\" *ngIf=\"loginFrom.get('email').touched && loginFrom.get('email').invalid\">\n                                      <span class=\"text-danger\" *ngIf=\"loginFrom.get('email').errors.required\">\n                                              <i class=\"fa fa-close\">Email is required</i>\n                                      </span>\n                                      <span class=\"text-danger\" *ngIf=\"loginFrom.get('email').errors.email\">\n                                              <i class=\"fa fa-close\">Must be a valid email</i>\n                                      </span>\n                                      \n                                      \n                              </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Password</label>\n                                    <input type=\"password\" formControlName=\"password\" class=\"form-control form-control-lg rounded-0\" id=\"pwd1\" required=\"\" autocomplete=\"new-password\">\n                                    <div class=\"form-control-feedback\" *ngIf=\"loginFrom.get('password').touched && loginFrom.get('password').invalid\">\n                                      <span class=\"text-danger\" *ngIf=\"loginFrom.get('password').errors.required\">\n                                              <i class=\"fa fa-close\">Password is required</i>\n                                      </span>\n                                    </div>\n                                    \n                                </div>\n                                \n                                <button type=\"submit\" class=\"btn btn-primary btn-lg float-left\" id=\"btnLogin\">Cancel</button> \n                                 <button type=\"submit\" class=\"btn btn-success btn-lg float-right\" (click)=\"loginUser()\" id=\"btnLogin\"  [disabled]=\"loginFrom.invalid\">Login</button>\n                            </form>\n                        </div>\n                        <!--/card-block-->\n                    </div>\n                    <!-- /form card login -->\n\n              </div>\n\n\n          </div>\n          <!--/row-->\n\n      </div>\n      <!--/col-->\n  </div>\n  <!--/row-->\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.loginFrom = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])
        });
    }
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        // this.loginService.loginUser(this.loginFrom.value);
        if (this.loginFrom.valid) {
            this.loginService.loginUser(this.loginFrom.value)
                .subscribe(function (user) {
                localStorage.setItem('token', user['token']);
                localStorage.setItem('userId', user['userId']);
                localStorage.setItem('name', user['name']);
                _this.router.navigateByUrl('/home');
            });
        }
        else
            console.log('Error');
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__errors_error_service__ = __webpack_require__("./src/app/errors/error.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginService = /** @class */ (function () {
    function LoginService(http, errorServices) {
        this.http = http;
        this.errorServices = errorServices;
    }
    // signing in user
    LoginService.prototype.loginUser = function (user) {
        var _this = this;
        return this.http.post('/login', user)
            .map(function (response) {
            console.log(response.json);
            return response.json();
        })
            .catch(function (error) {
            _this.errorServices.handelError(error.json());
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    LoginService.prototype.logoutUser = function () {
        localStorage.clear();
    };
    LoginService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('token');
        if (!token)
            return false;
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["JwtHelper"]();
        return !jwtHelper.isTokenExpired(token);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_5__errors_error_service__["a" /* ErrorService */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/manage-session/manage-session.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manage-session/manage-session.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  manage-session works!\n</p>\n"

/***/ }),

/***/ "./src/app/manage-session/manage-session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageSessionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageSessionComponent = /** @class */ (function () {
    function ManageSessionComponent() {
    }
    ManageSessionComponent.prototype.ngOnInit = function () {
    };
    ManageSessionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-session',
            template: __webpack_require__("./src/app/manage-session/manage-session.component.html"),
            styles: [__webpack_require__("./src/app/manage-session/manage-session.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageSessionComponent);
    return ManageSessionComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\" *ngIf=\"!isLoggedIn()\">\n \n  <div class=\"navbar-collapse\" [ngClass]=\" !toggle ? 'collapse': ''\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      \n      <li class=\"nav-item\">\n        <a class=\"nav-link\"  routerLink=\"/login\" routerLinkActive=\"active\" *ngIf=\"!isLoggedIn()\">Login</a>\n      </li>\n     \n      <li class=\"nav-item\">\n        <a class=\"nav-link\"  routerLink=\"/signup\" routerLinkActive=\"active\" *ngIf=\"!isLoggedIn()\">Signup</a>\n      </li>\n   </ul>\n  </div>   \n</nav>\n<!-- loged in user navigation bar is here-->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\" *ngIf=\"isLoggedIn()\">\n<ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n    </li>\n    <li class=\"nav-item dropdown\" ngbDropdown >\n      <a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0);\" ngbDropdownToggle\n      routerLinkActive=\"active\" aria-expanded=\"false\"> Settings</a>\n      <div class=\"dropdown-menu\" @fade ngbDropdownMenu>\n        <a class=\"dropdown-item\"  routerLink=\"/settings/manage-session\">Manage Session</a>\n        <a class=\"dropdown-item\"  routerLinkActive=\"active\" routerLink=\"/settings/fee-structure\">Manage Fee Component</a>\n        <a class=\"dropdown-item\"  routerLink=\"/settings/subjects\">Manage Subjects</a>\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        \n      </div>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Profile</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)='logOut()' *ngIf=\"isLoggedIn()\">Logout</a>\n    </li>\n  </ul>\n  </nav>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(LoginServices, router) {
        this.LoginServices = LoginServices;
        this.router = router;
        this.toggle = false;
        this.showSettingNav = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        return this.LoginServices.isLoggedIn();
    };
    HeaderComponent.prototype.logOut = function () {
        this.LoginServices.logoutUser();
        this.router.navigateByUrl('/');
    };
    HeaderComponent.prototype.showHideMenu = function () {
        this.toggle = !this.toggle;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__("./src/app/shared/header/header.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* trigger */])('fade', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ opacity: 0, color: 'red' }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(1000, Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(1000, Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ".signup-box { padding: 1em; margin: 0 auto;}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"row\">\n                <div class=\"col-md-9 mx-auto\">\n                    <form class=\"\" [formGroup]='signupForm'>\n                        <div class=\"card rounded-0\">\n                            <div class=\"card-header\">\n                                <h3 class=\"mb-0\">Admin Sign Up</h3>\n                            </div>\n\n                            <div class=\"card-body\">\n                                <div class=\"form-group\" *ngIf=\"success\">\n                                    <div class=\"col-md-12 alert alert-success\">\n                                        <p>Thank Your for showing intrest.</p>\n                                        <p> A verification email is sent. Please verify your email id to access your account.</p>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label for=\"name\">Name</label>\n                                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Name\" required autofocus>\n                                    <div class=\"form-control-feedback\" *ngIf=\"signupForm.get('name').touched && signupForm.get('name').invalid\">\n                                        <span class=\"text-danger\" *ngIf=\"signupForm.get('name').errors.required\">\n                                            Name is required.\n                                        </span>\n                                        <span class=\"text-danger\" *ngIf=\"signupForm.get('name').errors.minlength\">\n                                            Minimum length is {{signupForm.get('name').errors.minlength.requiredLength}}\n                                        </span>\n\n\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label for=\"email\">E-Mail Address</label>\n                                    <input type=\"text\" formControlName=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\" required autofocus>\n                                    <div class=\"form-control-feedback\" *ngIf=\"signupForm.get('email').touched && signupForm.get('email').invalid\">\n                                        <span class=\"text-danger\" *ngIf=\"signupForm.get('email').errors.required\">\n                                            Email is required.\n                                        </span>\n                                        <span class=\"text-danger\" *ngIf=\"signupForm.get('email').errors.email\">\n                                            Must be a valid email\n                                        </span>\n                                        <span class=\"text-danger\" *ngIf=\"signupForm.get('email').errors.isEmailExists\">\n                                            Email Id already exists.\n                                        </span>\n\n                                    </div>\n\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label for=\"password\">Password</label>\n                                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" required>\n                                    <div class=\"form-control-feedback\" *ngIf=\"signupForm.get('password').touched && signupForm.get('password').invalid\">\n                                        <span class=\"text-danger\" *ngIf=\"signupForm.get('password').errors.required\">\n                                            Password is required.\n                                        </span>\n\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"password\">Confirm Password</label>\n                                    <input type=\"password\" formControlName=\"confirm_password\" class=\"form-control\" id=\"password-confirm\" placeholder=\"Password\"\n                                        required>\n                                    <div class=\"form-control-feedback\" *ngIf=\"signupForm.get('confirm_password').touched && signupForm.get('confirm_password').invalid\">\n                                        <span class=\"text-danger\" *ngIf=\"signupForm.get('confirm_password').errors.required\">\n                                            Confirm Password is required\n                                        </span>\n\n                                    </div>\n                                    <div class=\"form-control-feedback\" *ngIf=\"signupForm.get('confirm_password').touched\">\n                                        <span class=\"text-danger\" *ngIf=\"signupForm.errors && signupForm.errors.match_password\">\n                                            Password and Confirm Password must be same.\n                                        </span>\n                                    </div>\n                                </div>\n                                <a class=\"btn btn-primary float-left\" routerLink=\"/login\">\n                                    <i class=\"fa fa-arrow-left\"></i> Login</a>\n                                <button type=\"submit\" class=\"btn btn-success float-right\" [disabled]='signupForm.invalid' (click)=\"saveUser();\">\n                                        <i class=\"fa fa-user-plus\"></i> Register</button>\n                                    \n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_service__ = __webpack_require__("./src/app/signup/signup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(services) {
        this.services = services;
        this.success = false;
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(5)]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email], this.isEmailExists.bind(this)),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            confirm_password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
        }, this.match_password);
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.isEmailExists = function (FC) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var resp;
            _this.services.getUserByEmail(FC.value).map(function (res) {
                return res;
            })
                .subscribe(function (response) {
                return response['email'] ? resolve({ isEmailExists: true }) : resolve(null);
            });
        });
    };
    SignupComponent.prototype.match_password = function (FC) {
        return FC.get('password').value === FC.get('confirm_password').value ? null : { match_password: true };
    };
    SignupComponent.prototype.saveUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.services.saveUser(_this.signupForm.value)
                .map(function (res) {
                return res;
            })
                .subscribe(function (res) {
                if (res['success'] == true) {
                    _this.signupForm.reset();
                    _this.success = true;
                }
            });
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__signup_service__["a" /* SignupService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__errors_error_service__ = __webpack_require__("./src/app/errors/error.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupService = /** @class */ (function () {
    function SignupService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
    }
    SignupService.prototype.getUserByEmail = function (email) {
        var _this = this;
        return this.http
            .get('/verifyemail/' + email)
            .map(function (resp) {
            var result = resp.json();
            return result;
        })
            .catch(function (error) {
            _this.errorService.handelError(error.json());
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    SignupService.prototype.saveUser = function (user) {
        var _this = this;
        return this.http.post('/saveuser', user)
            .map(function (resp) {
            return resp.json();
        })
            .catch(function (error) {
            _this.errorService.handelError(error.json());
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    SignupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__errors_error_service__["a" /* ErrorService */]])
    ], SignupService);
    return SignupService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    saltRounds: 10
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map