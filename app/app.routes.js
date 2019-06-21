"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Angular Imports
 */
var router_1 = require("@angular/router");
/*
 * Components
 */
var about_component_1 = require("./about/about.component");
var admin_component_1 = require("./admin/admin.component");
var article_list_component_1 = require("./article/article-list.component");
var article_view_component_1 = require("./article/article-view.component");
var cart_view_component_1 = require("./cart/cart-view.component");
var checkout_view_component_1 = require("./checkout/checkout-view.component");
var director_component_1 = require("./director/director.component");
var director_list_component_1 = require("./director/director-list.component");
var director_view_component_1 = require("./director/director-view.component");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var private_component_1 = require("./private/private.component");
var product_list_component_1 = require("./product/product-list.component");
var product_view_component_1 = require("./product/product-view.component");
var register_component_1 = require("./register/register.component");
var title_component_1 = require("./title/title.component");
var welcome_component_1 = require("./welcome/welcome.component");
/*
 * Routes
 */
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: 'private', component: private_component_1.PrivateComponent },
    { path: 'title', component: title_component_1.TitleComponent },
    { path: 'shop', component: welcome_component_1.WelcomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'film', component: article_list_component_1.ArticleListComponent },
    { path: 'film/:id', component: article_view_component_1.ArticleViewComponent },
    { path: 'director', component: director_component_1.DirectorComponent },
    { path: 'directors', component: director_list_component_1.DirectorListComponent },
    { path: 'directors/:id', component: director_view_component_1.DirectorViewComponent },
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'products/:id', component: product_view_component_1.ProductViewComponent },
    { path: 'cart', component: cart_view_component_1.CartViewComponent },
    { path: 'checkout', component: checkout_view_component_1.CheckoutViewComponent },
];
/*
 * Routes Provider
 */
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map