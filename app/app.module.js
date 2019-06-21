"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
/**
 * Modules
 */
var articlecategory_module_1 = require("./articlecategory/articlecategory.module");
var article_module_1 = require("./article/article.module");
var cart_module_1 = require("./cart/cart.module");
var director_module_1 = require("./director/director.module");
var category_module_1 = require("./category/category.module");
var product_module_1 = require("./product/product.module");
/*
 * Components
 */
var app_component_1 = require("./app.component");
var admin_component_1 = require("./admin/admin.component");
var about_component_1 = require("./about/about.component");
var director_component_1 = require("./director/director.component");
var film_articles_component_1 = require("./filmarticles/film-articles.component");
var home_component_1 = require("./home/home.component");
var private_component_1 = require("./private/private.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var navbar_component_1 = require("./navbar/navbar.component");
var footer_component_1 = require("./footer/footer.component");
var welcome_component_1 = require("./welcome/welcome.component");
var checkout_view_component_1 = require("./checkout/checkout-view.component");
/*
login components
 */
var alert_component_1 = require("./directives/alert.component");
var title_component_1 = require("./title/title.component");
var auth_guard_1 = require("./guards/auth.guard");
var alert_service_1 = require("./services/alert.service");
var authentication_service_1 = require("./services/authentication.service");
var user_service_1 = require("./services/user.service");
/*
 * Routing
 */
var app_routes_1 = require("./app.routes");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule,
                app_routes_1.routing, articlecategory_module_1.ArticleCategoryModule, cart_module_1.CartModule, category_module_1.CategoryModule, director_module_1.DirectorModule, article_module_1.ArticleModule, product_module_1.ProductModule],
            declarations: [app_component_1.AppComponent, admin_component_1.AdminComponent, alert_component_1.AlertComponent, about_component_1.AboutComponent, director_component_1.DirectorComponent, film_articles_component_1.FilmArticleComponent, home_component_1.HomeComponent, login_component_1.LoginComponent, private_component_1.PrivateComponent, register_component_1.RegisterComponent, title_component_1.TitleComponent, navbar_component_1.NavbarComponent, footer_component_1.FooterComponent,
                welcome_component_1.WelcomeComponent, checkout_view_component_1.CheckoutViewComponent],
            providers: [
                auth_guard_1.AuthGuard,
                alert_service_1.AlertService,
                authentication_service_1.AuthenticationService,
                user_service_1.UserService,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map