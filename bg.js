
function adjustScrollingSize() {
    const scrollingElement = document.querySelector('.infinite-scrolling');
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
  
    // Restricción a múltiplos de 720px
    const width = Math.ceil(pageWidth / 720) * 720 + 720;
    const height = Math.ceil(pageHeight / 720) * 720;
  
    scrollingElement.style.width = `${width}px`;
    scrollingElement.style.height = `${height}px`;
  }
  
  // Llama a la función inicialmente y cada vez que se redimensiona la ventana
  adjustScrollingSize();
  window.addEventListener('resize', adjustScrollingSize);
