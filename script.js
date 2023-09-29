

let chapters = {
    debut: {
        titre: `L'appel`,
        description: `Vous recevez l'appel d'un client qui souhaite se débarasser d'un fantôme chez lui. Ceci est votre aventure paranormal, donc vous considèrez faire un appel pour de l'aide. Qui appelez?`,
        image: "./assets/begin.jpg",
        buttons: [
            { titre: "Domino's", "destination": "confrontationPizza" },
            { titre: "Personne", "destination": "confrontationSolo" },
            { titre: "Professionels", "destination": "confrontationPro" }
        ]
    },

    confrontationPizza: {
        titre: `Face-à-Face`,
        description: `Après avoir commandé votre récompense pour après l'investigation, vous allez à la maison du client et vous entrez. La porte se ferme derrière vous et vous êtes face-à-face avec le fantôme. Comment survivre ?`,
        image: "./assets/confrontation.jpg",
        buttons: [
            { titre: "Confusion", "destination": "mortConfusion" },
            { titre: "Fuir", "destination": "cachette" },
            { titre: "Rien", "destination": "mortRien" }
        ]
    },

    confrontationSolo: {
        titre: `Face-à-Face`,
        description: `Après un peu de réflexion, vous déterminez que vous pouvez réussir seul. Vous allez à la maison du client et vous entrez. La porte se ferme derrière vous et vous êtes face-à-face avec le fantôme. Comment survivre ?`,
        image: "./assets/confrontation.jpg",
        buttons: [
            { titre: "Confusion", "destination": "mortConfusion" },
            { titre: "Fuir", "destination": "cachette" },
            { titre: "Rien", "destination": "mortRien" }
        ]
    },

    confrontationPro: {
        titre: `Face-à-Face`,
        description: `Les meilleurs chasseurs de créatures paranormals vont arriver sous-peu en back-up, en attendent vous allez à la maison du client et vous entrez. La porte se ferme derrière vous et vous êtes face-à-face avec le fantôme. Comment survivre ?`,
        image: "./assets/confrontation.jpg",
        buttons: [
            { titre: "distraction", "destination": "mortDistraction" },
            { titre: "Fuir", "destination": "cachette" },
            { titre: "Rien", "destination": "mortRien" }
        ]
    },

    cachette: {
        titre: `Cache-Cache`,
        description: `Vous fuiez du fantôme, mais il vous poursuis à grande vitesse. Au lieu de continuer à fuir, vous décidez que se cacher serait la meilleure solution pour survire, mais où se cacher ?`,
        image: "./assets/cachette.jpg",
        buttons: [
            { titre: "Chambre", "destination": "compagnon" },
            { titre: "Garage", "destination": "compagnon" },
            { titre: "Cuisine", "destination": "mortCuisine" }
        ]
    },

    compagnon: {
        titre: `Compagnon`,
        description: `Vous n'avez pas été détecté dans votre cachette ! Mais, qui avez vous appelez avant votre investigation ?`,
        image: "./assets/compagnon.jpg",
        buttons: [
            { titre: "Domino's", "destination": "finPizza" },
            { titre: "Personne", "destination": "finSolo" },
            { titre: "Professionels", "destination": "finPro" }
        ]
    },

    finPizza: {
        titre: "Fin Acceptable",
        description: "Quelqu'un sonne à la porte. Peu après, le fantôme libère un cri de douleur. Le livreur de pizza a défoncé le fantôme car il n'a pas été donné un pourboire. Malheureusement pour vous, le livreur de pizza se fait payer pour s'avoir occuper du fantôme... Vous avez au moins de la pizza...",
        image: "./assets/end-pizza.jpg",
        buttons: [
            { titre: "Recommencer", "destination": "debut" }
        ]
    },

    finSolo: {
        titre: "Bonne Fin",
        description: "Vous attendez pour attaquer le fantôme depuis derrière. Il s'enfuit de la maison. Vous avez réussi ! Mais votre client a maintenant une bosse sur la tête...",
        image: "./assets/end-solo.jpg",
        buttons: [
            { titre: "Recommencer", "destination": "debut" }
        ]
    },

    finPro: {
        titre: "Mauvaise Fin",
        description: "Les professionels arrivent et, croyant que vous êtes le monstre, vous arrêtes. Même dans votre cellule dans la prison, vous entendez le cri du chien des professionnels... SCOOBY-DOO-BY DOOO !",
        image: "./assets/end-scooby.jpg",
        buttons: [
            { titre: "Recommencer", "destination": "debut" }
        ]
    },

    mortCuisine: {
        titre: "Trouvé !",
        description: "Vous vous cachez derrière un comptoir dans la cuisine, mais, malheureusement pour vous, le fantôme a décidé de vérifiez la cuisine en premier comme salle. Il vous trouve et vous étrangle...",
        image: "./assets/mort-cuisine.jpg",
        buttons: [
            { titre: "Recommencer", "destination": "debut" }
        ]
    },

    mortRien: {
        titre: "...Quoi ?",
        description: "Vous ne faites... rien ? Le fantôme vous étrangle. Vous vous attendiez à quoi exactement ?",
        image: "./assets/mort-rien.jpg",
        buttons: [
            { titre: "Recommencer", "destination": "debut" }
        ]
    },

    mortDistraction: {
        titre: "Distraction !",
        description: "Vous tentez de distraire le fantôme en dansant. Peut-être que ça va le rendre confus ! ... il s'approche de vous et vous casse le cou. Vous n'auriez probablement pas avoir fait une dance Fortnite...",
        image: "./assets/mort-distraction.jpg",
        buttons: [
            { titre: "Recommencer", "destination": "debut" }
        ]
    },
}
let debut = chapters.debut;
let confrontationPizza = chapters.confrontationPizza;
let confrontationSolo = chapters.confrontationSolo;
let confrontationPro = chapters.confrontationPro;
let mortDistraction = chapters.mortDistraction;
let mortRien = chapters.mortRien;
let cachette = chapters.cachette;
let compagnon = chapters.compagnon;
let mortCuisine = chapters.mortCuisine;
let finPizza = chapters.finPizza;
let finSolo = chapters.finSolo;
let finPro = chapters.finPro;

function goToChapter(destination) {
    if (typeof destination !== "undefined") {
        console.log(destination.titre);
        console.log(destination.description);
        console.log(destination.buttons);
    }
    else {
        console.log("Veuillez entrer un chapitre valide...");
    }
}

goToChapter(debut);
