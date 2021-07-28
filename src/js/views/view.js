class View {
    constructor() {
        this.container = document.querySelector('.main');
    }

    afficherListePhotographe(listPhotographe) {
        for (var i = 0; i < listPhotographe.photographers.length; i++) {
            console.log(listPhotographe.photographers[i].name)

            const photographe = listPhotographe.photographers[i];
            console.log(photographe.name);
            console.log(photographe);
            // Je peux construire mon HTML dans la const elHTML
            const elHTML = `<h2 class='namePhotographers'>${listPhotographe.photographers[i].name}</h2>`
            // permet de voir <h1 class ='event'>Mimi Keel</h1> ainsi que tous les autres photographes mais non reconnu en tant que balise.
            console.log(elHTML)

            const objHTML = Utils.createElementFromHTML(elHTML)
            // Permet de voir mon H1 avec nom des photographes et est reconnu en tant que balise HTML.
            console.log(objHTML)
            //Permet de insérer un noeud d'élement donnée à un position données par rapport à l'élelement sur lequel il est appelé
            // insertAdjacentElement("beforebegin") --> avant le main dans l'ordre
            // insertAdjacentElement("afterbegin") --> dans le main ordre inversé, avant son premier enfant.
            // insertAdjacentElement("beforeend") --> dans le main dans l'ordre, après son dernier enfant.
            // insertAdjacentElement("afterend") --> dans le main ordre inversé (Après main lui-même)
            this.container.insertAdjacentElement("beforeend",objHTML)
        }
    }
}