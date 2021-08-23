class Controller {
    // asyns car await de présent, fonctionne en parallèle
    // la ligne 8 attends que le fichier de données soit chargées
    async afficherListePhotographe() {
        // Je récupère mes données
        let listPhotographe = await Model.get('https://sonnik-pixel.github.io/SonnyDagouneau_6_12072021/assets/data.json');
        // Affiche {photographers: Array(6), media: Array(59)}
        // console.log(listPhotographe);

        // permet de faire un affichage instancier nouvelleview.js
        let view = new View()
        view.afficherListePhotographe(listPhotographe)
    }
}