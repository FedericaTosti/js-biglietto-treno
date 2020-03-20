/*calcolo biglietto del treno con relativi sconti diversi per le categorie che ci rientrano
DESCRIZIONE:
ll programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Il prezzo del biglietto è definito in base ai km (0.21 € al km),
ma va applicato uno sconto del 20% per i minorenni
e del 40% per gli over 65.*/



// // messaggio all'utente
// alert("Gentile passeggero la ringraziamo per aver scelto la nostra compagnia");
// // creazione variabile km
// var km;
// // creazione variabile età
// var anni;
// // chiedo all'utente i km
// km = prompt("Quanti km deve percorrere?");
// // chiedo all'utente la sua età
// anni = prompt("Quanti anni ha?");
// // creazione variabile 0.21€ per km (costante)
// var costante = 0.21;
// // creazione variabile costo biglietto
// var costoBiglietto;
// // calcolo costo biglietto
// costoBiglietto= km*costante;
// // creazione variabili sconto minorenni e maggiorenni
// var minorenni = 0.2;
// var maggiorenni = 0.4;
// // calcolo costo Biglietto in caso di sconti da applicare
// if (anni <= 17) {
//   costoBiglietto=costoBiglietto-(costoBiglietto*minorenni);
// } else if (anni > 65) {
//   costoBiglietto=costoBiglietto-(costoBiglietto*maggiorenni);
// } else {
//   costoBiglietto=costoBiglietto;
// }
//
// console.log(costoBiglietto);
//
// // stampo il risultato
// document.getElementById('biglietto').innerHTML = "Il prezzo del suo biglietto è: " + Math.floor(costoBiglietto*100)/100 + "€";
// // document.getElementById('biglietto').innerHTML = "Il prezzo del suo biglietto è: " + Math.floor(costoBiglietto) + "€";





// codice più snello e pulito

// messaggio all'utente
alert("Gentile passeggero la ringraziamo per aver scelto la nostra compagnia");
// creazione variabile km e chiedo all'utente
var km = prompt("Quanti km deve percorrere?");
// creazione variabile età e chiedo all'utente
var anni = prompt("Quanti anni ha?");
// creazione variabile costo biglietto
var costoBiglietto= km*0.21;
// calcolo costo Biglietto in caso di sconti da applicare
if (anni <= 17) {
  costoBiglietto=costoBiglietto*0.8;
} else if (anni > 65) {
  costoBiglietto=costoBiglietto*0.6;
} else {
  costoBiglietto=costoBiglietto;
}
// stampo il risultato
document.getElementById('biglietto').innerHTML = "Il prezzo del suo biglietto è: " + Math.floor(costoBiglietto*100)/100 + "€";
