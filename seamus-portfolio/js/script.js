function setFeatured(imagePath, titleText, clickedElement) {
  const image = document.getElementById('media-image');
  const title = document.getElementById('media-title');
  image.src = imagePath;
  image.alt = titleText;
  title.textContent = titleText;
  document.querySelectorAll('.button-grid button').forEach(btn => {
    btn.setAttribute('aria-pressed', 'false');
  });
  if (clickedElement?.tagName === 'BUTTON') {
    clickedElement.setAttribute('aria-pressed', 'true');
  }
}