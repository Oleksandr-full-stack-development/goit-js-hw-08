
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import createGalleryMarkup from './markup';

const container = document.querySelector(".gallery");


const markupGallery = createGalleryMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markupGallery);

new SimpleLightbox('.gallery__item', {captionsData:'alt', captionDelay:'250'});
