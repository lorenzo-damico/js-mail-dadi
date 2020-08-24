// 1. Genero un numero random fra 1 e 6 per il giocatore e per il computer
var numeroGiocatore = Math.floor(Math.random() * 6) + 1;
console.log("Numero giocatore: " + numeroGiocatore);
var numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log("Numero computer: " + numeroComputer);

// 2. Verifico il numero più alto e stampo il nome del vincitore
if (numeroGiocatore > numeroComputer) {
  console.log("Il vincitore è il giocatore");
} else if (numeroComputer > numeroGiocatore) {
  console.log("Il vincitore è il computer");
} else {
  console.log("Il risultato è pari");
}
