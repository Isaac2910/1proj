
// boucle arriver a trouver
const nombreMystere = Math.floor(Math.random() * 100) + 1;
let nombreSaisi;
// si sinon avec des paramtre
do {
  nombreSaisi = parseInt(prompt("Entrez un nombre entre 1 et 100 :"));
  if (nombreSaisi < nombreMystere) {
    alert("Trop petit !");
  } else if (nombreSaisi > nombreMystere) {
    alert("Trop grand !");
  }
} while (nombreSaisi !== nombreMystere);

alert(`Bravo, vous avez trouvé le nombre mystère : ${nombreMystere} !`);