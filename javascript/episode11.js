// somme affich apres paramtre
const nombre = parseInt(prompt("Entrez un nombre :"));

for (let i = 1; i <= 10; i++) {
  const resultat = nombre * i;
  console.log(`${nombre} x ${i} = ${resultat}`);
}