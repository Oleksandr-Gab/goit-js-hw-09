import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

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

let gallery = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt'
})