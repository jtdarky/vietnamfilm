/**
 * Created by g62 on 23/01/17.
 */
/*
 * Angular Imports
 */
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

/*
 * Components
 */
import {Director, DirectorService} from './director.service';
import {DirectorCardComponent} from './director-card.component';
import {CartService} from '../cart/cart.service';

@Component({
    selector: 'db-director-grid',
    templateUrl: 'app/director/director-grid.component.html'
})
export class DirectorGridComponent {
    directors: any = [];

    constructor(private router: ActivatedRoute, private directorService: DirectorService, private cartService: CartService) {
        this.router
            .queryParams
            .subscribe(params => {
                let category: string = params['category'];
                let search: string = params['search'];
                // Return filtered data from getDirectors function
                let directors: Director[] = this.directorService.getDirectors(category, search);
                // Transform directors to appropriate data
                // to display
                this.directors = this.transform(directors);
            });
    }

    transform(source: Director[]) {
        let index = 0;
        let length = source.length;

        let directors = [];

        while (length) {
            let row: Director[] = [];
            if (length >= 3) {
                for (let i = 0; i < 3; i++) {
                    row.push(source[index++]);
                }
                directors.push(row);
                length -= 3;
            } else {
                for (; length > 0; length--) {
                    row.push(source[index++]);
                }
                directors.push(row);
            }
        }

        return directors;
    }

    addToCart(director:Director) {
        this.cartService.addDirector(director);
    }
}
