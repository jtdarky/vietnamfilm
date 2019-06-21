import {Component} from '@angular/core';
import {Router} from '@angular/router';
/*
 * Components
 */
import {DirectorCategory, DirectorCategoryService} from './directorcategory.service';

@Component({
    selector: 'db-directorcategory-list',
    templateUrl: 'app/directorcategory/directorcategory-list.component.html'
})
export class DirectorCategoryListComponent {

    directorcategories: DirectorCategory[];

    constructor(private router: Router, private directorcategoryService: DirectorCategoryService) {
        this.directorcategories = this.directorcategoryService.getDirectorCategories();
    }

    filterFilms(directorcategory: DirectorCategory) {
        this.router.navigate(['/film'], { queryParams: { directorcategory: directorcategory.id} });
    }
}