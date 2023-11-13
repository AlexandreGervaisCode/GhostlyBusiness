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
                hover: "Aller se cacher dans la chambre"
            },
            {
                titre: "Couteau",
                destination: "mortCouteau",
                sound: "../assets/audio/badChoice.mp3",
                hover: "Aller se cacher dans le garage"
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
            titre: "Recommencer",
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
            titre: "Recommencer",
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
            titre: "Recommencer",
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
            titre: "Recommencer",
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
            titre: "Recommencer",
            destination: "begin",
            sound: "../assets/audio/badChoice.mp3",
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
const heartbeat = new Audio("../assets/audio/heartbeat.mp3");
heartbeat.loop = true;
// les Twists
let pizza = false;
let solo = false;
let mysteryInc = false;

// Achievement stuff
const allAchievement = document.querySelectorAll(".achievement");
let ach0 = false;
let ach1 = false;
let ach2 = false;
let ach3 = false;
let ach4 = false;
let ach5 = false;
let ach6 = false;
let ach7 = false;
let ach8 = false;
let ach9 = false;
let ach10 = false;
let ach11 = false;
const achievementTab = [ach0,ach1,ach2,ach3,ach4,ach5,ach6,ach7,ach8,ach9,ach10,ach11];

// goToChapter (It does everything basically)
function goToChapter(chapterKey) {
    if (chaptersObj[chapterKey]) {
        const chapterInput = chaptersObj[chapterKey];
        chapterTitle.innerHTML = chapterInput.titre;
        chapterDescription.innerHTML = chapterInput.description;
        // Pour ne pas répéter le début de musique en changeant de chapitre
        if ((chapterKey === "cachette" || chapterKey === "armoire" || chapterKey === "cuisine" || chapterKey === "garage") && bgMusic.paused === false){
            bgMusic.play();
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
        }

        if (chapterInput === chaptersObj.confrontationPizza) {
            pizza = true;
            solo = false;
            mysteryInc = false;
        }

        if (chapterInput === chaptersObj.confrontationSolo) {
            pizza = false;
            solo = true;
            mysteryInc = false;
        }

        if (chapterInput === chaptersObj.confrontationPro) {
            pizza = false;
            solo = false;
            mysteryInc = true;
        }

        // Fin Twist
        if (pizza === true) {
            chaptersObj.armoire.buttons[0].destination = "finPizza";
            chaptersObj.armoire.buttons[0].sound = "../assets/audio/badChoice.mp3";
            chaptersObj.etagere.buttons[0].destination = "finPizza";
            chaptersObj.etagere.buttons[0].sound = "../assets/audio/badChoice.mp3";
            chaptersObj.aspirateur.buttons[0].destination = "finPizza";
            chaptersObj.aspirateur.buttons[0].sound = "../assets/audio/badChoice.mp3";
        }

        if (solo === true) {
            chaptersObj.armoire.buttons[0].destination = "finSolo";
            chaptersObj.etagere.buttons[0].destination = "finSolo";
            chaptersObj.aspirateur.buttons[0].destination = "finSolo";
        }

        if (mysteryInc === true) {
            chaptersObj.armoire.buttons[0].destination = "finPro";
            chaptersObj.etagere.buttons[0].destination = "finPro";
            chaptersObj.aspirateur.buttons[0].destination = "finPro";
        }

        // Rappel du chapitre
        localStorage.setItem("progress", chapterKey);
        localStorage.setItem("twistPizza", pizza);
        localStorage.setItem("twistSolo", solo);
        localStorage.setItem("twistPro", mysteryInc);
        localStorage.setItem("allSuccess", achievementTab);

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

if (localStorage.getItem("progress")) {
    let currentProgress = localStorage.getItem("progress");
    let pizzaTwist = localStorage.getItem("twistPizza");
    let soloTwist = localStorage.getItem("twistSolo");
    let proTwist = localStorage.getItem("twistPro");
    let getSuccess = localStorage.getItem("allSuccess");
    pizza = pizzaTwist;
    solo = soloTwist;
    mysteryInc = proTwist;
    if (currentProgress === "armoire" || currentProgress === "etagere" || currentProgress === "aspirateur") {
        if (pizza === "true") {
            chaptersObj.armoire.buttons[0].destination = "finPizza";
            chaptersObj.armoire.buttons[0].sound = "../assets/audio/badChoice.mp3";
            chaptersObj.etagere.buttons[0].destination = "finPizza";
            chaptersObj.etagere.buttons[0].sound = "../assets/audio/badChoice.mp3";
            chaptersObj.aspirateur.buttons[0].destination = "finPizza";
            chaptersObj.aspirateur.buttons[0].sound = "../assets/audio/badChoice.mp3";
        }

        if (solo === "true") {
            chaptersObj.armoire.buttons[0].destination = "finSolo";
            chaptersObj.etagere.buttons[0].destination = "finSolo";
            chaptersObj.aspirateur.buttons[0].destination = "finSolo";
        }

        if (mysteryInc === "true") {
            chaptersObj.armoire.buttons[0].destination = "finPro";
            chaptersObj.etagere.buttons[0].destination = "finPro";
            chaptersObj.aspirateur.buttons[0].destination = "finPro";
        }
    }
    goToChapter(currentProgress);
} else {
    goToChapter("begin");
}

// Bouton Reset
reset.addEventListener("click", function () {
    localStorage.clear();
    goToChapter("begin");
});

// Bouton Light Mode
btnLight.addEventListener("click", function (){
    body.classList.toggle("light");
});

btnSuccess.addEventListener("click", function(){
    containerAchievement.classList.toggle("hidden");
})

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

// Remove locked from obtained Achievements
for (let i = 0; i < achievementTab.length-1; i++){
    if (achievementTab[i] === true){
        allAchievement[i].classList.remove("locked");
    }
};
