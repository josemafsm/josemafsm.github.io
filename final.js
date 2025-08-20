window.addEventListener('load', () => {
  document.getElementById('chime').play().catch(() => {});
});