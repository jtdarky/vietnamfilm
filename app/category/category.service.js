"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Category = /** @class */ (function () {
    function Category() {
    }
    return Category;
}());
exports.Category = Category;
var CategoryService = /** @class */ (function () {
    function CategoryService() {
        this.categories = [
            { id: '1', title: 'T-Shirt', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'See our selection of movie T-shirts' },
            { id: '2', title: 'Jackets', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Quailty Jackets' },
            { id: '3', title: 'Posters', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Buy our selection of movie posters' },
        ];
    }
    CategoryService.prototype.getCategories = function () {
        return this.categories;
    };
    CategoryService.prototype.getCategory = function (id) {
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === id) {
                return this.categories[i];
            }
        }
        throw new CategoryNotFoundException("Category " + id + " not found");
    };
    CategoryService = __decorate([
        core_1.Injectable()
    ], CategoryService);
    return CategoryService;
}());
exports.CategoryService = CategoryService;
var CategoryNotFoundException = /** @class */ (function (_super) {
    __extends(CategoryNotFoundException, _super);
    function CategoryNotFoundException(message) {
        return _super.call(this, message) || this;
    }
    return CategoryNotFoundException;
}(Error));
exports.CategoryNotFoundException = CategoryNotFoundException;
//# sourceMappingURL=category.service.js.map