// nav section start here
import {
  // eslint-disable-next-line max-len
  listSection, addSection, contactSection, books, heading, add, addTextColor, listTextColor, contactTextColor,
} from './HtmlElements.js';

const navMenu = () => {
  // Show add section on website when website loaded
  const showAddSectionFirst = () => {
    listSection.setAttribute('class', 'non-show');
    addSection.setAttribute('class', 'show');
    contactSection.setAttribute('class', 'non-show');
    books.setAttribute('class', 'books');
    heading.setAttribute('class', 'non-show');
    add.style.color = 'green';
  };

  showAddSectionFirst();

  const showList = () => {
    listSection.setAttribute('class', 'show');
    addSection.setAttribute('class', 'non-show');
    contactSection.setAttribute('class', 'non-show');
    books.setAttribute('class', 'books');
    heading.setAttribute('class', 'heading');
    addTextColor.style.color = 'black';
    listTextColor.style.color = 'green';
    contactTextColor.style.color = 'black';
  };

  const showAdd = () => {
    addTextColor.style.color = 'green';
    listTextColor.style.color = 'black';
    contactTextColor.style.color = 'black';
    listSection.setAttribute('class', 'non-show');
    addSection.setAttribute('class', 'show');
    contactSection.setAttribute('class', 'non-show');
    books.setAttribute('class', 'books');
    heading.setAttribute('class', 'non-show');
  };

  const showcontact = () => {
    books.setAttribute('class', 'non-show');
    heading.setAttribute('class', 'non-show');
    contactSection.setAttribute('class', 'show');
    addTextColor.style.color = 'black';
    listTextColor.style.color = 'black';
    contactTextColor.style.color = 'green';
  };

  addTextColor.addEventListener('click', () => {
    showAdd();
  });
  listTextColor.addEventListener('click', () => {
    showList();
  });
  contactTextColor.addEventListener('click', () => {
    showcontact();
  });
};
// nav section ends here

export default navMenu;