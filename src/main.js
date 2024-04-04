import iziToast from 'izitoast';                                
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';                      
import 'simplelightbox/dist/simple-lightbox.min.css';

import { photoGallery, renderImg, loaderF, spanElementRem } from './js/render-functions';

const searchInput = document.querySelector('.searchInput');    
const searchButton = document.querySelector('.searchButton'); 

searchButton.addEventListener('click', event => {   
  event.preventDefault();
  photoGallery.innerHTML = '';
  loaderF();
  setTimeout(() => {
    const query = searchInput.value.trim();
    if (!query) {
      iziToast.show({
        color: 'red',
        message: `Sorry, the input field must be filled in to start the photo search.`,
        position: 'topCenter',
      });
    } else {
      fetchImages(query)
        .then(images => {
          if (images.length === 0) {
            iziToast.show({
              color: 'red',
              message: `Sorry, there are no images matching your search query. Please try again!`,
              position: 'topCenter',
            });
          } else {
            renderImg(images);
          }
        })
        .catch(error => console.log(error))
        .finally(() => spanElementRem());
    }
  }, 2000);
});

function fetchImages(word) {
  return fetch(
    `https://pixabay.com/api/?key=42977219-0f6c9f9217f976d8651793c3a&q=${word}&image_type=photo&per_page=15&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => data.hits);
}