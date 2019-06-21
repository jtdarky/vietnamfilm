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
 * Components Imports
 */
var articlecategory_service_1 = require("./articlecategory.service");
/*
 * Return articlecategory title of the value
 * Usage:
 *   value | articlecategoryTitle
 * Example:
 *   {{ articlecategoryId |  articlecategoryTitle }}
 *   presume articlecategoryId='1'
 *   result formats to 'Bread & Bakery'
 */
var ArticleCategoryTitlePipe = /** @class */ (function () {
    function ArticleCategoryTitlePipe(articlecategoryService) {
        this.articlecategoryService = articlecategoryService;
    }
    ArticleCategoryTitlePipe.prototype.transform = function (value) {
        var articlecategory = this.articlecategoryService.getArticleCategory(value);
        return articlecategory ? articlecategory.title : '';
    };
    ArticleCategoryTitlePipe = __decorate([
        core_1.Pipe({ name: 'articlecategoryTitle' }),
        __metadata("design:paramtypes", [articlecategory_service_1.ArticleCategoryService])
    ], ArticleCategoryTitlePipe);
    return ArticleCategoryTitlePipe;
}());
exports.ArticleCategoryTitlePipe = ArticleCategoryTitlePipe;
//# sourceMappingURL=articlecategory.pipe.js.map