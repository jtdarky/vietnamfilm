/**
 * Created by g62 on 23/01/17.
 */
/*
 * Angular Imports
 */
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

/*
 * Components Imports
 */
import {Article, ArticleService} from './article.service';
import {Cart, CartItem, CartService} from '../cart/cart.service';

@Component({
    selector: 'db-article-view',
    templateUrl: 'app/article/article-view.component.html'
})
export class ArticleViewComponent {

    article: Article;
    cartItem: CartItem;

    get quantity(): number {
        return this.cartItem ? this.cartItem.count : 0;
    }

    get amount(): number {
        return this.cartItem ? this.cartItem.amount : 0;
    }

    constructor(private route: ActivatedRoute,
                private articleService: ArticleService,
                private cartService: CartService) {
        this.route
            .params
            .subscribe(params => {
                // Get the article id
                let id: string = params['id'];
                // Return the article from ArticleService
                this.article = this.articleService.getArticle(id);
                // Return the cart item
                this.cartItem = this.cartService.findItem(id);
            });
    }

    addToCart() {
        this.cartItem = this.cartService.addArticle(this.article);
    }

    removeFromCart() {
        this.cartItem = this.cartService.removeArticle(this.article);
    }
}

