/**
 * Created by g62 on 23/01/17.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'db-director-search',
    templateUrl: 'app/director/director-search.component.html'
})
export class DirectorSearchComponent {

    disabled: boolean = true;
    searchControl: FormControl;

    constructor(private router: Router) {}

    ngOnInit() {
        this.searchControl = new FormControl();
        this.searchControl.valueChanges.subscribe((value: string) => {
            this.searchChanged(value);
        });
    }

    searchDirector(value: string) {
        this.router.navigate(['/directors'], { queryParams: { search: value} });
    }

    searchChanged(value: string) {
        // Update the disabled property depends on value 
        if (value) {
            this.disabled = false;
        } else {
            this.disabled = true;
        }
    }
}