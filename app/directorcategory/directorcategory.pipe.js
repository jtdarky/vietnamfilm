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
var directorcategory_service_1 = require("./directorcategory.service");
/*
 * Return directorcategory title of the value
 * Usage:
 *   value | directorcategoryTitle
 * Example:
 *   {{ directorcategoryId |  directorcategoryTitle }}
 *   presume directorcategoryId='1'
 *   result formats to 'Bread & Bakery'
 */
var DirectorCategoryTitlePipe = /** @class */ (function () {
    function DirectorCategoryTitlePipe(directorcategoryService) {
        this.directorcategoryService = directorcategoryService;
    }
    DirectorCategoryTitlePipe.prototype.transform = function (value) {
        var directorcategory = this.directorcategoryService.getDirectorCategory(value);
        return directorcategory ? directorcategory.title : '';
    };
    DirectorCategoryTitlePipe = __decorate([
        core_1.Pipe({ name: 'directorcategoryTitle' }),
        __metadata("design:paramtypes", [directorcategory_service_1.DirectorCategoryService])
    ], DirectorCategoryTitlePipe);
    return DirectorCategoryTitlePipe;
}());
exports.DirectorCategoryTitlePipe = DirectorCategoryTitlePipe;
//# sourceMappingURL=directorcategory.pipe.js.map