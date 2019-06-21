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
/*
 * Components
 */
var cart_service_1 = require("./cart.service");
var CartMenuComponent = /** @class */ (function () {
    function CartMenuComponent(cartService) {
        this.cartService = cartService;
        this.cart = this.cartService.cart;
    }
    CartMenuComponent = __decorate([
        core_1.Component({
            selector: 'db-cart-menu',
            templateUrl: 'app/cart/cart-menu.component.html'
        }),
        __metadata("design:paramtypes", [cart_service_1.CartService])
    ], CartMenuComponent);
    return CartMenuComponent;
}());
exports.CartMenuComponent = CartMenuComponent;
//# sourceMappingURL=cart-menu.component.js.map