import {images} from './galleryIMG.js';

const galleryEl = document.querySelector('.gallery');
const elements = images
                    .map(({preview, original, description}) => 
                        `<li class="gallery-item">
                            <a class="gallery-link" href="${original}">
                                <img
                                    class="gallery-image"
                                    src="${preview}""
                                    alt="${description}"
                                />
                            </a>
                        </li>`)
                    .join('');

galleryEl.innerHTML = elements;

const galleryLink = document.querySelector('.gallery-link');
galleryLink.addEventListener('click', (event) => {
    event.preventDefault();
});

// // Описаний в документації
import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

let gallery = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt'
})



