// CREO UNA LISTA DI MAIL

//* array
const mails = [
  "mail1@gmail.com",
  "mail2@gmail.com",
  "mail3@gmail.com",
  "mail4@gmail.com",
  "mail5@gmail.com",
];
//console.log(mails);

// CHIEDO ALL'UTENTE LA SUA MAIL

//* prompt
const userMail = prompt("inserisci la tua mail");
//console.log(userMail);

// CREO DELLE LIMITAZIONI ALL'UTENTE SULL'INSERIMENTO DELLA MAIL

// CONTROLLO CHE LA SUA MAIL SIA NELLA LISTA

let validMail = false;
console.log("Mail non valida");

//* for
for (let i = 0; i < mails.length; i++) {
  console.log(mails[i]);
  //* se è valida
  if (mails[i] == userMail) {
    vMail = true;
    console.log("Mail valida");
  }
}

// STAMPO UN MESSAGGIO DELL'ESITO
if (vMail == true) {
  alert("Mail valida");
}
if (vMail == false) {
  alert("Mail non valida");
}

console.log(vMail);
