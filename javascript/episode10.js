// cte montant var
const montantFacture = parseFloat(prompt("Entrez le montant de la facture :"));
const remise = montantFacture > 40000 ? 0.1 : 0;
const montantTotal = montantFacture * (1 - remise);
alert(`Montant à payer : ${montantTotal.toFixed(2)} F`);