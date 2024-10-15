import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BooksComponent } from '../../pages/books/books.component';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css'],
})
export class FormSearchComponent implements OnInit {

  @Input() bookList!: Book[];
  @Output() filterBook = new EventEmitter<Book[]>();
  public bookSearch!: Book[];
  public authorSet: string[] = [];
  public selectAuthor: string = 'Todos';
  public genreSet: string[] = [];
  public SelectGenre: string = 'Todos';
  public formatSet: string[] = ['Todos', 'ebook', 'tapa blanda', 'tapa dura'];
  public SelectFormat: string = 'Todos';


  constructor() {
  }

  ngOnInit(): void {
    this.initializeFilters();
  }
  
  private initializeFilters(): void {
    this.authorSet = ['Todos', ...new Set(this.bookList.map((book: Book) => book.author))];
    this.genreSet = ['Todos', ...new Set(this.bookList.map((book) => book.genre))];
  }

  
  filter(author: string, genre: string, type: string): void {
    this.bookSearch = this.bookList;
    this.bookSearch = this.bookSearch.filter(
      (book: Book) =>
        (book.author == author || author == 'Todos' || author == '') &&
        (book.genre == genre || genre == 'Todos' || genre == '') &&
        (book.type.includes(type) || type == 'Todos' || type == '')
    );
    this.filterBook.emit(this.bookSearch);
    console.log('Lista filtrada en form: ' + this.bookSearch);
  }

  reset(): void {
    this.initializeFilters();
    this.filter('Todos', 'Todos','Todos')
  }

}


