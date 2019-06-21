/**
 * Created by g62 on 26/12/16.
 */
export interface Film  {
    //unique id
    id: string;
    //category
    categoryId : string;
    //date
    date: string;
    // title
    title: string;
    //author
    director: string;
    //article
    description: string;
    //review
    review: string;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
}

export class FilmService {
    private films: Film[] = [

    ];

    getFilms(category?: string, search?: string) {
        if(category) {
            return this.films.filter((film: Film, index: number, array: Film[]) => {
                return film.categoryId === category;
            });
        } else if (search) {
                let lowSearch = search.toLowerCase();
                return this.films.filter((film: Film, index: number, array: Film[]) => {
                    return film.title.toLowerCase().indexOf(lowSearch) != -1;
                });
            } else {
                return this.films;
            }
        }
    getFilm(id: string): Film {
        for(let i=0; i < this.films.length; i++ ) {
        if(this.films[i].id === id) {
            return this.films[i];
           }
        }
        throw new FilmNotFoundException(`Film ${id} not found`);
        }
    }

    export class FilmNotFoundException extends Error  {
    constructor(message?: string) {
        super(message);
    }
}