/**
 * Created by g62 on 23/01/17.
 */
/*
 * Angular Imports
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';

/*
 * Components
 */
import {Director} from './director.service';

@Component({
    selector: 'db-director-card',
    templateUrl: 'app/director/director-card.component.html'
})
export class DirectorCardComponent {
    @Input() directors: Director[];
    @Output() addToCart: EventEmitter<Director> = new EventEmitter<Director>();

    setClasses(director: Director) {
        return {
            'card-danger': director.isSpecial,
            'card-inverse': director.isSpecial
        };
    }

    buy(director: Director) {
        console.log('We bought', director.title);
        this.addToCart.emit(director);
    }
}
