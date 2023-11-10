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
                destination: "compagnon",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Aller se cacher dans la chambre"
            },
            {
                titre: "Garage",
                destination: "compagnon",
                sound: "../assets/audio/goodChoice.mp3",
                hover: "Aller se cacher dans le garage"
            },
            {
                titre: "Cuisine",
                destination: "mortCuisine",
                sound: "../assets/audio/badChoice.mp3",
                hover: "Aller se cacher dans la cuisine"
            }
        ]
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
                sound: "../assets/audio/midChoice.mp3",
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
            sound: "../assets/audio/midChoice.mp3",
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

    // mort chapitre 3
    mortCuisine: {
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

    // première mort chapitre 2
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

    // deuxième mort chapitre 2
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
}

// liste de variables
const chapterTitle = document.querySelector("#chapter");
const chapterDescription = document.querySelector("#text");
const chapterImg = document.querySelector("#image");
const chapterVideo = document.querySelector("#video");
const bgMusic = document.createElement("audio");
const soundEffect = document.createElement("audio");
bgMusic.loop = true;
// les Twists
let pizza = false;
let solo = false;
let mysteryInc = false;

function goToChapter(chapterKey) {
    if (chaptersObj[chapterKey]) {
        const chapterInput = chaptersObj[chapterKey];
        chapterTitle.innerHTML = chapterInput.titre;
        chapterDescription.innerHTML = chapterInput.description;
        bgMusic.src = chapterInput.sound;
        bgMusic.play();

        // Toggle Image/Video
        if(chapterInput.image === false){
            chapterImg.classList.add("hidden");
            chapterVideo.classList.remove("hidden");
            chapterVideo.src = chapterInput.video;
        } else if (chapterInput.video === false){
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
            chaptersObj.cachette = {
                titre: `Cache-Cache`,
                description: `Vous fuiez du fantôme, mais il vous poursuis à grande vitesse. Au lieu de continuer à fuir, vous décidez que se cacher serait la meilleure solution pour survire, mais où se cacher ?`,
                image: "../assets/image/cachette.jpg",
                video: false,
                sound: "../assets/audio/trouble.mp3",
                buttons: [{
                        titre: "Chambre",
                        destination: "finPizza",
                        sound: "../assets/audio/goodChoice.mp3",
                        hover: "Aller se cacher dans la chambre"
                    },
                    {
                        titre: "Garage",
                        destination: "finPizza",
                        sound: "../assets/audio/goodChoice.mp3",
                        hover: "Aller se cacher dans le garage"
                    },
                    {
                        titre: "Cuisine",
                        destination: "mortCuisine",
                        sound: "../assets/audio/badChoice.mp3",
                        hover: "Aller se cacher dans la cuisine"
                    }
                ]
            }
        }

        if (solo === true) {
            chaptersObj.cachette = {
                titre: `Cache-Cache`,
                description: `Vous fuiez du fantôme, mais il vous poursuis à grande vitesse. Au lieu de continuer à fuir, vous décidez que se cacher serait la meilleure solution pour survire, mais où se cacher ?`,
                image: "../assets/image/cachette.jpg",
                video: false,
                sound: "../assets/audio/trouble.mp3",
                buttons: [{
                        titre: "Chambre",
                        destination: "finSolo",
                        sound: "../assets/audio/goodChoice.mp3",
                        hover: "Aller se cacher dans la chambre"
                    },
                    {
                        titre: "Garage",
                        destination: "finSolo",
                        sound: "../assets/audio/goodChoice.mp3",
                        hover: "Aller se cacher dans le garage"
                    },
                    {
                        titre: "Cuisine",
                        destination: "mortCuisine",
                        sound: "../assets/audio/badChoice.mp3",
                        hover: "Aller se cacher dans la cuisine"
                    }
                ]
            }
        }

        if (mysteryInc === true) {
            chaptersObj.cachette = {
                titre: `Cache-Cache`,
                description: `Vous fuiez du fantôme, mais il vous poursuis à grande vitesse. Au lieu de continuer à fuir, vous décidez que se cacher serait la meilleure solution pour survire, mais où se cacher ?`,
                image: "../assets/image/cachette.jpg",
                video: false,
                sound: "../assets/audio/trouble.mp3",
                buttons: [{
                        titre: "Chambre",
                        destination: "finPro",
                        sound: "../assets/audio/badChoice.mp3",
                        hover: "Aller se cacher dans la chambre"
                    },
                    {
                        titre: "Garage",
                        destination: "finPro",
                        sound: "../assets/audio/badChoice.mp3",
                        hover: "Aller se cacher dans le garage"
                    },
                    {
                        titre: "Cuisine",
                        destination: "mortCuisine",
                        sound: "../assets/audio/badChoice.mp3",
                        hover: "Aller se cacher dans la cuisine"
                    }
                ]
            }
        }

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

goToChapter("begin");