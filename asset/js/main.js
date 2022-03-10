/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
  1) prompt per chiedere i chilometri da percorrere in (numero) esempio: 10
    1.5) convertire la stringa in numero formula number() o parseInt()
  2) prompt per chiedere l'età del passeggero in (numero)
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
  3) Calcolare i km richiesti per 0.21
va applicato uno sconto del 20% per i minorenni
  4) condizione if per sapere se è minorenne e applicare nel caso true 20% di sconto
va applicato uno sconto del 40% per gli over 65.
  5) condizione if per sapere se è over 65 e applicare nel caso true 40% di sconto
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
  6) i risultati dovranno avere max 2 decimali (formula da cercare)
*/

let bottone_1 = document.getElementById('genera');

bottone_1.addEventListener('click',
    
    function genera() {
    
        let nomeUtente = String(document.getElementById('nomeCognome'));
        console.log(typeof(nomeUtente));
        document.getElementById('nomePasseggero').innerHTML = `${nomeUtente}`;

        let kilometri = Number(document.getElementById('kilometri'));
        console.log(typeof(kilometri));

        let tariffaAlKm = Number(0.21);

        let prezzoTicket = Number(kilometri * tariffaAlKm);
        console.log(prezzoTicket)

        let fasciaEtà = document.getElementById('fasciaEtà');

        let minorenne = (document.getElementById('minorenne'));
        console.log(typeof(minorenne));

        let maggiorenne = document.getElementById('maggiorenne');
        
        let over_65 = document.getElementById('over_65');

        if (fasciaEtà = minorenne) {

           
            document.getElementById('costoMinorenne').innerHTML = `${prezzoTicket - ((prezzoTicket / 100) * 20)}`;
        }
    }
)

