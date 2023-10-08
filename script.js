let chaptersObj = {
    begin: {
        titre: `L'appel`,
        description: `Vous recevez l'appel d'un client qui souhaite se débarasser d'un fantôme chez lui. Ceci est votre première aventure paranormal, donc vous considèrez faire un appel pour de l'aide. Qui appelez?`,
        image: "./assets/begin.jpg",
        buttons: [
            { titre: "Domino's", destination: "confrontationPizza" },
            { titre: "Personne", destination: "confrontationSolo" },
            { titre: "Professionels", destination: "confrontationPro" }
        ]
    },

    confrontationPizza: {
        titre: `Face-à-Face`,
        description: `Après avoir commandé votre récompense pour après l'investigation, vous allez à la maison du client et vous entrez. La porte se ferme derrière vous et vous êtes face-à-face avec le fantôme. Comment survivre ?`,
        image: "./assets/confrontation.jpg",
        buttons: [
            { titre: "Confusion", "destination": "mortConfusion" },
            { titre: "Fuir", destination: "cachette" },
            { titre: "Rien", destination: "mortRien" }
        ]
    },

    confrontationSolo: {
        titre: `Face-à-Face`,
        description: `Après un peu de réflexion, vous déterminez que vous pouvez réussir seul. Vous allez à la maison du client et vous entrez. La porte se ferme derrière vous et vous êtes face-à-face avec le fantôme. Comment survivre ?`,
        image: "./assets/confrontation.jpg",
        buttons: [
            { titre: "Confusion", destination: "mortConfusion" },
            { titre: "Fuir", destination: "cachette" },
            { titre: "Rien", destination: "mortRien" }
        ]
    },

    confrontationPro: {
        titre: `Face-à-Face`,
        description: `Les meilleurs chasseurs de créatures paranormals vont arriver sous-peu en back-up, en attendent vous allez à la maison du client et vous entrez. La porte se ferme derrière vous et vous êtes face-à-face avec le fantôme. Comment survivre ?`,
        image: "./assets/confrontation.jpg",
        buttons: [
            { titre: "distraction", "destination": "mortDistraction" },
            { titre: "Fuir", destination: "cachette" },
            { titre: "Rien", destination: "mortRien" }
        ]
    },

    cachette: {
        titre: `Cache-Cache`,
        description: `Vous fuiez du fantôme, mais il vous poursuis à grande vitesse. Au lieu de continuer à fuir, vous décidez que se cacher serait la meilleure solution pour survire, mais où se cacher ?`,
        image: "./assets/cachette.jpg",
        buttons: [
            { titre: "Chambre", destination: "compagnon" },
            { titre: "Garage", destination: "compagnon" },
            { titre: "Cuisine", destination: "mortCuisine" }
        ]
    },

    compagnon: {
        titre: `Compagnon`,
        description: `Qui avez vous appelez avant votre investigation ?`,
        image: "./assets/compagnon.jpg",
        buttons: [
            { titre: "Domino's", destination: "finPizza" },
            { titre: "Personne", destination: "finSolo" },
            { titre: "Professionels", destination: "finPro" }
        ]
    },

    finPizza: {
        titre: "Fin Acceptable",
        description: "Quelqu'un sonne à la porte. Peu après, le fantôme libère un cri de douleur. Le livreur de pizza a défoncé le fantôme car il n'a pas été donné un pourboire. Malheureusement pour vous, le livreur de pizza se fait payer pour s'avoir occuper du fantôme... Vous avez au moins de la pizza...",
        image: "./assets/end-pizza.jpg",
        buttons: [
            { titre: "Recommencer", destination: "debut" }
        ]
    },

    finSolo: {
        titre: "Bonne Fin",
        description: "Vous attendez pour attaquer le fantôme depuis derrière. Il s'enfuit de la maison. Vous avez réussi ! Mais votre client a maintenant une bosse sur la tête...",
        image: "./assets/end-solo.jpg",
        buttons: [
            { titre: "Recommencer", destination: "debut" }
        ]
    },

    finPro: {
        titre: "Mauvaise Fin",
        description: "Les professionels arrivent et, croyant que vous êtes le monstre, vous arrêtes. Même dans votre cellule dans la prison, vous entendez le cri du chien des professionnels... SCOOBY-DOO-BY DOOO !",
        image: "./assets/end-scooby.jpg",
        buttons: [
            { titre: "Recommencer", destination: "debut" }
        ]
    },

    mortCuisine: {
        titre: "Trouvé !",
        description: "Vous vous cachez derrière un comptoir dans la cuisine, mais, malheureusement pour vous, le fantôme a décidé de vérifiez la cuisine en premier comme salle. Il vous trouve et vous étrangle...",
        image: "./assets/mort-cuisine.jpg",
        buttons: [
            { titre: "Recommencer", destination: "debut" }
        ]
    },

    mortRien: {
        titre: "...Quoi ?",
        description: "Vous ne faites... rien ? Le fantôme vous étrangle. Vous vous attendiez à quoi exactement ?",
        image: "./assets/mort-rien.jpg",
        buttons: [
            { titre: "Recommencer", destination: "debut" }
        ]
    },

    mortDistraction: {
        titre: "Distraction !",
        description: "Vous tentez de distraire le fantôme en dansant. Peut-être que ça va le rendre confus ! ... il s'approche de vous et vous casse le cou. Vous n'auriez probablement pas avoir fait une dance Fortnite...",
        image: "./assets/mort-distraction.jpg",
        buttons: [
            { titre: "Recommencer", destination: "debut" }
        ]
    },
}
let begin = chaptersObj.begin;
let confrontationPizza = chaptersObj.confrontationPizza;
let confrontationSolo = chaptersObj.confrontationSolo;
let confrontationPro = chaptersObj.confrontationPro;
let mortDistraction = chaptersObj.mortDistraction;
let mortRien = chaptersObj.mortRien;
let cachette = chaptersObj.cachette;
let compagnon = chaptersObj.compagnon;
let mortCuisine = chaptersObj.mortCuisine;
let finPizza = chaptersObj.finPizza;
let finSolo = chaptersObj.finSolo;
let finPro = chaptersObj.finPro;

function goToChapter(chapterKey) {
    let chapterTitle = document.querySelector("#chapter");
    let chapterDescription = document.querySelector("#text");
    let chapterImg = document.querySelector("#image");
    let boutons = document.querySelectorAll(".choice");
    chapterTitle.innerHTML = chapterKey.titre;
    chapterDescription.innerHTML = chapterKey.description;
    chapterImg.src = chapterKey.image;
    while (boutons.firstChild) { 
        boutons.removeChild(boutons.firstChild); 
    }
    
    for (let i = 0; i < chapitre.boutons.length; i++) { 
    const nouveauBtn = document.createElement('button'); 
    nouveauBtn.textContent = chapitre.boutons[i].titre;  
    nouveauBtn.addEventListener('click', () => { 
    goToChapter(chapitre.boutons[i].destination) 
    }); 
      boutons.appendChild(nouveauBtn); 
    }; 
}

goToChapter(begin);
