// // Utilisation de fetch, je récupère mon fichier de données pour ensuite afficher le nom des photographes

// fetch('http://127.0.0.1:5501/assets/data.json')
//     // retourne ensuite une promesse contenant la réponse (si tout se passe bien).
//     // On ne peut pas exploiter la réponse renvoyée dans cette promesse en l’état, il faut indiquer le format de réponse souhaité. Ici, on choisit JSON avec response.json().
//     .then(response => response.json())
//     .then(result => {
//       console.log(result.photographers[0].name)
//          for (var i = 0; i < result.photographers.length; i++) {
//           console.log(result.photographers[i].name)
//  console.log(result)
//  }
//  result.photographers.forEach(photographer => {
//     console.log(photographer.name);
//  });
//        }
//      })
//     // Permet d'afficher le type d'erreur rencontrée
//     .catch(error => alert("Il y a une erreur : " + error));

// // coucouc arrive en premier
// console.log('coucou');


let controller = new Controller();
controller.afficherListePhotographe();