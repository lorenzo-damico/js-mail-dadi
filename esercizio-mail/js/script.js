// 1. Definisco una lista di accesso con un array
var emails = ["indirizzo1@gmail.com", "indirizzo2@gmail.com", "indirizzo3@gmail.com"];
console.log(emails);

// 2. Chiedo all'utente di inserire il suo indirizzo e-mail
var emailUtente = prompt("Inserisci il tuo indirizzo e-mail");
console.log(emailUtente);

/* 3. Definisco la variabile mailTrovata con valore falso per indicare di non aver
      ancora trovato una compatibilità
*/
var mailTrovata = false;

/* 4. Definisco un ciclo for per controllare la email inserita ed eventualmente
      modificare il valore booleano della variabile mailTrovata in true
*/
for (var i = 0; i < emails.length; i++) {

  if (emailUtente == emails[i]) {
    mailTrovata = true;
  }
}

if (mailTrovata == true) {
  console.log("email corretta");
} else {
  console.log("email errata");
}
