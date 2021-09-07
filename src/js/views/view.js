import Utils from "../utils/utils.js";
// modèle mcv a regarder
export default class View {
  constructor() {
    this.container = document.querySelector(".main");
  }

  afficherListePhotographe(listPhotographe) {
    const section = Utils.createElementFromHTML("<section></section>");

    const globalTags = [];
    const filterTags = [];

    // debugger
    for (let i = 0; i < listPhotographe.photographers.length; i++) {
      // Affiche le nom des photographes
      // console.log(listPhotographe.photographers[i].name);

      const photographe = listPhotographe.photographers[i];
      const { tags } = photographe;

      // console.log(tags);
      // Affiche, dans un tableau pour chaque personne, ses tags.
      // console.log(photographe);
      // Affiche, dans un objet pour chaque personne, tous les détails d'un photographe.

      // Mettre tous mes tags dans globalTags
      for (let index = 0; index < tags.length; index++) {
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
      const elHTML = this.afficherDetailPhotographe(photographe);

      // const ulHTML = this.afficherTagPhotographe(filterTags)
      // permet de voir <h1 class ='event'>Mimi Keel</h1> ainsi que tous les autres photographes mais non reconnu en tant que balise.
      //  console.log(elHTML)

      const objHTML = Utils.createElementFromHTML(elHTML);
      // Permet de voir mon H1 avec nom des photographes et est reconnu en tant que balise HTML.
      // console.log(objHTML)
      // Permet de insérer un noeud d'élement donnée à un position données par rapport à l'élelement sur lequel il est appelé
      // insertAdjacentElement("beforebegin") --> avant le main dans l'ordre
      // insertAdjacentElement("afterbegin") --> dans le main ordre inversé, avant son premier enfant.
      // insertAdjacentElement("beforeend") --> dans le main dans l'ordre, après son dernier enfant.
      // insertAdjacentElement("afterend") --> dans le main ordre inversé (Après main lui-même)
      section.insertAdjacentElement("beforeend", objHTML);
    }

    // Quand mon global Tags est complet, cette boucle se lance pour trier.
    for (let index = 0; index < globalTags.length; index++) {
      const currentGlobalTag = globalTags[index];
      // Si la valeur (currentgLobalTag) n'est pas présente dans le tableau (FilterTag) je l'ajoute.
      if (filterTags.includes(currentGlobalTag) === false) {
        filterTags.push(currentGlobalTag);
      }
    }
    // console.log(globalTags);
    // console.log(filterTags);

    this.container.insertAdjacentElement("beforeend", section);

    // 16/08 // a ranger
    const ul = document.getElementById("containerUl");
    // console.log(ul);
    // Affiche mon container ul de ma navbar avec le les li..

    const tagHtml = this.returnHtmlTag(filterTags);
    ul.innerHTML = tagHtml;

    let listHtmlTag = document.getElementsByClassName("tags");
    for (let index = 0; index < listHtmlTag.length; index++) {
      const currentTag = listHtmlTag[index];
      // <a href="#" class="tags">#events</a>
      // Affiche tous les tags de toute la première page
      console.log(currentTag);
      currentTag.addEventListener("click", (event) => {
        // (event) l' évenement qui s'est produit, représente le clic, donne toutes les infos
        // appeler ma function Ou j'aurais pu écrire le contenu ici, simplement pour séparer les choses
        this.showPhotographerByTag(event, currentTag);
      });
    }
  }

  // showPhotographerByTag est dans une classe donc pour l'apeller dans un function, j'utilise this.nomdefunction pour ligne 91
  showPhotographerByTag(event, currentTag) {
    // Affiche le TAG sur lequel je clique !
    const tagName = currentTag.textContent;
    console.log(tagName);

    // récupérer la liste de tous les photoghraphes (articles) DONE
    const articles = document.getElementsByTagName("article");
    // Affiche un tableau et 6 articles
    console.log(articles);
    // if (test === test1) {
    //   articles.classList.add("hide");
    // }
    // parcourir cette liste de photographer
    for (let index = 0; index < articles.length; index++) {
      const currentArticle = articles[index];
      // currentArticle car c'est mon article en cours, sur tous mes articles
      // Affiche mes 6 articles : <article>...</article>
      console.log(currentArticle);

      const listTag = currentArticle.getElementsByClassName("tags");
      console.log(listTag);

      let tagTrouve = false;
      // faire une boucle pour parcourir tous les tags de tous les photographes
      for (let index = 0; index < listTag.length; index++) {
        const currentTag = listTag[index];
        console.log(currentTag.textContent);

        if (tagName === currentTag.textContent) {
          console.log("tag trouvé !");
          tagTrouve = true;
        } else {
          console.log("tag non trouvé !");
        }
      }
      if (tagTrouve === false) {
        currentArticle.classList.add("hide");
      } else {
        currentArticle.classList.remove("hide");
      }
    }
    // pour chaque photographe est ce que le tag est présent ou pas, si présent display block; si non présent display none

    // au clic sur tags, rajouter une classe pour dire que j'ai cliqué dessus
    // et enlever cette classe de tous les autres tags (donc reparcourir pour enlever les classes)

    // BONUS au clic, je reset tout l'affichage.  pas de reload de page.
  }

  // si function dans class je ne suis pas obligé de marquer function
  // permet d'afficher ma navbar
  returnHtmlTag(parametrefilterTags) {
    let html = "";
    for (let index = 0; index < parametrefilterTags.length; index++) {
      const element = parametrefilterTags[index];
      // += permet de créer 8 élements, si = juste le premier += ajoute
      html += `<li>
                    <a href="#" class="tags">#${element}</a>
               </li>`;
      // affiche le nom des tags de ma navbar
      // console.log(element);
    }
    // Permet de m'afficher le HTML
    return html;
  }

  // permet d'afficher mes photographes et leurs tag
  afficherDetailPhotographe(photographe) {
    const tagss = photographe.tags;
    // console.log(tagss);
    // Affiche, dans un tableau pour chaque personne, ses tags.
    // (4) ["portrait", "events", "travel", "animals"]
    // (2) ["sport", "architecture"]
    let htmltag = "";

    for (let index = 0; index < tagss.length; index++) {
      const element = tagss[index];
      // console.log(element);
      // Affiche, le nom de tous les tags de tous les photographe.
      htmltag += `<li>
                            <a href="#" class="tags">#${element}</a>
                        </li>`;
    }

    return `        
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
        </article>`;
  }

  // permet d'afficher par l'iD des informations concernant le photographe
  afficherDetailPhotographeById(idPhotographe, listPhotographe) {
    const div = Utils.createElementFromHTML("<div></div>");
    console.log(listPhotographe);
    // debugger
    // 2 parmis la liste des photographes récupérer celui qui a l'ID Photographe parcourir dans boucle si id est le même.
    let elNameHTML = "";
    // let test = listPhotographe.photographers.length;
    // console.log(test);
    for (let index = 0; index < listPhotographe.photographers.length; index++) {
      const toto = listPhotographe.photographers[index];
      console.log(toto);
      // listPhotographe.photographers[i] = un photographe avec ces infos
      // listPhotographe.photographers[5] = {name: "Marcel Nikolic", id: 195, city: "Berlin", country: "Germany", tags: Array(2),…}
      if (toto.id === idPhotographe) {
        console.log(toto.id);
        console.log(toto.name);

        elNameHTML = `<li>
                            <a href="#">${toto.name}</a>
                        </li>`;
        // id.push(idPhotographe);
      }
    }
    // 3 afficher le detail de ce photographe consolelog au debut et ensuite dans le html
    const objHTML = Utils.createElementFromHTML(elNameHTML);
    div.insertAdjacentElement("beforeend", objHTML);
    this.container.insertAdjacentElement("beforeend", div);
  }
}
