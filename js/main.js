// Fonctions
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// verifie que la saisie est une lettre et une seule
// affichage du mot masqué et demande proposition de lettre
function estUneLettre(proposition) {
    while (proposition.length !== 1 && !proposition.match(/[a-z]/i)){
        proposition = prompt (`${motMasque} \n quelle lettre proposes-tu?`);
    }
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

// recensement des lettres déjà jouées
const lettreTrouvee = [];
const lettreProposee = [];
const motChoisi = choixDuMot();

let motMasque = "";

// le jeu
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// welcome alert
alert ("Bienvenue sur le jeu du pendu");

// transformation du mot au hasard en chaine de caractères
// puis en "_" ou en lettre affichée si le joueur à vu juste
let motEnLettres = motChoisi.split('');

let vieSauve = 0;
let propositionDeLettre = prompt (`${motMasque} \n quelle lettre proposes-tu?`); 

 for (let i = 0 ; i < motEnLettres.length ; i++){
    if (estUneLettre(propositionDeLettre) === motEnLettres[i]){
        motMasque += propositionDeLettre;
        vieSauve += 1;
    }
    else {
    motMasque += "_ "
    }
 }

console.log(motEnLettres);
