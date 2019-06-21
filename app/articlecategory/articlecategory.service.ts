import {Injectable} from '@angular/core';

export class ArticleCategory {
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
export class ArticleCategoryService {
    articlecategories: ArticleCategory[] = [
        { id: '1', title: 'Horror', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee and more.' },
        { id: '2', title: 'Action', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It\'s consistently excellent, dishes are superb and healthily cooked with high quality ingredients.' },
        { id: '3', title: 'Drama', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'A dairy product is food produced from the milk of mammals, primarily cows, water buffaloes, goats, sheep, yaks.' },
        { id: '4', title: 'Documentary', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Only superior quality beef, lamb, pork.' },
        { id: '5', title: 'Adventure', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Great place to buy fresh seafood.' },
        { id: '6', title: 'Superhero', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'A variety of fresh fruits and vegetables.' }
    ];

    getArticleCategories() {
        return this.articlecategories;
    }

    getArticleCategory(id: string): ArticleCategory {
        for (let i = 0; i < this.articlecategories.length; i++) {
            if (this.articlecategories[i].id === id) {
                return this.articlecategories[i];
            }
        }
        throw new ArticleCategoryNotFoundException(`ArticleCategory ${id} not found`);
    }
}

export class ArticleCategoryNotFoundException extends Error {
    constructor(message?: string) {
        super(message);
    }
}
