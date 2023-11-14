const chaptersObj = {
    // début
    begin: {
        titre: `L'appel`,
        description: `Vous recevez l'appel d'un client qui souhaite se débarasser d'un fantôme chez lui. Ceci est votre première aventure paranormal, donc vous considèrez faire un appel pour de l'aide. Qui appeler?`,
        image: false,
        video: "../assets/video/begin.mp4",
        sound: "../assets/audio/ambiance.mp3",
        buttons: [{
                titre: "Domino's",
                destination: "confrontationPizza",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Commander une pizza"
            },
            {
                titre: "Personne",
                destination: "confrontationSolo",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Y aller seul"
            },
            {
                titre: "Professionels",
                destination: "confrontationPro",
                sound: "../assets/audio/badChoice.mp3",
                hover: "Appeler des professionnels en backup"
            }
        ]
    },

    // Chapitre 2, choix Domino's
    confrontationPizza: {
        titre: `Face-à-Face`,
        description: `Après avoir commandé votre récompense pour après l'investigation, vous allez à la maison du client et vous entrez. La porte se ferme derrière vous et vous êtes face-à-face avec le fantôme. Comment survivre ?`,
        image: "../assets/image/confrontation.jpg",
        video: false,
        sound: "../assets/audio/trouble.mp3",
        buttons: [{
                titre: "Confusion",
                destination: "mortDistraction",
                sound: "../assets/audio/badChoice.mp3",
                hover: "Rendre le fantôme confus"
            },
            {
                titre: "Fuir",
                destination: "cachette",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Fuir du fantôme"
            },
            {
                titre: "Rien",
                destination: "mortRien",
                sound: "../assets/audio/badChoice.mp3",
                hover: "N'appuyez pas sur ce bouton"
            }
        ]
    },

    // Chapitre 2, choix Personne
    confrontationSolo: {
        titre: `Face-à-Face`,
        description: `Après un peu de réflexion, vous déterminez que vous pouvez réussir seul. Vous allez à la maison du client et vous entrez. La porte se ferme derrière vous et vous êtes face-à-face avec le fantôme. Comment survivre ?`,
        image: "../assets/image/confrontation.jpg",
        video: false,
        sound: "../assets/audio/trouble.mp3",
        buttons: [{
                titre: "Confusion",
                destination: "mortDistraction",
                sound: "../assets/audio/badChoice.mp3",
                hover: "Rendre le fantôme confus"
            },
            {
                titre: "Fuir",
                destination: "cachette",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Fuir du fantôme"
            },
            {
                titre: "Rien",
                destination: "mortRien",
                sound: "../assets/audio/badChoice.mp3",
                hover: "N'appuyez pas sur ce bouton"
            }
        ]
    },

    // Chapitre 2, choix Professionnels
    confrontationPro: {
        titre: `Face-à-Face`,
        description: `Les meilleurs chasseurs de créatures paranormals vont arriver sous-peu en back-up, en attendent vous allez à la maison du client et vous entrez. La porte se ferme derrière vous et vous êtes face-à-face avec le fantôme. Comment survivre ?`,
        image: "../assets/image/confrontation.jpg",
        video: false,
        sound: "../assets/audio/trouble.mp3",
        buttons: [{
                titre: "Confusion",
                destination: "mortDistraction",
                sound: "../assets/audio/badChoice.mp3",
                hover: "Rendre le fantôme confus"
            },
            {
                titre: "Fuir",
                destination: "cachette",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Fuir du fantôme"
            },
            {
                titre: "Rien",
                destination: "mortRien",
                sound: "../assets/audio/badChoice.mp3",
                hover: "N'appuyez pas sur ce bouton"
            }
        ]
    },

    // Chapitre 2, choix Tous
    confrontationVraie: {
        titre: `Face-à-Face`,
        description: `Les meilleurs chasseurs de créatures paranormals et une bonne pizza vont arriver sous-peu, en attendent vous allez à la maison du client et vous entrez. La porte se ferme derrière vous et vous êtes face-à-face avec le fantôme. Comment survivre ?`,
        image: "../assets/image/confrontation.jpg",
        video: false,
        sound: "../assets/audio/trouble.mp3",
        buttons: [{
                titre: "Confusion",
                destination: "mortDistraction",
                sound: "../assets/audio/badChoice.mp3",
                hover: "Rendre le fantôme confus"
            },
            {
                titre: "Fuir",
                destination: "cachette",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Fuir du fantôme"
            },
            {
                titre: "Rien",
                destination: "mortRien",
                sound: "../assets/audio/badChoice.mp3",
                hover: "N'appuyez pas sur ce bouton"
            }
        ]
    },

    // Chapitre 3
    cachette: {
        titre: `Cache-Cache`,
        description: `Vous fuiez du fantôme, mais il vous poursuis à grande vitesse. Au lieu de continuer à fuir, vous décidez que se cacher serait la meilleure solution pour survire, mais où se cacher ?`,
        image: "../assets/image/cachette.jpg",
        video: false,
        sound: "../assets/audio/trouble.mp3",
        buttons: [{
                titre: "Chambre",
                destination: "chambre",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Aller se cacher dans la chambre"
            },
            {
                titre: "Cuisine",
                destination: "cuisine",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Aller se cacher dans la cuisine"
            },
            {
                titre: "Garage",
                destination: "garage",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Aller se cacher dans le garage"
            }
        ]
    },

    // Chapitres 4
    chambre: {
        titre: `Des moutons et des barrières mortelles`,
        description: `Vous êtes maintenant caché derrière une armoire, avec quelques autres cachettes à proximité, dans une chambre. Où se cacher ?`,
        image: false,
        video: "../assets/video/cachette-chambre.mp4",
        sound: "../assets/audio/trouble.mp3",
        buttons: [{
                titre: "Sous le lit",
                destination: "mortLit",
                sound: "../assets/audio/badChoice.mp3",
                hover: "Aller se cacher sous le lit"
            },
            {
                titre: "Armoire",
                destination: "mortArmoire",
                sound: "../assets/audio/badChoice.mp3",
                hover: "Se cacher dans l'armoire"
            },
            {
                titre: "Attendre",
                destination: "armoire",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Rester derrière l'armoire"
            }
        ]
    },

    cuisine: {
        titre: `Hell's Kitchen`,
        description: `Vous êtes maintenant caché derrière un comptoir, avec divers outils sur le comptoir, dans la cuisine. Quelle est votre prochaine action ?`,
        image: false,
        video: "../assets/video/cachette-cuisine.mp4",
        sound: "../assets/audio/trouble.mp3",
        buttons: [{
                titre: "Attendre",
                destination: "mortCuisineRien",
                sound: "../assets/audio/badChoice.mp3",
                hover: "Ne pas bouger"
            },
            {
                titre: "Couteau",
                destination: "mortCouteau",
                sound: "../assets/audio/badChoice.mp3",
                hover: "Se armer d'un couteau"
            }
        ]
    },

    garage: {
        titre: `Pit Stop`,
        description: `Vous êtes maintenant caché derrière une étagère, entouré de différents objets, dans le garage. Quelle est votre prochaine action ?`,
        image: false,
        video: "../assets/video/cachette-garage.mp4",
        sound: "../assets/audio/trouble.mp3",
        buttons: [{
                titre: "Attendre",
                destination: "etagere",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Rester derrière l'étagère"
            },
            {
                titre: "Voiture",
                destination: "mortVoiture",
                sound: "../assets/audio/badChoice.mp3",
                hover: "Aller se cacher en-dessous la voiture"
            },
            {
                titre: "Aspirateur",
                destination: "aspirateur",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Prendre l'aspirateur dans le coin de la salle"
            }
        ]
    },

    // Chapitre 5
    armoire: {
        titre: "Introuvable",
        description: "Vous décider de rester derrière l'armoire. Le fantôme ne vous trouve pas.",
        image: "../assets/image/armoire.jpg",
        video: false,
        sound: "../assets/audio/heartbeat.mp3",
        buttons: [{
            titre: "Fin",
            destination: "compagnon",
            sound: "../assets/audio/goodChoice.mp3",
            hover: "Accèder à la fin de cette aventure"
        }]
    },

    etagere: {
        titre: "Introuvable",
        description: "Vous décider de rester derrière l'étagère. Le fantôme ne vous trouve pas.",
        image: "../assets/image/etagere.jpg",
        video: false,
        sound: "../assets/audio/heartbeat.mp3",
        buttons: [{
            titre: "Fin",
            destination: "compagnon",
            sound: "../assets/audio/goodChoice.mp3",
            hover: "Accèder à la fin de cette aventure"
        }]
    },

    aspirateur: {
        titre: "Introuvable",
        description: "Vous prenez le vieil aspirateur dans le coin de la salle. Vous essayez de faire fonctionner l'aspirateur pour attraper ce fantôme à la Luigi. L'aspirateur ne fonctionne juste plus. Vous décidez de ne plus faire de bruit et de rester dans le coin. Le fantôme ne vous trouve pas.",
        image: "../assets/image/aspirateur.jpg",
        video: false,
        sound: "../assets/audio/heartbeat.mp3",
        buttons: [{
            titre: "Fin",
            destination: "compagnon",
            sound: "../assets/audio/goodChoice.mp3",
            hover: "Accèder à la fin de cette aventure"
        }]
    },

    // Chapitre de catch d'erreur
    compagnon: {
        titre: `Compagnon`,
        description: `Qui avez vous appelez avant votre investigation ?`,
        image: "../assets/image/compagnon.jpg",
        video: false,
        sound: "../assets/audio/an_error_has_occured.mp3",
        buttons: [{
                titre: "Domino's",
                destination: "finPizza",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Fin Acceptable"
            },
            {
                titre: "Personne",
                destination: "finSolo",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Bonne Fin"
            },
            {
                titre: "Professionels",
                destination: "finPro",
                sound: "../assets/audio/badChoice.mp3",
                hover: "Mauvais Fin"
            }
        ]
    },

    // Chapitre finale, fin acceptable, si chapitre 2 choix Domino's
    finPizza: {
        titre: "Fin Acceptable",
        description: "Quelqu'un sonne à la porte. Peu après, le fantôme libère un cri de douleur. Le livreur de pizza a défoncé le fantôme car il n'a pas été donné un pourboire. Malheureusement pour vous, le livreur de pizza se fait payer pour s'avoir occuper du fantôme... Vous avez au moins de la pizza...",
        image: "../assets/image/end-pizza.jpg",
        video: false,
        sound: "../assets/audio/okay_ending.mp3",
        buttons: [{
            titre: "Redébuter",
            destination: "begin",
            sound: "../assets/audio/goodChoice.mp3",
            hover: "Retourner au début"
        }]
    },

    // Chapitre finale, bonne fin, si chapitre 2 choix Personne
    finSolo: {
        titre: "Bonne Fin",
        description: "Vous attendez pour attaquer le fantôme depuis derrière. Il s'enfuit de la maison. Vous avez réussi ! Mais votre client a maintenant une bosse sur la tête...",
        image: "../assets/image/end-solo.jpg",
        video: false,
        sound: "../assets/audio/good_ending.mp3",
        buttons: [{
            titre: "Redébuter",
            destination: "begin",
            sound: "../assets/audio/goodChoice.mp3",
            hover: "Retouner au début"
        }]
    },

    // Chapitre finale, mauvaise fin, si chapitre 2 choix Professionnels
    finPro: {
        titre: "Mauvaise Fin",
        description: "Les professionels arrivent et, croyant que vous êtes le monstre, vous arrêtes. Même dans votre cellule dans la prison, vous entendez le cri du chien des professionnels... SCOOBY-DOO-BY DOOO !",
        image: "../assets/image/end-scooby.jpg",
        video: false,
        sound: "../assets/audio/bad_ending.mp3",
        buttons: [{
            titre: "Redébuter",
            destination: "begin",
            sound: "../assets/audio/badChoice.mp3",
            hover: "Retourner au début"
        }]
    },

     // Chapitre finale, Vraie fin, si chapitre 2 choix Tous
     finVraie: {
        titre: "Vraie Fin",
        description: "Vous attendez pour attaquer le fantôme depuis derrière. Pendant que le fantôme est à terre, les professionnels, Mystery Incorporated, arrivent sur la scène et arrête le fantôme. Le chef de Mystery Inc enlève le masque du fantôme, révèlant votre client. Votre client est arrété, vous êtes payé par la police pour votre arrêt. Votre pizza arrive et vous la savourez avec vos nouveaux amis de Mystery Inc.",
        image: "../assets/image/end-scooby.jpg",
        video: false,
        sound: "../assets/audio/best-ending.mp3",
        buttons: [{
            titre: "Redébuter",
            destination: "begin",
            sound: "../assets/audio/goodChoice.mp3",
            hover: "Retourner au début"
        }]
    },

    // Fin si l'utilisateur à Light Mode d'activer quand le fantôme est visible
    blindingLight: {
        titre: "...Victoire ?",
        description: "Vous avez tué le fantôme avec votre lumière intense, mais vous êtes probablement également aveugle. Pourquoi avez-vous activé le mode clair ? Peu importe votre raison, personne d'autre est capable de l'endurer, donc dites au revoir au mode clair.",
        image: "../assets/image/end-light.jpg",
        video: false,
        sound: "../assets/audio/okay_ending.mp3",
        buttons: [{
            titre: "Redébuter",
            destination: "begin",
            sound: "../assets/audio/goodChoice.mp3",
            hover: "Retourner au début"
        }]
    },

    // morts chapitre 2
    mortRien: {
        titre: "...Quoi ?",
        description: "Vous ne faites... rien ? Le fantôme vous étrangle. Vous vous attendiez à quoi exactement ?",
        image: false,
        video: "../assets/video/mort-rien.mp4",
        sound: "../assets/audio/fail_nothing.mp3",
        buttons: [{
            titre: "Recommencer",
            destination: "begin",
            sound: "../assets/audio/badChoice.mp3",
            hover: "Je n'ai aucun mot"
        }]
    },

    mortDistraction: {
        titre: "Distraction !",
        description: "Vous tentez de distraire le fantôme en dansant. Peut-être que ça va le rendre confus ! ... il s'approche de vous et vous casse le cou. Vous n'auriez probablement pas avoir fait une dance Fortnite...",
        image: false,
        video: "../assets/video/mort-distraction.mp4",
        sound: "../assets/audio/fail_dance.mp3",
        buttons: [{
            titre: "Recommencer",
            destination: "begin",
            sound: "../assets/audio/badChoice.mp3",
            hover: "Retourner au début"
        }]
    },

    // morts chapitre 4 dans la chambre
    mortLit: {
        titre: "Un Nouveau Problème...",
        description: "Vous allez vous cacher sous le lit non détecté. Vous entendez une respiration derrière vous... Oh non. On dirait qu'il y a un monstre sous ce lit.",
        image: "../assets/image/mort-lit.jpg",
        video: false,
        sound: "../assets/audio/fail.mp3",
        buttons: [{
            titre: "Recommencer",
            destination: "begin",
            sound: "../assets/audio/badChoice.mp3",
            hover: "Retourner au début"
        }]
    },

    mortArmoire: {
        titre: "Hors du Placard",
        description: "Vous allez vous cacher dans l'armoire. Le fantôme vous a entendu ouvrir l'armoire. On dirait que vous aller rester dans cette armoire, mais sans votre vie.",
        image: "../assets/image/mort-armoire.jpg",
        video: false,
        sound: "../assets/audio/fail.mp3",
        buttons: [{
            titre: "Recommencer",
            destination: "begin",
            sound: "../assets/audio/badChoice.mp3",
            hover: "Retourner au début"
        }]
    },

    // morts chapitre 4 dans la cuisine
    mortCuisineRien: {
        titre: "Trouvé !",
        description: "Vous vous cachez derrière un comptoir dans la cuisine, mais, malheureusement pour vous, le fantôme a décidé de vérifiez la cuisine en premier comme salle. Il vous trouve et vous étrangle...",
        image: false,
        video: "../assets/video/mort-cuisine.mp4",
        sound: "../assets/audio/fail.mp3",
        buttons: [{
            titre: "Recommencer",
            destination: "begin",
            sound: "../assets/audio/badChoice.mp3",
            hover: "Retourner au début"
        }]
    },

    mortCouteau: {
        titre: "Mauvais Couteau",
        description: "Vous prenez un couteau sur le comptoir. Le fantôme vous voit et s'approche. Vous tentez de le poignarder. Attendez une seconde, vous avez prit un couteau à BEURRE quand il y avait un couteau pointu DIRECTEMENT à côté !? Vous êtes étranglé par le fantôme. Vous le méritez probablement.",
        image: "../assets/image/mort-couteau.jpg",
        video: false,
        sound: "../assets/audio/fail.mp3",
        buttons: [{
            titre: "Recommencer",
            destination: "begin",
            sound: "../assets/audio/badChoice.mp3",
            hover: "Retourner au début"
        }]
    },

    // mort chapitre 4 dans le garage
    mortVoiture: {
        titre: "Bon Déjeuné !",
        description: "Vous allez sous la voiture dans le garage. Après un bout de temps, la voiture démarre... et se met à rouler. Vous devenez une crêpe couverte de sang. Kachow !",
        image: "../assets/image/mort-voiture.jpg",
        video: false,
        sound: "../assets/audio/fail.mp3",
        buttons: [{
            titre: "Recommencer",
            destination: "begin",
            sound: "../assets/audio/badChoice.mp3",
            hover: "Retourner au début"
        }]
    },
}

// DOM selector
const chapterTitle = document.querySelector("#chapter");
const chapterDescription = document.querySelector("#text");
const chapterImg = document.querySelector("#image");
const chapterVideo = document.querySelector("#video");
const body = document.querySelector("body");
const reset = document.querySelector("#reset");
const btnLight = document.querySelector("#light");
const btnSuccess = document.querySelector("#success");
const bgMusic = document.createElement("audio");
const soundEffect = document.createElement("audio");
const containerAchievement = document.querySelector(".achievement-container");
bgMusic.loop = true;
bgMusic.volume = 0.8;
soundEffect.volume = 0.7;
const heartbeat = new Audio("../assets/audio/heartbeat.mp3");
heartbeat.loop = true;
// les Twists
let pizza = false;
let solo = false;
let mysteryInc = false;
let vraieFin = false

// Achievement stuff
const allAchievement = document.querySelectorAll(".achievement");
let achievementText = document.querySelectorAll(".textAchievement");
const successAudio = new Audio("../assets/audio/success.mp3");
successAudio.volume = 0.7;
const achievementObj = {
    afk: {
        titre: `Escargot en Mission`,
        lockedText: `EM`,
        description: `Est-ce que le fantôme vous as tué dans la vraie vie`,
        unlock: false,
        achHtml: allAchievement[0],
    },
    gift: {
        titre: `Joyeux Noël`,
        lockedText: `JN`,
        description: `Un petit cadeau.`,
        unlock: false,
        achHtml: allAchievement[1],
    },
    badEnd: {
        titre: `Meddling Kids`,
        lockedText: `MD`,
        description: `And I would have gotten away with it too, if it weren't for you meddling kids!`,
        unlock: false,
        achHtml: allAchievement[2],
    },
    why: {
        titre: `...Quoi?`,
        lockedText: `???`,
        description: `Pourquoi que vous avez rien fait quand vous êtes face à un danger?`,
        unlock: false,
        achHtml: allAchievement[3],
    },
    resetBegin: {
        titre: `Nouveaux Débuts`,
        lockedText: `ND`,
        description: `Un nouveau début`,
        unlock: false,
        achHtml: allAchievement[4],
    },
    comeback: {
        titre: `Grand Retour`,
        lockedText: `GR`,
        description: `Votre retour attendu sur Ghostly Business est arrivé!`,
        unlock: false,
        achHtml: allAchievement[5],
    },
    endOkay: {
        titre: `Bon Appétit`,
        lockedText: `BA`,
        description: `Apprécié bien cette pizza, car c'est votre seule récompense.`,
        unlock: false,
        achHtml: allAchievement[6],
    },
    blind: {
        titre: `Lumière Aveuglante`,
        lockedText: `LA`,
        description: `Pourquoi que vous avez choisi de vous aveuglir?`,
        unlock: false,
        achHtml: allAchievement[7],
    },
    speedrun: {
        titre: `Record Mondial`,
        lockedText: `RM`,
        description: `Vous avez obtenu le record mondial dans la catégorie any% !`,
        unlock: false,
        achHtml: allAchievement[8],
    },
    endTrue: {
        titre: `Vraie Fin`,
        lockedText: `VF`,
        description: `La fin ultimate.`,
        unlock: false,
        achHtml: allAchievement[9],
    },
    endGood: {
        titre: `Sublime Soliditude`,
        lockedText: `SS`,
        description: `Des fois, faire face à des défis seul est la meilleure manière de surmonter ses problèmes.`,
        unlock: false,
        achHtml: allAchievement[10],
    },
    complete: {
        titre: `The Completionist`,
        lockedText: `TC`,
        description: `Vous avez 100% Ghostly Business. Wow, juste wow. Vous n'avez vraiment rien de mieux à faire.`,
        unlock: false,
        achHtml: allAchievement[11],
    }
};

// goToChapter (It does everything basically)
function goToChapter(chapterKey) {
    if (chaptersObj[chapterKey]) {
        const chapterInput = chaptersObj[chapterKey];
        chapterTitle.innerHTML = chapterInput.titre;
        chapterDescription.innerHTML = chapterInput.description;
        // Pour ne pas répéter le début de musique en changeant de chapitre
        if ((chapterKey === "cachette" || chapterKey === "armoire" || chapterKey === "cuisine" || chapterKey === "garage") && bgMusic.paused === false){
            bgMusic.play();
        } else if (chapterKey === "blindingLight"){
            setTimeout(() => {
                bgMusic.src = chapterInput.sound;
                bgMusic.play();
            }, 300);
        } else {
            bgMusic.src = chapterInput.sound;
            bgMusic.play();
        }

        if (chapterKey === "armoire" || chapterKey === "cuisine" || chapterKey === "garage"){
            heartbeat.play();
        } else {
            heartbeat.pause();
        }
        // Toggle Image/Video
        if (chapterInput.image === false) {
            chapterImg.classList.add("hidden");
            chapterVideo.classList.remove("hidden");
            chapterVideo.src = chapterInput.video;
        } else if (chapterInput.video === false) {
            chapterVideo.classList.add("hidden");
            chapterImg.classList.remove("hidden");
            chapterImg.src = chapterInput.image;
        } else {
            console.log("oh no");
        }

        // twist
        if (chapterInput === chaptersObj.begin) {
            pizza = false;
            solo = false;
            mysteryInc = false;
            vraieFin = false;
        }

        if (chapterInput === chaptersObj.confrontationPizza) {
            pizza = true;
            solo = false;
            mysteryInc = false;
            vraieFin = false;
        }

        if (chapterInput === chaptersObj.confrontationSolo) {
            pizza = false;
            solo = true;
            mysteryInc = false;
            vraieFin = false;
        }

        if (chapterInput === chaptersObj.confrontationPro) {
            pizza = false;
            solo = false;
            mysteryInc = true;
            vraieFin = false;
        }

        if (chapterInput === chaptersObj.confrontationVraie) {
            pizza = false;
            solo = false;
            mysteryInc = false;
            vraieFin = true;
        }

        // Début Vraie Fin
        if (achievementObj.badEnd.unlock === true && achievementObj.endGood.unlock === true && achievementObj.endOkay.unlock === true){
            chaptersObj.begin.buttons[3] = {
                titre: "Tous",
                destination: "confrontationVraie",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Appeler Domino's et des professionnels"
            }
        };

        // Fin Twist
        if (pizza === true) {
            chaptersObj.armoire.buttons[0].destination = "finPizza";
            chaptersObj.armoire.buttons[0].sound = "../assets/audio/goodChoice.mp3";
            chaptersObj.etagere.buttons[0].destination = "finPizza";
            chaptersObj.etagere.buttons[0].sound = "../assets/audio/goodChoice.mp3";
            chaptersObj.aspirateur.buttons[0].destination = "finPizza";
            chaptersObj.aspirateur.buttons[0].sound = "../assets/audio/goodChoice.mp3";
        }

        if (solo === true) {
            chaptersObj.armoire.buttons[0].destination = "finSolo";
            chaptersObj.armoire.buttons[0].sound = "../assets/audio/goodChoice.mp3";
            chaptersObj.etagere.buttons[0].destination = "finSolo";
            chaptersObj.etagere.buttons[0].sound = "../assets/audio/goodChoice.mp3";
            chaptersObj.aspirateur.buttons[0].destination = "finSolo";
            chaptersObj.aspirateur.buttons[0].sound = "../assets/audio/goodChoice.mp3";
        }

        if (mysteryInc === true) {
            chaptersObj.armoire.buttons[0].destination = "finPro";
            chaptersObj.armoire.buttons[0].sound = "../assets/audio/badChoice.mp3";
            chaptersObj.etagere.buttons[0].destination = "finPro";
            chaptersObj.etagere.buttons[0].sound = "../assets/audio/badChoice.mp3";
            chaptersObj.aspirateur.buttons[0].destination = "finPro";
            chaptersObj.aspirateur.buttons[0].sound = "../assets/audio/badChoice.mp3";
        }

        if (vraieFin === true) {
            chaptersObj.armoire.buttons[0].destination = "finVraie";
            chaptersObj.armoire.buttons[0].sound = "../assets/audio/goodChoice.mp3";
            chaptersObj.etagere.buttons[0].destination = "finVraie";
            chaptersObj.etagere.buttons[0].sound = "../assets/audio/goodChoice.mp3";
            chaptersObj.aspirateur.buttons[0].destination = "finVraie";
            chaptersObj.aspirateur.buttons[0].sound = "../assets/audio/goodChoice.mp3";
        }

        // Fin secrète
        if ((chapterKey === "mortDistraction" || chapterKey === "mortRien" || chapterKey === "mortArmoire" || chapterKey === "mortCouteau" || chapterKey === "mortCuisineRien" || chapterKey === "finSolo") && body.classList.contains("light")){
            goToChapter("blindingLight");
            if (achievementObj.blind.unlock === false){
                successAudio.play();
            }
            achievementObj.blind.unlock = true;
            body.classList.remove("light");
            btnLight.classList.add("hidden");
        };

        // Achievements des différentes fins
        if (chapterInput === chaptersObj.finPizza){
            if (achievementObj.endOkay.unlock === false){
                successAudio.play();
            }
            achievementObj.endOkay.unlock = true;
        };
        if (chapterInput === chaptersObj.finSolo){
            if (achievementObj.endGood.unlock === false){
                successAudio.play();
            }
            achievementObj.endGood.unlock = true;
        };
        if (chapterInput === chaptersObj.finPro){
            if (achievementObj.badEnd.unlock === false){
                successAudio.play();
            }
            achievementObj.badEnd.unlock = true;
        };
        if (chapterInput === chaptersObj.finVraie){
            if (achievementObj.endTrue.unlock === false){
                successAudio.play();
            }
            achievementObj.endTrue.unlock = true;
        };

        // Achievement ...Quoi?
        if (chapterInput === chaptersObj.mortRien){
            if (achievementObj.why.unlock === false){
                successAudio.play();
            }
            achievementObj.why.unlock = true;
        };

        // Rappel des éléments
        localStorage.setItem("progress", chapterKey);
        localStorage.setItem("twistPizza", pizza);
        localStorage.setItem("twistSolo", solo);
        localStorage.setItem("twistPro", mysteryInc);
        localStorage.setItem("twistVraie", vraieFin);

        // Boucle Boutons
        const boutons = document.querySelector('#button-container');
        while (boutons.firstChild) {
            boutons.removeChild(boutons.firstChild);
        }

        for (let i = 0; i < chapterInput.buttons.length; i++) {
            const nouveauBtn = document.createElement('button');
            nouveauBtn.setAttribute("class", "choice");
            nouveauBtn.textContent = chapterInput.buttons[i].titre;
            nouveauBtn.title = chapterInput.buttons[i].hover;
            // achievement AFK
            nouveauBtn.addEventListener("animationend", function (){
                if (achievementObj.afk.unlock === false){
                    successAudio.play();
                }
                achievementObj.afk.unlock = true;
            })
            nouveauBtn.addEventListener('click', function () {
                soundEffect.src = chapterInput.buttons[i].sound;
                goToChapter(chapterInput.buttons[i].destination);
                soundEffect.play();
            });
            boutons.appendChild(nouveauBtn);
        };
    } else {
        console.log("...you broke it.");
    }
}

// check Achievements state if unlocked
function checkAch(){
    let i = 0;
    for (let ach in achievementObj) {
        localStorage.setItem("ach"+i, achievementObj[ach].unlock);
        if (achievementObj[ach].unlock === true){
            achievementObj[ach].achHtml.classList.remove("locked");
            achievementText[i].textContent = achievementObj[ach].titre;
            achievementObj[ach].achHtml.ariaLabel = achievementObj[ach].description;
        } else {
            achievementObj[ach].achHtml.classList.add("locked");
            achievementText[i].textContent = achievementObj[ach].lockedText;
            achievementObj[ach].achHtml.ariaLabel = false;
        }
        i++;
    };
}
const checking = setInterval(checkAch, 1000);

// If achievement linked to light mode is unlocked, remove light mode

if (localStorage.getItem("progress")) {
    let currentProgress = localStorage.getItem("progress");
    let pizzaTwist = localStorage.getItem("twistPizza");
    let soloTwist = localStorage.getItem("twistSolo");
    let proTwist = localStorage.getItem("twistPro");
    let trueTwist = localStorage.getItem("twistVraie");
    // Remove locked from obtained Achievements in localStorage
    let i = 0;
    for (let ach in achievementObj) {
        let getAch = localStorage.getItem("ach"+i);
        if (getAch === "true"){
            achievementObj[ach].unlock = true;
        }
        i++;
    };
    // Comeback achievement
    if (achievementObj.comeback.unlock === false){
        successAudio.play();
    }
    achievementObj.comeback.unlock = true;

    pizza = pizzaTwist;
    solo = soloTwist;
    mysteryInc = proTwist;
    vraieFin = trueTwist
    if (currentProgress === "armoire" || currentProgress === "etagere" || currentProgress === "aspirateur") {
        if (pizza === "true") {
            chaptersObj.armoire.buttons[0].destination = "finPizza";
            chaptersObj.armoire.buttons[0].sound = "../assets/audio/goodChoice.mp3";
            chaptersObj.etagere.buttons[0].destination = "finPizza";
            chaptersObj.etagere.buttons[0].sound = "../assets/audio/goodChoice.mp3";
            chaptersObj.aspirateur.buttons[0].destination = "finPizza";
            chaptersObj.aspirateur.buttons[0].sound = "../assets/audio/goodChoice.mp3";
        }

        if (solo === "true") {
            chaptersObj.armoire.buttons[0].destination = "finSolo";
            chaptersObj.armoire.buttons[0].sound = "../assets/audio/goodChoice.mp3";
            chaptersObj.etagere.buttons[0].destination = "finSolo";
            chaptersObj.etagere.buttons[0].sound = "../assets/audio/goodChoice.mp3";
            chaptersObj.aspirateur.buttons[0].destination = "finSolo";
            chaptersObj.aspirateur.buttons[0].sound = "../assets/audio/goodChoice.mp3";
        }

        if (mysteryInc === "true") {
            chaptersObj.armoire.buttons[0].destination = "finPro";
            chaptersObj.armoire.buttons[0].sound = "../assets/audio/badChoice.mp3";
            chaptersObj.etagere.buttons[0].destination = "finPro";
            chaptersObj.etagere.buttons[0].sound = "../assets/audio/badChoice.mp3";
            chaptersObj.aspirateur.buttons[0].destination = "finPro";
            chaptersObj.aspirateur.buttons[0].sound = "../assets/audio/badChoice.mp3";
        }

        if (vraieFin === "true") {
            chaptersObj.armoire.buttons[0].destination = "finVraie";
            chaptersObj.armoire.buttons[0].sound = "../assets/audio/goodChoice.mp3";
            chaptersObj.etagere.buttons[0].destination = "finVraie";
            chaptersObj.etagere.buttons[0].sound = "../assets/audio/goodChoice.mp3";
            chaptersObj.aspirateur.buttons[0].destination = "finVraie";
            chaptersObj.aspirateur.buttons[0].sound = "../assets/audio/goodChoice.mp3";
        }
    }
    goToChapter(currentProgress);
} else {
    goToChapter("begin");
}

// Bouton Reset
reset.addEventListener("click", function () {
    localStorage.clear();
    for (let ach in achievementObj){
        achievementObj[ach].unlock = false;
    }
    goToChapter("begin");
    btnLight.classList.remove("hidden");
    if (achievementObj.resetBegin.unlock === false){
        successAudio.play();
    }
    achievementObj.resetBegin.unlock = true;
});

// Bouton Light Mode
btnLight.addEventListener("click", function (){
    body.classList.toggle("light");
});

btnSuccess.addEventListener("click", function(){
    containerAchievement.classList.toggle("hidden");
});

if (achievementObj.blind.unlock === true){
    btnLight.classList.add("hidden");
    body.classList.remove("light");
}

// Si l'audio ou la vidéo ne jouent pas
chapterVideo.addEventListener("click", function (){
    if (chapterVideo.paused || bgMusic.paused){
        chapterVideo.currentTime = 0;
        chapterVideo.play();
        bgMusic.play();
    }
});

chapterImg.addEventListener("click", function(){
    if (bgMusic.paused){
        bgMusic.play();
    }
});

// "Joyeux Noel" Achievement
achievementObj.gift.achHtml.addEventListener("click", function (){
    if (achievementObj.gift.unlock === false){
        successAudio.play();
    }
    achievementObj.gift.unlock = true;
})