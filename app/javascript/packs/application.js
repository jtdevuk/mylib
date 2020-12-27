import 'bootstrap'
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import { searchGoogle } from './books';
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

document.addEventListener('turbolinks:load', () => {
  document.getElementById('search-books').addEventListener('submit', function(e) {
    const resultsDiv = document.querySelector('.search-results');      
    resultsDiv.innerHTML = "";
    e.preventDefault();
    const input = document.getElementById('search-books-text');    
    searchGoogle(input.value);
  });
});