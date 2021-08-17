// class static si tous les élements sont static

class Model {
    static get(url) {
        // console.log(url);
        return fetch(url)
            // retourne ensuite une promesse contenant la réponse (si tout se passe bien).
            // On ne peut pas exploiter la réponse renvoyée dans cette promesse en l’état, il faut indiquer le format de réponse souhaité. Ici, on choisit JSON avec response.json().
            .then(response => response.json())
            .then(result => {
                // Affiche {photographers: Array(6), media: Array(59)}
                // console.log(result);
                return result;
            })
            // Permet d'afficher le type d'erreur rencontrée
            .catch(error => alert("Il y a une erreur : " + error));
    }
}