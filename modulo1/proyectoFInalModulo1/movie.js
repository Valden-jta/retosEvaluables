"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var professional_1 = require("./professional");
var Movie = /** @class */ (function () {
    // Constructor
    function Movie(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = [];
        this.nationality = nationality;
        this.director = new professional_1.Professional('', 0, 0, 0, false, '', 0, '');
        this.writer = new professional_1.Professional('', 0, 0, 0, false, '', 0, '');
        this.languaje = '';
        this.platform = '';
        this.isMCU = false;
        this.mainCharacterName = '';
        this.producer = '';
        this.distributor = '';
        this.genre = genre;
    }
    // Getters
    // Setters
    // Métodos públicos
    Movie.prototype.printMovie = function () {
        console.log("\n        \u2022 Title: ".concat(this.title, "\n\n        \u2022 Release year:  ").concat(this.releaseYear, "\n\n        \u2022 Actors: ").concat(this.actors.map(function (actor) { return actor.name; }), "\n\n        \u2022 Nationality: ").concat(this.nationality, "\n\n        \u2022 Director: ").concat(this.director.name, "\n\n        \u2022 Writer: ").concat(this.writer.name, "\n\n        \u2022 languaje: ").concat(this.languaje, "\n\n        \u2022 Platform: ").concat(this.platform, "\n\n        \u2022 isMCU: ").concat(this.isMCU, "\n\n        \u2022 Main Character: ").concat(this.mainCharacterName, "\n\n        \u2022 Producer: ").concat(this.producer, "\n\n        \u2022 Distributor: ").concat(this.distributor, "\n\n        \u2022 Genre: ").concat(this.genre, "\n\n        "));
    };
    return Movie;
}());
exports.Movie = Movie;
