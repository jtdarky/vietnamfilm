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
 * Created by g62 on 15/02/17.
 */
/*
 * Angular Imports
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
/*
 * Components
 */
var directorcategory_service_1 = require("./directorcategory.service");
var DirectorCategoryCardComponent = /** @class */ (function () {
    function DirectorCategoryCardComponent(router) {
        this.router = router;
    }
    DirectorCategoryCardComponent.prototype.filterFilms = function (directorcategory) {
        this.router.navigate(['/film'], { queryParams: { directorcategory: directorcategory.id } });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", directorcategory_service_1.DirectorCategory)
    ], DirectorCategoryCardComponent.prototype, "directorcategory", void 0);
    DirectorCategoryCardComponent = __decorate([
        core_1.Component({
            selector: 'db-directorcategory-card',
            templateUrl: 'app/directorcategory/directorcategory-card.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], DirectorCategoryCardComponent);
    return DirectorCategoryCardComponent;
}());
exports.DirectorCategoryCardComponent = DirectorCategoryCardComponent;
//# sourceMappingURL=directorcategory-card.component.js.map