const searchGoogle = function(string) {
  const searchTerms = string.replace(/ /g, "+");
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&key=AIzaSyCl-UvKHEqZK6yAzqkwqVXJ40pOUVrBvLU`)
    .then(response => response.json())
    .then((data) => {
      const resultsDiv = document.querySelector('.search-results');
      data.items.forEach(function(element) {
        const title = element.volumeInfo.title
        // const description = element.volumeInfo.description ? `${element.volumeInfo.description}...`.substring(0,200) : ""
        const description = element.volumeInfo.description ? `${element.volumeInfo.description}`: "";
        const imageHTML = element.volumeInfo.imageLinks.thumbnail ? `<img src="${element.volumeInfo.imageLinks.thumbnail}"class="search-results-img">` : ``;
        const cardHTML = `<div class="book-card">
                            <h3><strong>${element.volumeInfo.title}</strong></h3>
                            ${imageHTML}                            
                          </div>`        
        resultsDiv.insertAdjacentHTML('beforeend', cardHTML);        
      })

      const resultCards = document.querySelectorAll('.book-card');
      const modal = document.querySelector('.modal');
      const modalTitle = document.querySelector('.modal-header');
      const modalBody = document.querySelector('.modal-body');
      const closeModal = document.querySelector('.close-modal');
      
      resultCards.forEach((card,index) => {        
        const imageHTML = data.items[index].volumeInfo.imageLinks.thumbnail ? `<img src="${data.items[index].volumeInfo.imageLinks.thumbnail}"class="search-results-img">` : ``;
        const modalHTML = `${imageHTML}
                          <p class="modal-text">${data.items[index].volumeInfo.description}</p>`
        card.addEventListener('click', function() {          
        modal.classList.remove('hidden');
        modalBody.innerHTML = "";
        modalTitle.textContent= data.items[index].volumeInfo.title;
        modalBody.insertAdjacentHTML('beforeend', modalHTML);
        closeModal.addEventListener('click', function() {
          modal.classList.add('hidden');
        })
      })
    });
  });    
};

export { searchGoogle };