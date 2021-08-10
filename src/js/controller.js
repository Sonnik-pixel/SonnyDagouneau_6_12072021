class Controller {
    async afficherListePhotographe() {
        // Je récupère mes données
        let listPhotographe = await Model.get('http://127.0.0.1:5501/assets/data.json');
        console.log(listPhotographe);
        // permet de faire un affichage view.js
        let view = new View()
        view.afficherListePhotographe(listPhotographe)
    }
}