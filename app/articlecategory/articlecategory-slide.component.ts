/*
 * Angular Imports
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';

/*
 * Components
 */
import {ArticleCategory} from './articlecategory.service';

@Component({
    selector: 'db-articlecategory-slide',
    templateUrl: 'app/articlecategory/articlecategory-slide.component.html'
})
export class ArticleCategorySlideComponent {
    @Input() articlecategory: ArticleCategory;
    @Output() select: EventEmitter<ArticleCategory> = new EventEmitter<ArticleCategory>();
}

