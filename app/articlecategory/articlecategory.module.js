"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var articlecategory_list_component_1 = require("./articlecategory-list.component");
var articlecategory_pipe_1 = require("./articlecategory.pipe");
var articlecategory_card_component_1 = require("./articlecategory-card.component");
var articlecategory_slide_component_1 = require("./articlecategory-slide.component");
var articlecategory_service_1 = require("./articlecategory.service");
var ArticleCategoryModule = /** @class */ (function () {
    function ArticleCategoryModule() {
    }
    ArticleCategoryModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule],
            declarations: [articlecategory_list_component_1.ArticleCategoryListComponent, articlecategory_pipe_1.ArticleCategoryTitlePipe, articlecategory_card_component_1.ArticleCategoryCardComponent, articlecategory_slide_component_1.ArticleCategorySlideComponent],
            exports: [articlecategory_list_component_1.ArticleCategoryListComponent, articlecategory_pipe_1.ArticleCategoryTitlePipe, articlecategory_card_component_1.ArticleCategoryCardComponent, articlecategory_slide_component_1.ArticleCategorySlideComponent],
            providers: [articlecategory_service_1.ArticleCategoryService]
        })
    ], ArticleCategoryModule);
    return ArticleCategoryModule;
}());
exports.ArticleCategoryModule = ArticleCategoryModule;
//# sourceMappingURL=articlecategory.module.js.map