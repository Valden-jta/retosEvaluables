import { Professional } from "./professional";

export class Movie {
  // Atributos
  public title: string;
  public releaseYear: number;
  public actors: Professional[];
  public nationality: string;
  public director: Professional;
  public writer: Professional;
  public languaje: string;
  public platform: string;
  public isMCU: boolean;
  public mainCharacterName: string;
  public producer: string;
  public distributor: string;
  public genre: string;

  // Constructor
  constructor(
    title: string,
    releaseYear: number,
    nationality: string,
    genre: string
  ) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.actors  = [];
    this.nationality = nationality;
    this.director = new Professional('',0,0,0,false,'',0,'');
    this.writer = new Professional('',0,0,0,false,'',0,'');
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
  public printMovie() {
    console.log(`
        • Title: ${this.title}\n
        • Release year:  ${this.releaseYear}\n
        • Actors: ${this.actors.map(actor => actor.name)}\n
        • Nationality: ${this.nationality}\n
        • Director: ${this.director.name}\n
        • Writer: ${this.writer.name}\n
        • languaje: ${this.languaje}\n
        • Platform: ${this.platform}\n
        • isMCU: ${this.isMCU}\n
        • Main Character: ${this.mainCharacterName}\n
        • Producer: ${this.producer}\n
        • Distributor: ${this.distributor}\n
        • Genre: ${this.genre}\n
        `);
  }

  // Métodos privados
}
