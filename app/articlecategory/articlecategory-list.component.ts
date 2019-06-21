/**
 * Created by g62 on 15/02/17.
 */
/*
 * Angular Imports
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';
/*
 * Components
 */
import {ArticleCategory, ArticleCategoryService} from './articlecategory.service';

@Component({
    selector: 'db-articlecategory-list',
    templateUrl: 'app/articlecategory/articlecategory-list.component.html'
})
export class ArticleCategoryListComponent {

    articlecategories: ArticleCategory[];

    constructor(private router: Router, private articlecategoryService: ArticleCategoryService) {
        this.articlecategories = this.articlecategoryService.getArticleCategories();
    }

    filterFilms(articlecategory: ArticleCategory) {
        this.router.navigate(['/film'], { queryParams: { articlecategory: articlecategory.id} });
    }
}

