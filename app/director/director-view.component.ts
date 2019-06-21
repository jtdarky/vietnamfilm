/**
 * Created by g62 on 23/01/17.
 */
/*
 * Angular Imports
 */
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

/*
 * Components Imports
 */
import {Director, DirectorService} from './director.service';
import {Cart, CartItem, CartService} from '../cart/cart.service';

@Component({
    selector: 'db-director-view',
    templateUrl: 'app/director/director-view.component.html'
})
export class DirectorViewComponent {

    director: Director;
    cartItem: CartItem;

    get quantity(): number {
        return this.cartItem ? this.cartItem.count : 0;
    }

    get amount(): number {
        return this.cartItem ? this.cartItem.amount : 0;
    }

    constructor(private route: ActivatedRoute,
                private directorService: DirectorService,
                private cartService: CartService) {
        this.route
            .params
            .subscribe(params => {
                // Get the director id
                let id: string = params['id'];
                // Return the director from DirectorService
                this.director = this.directorService.getDirector(id);
                // Return the cart item
                this.cartItem = this.cartService.findItem(id);
            });
    }

    addToCart() {
        this.cartItem = this.cartService.addDirector(this.director);
    }

    removeFromCart() {
        this.cartItem = this.cartService.removeDirector(this.director);
    }
}

