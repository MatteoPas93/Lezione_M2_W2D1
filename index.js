//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let primoNumero = 10
let secondoNumero = 7

if(primoNumero > secondoNumero) {
    console.log(primoNumero, "è maggiore di", secondoNumero)
} else if (primoNumero < secondoNumero) {
    console.log(primoNumero, "è minore di", secondoNumero)
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = 4

if (num <5) {
    console.log("Tiny")

} else if (num <10) {
    console.log("Small")

} else if (num <15) {
    console.log("Medium")

} else if (num <20) {
    console.log("Large")

} else if (num >=20) {
    console.log("Huge")

}






//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let i = 0 ; i <= 10 ; i++) {
    if (i === 3  ||  i === 8) {
      continue }
console.log(i)
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let n = 0 ; n <= 15 ; n++) {
    if (n % 2 === 0) {
        console.log(n +  " Questo numero è pari")
    } else {
        console.log(n +  " Questo numero è dispari")
    }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeroUno = 20
let numeroDue = 12

console.log(" Attraverso l'utilizzo di if/else, andremo a stampare solamente la risposta corretta.\n In questo caso numeroUno(20) - numeroDue(12) = 8.")


if(numeroUno === 8) {
    console.log("numeroUno è 8")
} else if (numeroDue === 8) {
    console.log("numeroDue è 8")
} else if (numeroDue + numeroUno === 8) {
    console.log("numeroDue + numeroUno è 8")
} else if (numeroUno - numeroDue === 8) {
    console.log("numeroUno - numeroDue è 8")
}




/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 60

let spedizione = 10

console.log ( " Se il saldo è maggiore di 50, il valore applicato \n sarà solo quello presente nella variabile totalShoppingCart. \n Altrimenti verrà aggiunto il valore della variabile spedizione. In questo caso \n sarà stampato solo il valore di totalShoppimngCart.") 

if (totalShoppingCart >50 ) {
   console.log(totalShoppingCart)
} else if (totalShoppingCart <=50 ) {
  console.log(totalShoppingCart + spedizione)
}





/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sconto = ((totalShoppingCart / 100) *20)
let totale = totalShoppingCart - sconto

console.log (" In questo caso il saldo, applicato lo sconto, è minore di 50. \n Al saldo totale viene quindi aggiunto il costo della spedizione.")

if (totale <50) {
  console.log(totale + spedizione)
} else if (totale >50) {
  console.log(totale)
}


/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let isMale = true

let gender = isMale ? "gender is male" : "gender is female"

console.log(gender)






/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let c = 1 ; c <= 100 ; c++) {
     
  if (c % 3 === 0 && c % 5 === 0) {
    console.log("FizzBuzz")
  } 
  else if (c % 3 === 0 ) {
    console.log("Fizz")
  }
  else if (c % 5 === 0 ) {
    console.log("Buzz")
  }
   else {
    console.log(c)
  }
                                 
}

     
