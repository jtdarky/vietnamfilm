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
 * Components
 */
import {Event, EventService} from './event.service';
import {EventCardComponent} from './event-card.component';
import {CartService} from '../cart/cart.service';

@Component({
    selector: 'db-event-grid',
    templateUrl: 'app/event/event-grid.component.html'
})
export class EventGridComponent {
    events: any = [];

    constructor(private router: ActivatedRoute, private eventService: EventService, private cartService: CartService) {
        this.router
            .queryParams
            .subscribe(params => {
                let category: string = params['category'];
                let search: string = params['search'];
                // Return filtered data from getEvents function
                let events: Event[] = this.eventService.getEvents(category, search);
                // Transform events to appropriate data
                // to display
                this.events = this.transform(events);
            });
    }

    transform(source: Event[]) {
        let index = 0;
        let length = source.length;

        let events = [];

        while (length) {
            let row: Event[] = [];
            if (length >= 3) {
                for (let i = 0; i < 3; i++) {
                    row.push(source[index++]);
                }
                events.push(row);
                length -= 3;
            } else {
                for (; length > 0; length--) {
                    row.push(source[index++]);
                }
                events.push(row);
            }
        }

        return events;
    }

    addToCart(event:Event) {
        this.cartService.addEvent(event);
    }
}
