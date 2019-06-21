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
var ArticleCategory = /** @class */ (function () {
    function ArticleCategory() {
    }
    return ArticleCategory;
}());
exports.ArticleCategory = ArticleCategory;
var ArticleCategoryService = /** @class */ (function () {
    function ArticleCategoryService() {
        this.articlecategories = [
            { id: '1', title: 'Horror', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee and more.' },
            { id: '2', title: 'Action', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It\'s consistently excellent, dishes are superb and healthily cooked with high quality ingredients.' },
            { id: '3', title: 'Drama', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'A dairy product is food produced from the milk of mammals, primarily cows, water buffaloes, goats, sheep, yaks.' },
            { id: '4', title: 'Documentary', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Only superior quality beef, lamb, pork.' },
            { id: '5', title: 'Adventure', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Great place to buy fresh seafood.' },
            { id: '6', title: 'Superhero', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'A variety of fresh fruits and vegetables.' }
        ];
    }
    ArticleCategoryService.prototype.getArticleCategories = function () {
        return this.articlecategories;
    };
    ArticleCategoryService.prototype.getArticleCategory = function (id) {
        for (var i = 0; i < this.articlecategories.length; i++) {
            if (this.articlecategories[i].id === id) {
                return this.articlecategories[i];
            }
        }
        throw new ArticleCategoryNotFoundException("ArticleCategory " + id + " not found");
    };
    ArticleCategoryService = __decorate([
        core_1.Injectable()
    ], ArticleCategoryService);
    return ArticleCategoryService;
}());
exports.ArticleCategoryService = ArticleCategoryService;
var ArticleCategoryNotFoundException = /** @class */ (function (_super) {
    __extends(ArticleCategoryNotFoundException, _super);
    function ArticleCategoryNotFoundException(message) {
        return _super.call(this, message) || this;
    }
    return ArticleCategoryNotFoundException;
}(Error));
exports.ArticleCategoryNotFoundException = ArticleCategoryNotFoundException;
//# sourceMappingURL=articlecategory.service.js.map