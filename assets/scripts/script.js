console.log("Artexellent bookshelf is alive!");

document.querySelectorAll('.book').forEach((book, index) => {
  book.addEventListener('click', () => {
    alert(`This is Book ${index + 1}`);
  });
});
