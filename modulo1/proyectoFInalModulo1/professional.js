"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    // Constructor
    function Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    // Getters
    // Setters
    // Métodos públicos
    Professional.prototype.printProfessional = function () {
        console.log("\n            \u2022 Name: ".concat(this.name, "\n\n            \u2022 Age:  ").concat(this.age, "\n\n            \u2022 Weight: ").concat(this.weight, "\n\n            \u2022 Height: ").concat(this.height, "\n\n            \u2022 Retired: ").concat(this.isRetired, "\n\n            \u2022 Nationality: ").concat(this.nationality, "\n\n            \u2022 Oscars: ").concat(this.oscarsNumber, "\n\n            \u2022 Profession: ").concat(this.profession, "\n\n            "));
    };
    return Professional;
}());
exports.Professional = Professional;
