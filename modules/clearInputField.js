import { addBookForm } from './HtmlElements.js';

const clearField = () => {
  addBookForm.bookTitle.value = '';
  addBookForm.bookAuthor.value = '';
};

export default clearField;