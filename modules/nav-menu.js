// nav section start here
import {
  listSection,
  addSection,
  contactSection,
  books,
  heading,
  addTextColor,
  listTextColor,
  contactTextColor,
} from './HtmlElements.js';

const navItemsColor = (addColor, listColor, contactColor) => {
  addTextColor.style.color = addColor;
  listTextColor.style.color = listColor;
  contactTextColor.style.color = contactColor;
};

const showSection = (bookList, addBook, contact, bookSection, title) => {
  listSection.setAttribute('class', bookList);
  addSection.setAttribute('class', addBook);
  contactSection.setAttribute('class', contact);
  books.setAttribute('class', bookSection);
  heading.setAttribute('class', title);
};
const navMenu = () => {
  // Show add section on website when website loaded
  const showAddSectionFirst = () => {
    showSection('non-show', 'show', 'non-show', 'books', 'non-show');
    navItemsColor('green', 'black', 'black');
  };

  showAddSectionFirst();
  const showList = () => {
    showSection('show', 'non-show', 'non-show', 'books', 'heading');
    navItemsColor('black', 'green', 'black');
  };

  const showAdd = () => {
    showSection('non-show', 'show', 'non-show', 'books', 'non-show');
    navItemsColor('green', 'black', 'black');
  };

  const showContact = () => {
    showSection('non-show', 'non-show', 'show', 'non-show', 'non-show');
    navItemsColor('black', 'black', 'green');
  };

  addTextColor.addEventListener('click', () => {
    showAdd();
  });

  listTextColor.addEventListener('click', () => {
    showList();
  });

  contactTextColor.addEventListener('click', () => {
    showContact();
  });
};
// nav section ends here

export default navMenu;
