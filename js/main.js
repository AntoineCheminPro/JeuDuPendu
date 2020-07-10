// Fonctions
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// verifie que la saisie est une lettre et une seule
// affichage du mot masqué et demande proposition de lettre
function estUneLettre(proposition) {
    do {
        proposition = prompt (`${motMasque} \n Il te reste ${essaiRestant} essai(s). \n Quelle lettre proposes-tu?`);
    }
    while (proposition.length !== 1 && !proposition.match(/[a-z]/i));
return proposition;
}


// random an index and select it in words array
function choixDuMot (){
    let indexDuMot = Math.floor(Math.random() * (listeDeMots.length - 0 +1));
    let motAuHasard = listeDeMots[indexDuMot];
return motAuHasard;
}
// Constantes
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// create a word list
const listeDeMots = ["bienvenue", "brouillon", "carreau", "dragon", "esperluette", "facile", "fonction", "migraine"];

// make the word to find as constant
const MOTCHOISI = choixDuMot();

// the Game
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// welcome alert
alert ("Bienvenue sur le jeu du pendu");

let essaiRestant = 7;

// translate the word in an array in order to work with it
let motEnLettres = MOTCHOISI.split('');

let motMasque = "";
for (let i in motEnLettres){
    motMasque += "_";
}

// loop start here since win or loose
do {
    // ask for a letter and switch it to lower case as words are
    let propositionDeLettre = estUneLettre().toLowerCase();

    // switch string motMasque to array
    motMasque = motMasque.split('');
    let tentative = motEnLettres.length;
    // for each value in motEnLettre input the new letter in case it was a good choice
    for (let i = 0 ; i < motEnLettres.length ; i++){
        (propositionDeLettre == motEnLettres[i] ?  motMasque[i] = propositionDeLettre : tentative -= 1 );
    }
    // switch array to string
    motMasque = motMasque.join('');
    // tentative decrease by one point each time letter is not find, so it's positive number each time the letter choosed is in the word
    if(tentative === 0){
        essaiRestant -= essaiRestant;
    }
}
while (motMasque !== MOTCHOISI || tentative === 0);


(essaiRestant === 0 ? alert ("pendu !") : alert (`il reste ${essaiRestant} essai(s)`));

alert(`BRAVO !  Le mot à trouver était : ${MOTCHOISI}. \n Il te restait ${essaiRestant} essai(s).`)


