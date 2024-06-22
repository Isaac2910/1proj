let variable1 = prompt("Entrez la valeur de la première variable :");
let variable2 = prompt("Entrez la valeur de la seconde variable :");

// Permutation des valeurs
[variable1, variable2] = [variable2, variable1];

console.log(`La valeur de la première variable est maintenant : ${variable1}`);
console.log(`La valeur de la seconde variable est maintenant : ${variable2}`);