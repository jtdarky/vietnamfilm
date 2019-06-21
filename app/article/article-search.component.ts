/**
 * Created by g62 on 23/01/17.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'db-article-search',
    templateUrl: 'app/article/article-search.component.html'
})
export class ArticleSearchComponent {

    disabled: boolean = true;
    searchControl: FormControl;

    constructor(private router: Router) {}

    ngOnInit() {
        this.searchControl = new FormControl();
        this.searchControl.valueChanges.subscribe((value: string) => {
            this.searchChanged(value);
        });
    }

    searchArticle(value: string) {
        this.router.navigate(['/articles'], { queryParams: { search: value} });
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
