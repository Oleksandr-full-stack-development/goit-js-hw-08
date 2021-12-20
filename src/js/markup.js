export default function createGalleryMarkup (gallery) {
    return gallery
     .map (({preview, original, description}) => {
         return `
             <a class="gallery__item" href="${original}">
                 <img class="gallery__image" src="${preview}" alt="${description}" />
             </a>
         `;
     })
     .join(""); 
 }

 