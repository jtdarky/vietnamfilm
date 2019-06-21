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
var directorcategory_list_component_1 = require("./directorcategory-list.component");
var directorcategory_pipe_1 = require("./directorcategory.pipe");
var directorcategory_card_component_1 = require("./directorcategory-card.component");
var directorcategory_service_1 = require("./directorcategory.service");
var DirectorCategoryModule = /** @class */ (function () {
    function DirectorCategoryModule() {
    }
    DirectorCategoryModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule],
            declarations: [directorcategory_list_component_1.DirectorCategoryListComponent, directorcategory_pipe_1.DirectorCategoryTitlePipe, directorcategory_card_component_1.DirectorCategoryCardComponent],
            exports: [directorcategory_list_component_1.DirectorCategoryListComponent, directorcategory_pipe_1.DirectorCategoryTitlePipe, directorcategory_card_component_1.DirectorCategoryCardComponent],
            providers: [directorcategory_service_1.DirectorCategoryService]
        })
    ], DirectorCategoryModule);
    return DirectorCategoryModule;
}());
exports.DirectorCategoryModule = DirectorCategoryModule;
//# sourceMappingURL=directorcategory.module.js.map