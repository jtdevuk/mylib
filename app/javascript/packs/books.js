const searchGoogle = function(string) {
  const searchTerms = string.replace(/ /g, "+");
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&key=AIzaSyCl-UvKHEqZK6yAzqkwqVXJ40pOUVrBvLU`)
    .then(response => response.json())
    .then((data) => {
      const resultsDiv = document.querySelector('.search-results');
      data.items.forEach(function(element) {
        const title = element.volumeInfo.title
        const description = element.volumeInfo.description ? `${element.volumeInfo.description}...`.substring(0,200) : ""
        const cardHTML = `<div class="book-card">
                            <h3>${element.volumeInfo.title}</h3>
                            <img src="${element.volumeInfo.imageLinks.thumbnail}"class="search-results-img"></img>
                            <p>${description}</p>
                          </div>`        
        resultsDiv.insertAdjacentHTML('beforeend', cardHTML);        
      })
      const modal = document.querySelector('.modal');
      const resultCards = document.querySelectorAll('.book-card');
      resultCards.forEach((card,index) => {
        card.addEventListener('click', function() {
        // console.log(data.items[index].volumeInfo.title);
        modal.classList.remove('hidden');
      })
    });
  });    
};

export { searchGoogle };


// 