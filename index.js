import {
  addBookForm, msg, success, date,
} from './modules/HtmlElements.js';
import { clearField } from './modules/clearInputField.js';
import navMenu from './modules/nav-menu.js';
import { DateTime } from './modules/luxon.js';

// eslint-disable-next-line import/no-cycle
import BookInfo from './modules/bookInfo.js';

// eslint-disable-next-line import/no-mutable-exports
let booksList = []; // Declare a array for storing the bookList

// ==== Luxon Date ====
const updateTime = () => {
  const now = DateTime.now();
  date.innerHTML = now.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
};
setInterval(updateTime, 1000);

const emptyMessage = () => {
  if (booksList.length === 0) {
    msg.style.display = 'block';
  } else {
    msg.style.display = 'none';
  }
};

// nav section
navMenu();

// Loop over Array, create the element and append to the DOM
const renderBookList = (lists) => {
  emptyMessage();
  lists.forEach((element, index) => {
    const book = new BookInfo(element.title, element.author);
    book.createListItem(element, index);
  });
};

// check is booksList exist in localStorage
const storedBookList = localStorage.getItem('list');
// //if Exist
if (storedBookList) {
  // JSON.parse booksList
  const previousList = JSON.parse(storedBookList);
  booksList = previousList;
  renderBookList(booksList);
}

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

export { emptyMessage, booksList };
