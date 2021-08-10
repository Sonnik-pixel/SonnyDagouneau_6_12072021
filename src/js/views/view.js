class View {
    constructor() {
        this.container = document.querySelector('.main');
    }

    afficherListePhotographe(listPhotographe) {
        const section = Utils.createElementFromHTML("<section></section>")
        for (var i = 0; i < listPhotographe.photographers.length; i++) {
            console.log(listPhotographe.photographers[i].name)
            // debugger
            const photographe = listPhotographe.photographers[i];
            const tag = photographe.tags;
            console.log(tag);
            // for (var i = 0; i < tag.lenght; i++) {
            //     console.log(tag);
            // }

            // console.log(photographe.name);
            // console.log(photographe);
            // const city = listPhotographe.photographers.city;
            // console.log(photographe.city);
            // Je peux construire mon HTML dans la const elHTML
            // const elHTML = `<h2 class='namePhotographers'>${listPhotographe.photographers[i].name}</h2>`
            const elHTML = this.afficherDetailPhotographe(photographe)
            // permet de voir <h1 class ='event'>Mimi Keel</h1> ainsi que tous les autres photographes mais non reconnu en tant que balise.
            //  console.log(elHTML)

            const objHTML = Utils.createElementFromHTML(elHTML)
            // Permet de voir mon H1 avec nom des photographes et est reconnu en tant que balise HTML.
            // console.log(objHTML)
            //Permet de insérer un noeud d'élement donnée à un position données par rapport à l'élelement sur lequel il est appelé
            // insertAdjacentElement("beforebegin") --> avant le main dans l'ordre
            // insertAdjacentElement("afterbegin") --> dans le main ordre inversé, avant son premier enfant.
            // insertAdjacentElement("beforeend") --> dans le main dans l'ordre, après son dernier enfant.
            // insertAdjacentElement("afterend") --> dans le main ordre inversé (Après main lui-même)
            section.insertAdjacentElement("beforeend",objHTML)
        }

        this.container.insertAdjacentElement("beforeend",section)
    }

    afficherDetailPhotographe(photographe){
        return  `        
        <article>
            <a href="#">
                <img
                    src="./assets/img/pictures/Photographers ID Photos/${photographe.portrait}"
                    alt=""
                />
                <h2>${photographe.name}</h2>
            </a>
            <p>${photographe.city}, ${photographe.country}</p>
            <p>${photographe.tagline}</p>
            <p>${photographe.price}€/jour</p>
            <ul>
                <li>
                    <a href="#">#${photographe.tags[0]}</a>
                </li>
                <li>
                    <a href="#">#events</a>
                </li>
                <li>
                    <a href="#">#travel</a>
                </li>
                <li>
                    <a href="#">#animals</a>
                </li>
            </ul>
        </article>`
    }
}