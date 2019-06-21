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
Object.defineProperty(exports, "__esModule", { value: true });
var ArticleService = /** @class */ (function () {
    function ArticleService() {
        this.articles = [
            // Bakery
            { id: '1', categoryId: '1', title: 'Lion King', rating: 1.5, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', director: 'some guy at disney', description: 'It a great movie about talking animals', plot: 'disney plot', opinion: 'one of my favorite movies', production: 'how was it made' },
            { id: '2', categoryId: '1', title: 'Big Hero 6', rating: 5, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', description: 'It a movie about six kids and a puffy robot', plot: 'disney plot', opinion: 'my favorite movie in 2015', production: 'how was it made' },
            { id: '3', categoryId: '1', title: 'Lilo and Stitch', rating: 7, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', description: 'A disney movie that takes place on Hawaii', plot: 'disney plot', opinion: 'my favorite disney movie', production: 'how was it made' }
        ];
    }
    ArticleService.prototype.getArticles = function (category, search) {
        if (category) {
            return this.articles.filter(function (article, index, array) {
                return article.categoryId === category;
            });
        }
        else if (search) {
            var lowSearch_1 = search.toLowerCase();
            return this.articles.filter(function (article, index, array) {
                return article.title.toLowerCase().indexOf(lowSearch_1) != -1;
            });
        }
        else {
            return this.articles;
        }
    };
    ArticleService.prototype.getArticle = function (id) {
        for (var i = 0; i < this.articles.length; i++) {
            if (this.articles[i].id === id) {
                return this.articles[i];
            }
        }
        throw new ArticleNotFoundException("Article " + id + " not found");
    };
    return ArticleService;
}());
exports.ArticleService = ArticleService;
var ArticleNotFoundException = /** @class */ (function (_super) {
    __extends(ArticleNotFoundException, _super);
    function ArticleNotFoundException(message) {
        return _super.call(this, message) || this;
    }
    return ArticleNotFoundException;
}(Error));
exports.ArticleNotFoundException = ArticleNotFoundException;
//# sourceMappingURL=article.service.js.map