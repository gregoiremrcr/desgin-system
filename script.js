// Fonction pour basculer l'affichage du menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    // Vérifie si le menu a la classe 'open' (menu ouvert)
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');  // Si oui, ferme-le
    } else {
        menu.classList.add('open');  // Si non, ouvre-le
    }
}
