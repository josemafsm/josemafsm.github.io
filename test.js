const gallery = document.getElementById('gallery');

    for (let i = 1; i <= 12; i++) {
      const container = document.createElement('div');
      container.className ='image-container';

      const img = document.createElement('img');
      img.src = `images/${i}.jpg`; // o .png si es el formato que usas
      img.alt = `Imagen ${i}`;
      img.id = `img${i}`;

       const overlay = document.createElement('div');
      overlay.className = 'overlay-text';
      overlay.textContent = getOverlayText(img.id);


      container.appendChild(img);
      container.appendChild(overlay);
      gallery.appendChild(container);
    }


    function getOverlayText(id) {
  switch (id) {
    case 'img1': return 'Agosto 2024';
    case 'img2': return 'Septiembre 2024';
    case 'img3': return 'Octubre 2024';
    case 'img4': return 'Noviembre 2024';
    case 'img5': return 'Diciembre 2024';
    case 'img6': return 'Enero 2025';
    case 'img7': return 'Febrero 2025';
    case 'img8': return 'Marzo 2025';
    case 'img9': return 'Abril 2025';
    case 'img10': return 'Mayo 2025';
    case 'img11': return 'Junio 2025';
    case 'img12': return 'Julio 2025';
    default: return '';
  }
}
