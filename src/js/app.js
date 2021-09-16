// POINT DE DEPART
// sert à créer le controler, sert à instancier
import Controller from "./controller.js";

// regarder import / export

window.controller = new Controller();
// window est un super parent, tout le monde accède a controller
// permet de lancer afficher liste photographe dans controller

controller.afficherListePhotographe();

// controller.afficherDetailPhotographe(925);
// J'ai commenté la ligne ci-dessous pour me concentrer sur l'affichage afficherListePhotographe
