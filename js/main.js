// welcome alert
alert ("Bienvenue sur le jeu du pendu");

// create a word list
const listeDeMots = ["bienvenue", "brouillon", "carreau", "dragon", "esperluette", "facile"];

// random an index and select it in words array
function choixDuMot (){
    let indexDuMot = Math.floor(Math.random() * (listeDeMots.length - 0 +1));
    let motAuHasard = listeDeMots[indexDuMot];
return motAuHasard;
}

// transformation du mot au hasard en chaine de caractères puis en "_"
let motEnLettres = choixDuMot().split('');
let motMasque = "";
 for (let i = 0 ; i < motEnLettres.length ; i++){
    motMasque += "_ "};

// affichage du mot masqué et demande proposition de lettre    
let propositionDeLettre = prompt (`${motMasque} \n quelle lettre proposes-tu?`);
console.log(motEnLettres);

