//function magique permet de transformer une string en objet

// je créer une class utils qui va créer du html, juste a disposition pour le moment, ne s'execute pas encore.
// static signifie

class Utils {
  // pas besoin d'instancier car static present donc pas de this
  static createElementFromHTML(htmlString) {
    const baliseDiv = document.createElement("div");
    //création d'un élement <div></div>
    // console.log(baliseDiv);
    //trim() supprime les espaces des deux côtés d'une chaîne.

    baliseDiv.innerHTML = htmlString.trim();
    // Remplace ma div par mon article a p ul li
    //  console.log(baliseDiv.innerHTML);
    // Change this to div.childNodes to support multiple top-level nodes
    return baliseDiv.firstChild;
  }
}

export default Utils;
