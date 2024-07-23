export class Professional {
  // Atributos
  public name: string;
  public age: number;
  public weight: number;
  public height: number;
  public isRetired: boolean;
  public nationality: string;
  public oscarsNumber: number;
  public profession: string;

  // Constructor
  constructor(
    name: string,
    age: number,
    weight: number,
    height: number,
    isRetired: boolean,
    nationality: string,
    oscarsNumber: number,
    profession: string
  ) {
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
  public printProfessional() {
    console.log(`
            • Name: ${this.name}\n
            • Age:  ${this.age}\n
            • Weight: ${this.weight}\n
            • Height: ${this.height}\n
            • Retired: ${this.isRetired}\n
            • Nationality: ${this.nationality}\n
            • Oscars: ${this.oscarsNumber}\n
            • Profession: ${this.profession}\n
            `);
  }

  // Métodos privados
}
