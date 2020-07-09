// welcome alert
alert ("Bienvenue sur le jeu du pendu");

// create a word list
const listeDeMots = ["bienvenue", "brouillon", "carreau", "dragon", "esperluette", "facile"];

// random an index and select it in words array
let indexDuMot = Math.floor(Math.random() * (listeDeMots.length - 0 +1));
let motChoisi = listeDeMots[indexDuMot];


console.log( motChoisi);
