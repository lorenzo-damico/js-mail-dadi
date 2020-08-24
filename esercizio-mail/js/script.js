// 1. Definisco una lista di accesso con un array
var lista = ["indirizzo1@gmail.com", "indirizzo2@gmail.com", "indirizzo3@gmail.com"];
console.log(lista);

// 2. Chiedo all'utente di inserire il suo indirizzo e-mail
var mailUtente = prompt("Inserisci il tuo indirizzo e-mail");
console.log(mailUtente);

// 3. Controllo che l'indirizzo dell'utente sia nella lista di accesso
for (var i = 0; i < lista.length; i++) {

  if (mailUtente == lista[i]) {
    console.log("Accesso consentito");
  } else {
    console.log("Accesso negato");
  }

}
