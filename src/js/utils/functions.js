//function magique permet stranformer une string en objet
const createElementFromHTML = (htmlString) => {
    const div = document.createElement("div");
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
};