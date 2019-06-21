/**
 * Created by g62 on 17/05/17.
 */
/*
 * Angular Imports
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';

/*
 * Components
 */
import {Event} from './event.service';

@Component({
    selector: 'db-event-card',
    templateUrl: 'app/event/event-card.component.html'
})
export class EventCardComponent {
    @Input() events: Event[];
    @Output() addToCart: EventEmitter<Event> = new EventEmitter<Event>();

    setClasses(event: Event) {
        return {
            'card-danger': event.isSpecial,
            'card-inverse': event.isSpecial
        };
    }

    buy(event: Event) {
        console.log('We bought', event.title);
        this.addToCart.emit(event);
    }
}

