//Genero un numero casuale per l'utente

const userRandom = Math.floor(Math.random() * 6) + 1;
console.log(userRandom);

//Genero un numero casuale per il pc
const pcRandom = Math.floor(Math.random() * 6) + 1;
console.log(pcRandom);

//Stabilisco il vincitore di chi fa il numero più alto
if (userRandom > pcRandom) {
  alert("Hai Vinto!!!");
} else if (userRandom == pcRandom) {
  alert("Pareggio");
} else {
  alert("Hai Perso!!!");
}
