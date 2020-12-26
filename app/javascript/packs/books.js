const searchGoogle = function(string) {
  // const url = "https://www.googleapis.com/books/v1/volumes?q=search+terms"
  const searchTerms = string.replace(/ /g, "+");
  // const search = "q=search+terms"
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&key=AIzaSyCl-UvKHEqZK6yAzqkwqVXJ40pOUVrBvLU`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
};

export { searchGoogle };