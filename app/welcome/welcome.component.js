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
var category_service_1 = require("../category/category.service");
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(categoryServics) {
        this.categoryServics = categoryServics;
        this.slideCategories = [
            this.categoryServics.getCategory('1'),
            this.categoryServics.getCategory('2'),
            this.categoryServics.getCategory('3')
        ];
        this.cardCategories = this.categoryServics.getCategories();
    }
    WelcomeComponent.prototype.selectCategory = function (category) {
        console.log('Selected category', category.title);
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: 'db-welcome',
            templateUrl: 'app/welcome/welcome.component.html'
        }),
        __metadata("design:paramtypes", [category_service_1.CategoryService])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map