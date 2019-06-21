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
/**
 * Created by g62 on 23/01/17.
 */
/*
 * Angular Imports
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
/*
 * Components Imports
 */
var event_service_1 = require("./event.service");
var cart_service_1 = require("../cart/cart.service");
var EventViewComponent = /** @class */ (function () {
    function EventViewComponent(route, eventService, cartService) {
        var _this = this;
        this.route = route;
        this.eventService = eventService;
        this.cartService = cartService;
        this.route
            .params
            .subscribe(function (params) {
            // Get the event id
            var id = params['id'];
            // Return the event from EventService
            _this.event = _this.eventService.getEvent(id);
            // Return the cart item
            _this.cartItem = _this.cartService.findItem(id);
        });
    }
    Object.defineProperty(EventViewComponent.prototype, "quantity", {
        get: function () {
            return this.cartItem ? this.cartItem.count : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventViewComponent.prototype, "amount", {
        get: function () {
            return this.cartItem ? this.cartItem.amount : 0;
        },
        enumerable: true,
        configurable: true
    });
    EventViewComponent.prototype.addToCart = function () {
        this.cartItem = this.cartService.addEvent(this.event);
    };
    EventViewComponent.prototype.removeFromCart = function () {
        this.cartItem = this.cartService.removeEvent(this.event);
    };
    EventViewComponent = __decorate([
        core_1.Component({
            selector: 'db-event-view',
            templateUrl: 'app/event/event-view.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, typeof (_a = typeof event_service_1.EventService !== "undefined" && event_service_1.EventService) === "function" && _a || Object, cart_service_1.CartService])
    ], EventViewComponent);
    return EventViewComponent;
    var _a;
}());
exports.EventViewComponent = EventViewComponent;
//# sourceMappingURL=event-view.component.js.map