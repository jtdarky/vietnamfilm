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
 * Components Imports
 */
var article_service_1 = require("./article.service");
var cart_service_1 = require("../cart/cart.service");
var ArticleViewComponent = /** @class */ (function () {
    function ArticleViewComponent(route, articleService, cartService) {
        var _this = this;
        this.route = route;
        this.articleService = articleService;
        this.cartService = cartService;
        this.route
            .params
            .subscribe(function (params) {
            // Get the article id
            var id = params['id'];
            // Return the article from ArticleService
            _this.article = _this.articleService.getArticle(id);
            // Return the cart item
            _this.cartItem = _this.cartService.findItem(id);
        });
    }
    Object.defineProperty(ArticleViewComponent.prototype, "quantity", {
        get: function () {
            return this.cartItem ? this.cartItem.count : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArticleViewComponent.prototype, "amount", {
        get: function () {
            return this.cartItem ? this.cartItem.amount : 0;
        },
        enumerable: true,
        configurable: true
    });
    ArticleViewComponent.prototype.addToCart = function () {
        this.cartItem = this.cartService.addArticle(this.article);
    };
    ArticleViewComponent.prototype.removeFromCart = function () {
        this.cartItem = this.cartService.removeArticle(this.article);
    };
    ArticleViewComponent = __decorate([
        core_1.Component({
            selector: 'db-article-view',
            templateUrl: 'app/article/article-view.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            article_service_1.ArticleService,
            cart_service_1.CartService])
    ], ArticleViewComponent);
    return ArticleViewComponent;
}());
exports.ArticleViewComponent = ArticleViewComponent;
//# sourceMappingURL=article-view.component.js.map