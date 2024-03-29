"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Angular Imports
 */
var core_1 = require("@angular/core");
var authentication_service_1 = require("../services/authentication.service");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
    }
    NavbarComponent.prototype.login = function () {
        this.auth.login();
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavbarComponent.prototype.loggedIn = function () {
        this.auth.loggedIn();
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'db-navbar',
            templateUrl: 'app/navbar/navbar.component.html',
            providers: [authentication_service_1.AuthenticationService]
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map