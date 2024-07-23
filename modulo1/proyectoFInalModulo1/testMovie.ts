//** ---- Imports

import { Professional } from "./professional";
import { Movie } from "./movie";

//** ---- Declaracion de objetos

// Professional
let johnTravolta:Professional = new Professional("John Travolta", 70, 90, 188, false, "American", 0, "Actor");
let umaThurman:Professional = new Professional("Uma Thurman", 50, 64, 180, false, "American", 0, "Actress");
let samuelLJackson:Professional = new Professional("Samuel L. Jackson", 75, 94, 189, false, "American", 1, "Actor");
let bruceWillis:Professional = new Professional("Bruce Willis", 65, 93, 183, false, "American", 0, "Actor");
let quentinTarantino:Professional = new Professional("Quentin Tarantino", 61, 90, 185, false, "American", 2, "Director");
let elijahWood:Professional = new Professional("Elijah Wood", 43, 64, 168, false, "American", 0, "Actor");
let ianMcKellen:Professional = new Professional("Ian McKellen", 85, 80, 180, false, "British", 0, "Actor");
let viggoMortensen:Professional = new Professional("Viggo Mortensen", 65, 81, 180, false, "American", 0, "Actor");
let seanAstin:Professional = new Professional("Sean Astin", 53, 85, 170, false, "American", 0, "Actor");
let peterJackson:Professional = new Professional("Peter Jackson", 63, 120, 169, false, "New Zealander", 3, "Director");
let franWalsh:Professional = new Professional("Fran Walsh", 63, 60, 165, false, "New Zealander", 3, "Screenwriter");
let maribelVerdu:Professional = new Professional("Maribel Verdú", 50, 60, 165, false, "Spanish", 0, "Actress");
let ivanaBaquero:Professional = new Professional("Ivana Baquero", 30, 55, 160, false, "Spanish", 0, "Actress");
let dougJones:Professional = new Professional("Doug Jones", 64, 64, 192, false, "American", 0, "Actor");
let ariadnaGil:Professional = new Professional("Ariadna Gil", 51, 56, 168, false, "Spanish", 0, "Actress");
let guillermoDelToro:Professional = new Professional("Guillermo del Toro", 55, 100, 178, false, "Mexican", 0, "Director");
let javierCamara:Professional = new Professional("Javier Cámara", 53, 70, 170, false, "Spanish", 0, "Actor");
let carlosAreces:Professional = new Professional("Carlos Areces", 48, 75, 170, false, "Spanish", 0, "Actor");
let raulArevalo:Professional = new Professional("Raúl Arévalo", 42, 70, 175, false, "Spanish", 0, "Actor");
let lolaDuenas:Professional = new Professional("Lola Dueñas", 49, 65, 165, false, "Spanish", 0, "Actress");
let pedroAlmodovar:Professional = new Professional("Pedro Almodóvar", 72, 75, 178, false, "Spanish", 0, "Director");
let robertDeNiro:Professional = new Professional("Robert De Niro", 76, 75, 177, false, "American", 0, "Actor");
let alPacino:Professional = new Professional("Al Pacino", 79, 75, 170, false, "American", 0, "Actor");
let joePesci:Professional = new Professional("Joe Pesci", 76, 70, 163, false, "American", 0, "Actor");
let harveyKeitel:Professional = new Professional("Harvey Keitel", 80, 75, 170, false, "American", 0, "Actor");
let martinScorsese:Professional = new Professional("Martin Scorsese", 77, 70, 163, false, "American", 0, "Director");
let stevenZaillian:Professional = new Professional("Steven Zaillian", 67, 80, 170, false, "American", 0, "Screenwriter");
let robertDowneyJr:Professional = new Professional("Robert Downey Jr.", 55, 78, 174, false, "American", 0, "Actor");
let chrisEvans:Professional = new Professional("Chris Evans", 38, 88, 183, false, "American", 0, "Actor");
let markRuffalo:Professional = new Professional("Mark Ruffalo", 52, 80, 173, false, "American", 0, "Actor");
let chrisHemsworth:Professional = new Professional("Chris Hemsworth", 36, 91, 190, false, "Australian", 0, "Actor");
let anthonyRusso:Professional = new Professional("Anthony Russo", 50, 90, 183, false, "American", 0, "Director");
let christopherMarkus:Professional = new Professional("Christopher Markus", 51, 85, 178, false, "American", 0, "Screenwriter");

// Movie
let movie1:Movie = new Movie("Pulp Fiction", 1994, "American", "Crime");
movie1.actors = [johnTravolta, umaThurman, samuelLJackson, bruceWillis];
movie1.director = quentinTarantino;
movie1.writer = quentinTarantino;
movie1.languaje = "English";
movie1.platform = "Cinema";
movie1.isMCU = false;
movie1.mainCharacterName = "Vincent Vega";
movie1.producer = "Lawrence Bender";
movie1.distributor = "Miramax Films";

let movie2:Movie = new Movie("The Lord of the Rings: The Return of the King", 2003, "New Zealand", "Fantasy");
movie2.actors = [elijahWood, ianMcKellen, viggoMortensen, seanAstin];
movie2.director = peterJackson;
movie2.writer = franWalsh;
movie2.languaje = "English";
movie2.platform = "Cinema";
movie2.isMCU = false;
movie2.mainCharacterName = "Frodo Baggins";
movie2.producer = "Barrie M. Osborne";
movie2.distributor = "New Line Cinema";

let movie3:Movie = new Movie("El laberinto del fauno", 2006, "Spanish", "Fantasy");
movie3.actors = [maribelVerdu, ivanaBaquero, dougJones, ariadnaGil];
movie3.director = guillermoDelToro;
movie3.writer = guillermoDelToro;
movie3.languaje = "Spanish";
movie3.platform = "Cinema";
movie3.isMCU = false;
movie3.mainCharacterName = "Ofelia";
movie3.producer = "Guillermo del Toro";
movie3.distributor = "Warner Bros";

let movie4:Movie = new Movie("Los amantes pasajeros", 2013, "Spanish", "Comedy");
movie4.actors = [javierCamara, carlosAreces, raulArevalo, lolaDuenas];
movie4.director = pedroAlmodovar;
movie4.writer = pedroAlmodovar;
movie4.languaje = "Spanish";
movie4.platform = "Cinema";
movie4.isMCU = false;
movie4.mainCharacterName = "Joserra";
movie4.producer = "Agustín Almodóvar";
movie4.distributor = "Sony Pictures Releasing";

let movie5:Movie = new Movie("The Irishman", 2019, "American", "Crime");
movie5.actors = [robertDeNiro, alPacino, joePesci, harveyKeitel];
movie5.director = martinScorsese;
movie5.writer = stevenZaillian;
movie5.languaje = "English";
movie5.platform = "Netflix";
movie5.isMCU = false;
movie5.mainCharacterName = "Frank Sheeran";
movie5.producer = "Robert De Niro";
movie5.distributor = "Netflix";

let movie6:Movie = new Movie("Avengers: Endgame", 2019, "American", "Superhero");
movie6.actors = [robertDowneyJr, chrisEvans, markRuffalo, chrisHemsworth];
movie6.director = anthonyRusso;
movie6.writer = christopherMarkus;
movie6.languaje = "English";
movie6.platform = "Cinema";
movie6.isMCU = true;
movie6.mainCharacterName = "Tony Stark / Iron Man";
movie6.producer = "Kevin Feige";
movie6.distributor = "Walt Disney Studios Motion Pictures";


//** ---- Main

movie1.printMovie();
movie2.printMovie();
movie3.printMovie();
movie4.printMovie();
movie5.printMovie();
movie6.printMovie();