/**
 * Created by g62 on 23/01/17.
 */
export interface Article {
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
    // Mark article with special rating
    isSpecial: boolean;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
}

export class ArticleService {

    private articles: Article[] = [
        // Bakery
        { id: '1', categoryId: '1', title: 'Lion King', rating: 1.5, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', director: 'some guy at disney', description: 'It a great movie about talking animals', plot:'disney plot', opinion:'one of my favorite movies', production: 'how was it made' },
        { id: '2', categoryId: '1', title: 'Big Hero 6', rating: 5, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', description: 'It a movie about six kids and a puffy robot', plot:'disney plot', opinion:'my favorite movie in 2015',production: 'how was it made' },
        { id: '3', categoryId: '1', title: 'Lilo and Stitch', rating: 7, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', description: 'A disney movie that takes place on Hawaii', plot:'disney plot', opinion:'my favorite disney movie',production: 'how was it made' }

    ];

    getArticles(category?: string, search?: string) {
        if (category) {
            return this.articles.filter((article: Article, index: number, array: Article[]) => {
                return article.categoryId === category;
            });
        } else if (search) {
            let lowSearch = search.toLowerCase();
            return this.articles.filter((article: Article, index: number, array: Article[]) => {
                return article.title.toLowerCase().indexOf(lowSearch) != -1;
            });
        } else {
            return this.articles;
        }
    }

    getArticle(id: string): Article {
        for (let i = 0; i < this.articles.length; i++) {
            if (this.articles[i].id === id) {
                return this.articles[i];
            }
        }
        throw new ArticleNotFoundException(`Article ${id} not found`);
    }
}

export class ArticleNotFoundException extends Error {
    constructor(message?: string) {
        super(message);
    }
}