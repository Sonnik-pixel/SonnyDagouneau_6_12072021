class View {
    constructor() {
        this.container = document.querySelector('.main');
    }

    afficherListePhotographe(listPhotographe) {
        const section = Utils.createElementFromHTML("<section></section>")

        const globalTags = [];
        const filterTags = [];


        // debugger
        for (var i = 0; i < listPhotographe.photographers.length; i++) {
            // console.log(listPhotographe.photographers[i].name)
            
            const photographe = listPhotographe.photographers[i];
            const tags = photographe.tags;
            // Affiche, dans un tableau pour chaque personne, ses tags.
            // console.log(tags); 
            
            // Mettre tous mes tags dans globalTags
            for (var index = 0; index < tags.length; index++) {
                const currentTag = tags[index];
                globalTags.push(currentTag);
                console.log(currentTag);
            }


            // console.log(listPhotographe);
            // Affiche le media et les 6 photohographers

            // console.log(photographe);
            // Affiche l'objet d'un photographe et les tags

            // const city = listPhotographe.photographers.city;
            // console.log(photographe.city);
            // Je peux construire mon HTML dans la const elHTML
            // const elHTML = `<h2 class='namePhotographers'>${listPhotographe.photographers[i].name}</h2>`
            const elHTML = this.afficherDetailPhotographe(photographe)

            // const ulHTML = this.afficherTagPhotographe(filterTags)
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

        // Quand mon global Tags est complet, cette boucle se lance pour trier.
        for (let index = 0; index < globalTags.length; index++) {
            const currentGlobalTag = globalTags[index];
            // Si la valeur (event) n'est pas présente dans le tableau je l'ajoute.
            if (filterTags.includes(currentGlobalTag) === false) { 
                filterTags.push(currentGlobalTag)
            }
        }
        // console.log(globalTags);
        console.log(filterTags);

        this.container.insertAdjacentElement("beforeend",section)

        // 16/08 // a ranger
        const ul = document.getElementById('containerUl');
        console.log(ul);

        let cryptoHtml = this.returnHtmlTag(filterTags);
        ul.innerHTML = cryptoHtml;
        //

    }
    // si function dans class je ne suis pas obligé de marquer function 
    returnHtmlTag(parametrefilterTags){
        let html = '';
        for (let index = 0; index < parametrefilterTags.length; index++) {
            const element = parametrefilterTags[index];
            // += permet de créer 8 élements, si = juste le premier += ajoute 
            html += `<li>
                        <a href="#">#${element}</a>
                    </li>`
            // affiche 8 fois car longeur du tableaux 
            console.log(element)
        }
        // Permet de m'afficher le HTML
        return html;
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
                    <a href="#">#portrait</a>
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

    // afficherTagPhotographe(parametre){
    //     const ul = document.getElementById('containerUl');
    //     console.log(ul);
    //     let html = '';

    //     return `
    //     <li>
    //     <a href="#">#portrait</a>
    //     </li>
    //     `
    // }
}

// const phrase = "Sonny mon prénom sonny j'ai 30 ans pour un Sonny ça fait des ans";
// const motMin = phrase.toLowerCase().split(" ");
// // console.log(motMin);

// var compteur ={};
// console.log(compteur)

// for ( var i = 0; i < motMin.length; i ++) {
//     var mot = motMin[i];
//     console.log(mot)
//     if  (compteur[mot] === undefined) {
//         compteur[mot] = 1;
//     } else {
//         compteur[mot]++
//     }
// }



//  for (let i = 0; i < phrase.length; i++) {
//      const element = phrase[i];
//      // affiche ma phrase et le nombre de caractère
//      console.log(phrase);
//  }

//  function splitMot(toto, separator) {
//     const motSplit = toto.split(separator);
//     console.log(motSplit);
//     const filterName = [];
//     filterName.push(motSplit);
//     console.log(filterName)

//     for (let index = 0; index < filterName.length; index++) {
//         const element = filterName[index];
//         console.log(element)
//     }
//  }
// var espace = " ";
// // var virgule = ",";

// splitMot(phrase, espace);
// splitString(tempestString);
// splitString(phrase, virgule);

// console.log(splitString);