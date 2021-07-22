class Controller {
    async afficherListePhotographe() {
        let listPhotographe = await Model.get('http://127.0.0.1:5501/assets/data.json');
        console.log(listPhotographe);
        for (var i = 0; i < listPhotographe.photographers.length; i++) {
            debugger
            console.log(listPhotographe.photographers[i].name)
            // Je peux construire mon HTML dans la const elHTML
            const elHTML = `<h1 class='event'>${listPhotographe.photographers[i].name}</h1>`
            console.log(elHTML)
            const objHTML = createElementFromHTML(elHTML)
            console.log(objHTML)
            const targetElement = document.querySelector('.main')
            targetElement.insertAdjacentElement("afterbegin",objHTML)
        }
    }
}