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
 * Components
 */
var event_service_1 = require("./event.service");
var cart_service_1 = require("../cart/cart.service");
var EventGridComponent = /** @class */ (function () {
    function EventGridComponent(router, eventService, cartService) {
        var _this = this;
        this.router = router;
        this.eventService = eventService;
        this.cartService = cartService;
        this.events = [];
        this.router
            .queryParams
            .subscribe(function (params) {
            var category = params['category'];
            var search = params['search'];
            // Return filtered data from getEvents function
            var events = _this.eventService.getEvents(category, search);
            // Transform events to appropriate data
            // to display
            _this.events = _this.transform(events);
        });
    }
    EventGridComponent.prototype.transform = function (source) {
        var index = 0;
        var length = source.length;
        var events = [];
        while (length) {
            var row = [];
            if (length >= 3) {
                for (var i = 0; i < 3; i++) {
                    row.push(source[index++]);
                }
                events.push(row);
                length -= 3;
            }
            else {
                for (; length > 0; length--) {
                    row.push(source[index++]);
                }
                events.push(row);
            }
        }
        return events;
    };
    EventGridComponent.prototype.addToCart = function (event) {
        this.cartService.addEvent(event);
    };
    EventGridComponent = __decorate([
        core_1.Component({
            selector: 'db-event-grid',
            templateUrl: 'app/event/event-grid.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, typeof (_a = typeof event_service_1.EventService !== "undefined" && event_service_1.EventService) === "function" && _a || Object, cart_service_1.CartService])
    ], EventGridComponent);
    return EventGridComponent;
    var _a;
}());
exports.EventGridComponent = EventGridComponent;
//# sourceMappingURL=event-grid.component.js.map