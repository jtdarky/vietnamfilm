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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ArticleSearchComponent = /** @class */ (function () {
    function ArticleSearchComponent(router) {
        this.router = router;
        this.disabled = true;
    }
    ArticleSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl = new forms_1.FormControl();
        this.searchControl.valueChanges.subscribe(function (value) {
            _this.searchChanged(value);
        });
    };
    ArticleSearchComponent.prototype.searchArticle = function (value) {
        this.router.navigate(['/articles'], { queryParams: { search: value } });
    };
    ArticleSearchComponent.prototype.searchChanged = function (value) {
        // Update the disabled property depends on value 
        if (value) {
            this.disabled = false;
        }
        else {
            this.disabled = true;
        }
    };
    ArticleSearchComponent = __decorate([
        core_1.Component({
            selector: 'db-article-search',
            templateUrl: 'app/article/article-search.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ArticleSearchComponent);
    return ArticleSearchComponent;
}());
exports.ArticleSearchComponent = ArticleSearchComponent;
//# sourceMappingURL=article-search.component.js.map