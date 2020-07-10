// Fonctions
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// verifie que la saisie est une lettre et une seule
// affichage du mot masqué et demande proposition de lettre
function estUneLettre(proposition) {
    do {
        proposition = prompt (`${motMasque} \n quelle lettre proposes-tu?`);
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

// recensement des lettres déjà jouées
const MOTCHOISI = choixDuMot();

// le jeu
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// welcome alert
alert ("Bienvenue sur le jeu du pendu");

// transformation du mot au hasard en chaine de caractères
let motEnLettres = MOTCHOISI.split('');

let motMasque = "";
for (let i in motEnLettres){
    motMasque += " _";
}
// ask for a letter and switch it to lower case as words are
let propositionDeLettre = estUneLettre().toLowerCase();
console.log(propositionDeLettre);

// switch string motMasque to array
motMasque = motMasque.split('');
// for each value in motEnLettre input the new letter in case it was a good choice
for (let i = 0 ; i < motEnLettres.length ; i++){
    (propositionDeLettre == motEnLettres[i] ?  motMasque[i] = propositionDeLettre : );
    console.log(motEnLettres[i]);
}

// switch array to string
motMasque = motMasque.join('');
console.log(motEnLettres);
console.log(motMasque);
