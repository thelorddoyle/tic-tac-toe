turnTracker = 1;
let squaresClicked = []
let squaresClickedByPlayer1 = []
let squaresClickedByPlayer2 = []
let currentPlayer = 'Player1'

$( document ).ready(function() {
    console.log( "document ready!" );

    // also inside Dom Function. simply finds out whose turn it is.
    const findOutPlayer = function () {
        if (turnTracker % 2 !== 0) {
            currentPlayer = 'Player1'
            return currentPlayer;
        } else {
            currentPlayer = 'Player2'
            return currentPlayer;
        }
    } // end of findOutPlayer

    // this function is inside the dom ready. it is simply taking the square id and passing it in to an overall list of squares 'owned' by the player
    const isClicked = function(squareNumber) {
        squaresClicked.push(squareNumber);
        if (currentPlayer === 'Player1') {
            squaresClickedByPlayer1.push(squareNumber)
            console.log('clicked by player 1: ', squaresClickedByPlayer1)
        } else {
            squaresClickedByPlayer2.push(squareNumber)
            console.log('clicked by player 2: ', squaresClickedByPlayer2)
        }

    } // end of isClicked

    $('.boardSquare').on('click', function () {

        $square = $(this)
        idOfSquare = $(this).attr('id');

        const putInSymbol = function (squareToChange) {
            if (currentPlayer === 'Player1') {
                $square.css({'backgroundImage': 'url(images/x.png)'})
            }
            else {
                $square.css({'backgroundImage': 'url(images/o.png)'})
            }
        }

        if ((squaresClicked.includes(idOfSquare) === false)) {
            turnTracker++
            putInSymbol(idOfSquare);
            isClicked(idOfSquare)
            checkIfWon(findOutPlayer())
        } else {
            console.log('Already clicked this square!')
        }
    });

    const checkIfWon = function (player) {
        if ($('#square1').data('clickedby') === player && $('#square2').data('clickedby') === player && $('#square3').data('clickedby') === player) {  
            console.log('You win')
        } else if ($('#square1').data('clickedby') === player && $('#square4').data('clickedby') === player && $('#square7').data('clickedby') === player) {
            console.log('You win')
        } else if ($('#square1').data('clickedby') === player && $('#square5').data('clickedby') === player && $('#square9').data('clickedby') === player) {
            console.log('You win')
        } else if ($('#square2').data('clickedby') === player && $('#square5').data('clickedby') === player && $('#square8').data('clickedby') === player) {
            console.log('You win')
        } else if ($('#square3').data('clickedby') === player && $('#square5').data('clickedby') === player && $('#square7').data('clickedby') === player) {
            console.log('You win')
        } else if ($('#square3').data('clickedby') === player && $('#square6').data('clickedby') === player && $('#square9').data('clickedby') === player) {
            console.log('You win')
        } else if ($('#square4').data('clickedby') === player && $('#square5').data('clickedby') === player && $('#square6').data('clickedby') === player) {
            console.log('You win')
        } else if ($('#square7').data('clickedby') === player && $('#square8').data('clickedby') === player && $('#square9').data('clickedby') === player) {
            console.log('You win')
        }
    }

});