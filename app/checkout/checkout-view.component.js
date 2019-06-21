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
var forms_1 = require("@angular/forms");
/*
 * Components
 */
var cart_service_1 = require("../cart/cart.service");
var CheckoutViewComponent = /** @class */ (function () {
    function CheckoutViewComponent(cartService, fb) {
        this.cartService = cartService;
        this.fb = fb;
        this.cart = this.cartService.cart;
    }
    CheckoutViewComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            phone: ['', forms_1.Validators.required],
            address: []
        });
    };
    CheckoutViewComponent.prototype.submit = function () {
        alert('Submitted');
        this.cartService.clearCart();
    };
    CheckoutViewComponent = __decorate([
        core_1.Component({
            selector: 'db-checkout-view',
            templateUrl: 'app/checkout/checkout-view.component.html'
        }),
        __metadata("design:paramtypes", [cart_service_1.CartService, forms_1.FormBuilder])
    ], CheckoutViewComponent);
    return CheckoutViewComponent;
}());
exports.CheckoutViewComponent = CheckoutViewComponent;
//# sourceMappingURL=checkout-view.component.js.map