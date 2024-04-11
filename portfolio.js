// Sélectionner le conteneur de la galerie d'images
const galleryContainer = document.querySelector('.gallery-container');

// Parcourir le tableau desc_proj
for (let projet of desc_proj) {
  // Créer la balise a avec l'attribut href
  let a = document.createElement("a");
  a.href = `projet.html?id=${projet['nom']}`;

  // Créer la balise img avec le src correspondant à la partie "image" du tableau suivi de l'attribut .jpg
  let img = document.createElement("img");
  img.src = `images/portfolio/${projet['image']}.jpg`;
  img.alt = projet['nom'];

  // Ajouter la balise img à la balise a
  a.appendChild(img);

  // Créer un élément div pour entourer la balise a
  let galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery-item", projet.format);
  galleryItem.appendChild(a);

  // Ajouter l'élément div au conteneur de la galerie d'images
  galleryContainer.appendChild(galleryItem);
}
