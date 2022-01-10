// variables

turnTracker = 1;
let squaresClicked = [];
let squaresClickedByPlayer1 = [];
let squaresClickedByPlayer2 = [];
let player1wins = 0;
let player2wins = 0;
let currentPlayer = 'Player1'

$( document ).ready(function() {
    console.log( "document ready!" );

    const findOutPlayer = function () {
        if (turnTracker % 2 !== 0) {
            currentPlayer = 'Player1'
            return currentPlayer;
        } else {
            currentPlayer = 'Player2'
            return currentPlayer;
        }
    } // end of findOutPlayer

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

    const checkIfWon = function (player) {

        if (player === 'Player1') {

            if 
            ((squaresClickedByPlayer1.includes('square1') && squaresClickedByPlayer1.includes('square2') && squaresClickedByPlayer1.includes('square3')) 
            || (squaresClickedByPlayer1.includes('square1') && squaresClickedByPlayer1.includes('square4') && squaresClickedByPlayer1.includes('square7'))
            || (squaresClickedByPlayer1.includes('square1') && squaresClickedByPlayer1.includes('square5') && squaresClickedByPlayer1.includes('square9'))
            || (squaresClickedByPlayer1.includes('square2') && squaresClickedByPlayer1.includes('square5') && squaresClickedByPlayer1.includes('square8'))
            || (squaresClickedByPlayer1.includes('square3') && squaresClickedByPlayer1.includes('square5') && squaresClickedByPlayer1.includes('square7'))
            || (squaresClickedByPlayer1.includes('square3') && squaresClickedByPlayer1.includes('square6') && squaresClickedByPlayer1.includes('square9'))
            || (squaresClickedByPlayer1.includes('square4') && squaresClickedByPlayer1.includes('square5') && squaresClickedByPlayer1.includes('square6'))
            || (squaresClickedByPlayer1.includes('square7') && squaresClickedByPlayer1.includes('square8') && squaresClickedByPlayer1.includes('square9'))
            ) {
                console.log('You win')
            }

        } else {

            if ((squaresClickedByPlayer2.includes('square1') && squaresClickedByPlayer2.includes('square2') && squaresClickedByPlayer2.includes('square3')) 
            || (squaresClickedByPlayer2.includes('square1') && squaresClickedByPlayer2.includes('square4') && squaresClickedByPlayer2.includes('square7'))
            || (squaresClickedByPlayer2.includes('square1') && squaresClickedByPlayer2.includes('square5') && squaresClickedByPlayer2.includes('square9'))
            || (squaresClickedByPlayer2.includes('square2') && squaresClickedByPlayer2.includes('square5') && squaresClickedByPlayer2.includes('square8'))
            || (squaresClickedByPlayer2.includes('square3') && squaresClickedByPlayer2.includes('square5') && squaresClickedByPlayer2.includes('square7'))
            || (squaresClickedByPlayer2.includes('square3') && squaresClickedByPlayer2.includes('square6') && squaresClickedByPlayer2.includes('square9'))
            || (squaresClickedByPlayer2.includes('square4') && squaresClickedByPlayer2.includes('square5') && squaresClickedByPlayer2.includes('square6'))
            || (squaresClickedByPlayer2.includes('square7') && squaresClickedByPlayer2.includes('square8') && squaresClickedByPlayer2.includes('square9'))
            ) {

                console.log('You win')

            }
        }
    }; // checkIfWon()

    $('.boardSquare').on('click', function () {

        $square = $(this)
        idOfSquare = $(this).attr('id');


        const putInSymbol = function () {
            if (currentPlayer === 'Player1') {
                $square.css({'backgroundImage': 'url(images/x.png)'})
            }
            else {
                $square.css({'backgroundImage': 'url(images/o.png)'})
            }
        }

        if ((squaresClicked.includes(idOfSquare) === false)) {
            findOutPlayer()
            turnTracker++
            putInSymbol(idOfSquare);
            isClicked(idOfSquare)
            checkIfWon(currentPlayer)
        } else {
            console.log('Already clicked this square!')
        }
    });

    const resetBoard = function () {
        squaresClicked = [];
        squaresClickedByPlayer1 = [];
        squaresClickedByPlayer2 = [];
        currentPlayer = 'Player1';
        turnTracker = 1;
        $('.boardSquare').css({ 'backgroundImage': 'none' })
    } // resetBoard

    const startOver = function () {
        window. location. reload()
    } // resetBoard

    $('input#reset').on('click', function () {
        resetBoard()
    })

    $('input#startOver').on('click', function () {
        startOver()
    })
        
}); // document.ready()