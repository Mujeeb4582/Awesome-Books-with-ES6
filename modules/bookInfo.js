import { list } from './HtmlElements.js';
import {
  booksList, emptyMessage,
} from '../index.js';
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

export default BookInfo;