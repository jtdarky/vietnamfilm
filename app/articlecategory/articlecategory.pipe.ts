/*
 * Angular Imports
 */
import {Pipe, PipeTransform} from '@angular/core';

/*
 * Components Imports
 */
import {ArticleCategory, ArticleCategoryService} from './articlecategory.service';

/*
 * Return articlecategory title of the value
 * Usage:
 *   value | articlecategoryTitle
 * Example:
 *   {{ articlecategoryId |  articlecategoryTitle }}
 *   presume articlecategoryId='1'
 *   result formats to 'Bread & Bakery'
 */
@Pipe({ name: 'articlecategoryTitle' })
export class ArticleCategoryTitlePipe implements PipeTransform {

    constructor(private articlecategoryService: ArticleCategoryService) { }

    transform(value: string): string {
        let articlecategory: ArticleCategory = this.articlecategoryService.getArticleCategory(value);
        return articlecategory ? articlecategory.title : '';
    }
}
