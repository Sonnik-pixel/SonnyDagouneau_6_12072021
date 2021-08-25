class Controller {
    // asyns car await de présent, fonctionne en parallèle
    // la ligne 8 attends que le fichier de données soit chargées
    async afficherListePhotographe() {
        // Je récupère mes données
        let listPhotographe = await Model.get('https://sonnik-pixel.github.io/SonnyDagouneau_6_12072021/assets/data.json');
        // Affiche {photographers: Array(6), media: Array(59)}
        // console.log(listPhotographe);

        // instancie view et on le place dans la variable view puis on appelle afficherListePhotographe en lui passant la liste des photographes
        let view = new View()
        view.afficherListePhotographe(listPhotographe)
    }

    async afficherDetailPhotographe(idPhotographe){
    
        console.log(idPhotographe);
        // 1 récupérer la liste des photographges comme au dessus DONE
        let listPhotographe = await Model.get('https://sonnik-pixel.github.io/SonnyDagouneau_6_12072021/assets/data.json');
        // console.log(listPhotographe);

        let view = new View()
        view.afficherDetailPhotographeById(idPhotographe, listPhotographe)
    }
}