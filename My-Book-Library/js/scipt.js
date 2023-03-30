let myLibrary = [];
let libraryItems = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

 function addBookToLibrary(xyz) {
  myLibrary.push(xyz);
}

const theHobbit = new Book("the Hobbit", "J.R.R Tolkien", 295, false);
const inferno = new Book("Inferno", "Dan Brown", 692, true);
addBookToLibrary(theHobbit);
addBookToLibrary(inferno);

let library = document.querySelector('.library');

function createLibraryItem() {
  const libraryItem = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('p');
  const deleteItem = document.createElement('button');
  const changeRead = document.createElement('button');

  

}

libraryTitle.innerHTML = myLibrary[0]['title'];
libraryAuthor.innerHTML = myLibrary[0]['author'];

libraryItem.classList.add('library__item');
libraryItem.appendChild(libraryTitle);
libraryItem.appendChild(libraryAuthor);

library.appendChild(libraryItem);

