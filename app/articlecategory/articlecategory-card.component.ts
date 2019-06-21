/**
 * Created by g62 on 15/02/17.
 */
/*
 * Angular Imports
 */
import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

/*
 * Components
 */
import {ArticleCategory} from './articlecategory.service';

@Component({
    selector: 'db-articlecategory-card',
    templateUrl: 'app/articlecategory/articlecategory-card.component.html'
})
export class ArticleCategoryCardComponent {
    @Input() articlecategory: ArticleCategory;

    constructor(private router: Router) {}

    filterFilms(articlecategory: ArticleCategory) {
        this.router.navigate(['/film'], { queryParams: { articlecategory: articlecategory.id} });
    }
}
