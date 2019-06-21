/**
 * Created by g62 on 26/12/16.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'db-filmarticle',
    templateUrl: 'app/filmarticles/film-articles.component.html'
})

export class FilmArticleComponent {
    constructor() {
        this.films = ['Titanic', 'Lion King', 'Finding Nemo'];
    }
}