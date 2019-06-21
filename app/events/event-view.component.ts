/**
 * Created by g62 on 17/05/17.
 */
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
import {Event, EventService} from './event.service';
import {Cart, CartItem, CartService} from '../cart/cart.service';

@Component({
    selector: 'db-event-view',
    templateUrl: 'app/event/event-view.component.html'
})
export class EventViewComponent {

    event: Event;
    cartItem: CartItem;

    get quantity(): number {
        return this.cartItem ? this.cartItem.count : 0;
    }

    get amount(): number {
        return this.cartItem ? this.cartItem.amount : 0;
    }

    constructor(private route: ActivatedRoute,
                private eventService: EventService,
                private cartService: CartService) {
        this.route
            .params
            .subscribe(params => {
                // Get the event id
                let id: string = params['id'];
                // Return the event from EventService
                this.event = this.eventService.getEvent(id);
                // Return the cart item
                this.cartItem = this.cartService.findItem(id);
            });
    }

    addToCart() {
        this.cartItem = this.cartService.addEvent(this.event);
    }

    removeFromCart() {
        this.cartItem = this.cartService.removeEvent(this.event);
    }
}

