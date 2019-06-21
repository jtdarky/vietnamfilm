import {Injectable} from '@angular/core';

export class DirectorCategory {
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
export class DirectorCategoryService {
    directorcategories: DirectorCategory[] = [
        { id: '1', title: 'Horror', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee and more.' },
        { id: '2', title: 'Action', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It\'s consistently excellent, dishes are superb and healthily cooked with high quality ingredients.' },
        { id: '3', title: 'Drama', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'A dairy product is food produced from the milk of mammals, primarily cows, water buffaloes, goats, sheep, yaks.' },
        { id: '4', title: 'Documentary', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Only superior quality beef, lamb, pork.' },
        { id: '5', title: 'Adventure', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Great place to buy fresh seafood.' },
        { id: '6', title: 'Superhero', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'A variety of fresh fruits and vegetables.' }
    ];

    getDirectorCategories() {
        return this.directorcategories;
    }

    getDirectorCategory(id: string): DirectorCategory {
        for (let i = 0; i < this.directorcategories.length; i++) {
            if (this.directorcategories[i].id === id) {
                return this.directorcategories[i];
            }
        }
        throw new DirectorCategoryNotFoundException(`DirectorCategory ${id} not found`);
    }
}

export class DirectorCategoryNotFoundException extends Error {
    constructor(message?: string) {
        super(message);
    }
}
