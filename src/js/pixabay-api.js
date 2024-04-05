export function fetchImages(query) {                         
  return fetch(
    `https://pixabay.com/api/?key=42977219-0f6c9f9217f976d8651793c3a&q=${query}&image_type=photo&per_page=15&orientation=horizontal&safesearch=true`
    )
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(data => {
    if (data.hits.length === 0) {
      throw new Error ('No images found');
    }
    return data.hits;
  })
  .catch(error => {
    iziToast.error({
      title: 'Error',
      message: error.message || 'Failed to fetch images. Please try again later.',
      position: 'topCenter',
    });
    throw error;
  });
}
