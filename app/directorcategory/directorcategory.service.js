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
var DirectorCategory = /** @class */ (function () {
    function DirectorCategory() {
    }
    return DirectorCategory;
}());
exports.DirectorCategory = DirectorCategory;
var DirectorCategoryService = /** @class */ (function () {
    function DirectorCategoryService() {
        this.directorcategories = [
            { id: '1', title: 'Horror', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee and more.' },
            { id: '2', title: 'Action', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It\'s consistently excellent, dishes are superb and healthily cooked with high quality ingredients.' },
            { id: '3', title: 'Drama', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'A dairy product is food produced from the milk of mammals, primarily cows, water buffaloes, goats, sheep, yaks.' },
            { id: '4', title: 'Documentary', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Only superior quality beef, lamb, pork.' },
            { id: '5', title: 'Adventure', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Great place to buy fresh seafood.' },
            { id: '6', title: 'Superhero', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'A variety of fresh fruits and vegetables.' }
        ];
    }
    DirectorCategoryService.prototype.getDirectorCategories = function () {
        return this.directorcategories;
    };
    DirectorCategoryService.prototype.getDirectorCategory = function (id) {
        for (var i = 0; i < this.directorcategories.length; i++) {
            if (this.directorcategories[i].id === id) {
                return this.directorcategories[i];
            }
        }
        throw new DirectorCategoryNotFoundException("DirectorCategory " + id + " not found");
    };
    DirectorCategoryService = __decorate([
        core_1.Injectable()
    ], DirectorCategoryService);
    return DirectorCategoryService;
}());
exports.DirectorCategoryService = DirectorCategoryService;
var DirectorCategoryNotFoundException = /** @class */ (function (_super) {
    __extends(DirectorCategoryNotFoundException, _super);
    function DirectorCategoryNotFoundException(message) {
        return _super.call(this, message) || this;
    }
    return DirectorCategoryNotFoundException;
}(Error));
exports.DirectorCategoryNotFoundException = DirectorCategoryNotFoundException;
//# sourceMappingURL=directorcategory.service.js.map