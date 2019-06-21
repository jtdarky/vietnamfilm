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
var FilmService = /** @class */ (function () {
    function FilmService() {
        this.films = [];
    }
    FilmService.prototype.getFilms = function (category, search) {
        if (category) {
            return this.films.filter(function (film, index, array) {
                return film.categoryId === category;
            });
        }
        else if (search) {
            var lowSearch_1 = search.toLowerCase();
            return this.films.filter(function (film, index, array) {
                return film.title.toLowerCase().indexOf(lowSearch_1) != -1;
            });
        }
        else {
            return this.films;
        }
    };
    FilmService.prototype.getFilm = function (id) {
        for (var i = 0; i < this.films.length; i++) {
            if (this.films[i].id === id) {
                return this.films[i];
            }
        }
        throw new FilmNotFoundException("Film " + id + " not found");
    };
    return FilmService;
}());
exports.FilmService = FilmService;
var FilmNotFoundException = /** @class */ (function (_super) {
    __extends(FilmNotFoundException, _super);
    function FilmNotFoundException(message) {
        return _super.call(this, message) || this;
    }
    return FilmNotFoundException;
}(Error));
exports.FilmNotFoundException = FilmNotFoundException;
//# sourceMappingURL=film.services.js.map