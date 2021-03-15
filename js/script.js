// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente(100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


function numberRnd(min, max) {

    var value = Math.floor(Math.random() * (max - min) + min); //max e min sono inclusi
    return value;

};

function livelloZero() {

    var arrLoserNumbers = [];

    while (arrLoserNumbers.length < 16) {

        var loserNumber = numberRnd(1, 99);

        if (arrLoserNumbers.indexOf(loserNumber) === -1) {

            arrLoserNumbers.push(loserNumber);
        }

        arrLoserNumbers.sort(function (a, b) {
            return a - b;
        });
    }

    console.log(arrLoserNumbers);

    var arrPlayerNumbers = [];
    var arrLoser = [];
    var score = 0;
    var titolo = document.getElementById('titolo');
    var sottoTitolo = document.getElementById('accadue');
    var sottoTitolo1 = document.getElementById('accatre');

    for (var i = 0; i < (100 - 16); i++) {

        var playerNumber = parseInt(prompt('Ineserisci un numero'));

        if ((arrPlayerNumbers.indexOf(playerNumber) === -1) && (!arrLoserNumbers.includes(playerNumber)) && ((playerNumber > 0) && (playerNumber < 100))) {

            arrPlayerNumbers.push(playerNumber);
            score += 1;
            titolo.innerHTML = 'Il tuo punteggio: ' + score;
            sottoTitolo.innerHTML = 'I tuoi numeri: ' + arrPlayerNumbers;

            if (score == (100 - 16)) {

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
    }

};

function livelloUno() {

    var arrLoserNumbers = [];

    while (arrLoserNumbers.length < 16) {

        var loserNumber = numberRnd(1, 79);

        if (arrLoserNumbers.indexOf(loserNumber) === -1) {

            arrLoserNumbers.push(loserNumber);
        }

        arrLoserNumbers.sort(function (a, b) {
            return a - b;
        });
    }

    console.log(arrLoserNumbers);

    var arrPlayerNumbers = [];
    var arrLoser = [];
    var score = 0;
    var titolo = document.getElementById('titolo');
    var sottoTitolo = document.getElementById('accadue');
    var sottoTitolo1 = document.getElementById('accatre');

    for (var i = 0; i < (80 - 16); i++) {

        var playerNumber = parseInt(prompt('Ineserisci un numero'));

        if ((arrPlayerNumbers.indexOf(playerNumber) === -1) && (!arrLoserNumbers.includes(playerNumber)) && ((playerNumber > 0) && (playerNumber < 80))) {

            arrPlayerNumbers.push(playerNumber);
            score += 1;
            titolo.innerHTML = 'Il tuo punteggio: ' + score;
            sottoTitolo.innerHTML = 'I tuoi numeri: ' + arrPlayerNumbers;

            if (score == (80 - 16)) {

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
    }

};

function livelloDue() {

    var arrLoserNumbers = [];

    while (arrLoserNumbers.length < 16) {

        var loserNumber = numberRnd(1, 49);

        if (arrLoserNumbers.indexOf(loserNumber) === -1) {

            arrLoserNumbers.push(loserNumber);
        }

        arrLoserNumbers.sort(function (a, b) {
            return a - b;
        });
    }

    console.log(arrLoserNumbers);

    var arrPlayerNumbers = [];
    var arrLoser = [];
    var score = 0;
    var titolo = document.getElementById('titolo');
    var sottoTitolo = document.getElementById('accadue');
    var sottoTitolo1 = document.getElementById('accatre');

    for (var i = 0; i < (50 - 16); i++) {

        var playerNumber = parseInt(prompt('Ineserisci un numero'));

        if ((arrPlayerNumbers.indexOf(playerNumber) === -1) && (!arrLoserNumbers.includes(playerNumber)) && ((playerNumber > 0) && (playerNumber < 50))) {

            arrPlayerNumbers.push(playerNumber);
            score += 1;
            titolo.innerHTML = 'Il tuo punteggio: ' + score;
            sottoTitolo.innerHTML = 'I tuoi numeri: ' + arrPlayerNumbers;

            if (score == (50 - 16)) {

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
    }

};


function gioco() {

    alert('VOGLIO FARE UN GIOCO CON TE...');

    var level = parseInt(prompt('Scegli un livello da 0 a 2'));

    if (level == 0) {
        alert('LIVELLO 0: scegli numeri tra 0 e 100 (esclusi)');
        livelloUno();
    } else if (level == 1) {
        alert('LIVELLO 1: scegli numeri tra 0 e 80 (esclusi)');
        livelloUno();
    } else if (level == 2) {
        alert('LIVELLO 2: scegli numeri tra 0 e 50 (esclusi)');
        livelloDue();
    } else {
        alert('Si vabbè gioca da solo allora dai...fai tu, sentiti libero');
    }

};

//gioco();

