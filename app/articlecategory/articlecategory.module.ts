import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ArticleCategoryListComponent} from './articlecategory-list.component';
import {ArticleCategoryTitlePipe} from './articlecategory.pipe';
import {ArticleCategoryCardComponent} from './articlecategory-card.component';
import {ArticleCategorySlideComponent} from "./articlecategory-slide.component";

import {ArticleCategoryService} from './articlecategory.service';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [ArticleCategoryListComponent, ArticleCategoryTitlePipe, ArticleCategoryCardComponent,ArticleCategorySlideComponent ],
    exports: [ArticleCategoryListComponent, ArticleCategoryTitlePipe, ArticleCategoryCardComponent, ArticleCategorySlideComponent],
    providers: [ArticleCategoryService]
})
export class ArticleCategoryModule {}