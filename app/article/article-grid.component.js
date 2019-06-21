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
var article_service_1 = require("./article.service");
var cart_service_1 = require("../cart/cart.service");
var ArticleGridComponent = /** @class */ (function () {
    function ArticleGridComponent(router, articleService, cartService) {
        var _this = this;
        this.router = router;
        this.articleService = articleService;
        this.cartService = cartService;
        this.articles = [];
        this.router
            .queryParams
            .subscribe(function (params) {
            var category = params['category'];
            var search = params['search'];
            // Return filtered data from getArticles function
            var articles = _this.articleService.getArticles(category, search);
            // Transform articles to appropriate data
            // to display
            _this.articles = _this.transform(articles);
        });
    }
    ArticleGridComponent.prototype.transform = function (source) {
        var index = 0;
        var length = source.length;
        var articles = [];
        while (length) {
            var row = [];
            if (length >= 3) {
                for (var i = 0; i < 3; i++) {
                    row.push(source[index++]);
                }
                articles.push(row);
                length -= 3;
            }
            else {
                for (; length > 0; length--) {
                    row.push(source[index++]);
                }
                articles.push(row);
            }
        }
        return articles;
    };
    ArticleGridComponent.prototype.addToCart = function (article) {
        this.cartService.addArticle(article);
    };
    ArticleGridComponent = __decorate([
        core_1.Component({
            selector: 'db-article-grid',
            templateUrl: 'app/article/article-grid.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, article_service_1.ArticleService, cart_service_1.CartService])
    ], ArticleGridComponent);
    return ArticleGridComponent;
}());
exports.ArticleGridComponent = ArticleGridComponent;
//# sourceMappingURL=article-grid.component.js.map