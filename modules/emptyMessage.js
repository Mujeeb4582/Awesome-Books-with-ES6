const emptyMessage = (booksList, msg) => {
  if (booksList.length === 0) {
    msg.style.display = 'block';
  } else {
    msg.style.display = 'none';
  }
};

export default emptyMessage;