/**
 * Created by g62 on 23/01/17.
 */
/*
 * Angular Imports
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';

/*
 * Components
 */
import {Article} from './article.service';

@Component({
    selector: 'db-article-card',
    templateUrl: 'app/article/article-card.component.html'
})
export class ArticleCardComponent {
    @Input() articles: Article[];
    @Output() addToCart: EventEmitter<Article> = new EventEmitter<Article>();

    setClasses(article: Article) {
        return {
            'card-danger': article.isSpecial,
            'card-inverse': article.isSpecial
        };
    }

    buy(article: Article) {
        console.log('We bought', article.title);
        this.addToCart.emit(article);
    }
}

