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
            // Affiche le nom des photographes
            // console.log(listPhotographe.photographers[i].name)
            
            const photographe = listPhotographe.photographers[i];
            const tags = photographe.tags;

            // console.log(tags); 
            // Affiche, dans un tableau pour chaque personne, ses tags.
            // console.log(photographe);
            // Affiche, dans un objet pour chaque personne, tous les détails d'un photographe.
            
            // Mettre tous mes tags dans globalTags
            for (var index = 0; index < tags.length; index++) {
                const currentTag = tags[index];
                globalTags.push(currentTag);
                // console.log(currentTag);
            }

            // console.log(listPhotographe);
            // Affiche le media et les 6 photohographers

            // console.log(photographe);
            // Affiche l'objet d'un photographe et les tags

            // Je peux construire mon HTML dans la const elHTML
            // const elHTML = `<h2 class='namePhotographers'>${listPhotographe.photographers[i].name}</h2>`

            // This
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
            // Si la valeur (currentgLobalTag) n'est pas présente dans le tableau (FilterTag) je l'ajoute.
            if (filterTags.includes(currentGlobalTag) === false) { 
                filterTags.push(currentGlobalTag)
            }
        }
        // console.log(globalTags);
        // console.log(filterTags);

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
        const tagss = photographe.tags;
        console.log(tagss);
        // Affiche, dans un tableau pour chaque personne, ses tags.
        let htmltag = "";

        
        for (let index = 0; index < tagss.length; index++) {
            const element = tagss[index];
            console.log(element);
            // Affiche, le nom des tags.

            htmltag += `<li>
                            <a href="#">#${element}</a>
                        </li>`
        }

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
            ${htmltag}
            </ul>
        </article>`
    }

    afficherDetailPhotographeById(idPhotographe, listPhotographe){ 
        const div = Utils.createElementFromHTML("<div></div>")
        console.log(listPhotographe);
        // debugger
        // 2 parmis la liste des photographes récupérer celui qui a l'ID Photographe parcourir dans boucle si id est le même.
        let elNameHTML = "";
        // let test = listPhotographe.photographers.length;
        // console.log(test);
        for (let index = 0; index < listPhotographe.photographers.length; index++) {
            let toto = listPhotographe.photographers[index];
            console.log(toto);
            // listPhotographe.photographers[i] = un photographe avec ces infos 
            // listPhotographe.photographers[5] = {name: "Marcel Nikolic", id: 195, city: "Berlin", country: "Germany", tags: Array(2), …}
            if (toto.id === idPhotographe) {
                console.log(toto.id);
                console.log(toto.name);

                elNameHTML = `<li>
                            <a href="#">${toto.name}</a>
                        </li>`
                // id.push(idPhotographe);
            }  
        }
        // 3 afficher le detail de ce photographe consolelog au debut et ensuite dans le html
        const objHTML = Utils.createElementFromHTML(elNameHTML)
        div.insertAdjacentElement("beforeend",objHTML)
        this.container.insertAdjacentElement("beforeend",div)
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