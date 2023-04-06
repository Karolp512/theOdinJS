/* ---- ADDING NEW OBJECT ---- */

let myLibrary = [];
let btnAdd = document.querySelector(".add__item-btn");
let popupWindow = document.querySelector(".popup");

btnAdd.addEventListener('click', ()=>{
  popupWindow.classList.add('show');
})

popupWindow.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('dupa');
  const titleInput = document.getElementById('titleInput');
  const authorInput = document.getElementById('authorInput');
  const pagesInput = document.getElementById('pagesInput');
  const readInput = document.getElementById('readInput');

  const book = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked)
  addBookToLibrary(book);
  createLibraryItem(book);
  hidePopupWindow();
})

function hidePopupWindow(){
  popupWindow.classList.remove('show');
}

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
  read.classList.add('read');
  changeRead.classList.add('changeBtn');
  deleteItem.classList.add('deleteBtn');

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  read.textContent = book.read;
  changeRead.textContent = "Change read status";
  deleteItem.textContent = "Delete";
  
  libraryItem.appendChild(title);
  libraryItem.appendChild(author);
  libraryItem.appendChild(pages);
  libraryItem.appendChild(read);
  libraryItem.appendChild(changeRead);
  libraryItem.appendChild(deleteItem);

  library.appendChild(libraryItem);
}
//change read status after click btn
let readBtnList = Array.from(document.querySelectorAll(".changeBtn"));

console.log(readBtnList);

for(let x = 0; x < readBtnList.length; x++){
  readBtnList[x].addEventListener("click", changeReadStatus);
}

 function changeReadStatus(){
  console.log(this.parentNode.childNodes);
} 
//delete item after cick btn
let deleteBtnList = Array.from(document.querySelectorAll(".deleteBtn"));

for(let x = 0; x < deleteBtnList.length; x++){
  deleteBtnList[x].addEventListener("click", (deleteLibraryItem));
}

 function deleteLibraryItem(){
  console.log(this.parentNode.remove());
} 