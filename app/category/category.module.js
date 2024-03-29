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
var category_list_component_1 = require("./category-list.component");
var category_pipe_1 = require("./category.pipe");
var category_card_component_1 = require("./category-card.component");
var category_slide_component_1 = require("./category-slide.component");
var category_service_1 = require("./category.service");
var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule],
            declarations: [category_list_component_1.CategoryListComponent, category_pipe_1.CategoryTitlePipe, category_card_component_1.CategoryCardComponent, category_slide_component_1.CategorySlideComponent],
            exports: [category_list_component_1.CategoryListComponent, category_pipe_1.CategoryTitlePipe, category_card_component_1.CategoryCardComponent, category_slide_component_1.CategorySlideComponent],
            providers: [category_service_1.CategoryService]
        })
    ], CategoryModule);
    return CategoryModule;
}());
exports.CategoryModule = CategoryModule;
//# sourceMappingURL=category.module.js.map