// si méthode est statique pas besoin d'instancer la class avec new

class Model {
  get(url) {
    // console.log(url);
    return (
      fetch(url)
        // retourne ensuite une promesse contenant la réponse (si tout se passe bien).
        // On ne peut pas exploiter la réponse renvoyée dans cette promesse en l’état, il faut indiquer le format de réponse souhaité. Ici, on choisit JSON avec response.json().
        .then((response) => response.json())
        .then((result) => {
          // Affiche {photographers: Array(6), media: Array(59)}
          // console.log(result);
          return result;
        })
        // Permet d'afficher le type d'erreur rencontrée
        .catch((error) => alert("Il y a une erreur : " + error))
    );
  }

  async getPhotographeById(url, idPhotographe) {
    let list = await this.get(url);
    console.log(idPhotographe);
    let listPhotographe = list["photographers"];
    let listPhotographeMedia = list["media"];
    console.log(listPhotographeMedia);
    //Affiche tous mes photographe dans un tableau
    for (let index = 0; index < listPhotographe.length; index++) {
      const currentPhotographe = listPhotographe[index];
      console.log(currentPhotographe);
      if (currentPhotographe.id == idPhotographe) {
        return currentPhotographe;
      }
    }
    for (let index = 0; index < listPhotographeMedia.length; index++) {
      const currentPhotographe = listPhotographeMedia[index];
      console.log(currentPhotographe);
      if (currentPhotographe.id == idPhotographe) {
        return currentPhotographe;
      }
    }
    return null;
  }

  //création de la nouvelle méthode MEDIA
  // async getMediaByPhotographeId(url, idPhotographe) {
  //   let list = await this.get(url);

  //   let listPhotographe = list["media"];
  //   console.log(listPhotographe);
  //   for (let index = 0; index < listPhotographe.length; index++) {
  //     const currentPhotographe = listPhotographe[index];
  //     console.log(currentPhotographe);
  //     if (currentPhotographe.id == idPhotographe) {
  //       return currentPhotographe;
  //     }
  //   }
  //   return null;
  // }
}

export default Model;
