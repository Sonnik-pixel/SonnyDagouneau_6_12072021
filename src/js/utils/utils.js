//function magique permet de tranformer une string en objet


// const createElementFromHTML = (htmlString) => {
//     debugger
//     const baliseDiv = document.createElement("div");
//     //création d'un élement <div></div>
//     console.log(baliseDiv);
//     //trim() supprime les espaces des deux côtés d'une chaîne.

//     baliseDiv.innerHTML = htmlString.trim();
//     // Remplace ma div par mon H1
//     console.log(baliseDiv.innerHTML);
//     // Change this to div.childNodes to support multiple top-level nodes
//     return baliseDiv.firstChild;
// };

class Utils {
    //
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

