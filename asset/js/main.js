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

let bottone_1 = document.getElementById('genera');

bottone_1.addEventListener('click',
    
    function genera() {
        
        onClick.classList.toggle('display_block');

        let nomeUtente = String(document.getElementById('nomeCognome'));
        console.log(typeof(nomeUtente));
        document.getElementById('nomePasseggero').innerHTML = `${nomeUtente}`;

        let kilometri = Number(document.getElementById('kilometri'));
        console.log(typeof(kilometri));

        let tariffaAlKm = 0.21;

        let prezzoTicket = (kilometri * tariffaAlKm);
        console.log(prezzoTicket);

        let fasciaEtà = document.getElementById('fasciaEtà');

        let minorenne = Number(document.getElementById('minorenne'));
        console.log(typeof(minorenne));

        let scontoMinorenne = document.getElementById('scontoMinorenne');

        let maggiorenne = document.getElementById('maggiorenne');
        document.getElementById('costoMaggiorenne').innerHTML = `${prezzoTicket}`;
        
        let over_65 = document.getElementById('over_65');

        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 12) + 1;

        document.getElementById("codice").innerHTML = Math.floor(Math.random() * 100000) + 1;

        if (fasciaEtà == minorenne) {

            document.getElementById('costoMinorenne').innerHTML = `${prezzoTicket - ((prezzoTicket / 100) * 20)}`;
            document.getElementById('scontoMinorenne').innerHTML = `Sconto Minorenne`;
           

        } else if (fasciaEtà == over_65) {
            
            document.getElementById('costoOver_65').innerHTML = `${prezzoTicket - ((prezzoTicket / 100) * 40)}`;
            document.getElementById('scontoOver65').innerHTML = `Sconto Over 65`;
        
        } else {
            
            document.getElementById('costoMaggiorenne').innerHTML = `${prezzoTicket}`;
            document.getElementById('bigliettoStandard').innerHTML = `Biglietto Standard`;

        }
    }
)

let bottone_2 = document.getElementById('annulla');

bottone_2.addEventListener('click',

    function () {
    
        onClick.classList.toggle('display_none');

    }

);

