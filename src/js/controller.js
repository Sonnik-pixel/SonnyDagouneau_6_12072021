class Controller {
    async afficherListePhotographe() {
        // Je récupère mes données
        let listPhotographe = await Model.get('https://sonnik-pixel.github.io/SonnyDagouneau_6_12072021/assets/data.json');
        console.log(listPhotographe);
        // permet de faire un affichage view.js
        let view = new View()
        view.afficherListePhotographe(listPhotographe)
    }
}