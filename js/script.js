// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente(100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


function numberRnd(min, max) {

    var value = Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
    return value;
};

function gioco() {

    alert('VOGLIO FARE UN GIOCO CON TE...');

    var level = parseInt(prompt('Scegli un livello tra 0, 1 e 2'));
    var maxRnd;

    switch (level) {
        case 0:
            maxRnd = 100;
            break;

        case 1:
            maxRnd = 80;
            break;

        case 2:
            maxRnd = 50;
            break;      
    }

    var arrLoserNumbers = [];

    while (arrLoserNumbers.length < 16) {

        var loserNumber = numberRnd(1, maxRnd);

        if (arrLoserNumbers.indexOf(loserNumber) === -1) {

            arrLoserNumbers.push(loserNumber);
        }

        arrLoserNumbers.sort(function (a, b) {
            return a - b;
        });
    }

    console.log(arrLoserNumbers);

    var maxRnd;
    var arrPlayerNumbers = [];
    var arrLoser = [];
    var score = 0;
    var titolo = document.getElementById('titolo');
    var sottoTitolo = document.getElementById('accadue');
    var sottoTitolo1 = document.getElementById('accatre');

    for (var i = 0; i < (maxRnd - 16); i++) {

        var playerNumber = parseInt(prompt('Ineserisci un numero'));

        if ((arrPlayerNumbers.indexOf(playerNumber) === -1) && (arrLoserNumbers.indexOf(playerNumber) === -1) && ((playerNumber > 0) && (playerNumber < maxRnd))) {  //condizioni: playerNumber non ripetuto, playerNumber non contenuto in arrLoserNumber, compreso tra 0 e 100 valori esclusi


            arrPlayerNumbers.push(playerNumber);
            score += 1;
            titolo.innerHTML = 'Il tuo punteggio: ' + score;
            sottoTitolo.innerHTML = 'I tuoi numeri: ' + arrPlayerNumbers;

            if (score == (maxRnd - 16)) {

                alert('COMPLIMENTI, HAI FINITO IL GIOCO!!!');
                titolo.innerHTML = 'GIOCO COMPLETATO!';
            }

        } else {

            arrLoser.push(playerNumber);
            alert('Hai perso!!! muhahahaha');
            titolo.innerHTML = 'Hai totalizzato ' + score + ' punti';
            sottoTitolo1.innerHTML = 'Numero perdente: ' + arrLoser;
            break;
        }
    } //chiusura for
};

var startBtn = document.getElementById('start');
startBtn.addEventListener('click', gioco);

//gioco();

