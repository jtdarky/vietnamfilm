export interface Product {
    // Unique Id
    id: string;
    // Ref on category belongs to
    categoryId: string;
    // The title
    title: string;
    // Price
    price: number;
    // Mark product with special price
    isSpecial: boolean;
    // Description
    desc: string;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
}

export class ProductService {

    private products: Product[] = [
        // Bakery
        { id: '1', categoryId: '1', title: 'Black Jacket', price: 20.50, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Great eaten fresh from oven. Used to make sub sandwiches, etc.' },
        { id: '2', categoryId: '1', title: 'Blue Jacket', price: 0.5, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'A croissant is a buttery, flaky, viennoiserie-pastry named for its well-known crescent shape.' },
        // Takeaway
        { id: '3', categoryId: '2', title: 'T-Shirt', price: 15.20, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven.' },
        // Dairy
        { id: '4', categoryId: '3', title: 'Poster 1', price: 1.7, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Milk is a pale liquid produced by the mammary glands of mammals' },
        { id: '5', categoryId: '3', title: 'Poster 2', price: 2.35, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Cream cheese is a soft, mild-tasting fresh cheese with a high fat content.' },
    ];

    getProducts(category?: string, search?: string) {
        if (category) {
            return this.products.filter((product: Product, index: number, array: Product[]) => {
                return product.categoryId === category;
            });
        } else if (search) {
            let lowSearch = search.toLowerCase();
            return this.products.filter((product: Product, index: number, array: Product[]) => {
                return product.title.toLowerCase().indexOf(lowSearch) != -1;
            });
        } else {
            return this.products;
        }
    }

    getProduct(id: string): Product {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                return this.products[i];
            }
        }
        throw new ProductNotFoundException(`Product ${id} not found`);
    }
}

export class ProductNotFoundException extends Error {
    constructor(message?: string) {
        super(message);
    }
}