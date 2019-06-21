/*
 * Angular Imports
 */
import {Routes, RouterModule} from '@angular/router';

/*
 * Components
 */
import {AboutComponent} from './about/about.component';
import {AdminComponent} from'./admin/admin.component';
import {ArticleListComponent} from './article/article-list.component';
import {ArticleViewComponent} from './article/article-view.component';
import {CartViewComponent} from './cart/cart-view.component';
import {CheckoutViewComponent} from './checkout/checkout-view.component';
import {DirectorComponent} from "./director/director.component";
import {DirectorListComponent} from "./director/director-list.component";
import {DirectorViewComponent} from "./director/director-view.component";
import {HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {PrivateComponent} from './private/private.component';
import {ProductListComponent} from './product/product-list.component';
import {ProductViewComponent} from './product/product-view.component';
import {RegisterComponent} from './register/register.component';
import {TitleComponent} from './title/title.component';
import {WelcomeComponent} from './welcome/welcome.component';

/*
 * Routes
 */
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
    {path: 'admin', component: AdminComponent},
  { path: 'private', component: PrivateComponent},
  { path: 'title', component: TitleComponent},
  { path: 'shop', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'film', component: ArticleListComponent},
  { path: 'film/:id', component: ArticleViewComponent},
    {path: 'director', component: DirectorComponent},
    {path: 'directors', component: DirectorListComponent},
    {path: 'directors/:id', component: DirectorViewComponent},
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductViewComponent },
  { path: 'cart', component: CartViewComponent },
  { path: 'checkout', component: CheckoutViewComponent },
];

/*
 * Routes Provider
 */
export const routing = RouterModule.forRoot(routes);
