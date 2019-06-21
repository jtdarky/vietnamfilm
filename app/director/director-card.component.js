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
/**
 * Created by g62 on 23/01/17.
 */
/*
 * Angular Imports
 */
var core_1 = require("@angular/core");
var DirectorCardComponent = /** @class */ (function () {
    function DirectorCardComponent() {
        this.addToCart = new core_1.EventEmitter();
    }
    DirectorCardComponent.prototype.setClasses = function (director) {
        return {
            'card-danger': director.isSpecial,
            'card-inverse': director.isSpecial
        };
    };
    DirectorCardComponent.prototype.buy = function (director) {
        console.log('We bought', director.title);
        this.addToCart.emit(director);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DirectorCardComponent.prototype, "directors", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DirectorCardComponent.prototype, "addToCart", void 0);
    DirectorCardComponent = __decorate([
        core_1.Component({
            selector: 'db-director-card',
            templateUrl: 'app/director/director-card.component.html'
        })
    ], DirectorCardComponent);
    return DirectorCardComponent;
}());
exports.DirectorCardComponent = DirectorCardComponent;
//# sourceMappingURL=director-card.component.js.map