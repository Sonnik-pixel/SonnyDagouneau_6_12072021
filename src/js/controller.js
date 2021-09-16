import Model from "./model.js";
import View from "./views/view.js";

export default class Controller {
  constructor() {
    this.model = new Model();
  }
  // asyns car await de présent, fonctionne en parallèle
  // la ligne 8 attends que le fichier de données soit chargées
  async afficherListePhotographe() {
    // Je récupère mes données
    let listPhotographe = await this.model.get(
      "https://sonnik-pixel.github.io/SonnyDagouneau_6_12072021/assets/data.json"
    );
    // Affiche {photographers: Array(6), media: Array(59)}
    // console.log(listPhotographe);

    // instancie view et on le place dans la variable view puis on appelle afficherListePhotographe en lui passant la liste des photographes
    let view = new View();
    view.afficherListePhotographe(listPhotographe);
  }

  afficherDetailEtMedia(idPhotographe) {
    console.log(idPhotographe);
    this.afficherDetailPhotographe(idPhotographe);
    this.getMediaAndDisplay(idPhotographe);
  }

  async afficherDetailPhotographe(idPhotographe) {
    // console.log(idPhotographe);
    // 1 récupérer la liste des photographes comme au dessus DONE

    let photographe = await this.model.getPhotographeById(
      "https://sonnik-pixel.github.io/SonnyDagouneau_6_12072021/assets/data.json",
      idPhotographe
    );
    // console.log(listPhotographe);

    let view = new View();
    view.afficherDetailPhotographeById(photographe);
  }

  // création de la nouvelle méthode MEDIA
  async getMediaAndDisplay(idPhotographe) {
    console.log(idPhotographe);
    // 1 récupérer la liste des photographes comme au dessus DONE

    // console.log(listPhotographe);
    await this.model.getMediaByPhotographeId(
      "../../assets/data.json",
      idPhotographe
    );

    const view = new View();
    view.afficherMedia("test");
  }
}
