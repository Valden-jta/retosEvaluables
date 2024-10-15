import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{

  @Input() bookData!: Book[];
  public bookList!:Book[];
  public intvRefresh!:unknown;

  constructor() {}


 
  ngOnInit(): void {
    // refresca la lista cada 100ms (actualiza los cambios al filtrar)
    this.intvRefresh = setInterval(() => this.startList(this.bookData), 100);
    this.startList(this.bookData);
    console.log('lista en cards: ' + this.bookList.length);
  }

  private startList(Bookdata: Book[]): Book[] {
    return this.bookList = this.bookData;
  }



  seleccionaFormato(format: string, book: Book): void {
    book.selected = parseInt(format);
  }

  mostrarPrecio(book: Book): number {
    return book.price[book.selected];
  }

}
