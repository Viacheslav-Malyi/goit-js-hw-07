import { galleryItems } from './gallery-items.js';
// Change code below this line

const palletConteiner = document.querySelector('.gallery');
palletConteiner.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));
palletConteiner.addEventListener('click', onPalletConteinerClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
   <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join('');
}

function onPalletConteinerClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  palletConteiner.addEventListener('keydown', event => {
    if (event.code === 'Escape') instance.close();
  });
}

//console.log(createGalleryMarkup(galleryItems));
