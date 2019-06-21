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
import {DirectorCategory} from './directorcategory.service';

@Component({
    selector: 'db-directorcategory-card',
    templateUrl: 'app/directorcategory/directorcategory-card.component.html'
})
export class DirectorCategoryCardComponent {
    @Input() directorcategory: DirectorCategory;

    constructor(private router: Router) {}

    filterFilms(directorcategory: DirectorCategory) {
        this.router.navigate(['/film'], { queryParams: { directorcategory: directorcategory.id} });
    }
}