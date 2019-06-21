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
 * Created by g62 on 17/05/17.
 */
/*
 * Angular Imports
 */
var core_1 = require("@angular/core");
var EventCardComponent = /** @class */ (function () {
    function EventCardComponent() {
        this.addToCart = new core_1.EventEmitter();
    }
    EventCardComponent.prototype.setClasses = function (event) {
        return {
            'card-danger': event.isSpecial,
            'card-inverse': event.isSpecial
        };
    };
    EventCardComponent.prototype.buy = function (event) {
        console.log('We bought', event.title);
        this.addToCart.emit(event);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], EventCardComponent.prototype, "events", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EventCardComponent.prototype, "addToCart", void 0);
    EventCardComponent = __decorate([
        core_1.Component({
            selector: 'db-event-card',
            templateUrl: 'app/event/event-card.component.html'
        })
    ], EventCardComponent);
    return EventCardComponent;
}());
exports.EventCardComponent = EventCardComponent;
//# sourceMappingURL=event-card.component.js.map