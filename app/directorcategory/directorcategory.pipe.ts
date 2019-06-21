/*
 * Angular Imports
 */
import {Pipe, PipeTransform} from '@angular/core';

/*
 * Components Imports
 */
import {DirectorCategory, DirectorCategoryService} from './directorcategory.service';

/*
 * Return directorcategory title of the value
 * Usage:
 *   value | directorcategoryTitle
 * Example:
 *   {{ directorcategoryId |  directorcategoryTitle }}
 *   presume directorcategoryId='1'
 *   result formats to 'Bread & Bakery'
 */
@Pipe({ name: 'directorcategoryTitle' })
export class DirectorCategoryTitlePipe implements PipeTransform {

    constructor(private directorcategoryService: DirectorCategoryService) { }

    transform(value: string): string {
        let directorcategory: DirectorCategory = this.directorcategoryService.getDirectorCategory(value);
        return directorcategory ? directorcategory.title : '';
    }
}
