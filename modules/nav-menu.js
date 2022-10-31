// nav section start here
const navMenu = () => {
  function showAdddeff() {
    document.getElementById('list-section').setAttribute('class', 'non-show');
    document.getElementById('add-section').setAttribute('class', 'show');
    document
      .getElementById('contact-section')
      .setAttribute('class', 'non-show');
    document.getElementById('books').setAttribute('class', 'books');
    document.getElementById('heading').setAttribute('class', 'non-show');
    document.getElementById('add').style.color = 'green';
  }

  showAdddeff();

  function showList() {
    document.getElementById('list-section').setAttribute('class', 'show');
    document.getElementById('add-section').setAttribute('class', 'non-show');
    document
      .getElementById('contact-section')
      .setAttribute('class', 'non-show');
    document.getElementById('books').setAttribute('class', 'books');
    document.getElementById('heading').setAttribute('class', 'heading');
    document.getElementById('add').style.color = 'black';
    document.getElementById('lis').style.color = 'green';
    document.getElementById('con').style.color = 'black';
  }
  function showAdd() {
    document.getElementById('add').style.color = 'green';
    document.getElementById('lis').style.color = 'black';
    document.getElementById('con').style.color = 'black';
    document.getElementById('list-section').setAttribute('class', 'non-show');
    document.getElementById('add-section').setAttribute('class', 'show');
    document
      .getElementById('contact-section')
      .setAttribute('class', 'non-show');
    document.getElementById('books').setAttribute('class', 'books');
    document.getElementById('heading').setAttribute('class', 'non-show');
  }
  function showcontact() {
    document.getElementById('books').setAttribute('class', 'non-show');
    document.getElementById('heading').setAttribute('class', 'non-show');
    document.getElementById('contact-section').setAttribute('class', 'show');
    document.getElementById('add').style.color = 'black';
    document.getElementById('lis').style.color = 'black';
    document.getElementById('con').style.color = 'green';
  }

  document.getElementById('add').addEventListener('click', () => {
    showAdd();
  });
  document.getElementById('lis').addEventListener('click', () => {
    showList();
  });
  document.getElementById('con').addEventListener('click', () => {
    showcontact();
  });
};
// nav section ends here

export default navMenu;