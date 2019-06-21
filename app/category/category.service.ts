import {Injectable} from '@angular/core';

export class Category {
    //  Unique Id
    id: string;
    // The title
    title: string;
    // Description
    desc: string;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
}



@Injectable()
export class CategoryService {
    categories: Category[] = [
        { id: '1', title: 'T-Shirt', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'See our selection of movie T-shirts' },
        { id: '2', title: 'Jackets', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Quailty Jackets' },
        { id: '3', title: 'Posters', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Buy our selection of movie posters' },
    ];

    getCategories() {
        return this.categories;
    }

    getCategory(id: string): Category {
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === id) {
                return this.categories[i];
            }
        }
        throw new CategoryNotFoundException(`Category ${id} not found`);
    }
}

export class CategoryNotFoundException extends Error {
    constructor(message?: string) {
        super(message);
    }
}
