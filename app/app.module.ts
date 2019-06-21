import {NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/**
 * Modules
 */
import {ArticleCategoryModule} from './articlecategory/articlecategory.module';
import {ArticleModule} from './article/article.module';
import {CartModule} from './cart/cart.module';
import {DirectorModule} from "./director/director.module";
import {CategoryModule} from './category/category.module';

import {ProductModule} from './product/product.module';

/*
 * Components
 */
import {AppComponent}  from './app.component';
import {AdminComponent} from "./admin/admin.component";
import {AboutComponent} from './about/about.component';
import {DirectorComponent} from './director/director.component';
import {FilmArticleComponent} from './filmarticles/film-articles.component';
import {HomeComponent} from './home/home.component';
import {PrivateComponent} from './private/private.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {CheckoutViewComponent} from './checkout/checkout-view.component';


/*
login components
 */
import { AlertComponent } from './directives/alert.component';
import { TitleComponent } from './title/title.component';
import { AuthGuard } from './guards/auth.guard';
import { AlertService} from './services/alert.service';
import { AuthenticationService} from './services/authentication.service';
import { UserService } from './services/user.service';

/*
 * Routing
 */
import {routing}  from './app.routes';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule,
            routing, ArticleCategoryModule, CartModule, CategoryModule, DirectorModule, ArticleModule, ProductModule],
  declarations: [AppComponent, AdminComponent, AlertComponent, AboutComponent, DirectorComponent, FilmArticleComponent,HomeComponent, LoginComponent, PrivateComponent, RegisterComponent, TitleComponent,  NavbarComponent, FooterComponent,
                WelcomeComponent, CheckoutViewComponent],
   providers: [
       AuthGuard,
       AlertService,
       AuthenticationService,
       UserService,
   ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
