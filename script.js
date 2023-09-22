let chapter1 = {
    titre: `placeholder`,
    description: `description`,
    image: "./assets/begin.jpg",
    buttons: options[0]
}

let chapters = {
    debut: chapter1,
    personne: chapter2,
    pizza: chapter2,
    professionnels: chapter2,
    confusion: chapter1,
    rien: chapter1,
    courir: chapter3,
    cuisine: chapter1,
    chambre: chapter4,
    garage: chapter4,
    fin: chapter5
}

function goToChapter(key){
    console.log(chapters.key.titre);
    console.log(chapters.key.description);
    console.log(chapters.key.buttons);
}