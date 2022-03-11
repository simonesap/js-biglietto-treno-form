/*
Il programma dovrà chiedere all'utente il nome e il numero di chilometri che vuole percorrere..
  1) Chiedere i chilometri da percorrere in (numero) esempio: 10
    1.5) convertire la stringa in numero formula number() o parseInt()
  il prezzo del biglietto è definito in base ai km (0.21 € al km)
  2) Calcolare i km richiesti per 0.21
Sulla base di queste informazioni si dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
va applicato uno sconto del 20% per i minorenni
  3) condizione if per sapere se è minorenne e applicare nel caso true 20% di sconto
va applicato uno sconto del 40% per gli over 65.
  4) condizione if per sapere se è over 65 e applicare nel caso true 40% di sconto
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
  5) i risultati dovranno avere max 2 decimali (formula da cercare)
*/


//Selezionare i campi del DOM
let nome = document.getElementById('nome');
console.log('nome');

let km = document.getElementById('km');
console.log('km');

let fasciaEta = document.getElementById('eta');
console.log('eta');

let bottoneGenera = document.getElementById('btnGenera');
let bottoneAnnulla = document.getElementById('btnAnnulla');

let tableDati = document.getElementById('onClick');

let nomePasseggero = document.getElementById('nomePasseggero');
console.log('nomePasseggero');

let sconto = document.getElementById('sconto');

let prezzoTicket = document.getElementById('prezzoTabella');

let numeroRandom = Math.floor(Math.random() *99999);
console.log(numeroRandom)

let numeroRandomCarrozza = Math.floor(Math.random() * 9 +1);

let carrozza = document.getElementById('numCarrozza');

let codCP = document.getElementById('codiceCP');

//LOGICA

bottoneGenera.addEventListener('click',
  function() {
    //Recuperare i dati dagli input
    console.log(nome.value, km.value, fasciaEta.value);

    //Stampare i dati nella tabella
      //Selezionato l'elemento dove scrivere il value ottenuto
      //Scrittura dentro il tag HTML selezionato
      //Abbinare il valore corretto
    nomePasseggero.innerHTML = nome.value;

    // sconto.innerHTML = '20$'
    if (fasciaEta.value == 'minorenne') {
      sconto.innerHTML = 'Sconto del : 20%';
      prezzoTicket.innerHTML = `${((km.value * 0.21) * 0.80).toFixed(2)}&euro;`;
    } else if (fasciaEta.value == 'maggiorenne') {
      sconto.innerHTML = 'Nessuno sconto';
      prezzoTicket.innerHTML = `${(km.value * 0.21).toFixed(2)}&euro;`;
    } else (fasciaEta.value == 'over-65'); {
      sconto.innerHTML = 'Sconto del : 40%';
      prezzoTicket.innerHTML = `${((km.value * 0.21) * 0.60).toFixed(2)}&euro;`;
    }

    codCP.innerHTML = numeroRandom;

    carrozza.innerHTML = numeroRandomCarrozza;


    //Mostrare la tabella
    tableDati.classList.remove('d-none')
  }
)

bottoneAnnulla.addEventListener('click',
    function() {
        tableDati.classList.add('d-none');
    } 

)