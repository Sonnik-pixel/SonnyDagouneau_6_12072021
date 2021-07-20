class Controller {
    async afficherListePhotographe() {
        let listPhotographe = await Model.get('http://127.0.0.1:5501/assets/data.json');
        console.log(listPhotographe);
        //re faire la boucle ici
    }
}