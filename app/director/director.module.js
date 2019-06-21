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
var director_list_component_1 = require("./director-list.component");
var director_view_component_1 = require("./director-view.component");
var director_card_component_1 = require("./director-card.component");
var director_search_component_1 = require("./director-search.component");
var director_grid_component_1 = require("./director-grid.component");
var director_service_1 = require("./director.service");
var directorcategory_module_1 = require("../directorcategory/directorcategory.module");
var DirectorModule = /** @class */ (function () {
    function DirectorModule() {
    }
    DirectorModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule, directorcategory_module_1.DirectorCategoryModule],
            declarations: [director_list_component_1.DirectorListComponent, director_view_component_1.DirectorViewComponent, director_card_component_1.DirectorCardComponent, director_search_component_1.DirectorSearchComponent, director_grid_component_1.DirectorGridComponent],
            exports: [director_list_component_1.DirectorListComponent, director_view_component_1.DirectorViewComponent, director_card_component_1.DirectorCardComponent, director_search_component_1.DirectorSearchComponent, director_grid_component_1.DirectorGridComponent],
            providers: [director_service_1.DirectorService]
        })
    ], DirectorModule);
    return DirectorModule;
}());
exports.DirectorModule = DirectorModule;
//# sourceMappingURL=director.module.js.map