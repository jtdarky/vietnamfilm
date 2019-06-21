"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by g62 on 23/01/17.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var article_list_component_1 = require("./article-list.component");
var article_view_component_1 = require("./article-view.component");
var article_card_component_1 = require("./article-card.component");
var article_search_component_1 = require("./article-search.component");
var article_grid_component_1 = require("./article-grid.component");
var article_service_1 = require("./article.service");
var articlecategory_module_1 = require("../articlecategory/articlecategory.module");
var ArticleModule = /** @class */ (function () {
    function ArticleModule() {
    }
    ArticleModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule, articlecategory_module_1.ArticleCategoryModule],
            declarations: [article_list_component_1.ArticleListComponent, article_view_component_1.ArticleViewComponent, article_card_component_1.ArticleCardComponent, article_search_component_1.ArticleSearchComponent, article_grid_component_1.ArticleGridComponent],
            exports: [article_list_component_1.ArticleListComponent, article_view_component_1.ArticleViewComponent, article_card_component_1.ArticleCardComponent, article_search_component_1.ArticleSearchComponent, article_grid_component_1.ArticleGridComponent],
            providers: [article_service_1.ArticleService]
        })
    ], ArticleModule);
    return ArticleModule;
}());
exports.ArticleModule = ArticleModule;
//# sourceMappingURL=article.module.js.map