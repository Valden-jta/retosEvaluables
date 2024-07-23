import { Professional } from "./professional";

let professional1:Professional = new Professional(
  "Quentin Tarantino",
  61,
  90,
  185,
  false,
  "American",
  2,
  "Director"
);

let professional2:Professional = new Professional(
  "Emma Stone",
  35,
  52,
  168,
  false,
  "American",
  1,
  "Actress"
);

let professional3:Professional = new Professional(
  "Aaron Sorkin",
  63,
  80,
  183,
  false,
  "American",
  1,
  "Screenwriter"
);

let professional4:Professional = new Professional(
    "Steven Spielberg",
    77,
    90,
    170,
    false,
    "American",
    4,
    "Director"
);


professional1.printProfessional();
professional2.printProfessional();
professional3.printProfessional();
professional4.printProfessional();