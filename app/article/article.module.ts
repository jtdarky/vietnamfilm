/**
 * Created by g62 on 23/01/17.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ArticleListComponent} from './article-list.component';
import {ArticleViewComponent} from './article-view.component';
import {ArticleCardComponent} from './article-card.component';
import {ArticleSearchComponent} from './article-search.component';
import {ArticleGridComponent} from './article-grid.component';

import {ArticleService} from './article.service';


import {ArticleCategoryModule} from '../articlecategory/articlecategory.module';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ArticleCategoryModule],
    declarations: [ArticleListComponent, ArticleViewComponent, ArticleCardComponent, ArticleSearchComponent, ArticleGridComponent],
    exports: [ArticleListComponent, ArticleViewComponent, ArticleCardComponent, ArticleSearchComponent, ArticleGridComponent],
    providers: [ArticleService]
})
export class ArticleModule {}