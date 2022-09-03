apiURL='https://anapioficeandfire.com/api/books'

function fetchBooks(url=apiURL) {
  // To pass the tests, don't forget to return your fetch!
  fetch(url)
  .then((resp) => resp.json())
  .then((json) => {
    //json.forEach(x => console.log(x.name))
    renderBooks(json)
    return json;
  });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', fetchBooks(event));
