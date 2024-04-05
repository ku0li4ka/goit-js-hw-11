import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderImg, toggleLoader, spanElementRem } from './js/render-functions.js';

const searchInput = document.querySelector('.searchInput');    
const searchButton = document.querySelector('.searchButton');
const searchForm = document.querySelector('.formForInput') 
const photoGallery = document.querySelector('.photoGallery');
const loaderContainer = document.querySelector('.loaderContainer');

const lightbox = new SimpleLightbox('.gallery a', {   
  captionDelay: 250,
  captionsData: 'alt',
});

searchForm.addEventListener('submit', event => {   
  event.preventDefault();
  photoGallery.innerHTML = '';
  toggleLoader(loaderContainer);
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
          renderImg(images, photoGallery, lightbox);
        }
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => spanElementRem());
  }
});
