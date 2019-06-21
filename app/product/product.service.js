"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [
            // Bakery
            { id: '1', categoryId: '1', title: 'Black Jacket', price: 20.50, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Great eaten fresh from oven. Used to make sub sandwiches, etc.' },
            { id: '2', categoryId: '1', title: 'Blue Jacket', price: 0.5, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'A croissant is a buttery, flaky, viennoiserie-pastry named for its well-known crescent shape.' },
            // Takeaway
            { id: '3', categoryId: '2', title: 'T-Shirt', price: 15.20, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven.' },
            // Dairy
            { id: '4', categoryId: '3', title: 'Poster 1', price: 1.7, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Milk is a pale liquid produced by the mammary glands of mammals' },
            { id: '5', categoryId: '3', title: 'Poster 2', price: 2.35, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Cream cheese is a soft, mild-tasting fresh cheese with a high fat content.' },
        ];
    }
    ProductService.prototype.getProducts = function (category, search) {
        if (category) {
            return this.products.filter(function (product, index, array) {
                return product.categoryId === category;
            });
        }
        else if (search) {
            var lowSearch_1 = search.toLowerCase();
            return this.products.filter(function (product, index, array) {
                return product.title.toLowerCase().indexOf(lowSearch_1) != -1;
            });
        }
        else {
            return this.products;
        }
    };
    ProductService.prototype.getProduct = function (id) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                return this.products[i];
            }
        }
        throw new ProductNotFoundException("Product " + id + " not found");
    };
    return ProductService;
}());
exports.ProductService = ProductService;
var ProductNotFoundException = /** @class */ (function (_super) {
    __extends(ProductNotFoundException, _super);
    function ProductNotFoundException(message) {
        return _super.call(this, message) || this;
    }
    return ProductNotFoundException;
}(Error));
exports.ProductNotFoundException = ProductNotFoundException;
//# sourceMappingURL=product.service.js.map