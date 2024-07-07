// Sélectionner l'élément head_title
const headTitle = document.querySelector('.head_title');

// Ajouter un écouteur d'événement pour le mouvement de la souris
headTitle.addEventListener('mousemove', (e) => {
  // Calculer la position de la souris par rapport à l'élément head_title
  const x = e.pageX - headTitle.offsetLeft;
  const y = e.pageY - headTitle.offsetTop;

  // Mettre à jour la position du dégradé
  headTitle.style.background = `radial-gradient(circle at ${x}px ${y}px, rgb(255, 152, 56), rgb(255, 98, 0))`;
});
