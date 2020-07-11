// Fonctions
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// verifie que la saisie est une lettre et une seule
// affichage du mot masqué et demande proposition de lettre
function estUneLettre() {
    // proposition = prompt (`${motMasque} \n Il te reste ${essaiRestant} essai(s). \n Quelle lettre proposes-tu?`);
    do {
        proposition = prompt (`${motMasque} \n Il te reste ${essaiRestant} essai(s). \n Quelle lettre proposes-tu?`);
    }
    while (proposition.length !== 1 && !proposition.match(/[a-z]/i));
    // console.log(proposition);
    return proposition;
}

// random an index and select it in words array
function choixDuMot (){
    let indexDuMot = Math.floor(Math.random() * (listeDeMots.length - 0 +1));
    let motAuHasard = listeDeMots[indexDuMot];
return motAuHasard;
}

function reponse(stopOuEncore){
    do {
        stopOuEncore = prompt ("Entre j pour jouer \n r pour voir les régles \n q pour quitter").toLowerCase();
        console.log(stopOuEncore);
    }
    while (stopOuEncore.length !== 1 && !stopOuEncore.match(/[a-z]/i));
return stopOuEncore;
}

// create a word list
const listeDeMots = ["bienvenue", "brouillon", "carreau", "dragon", "esperluette", "facile", "fonction", "migraine","solution","pendu", "horloge", "jouet", "chien", "boucle",
"cigarette", "mouchoir", "escargot", "filtre", "victoire"];

// the Game
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let essaiRestant;
let motMasque;
let stopOuEncore;

do {
    // reponse = prompt ("Entre j pour jouer \n r pour voir les régles \n q pour quitter").toLowerCase();
    console.log (reponse());
    // welcome alert
    alert ("Bienvenue sur le jeu du pendu");

    essaiRestant = 7;
    motMasque = "";

    // make the word to find as constant
   let motChoisi = choixDuMot();
console.log(motChoisi);   
        
    // translate the word in an array in order to work with it
    let motEnLettres = motChoisi.split('');

    
    for (let i in motEnLettres){
        motMasque += "_";
    }

    // loop start here since win or loose
    do {
        // ask for a letter and switch it to lower case as words are
        let propositionDeLettre = estUneLettre().toLowerCase();

        // switch string motMasque to array
        motMasque = motMasque.split('');

        // let a variable for evaluation of succes in finding a
        let tentative = motEnLettres.length;
        // for each value in motEnLettre input the new letter in case it was a good choice
        for (let i = 0 ; i < motEnLettres.length ; i++){
            (propositionDeLettre == motEnLettres[i] ?  motMasque[i] = propositionDeLettre  : tentative -= 1 );
        }
        // switch array to string
        motMasque = motMasque.join('');
        // tentative decrease by one point each time letter is not find, so it's positive number each time the letter choosed is in the word
        if(tentative === 0){
            essaiRestant = essaiRestant - 1;
        }
    }
    while (motMasque !== motChoisi && essaiRestant !== 0);

    // finishing the game
    if (essaiRestant === 0) {
        alert (`pendu ! Le mot à trouver était : ${motChoisi}.`)
    }
    else{
        alert(`BRAVO !  Le mot à trouver était : ${motChoisi}. \n Il te restait ${essaiRestant} essai(s).`)
    }
    reponse();

} while (reponse() === "j" && reponse() !== "q" && reponse() !== "r" );


