const nom = prompt("Quel est votre nom ?");
const sexe = prompt("Quel est votre sexe (H/F) ?").toUpperCase();

const civilité = sexe === "H" ? "Monsieur" : "Madame";
alert(`Bonjour ${civilité} ${nom}`);
//creer un form