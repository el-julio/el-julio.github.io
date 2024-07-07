// Fonction pour récupérer le projet en fonction de l'URL
function get_projet() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
  
    return desc_proj.find(projet => projet.nom === id);
  }
  
  // Fonction pour afficher les détails du projet
  function display_projet() {
    const projet = get_projet();
  
    if (projet) {
      document.querySelector(".big_title").textContent = projet.nom;
      document.querySelector(".descriproj").textContent = projet.description;
      document.querySelector(".proj").src = `images/portfolio/${projet.image}.webp`;
      document.querySelector(".proj").alt = projet.nom;
    } else {
      console.log("Aucun projet trouvé avec cet ID.");
    }
  }
  
  // Appeler la fonction display_projet lorsque le DOM est entièrement chargé
  document.addEventListener("DOMContentLoaded", display_projet);
  