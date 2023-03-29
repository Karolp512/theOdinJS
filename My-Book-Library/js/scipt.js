/*
I. Set Up grid
  1. max 3 column in 1 row
  2. responsive - autofit
  3. max width of container - 1200px
II. Add object to html
  1. create testing object
  2. insert object to array
  3. prepare container to adding new objects
III. After click, create new object

*/

let myLibrary = [];

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
let libraryItem = document.createElement('div');
libraryItem.classList.add('library__item');
library.appendChild(libraryItem);