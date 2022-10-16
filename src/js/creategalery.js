function createGalery(hit) {
  return `<div class="photo-card">

        <a class="gallery-item" href="${hit.largeImageURL}">
          <img
            class="gallery__image"
            src="${hit.webformatURL}"
            alt="${hit.tags}"
            loading="lazy"
        /></a>

        <div class="info">
          <div class="info__box">
            <p class="info-item">
              <b class="material-symbols-outlined">thumb_up</b>
            </p>
            <p class="info-counter">${hit.likes.toLocaleString()}</p>
          </div>

          <div class="info__box">
            <p class="info-item">
              <b class="material-symbols-outlined">visibility</b>
            </p>
            <p class="info-counter">${hit.views.toLocaleString()}</p>
          </div>

          <div class="info__box">
            <p class="info-item">
              <b class="material-symbols-outlined">forum</b>
            </p>
            <p class="info-counter">${hit.comments.toLocaleString()}</p>
          </div>

          <div class="info__box">
            <p class="info-item">
              <b class="material-symbols-outlined">download</b>
            </p>
            <p class="info-counter">${hit.downloads.toLocaleString()}</p>
          </div>

        </div>
      </div>`;
}
export { createGalery };
