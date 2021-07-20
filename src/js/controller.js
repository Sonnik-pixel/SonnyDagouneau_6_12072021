class Controller {
    async afficherListePhotographe() {
        let listPhotographe = await Model.get('http://127.0.0.1:5501/assets/data.json');
        console.log(listPhotographe);
        for (var i = 0; i < listPhotographe.photographers.length; i++) {
            console.log(listPhotographe.photographers[i].name)
        }
    }
}