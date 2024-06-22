const moyenne = parseFloat(prompt("Entrez la moyenne de l'élève :"));
//var de la moyenn de b

if (moyenne < 0 || moyenne > 20) {
  alert("Erreur : La moyenne doit être comprise entre 0 et 20");
} else { //cond f
  let mention;
  if (moyenne >= 18) {
    mention = "Excellent";
  } else if (moyenne >= 16) {                      //age donne paramtre var
    mention = "Très bien";
  } else if (moyenne >= 14) {
    mention = "Bien";
  } else if (moyenne >= 12) {
    mention = "Assez bien";
  } else {
    mention = "Passable";
  }
  alert(`Mention obtenue : ${mention}`);
}