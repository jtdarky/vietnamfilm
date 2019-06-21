/**
 * Created by g62 on 23/01/17.
 */
export interface Director {
    // Unique Id
    id: string;
    // Ref on category belongs to
    categoryId: string;
    //genre
    genre: string;
    // The title
    title: string;
    //date
    releaseDate: string;
    // Price
    rating: number;
    //director
    director: string;
    //cast
    cast: string;
    //production
    production: string;
    // Description
    description: string;
    // Plot
    plot: string;
    //opinion
    opinion: string;
    // Mark director with special rating
    isSpecial: boolean;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
}

export class DirectorService {

    private directors: Director[] = [
        // Bakery
        { id: '1', categoryId: '1', title: 'Lion King', rating: 1.5, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', director: 'some guy at disney', description: 'It a great movie about talking animals', plot:'disney plot', opinion:'one of my favorite movies', production: 'how was it made' },
        { id: '2', categoryId: '1', title: 'Big Hero 6', rating: 5, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', description: 'It a movie about six kids and a puffy robot', plot:'disney plot', opinion:'my favorite movie in 2015',production: 'how was it made' },
        { id: '3', categoryId: '1', title: 'Lilo and Stitch', rating: 7, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', description: 'A disney movie that takes place on Hawaii', plot:'disney plot', opinion:'my favorite disney movie',production: 'how was it made' }

    ];

    getDirectors(category?: string, search?: string) {
        if (category) {
            return this.directors.filter((director: Director, index: number, array: Director[]) => {
                return director.categoryId === category;
            });
        } else if (search) {
            let lowSearch = search.toLowerCase();
            return this.directors.filter((director: Director, index: number, array: Director[]) => {
                return director.title.toLowerCase().indexOf(lowSearch) != -1;
            });
        } else {
            return this.directors;
        }
    }

    getDirector(id: string): Director {
        for (let i = 0; i < this.directors.length; i++) {
            if (this.directors[i].id === id) {
                return this.directors[i];
            }
        }
        throw new DirectorNotFoundException(`Director ${id} not found`);
    }
}

export class DirectorNotFoundException extends Error {
    constructor(message?: string) {
        super(message);
    }
}