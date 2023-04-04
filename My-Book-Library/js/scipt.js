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
createLibraryItem(theHobbit);
addBookToLibrary(inferno);
createLibraryItem(inferno);

function createLibraryItem(book) {
  let library = document.querySelector('.library');
  const libraryItem = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('p');
  const changeRead = document.createElement('button');
  const deleteItem = document.createElement('button');

  libraryItem.classList.add('library__item');
  changeRead.classList.add('changeBtn');
  deleteItem.classList.add('deleteBtn');

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  read.textContent = book.read;
  changeRead.textContent = "change Read";
  deleteItem.textContent = "delete";
  
  libraryItem.appendChild(title);
  libraryItem.appendChild(author);
  libraryItem.appendChild(pages);
  libraryItem.appendChild(read);
  libraryItem.appendChild(changeRead);
  libraryItem.appendChild(deleteItem);

  library.appendChild(libraryItem);
}

let btnList = Array.from(document.querySelectorAll(".deleteBtn"));
console.log(btnList);
let libraryList = document.querySelectorAll(".library__item");

for(let x = 0; x < btnList.length; x++){
  btnList[x].addEventListener("click", (deleteLibraryItem));
}

 function deleteLibraryItem(){
  console.log(this.parentNode.remove());
} 