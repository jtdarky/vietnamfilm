/**
 * Created by g62 on 23/01/17.
 */
/*
 * Angular Imports
 */
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

/*
 * Components
 */
import {Article, ArticleService} from './article.service';
import {ArticleCardComponent} from './article-card.component';
import {CartService} from '../cart/cart.service';

@Component({
    selector: 'db-article-grid',
    templateUrl: 'app/article/article-grid.component.html'
})
export class ArticleGridComponent {
    articles: any = [];

    constructor(private router: ActivatedRoute, private articleService: ArticleService, private cartService: CartService) {
        this.router
            .queryParams
            .subscribe(params => {
                let category: string = params['category'];
                let search: string = params['search'];
                // Return filtered data from getArticles function
                let articles: Article[] = this.articleService.getArticles(category, search);
                // Transform articles to appropriate data
                // to display
                this.articles = this.transform(articles);
            });
    }

    transform(source: Article[]) {
        let index = 0;
        let length = source.length;

        let articles = [];

        while (length) {
            let row: Article[] = [];
            if (length >= 3) {
                for (let i = 0; i < 3; i++) {
                    row.push(source[index++]);
                }
                articles.push(row);
                length -= 3;
            } else {
                for (; length > 0; length--) {
                    row.push(source[index++]);
                }
                articles.push(row);
            }
        }

        return articles;
    }

    addToCart(article:Article) {
        this.cartService.addArticle(article);
    }
}
