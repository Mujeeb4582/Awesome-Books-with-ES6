import {
  addBookForm, list, msg, success,
} from './modules/HtmlElements.js';
import { clearField } from './modules/clearInputField.js';
import navMenu from './modules/nav-menu.js';

let booksList = []; // Declare a array for storing the bookList

function ondate() {
  document.querySelector('.date').innerHTML = Date();
}

ondate();

const emptyMessage = () => {
  if (booksList.length === 0) {
    msg.style.display = 'block';
  } else {
    msg.style.display = 'none';
  }
};

// nav section
navMenu();

// make object instance and its methods
class BookInfo {
  // create the object using constructor method
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  createListItem(booksListIndex) {
    const listWrapper = document.createElement('div');
    listWrapper.className = 'listWrapper';
    const unOrderList = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.type = 'button';

    list.appendChild(listWrapper);
    listWrapper.appendChild(unOrderList);
    // set innerHTML value
    li1.innerHTML = `'${this.title}'`;
    li2.innerHTML = this.author;
    li3.innerHTML = 'by';
    unOrderList.appendChild(li1);
    unOrderList.appendChild(li3);
    unOrderList.appendChild(li2);
    listWrapper.appendChild(removeBtn);

    // remove button click listner
    removeBtn.addEventListener('click', (event) => {
    // Remove item from DOM
      event.target.parentElement.remove();
      // Remove item from booksList Array
      booksList.splice(booksListIndex, 1);
      // Remove item from localStorage
      localStorage.setItem('list', JSON.stringify(booksList));
      emptyMessage();
    });
  }
}

// Loop over Array, create the element and append to the DOM
function renderBookList(lists) {
  emptyMessage();
  lists.forEach((element, index) => {
    const book = new BookInfo(element.title, element.author);
    book.createListItem(element, index);
  });
}

// check is booksList exist in localStorage
const storedBookList = localStorage.getItem('list');
// //if Exist
if (storedBookList) {
  // JSON.parse booksList
  const previousList = JSON.parse(storedBookList);
  booksList = previousList;
  renderBookList(booksList);
}

// const success = document.querySelector('.success');
// form part
addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Message display when book added successfully
  success.innerHTML = 'Book added successfully!';
  success.style.opacity = 1;
  // Timer for removing message after some time
  setTimeout(() => {
    success.style.opacity = 0;
  }, 1000);

  // Access input tag values
  const bookName = addBookForm.bookTitle.value;
  const bookAuthorName = addBookForm.bookAuthor.value;

  const book = new BookInfo(bookName, bookAuthorName);

  // Add object to the array
  booksList.push(book);
  book.createListItem();

  // clear the input field on browser
  clearField();
  // localstorage
  localStorage.setItem('list', JSON.stringify(booksList));
  emptyMessage();
});