const searchGoogle = function(string) {
  const searchTerms = string.replace(/ /g, "+");
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&key=AIzaSyCl-UvKHEqZK6yAzqkwqVXJ40pOUVrBvLU`)
    .then(response => response.json())
    .then((data) => {
      data.items.forEach(function(element) {
        const cardHTML = `<div class="book-card">
                            <h3>${element.volumeInfo.title}</h3>
                            <img src="${element.volumeInfo.imageLinks.thumbnail}"class="search-results-img"></img>
                            <p>${element.volumeInfo.description.substring(0,200)}...</p>
                          </div>`
        const resultsDiv = document.querySelector('.search-results');      
        resultsDiv.insertAdjacentHTML('beforeend', cardHTML);
      })
    });
};

export { searchGoogle };