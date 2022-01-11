// variables
turnTracker = 1;
let squaresClicked = [];
let squaresClickedByPlayer1 = [];
let squaresClickedByPlayer2 = [];
let player1wins = 0;
let player2wins = 0;
let currentPlayer = 'Player1'
let player1name = ''
let player1dobStringArray = []
let player1dob = []
let player1starSign = ''
let player1Image = ''
let player2name = ''
let player2dobStringArray = []
let player2dob = []
let player2starSign = ''
let player2Image = ''
let whoseturn = 1

$( document ).ready(function() {
    console.log( "document ready!" );

    // this is just the Initial Fade In of the title and then the name form
    const $gameWelcome = function () {
        $('#charCreationTitle').fadeIn(2000).fadeOut(1000)
        $('#nameDiv').delay(3500).fadeIn(1000)
    }; // end of $gameWelcome()

    $gameWelcome()

    // This is when the Tic-Tac-Zodiac NAME FORM shows up. It is asking for the players name before they enter their DOB.

    // FIXME: THIS HAS NOW BEEN PREPPED FOR PLAYER 2

    $('#nameSubmit').on('click', function () {

        // whoseturn simply finds out if this is player 1 or player 2 entering their name by working out how many times this tracker has ticked up (or at all)
        if (whoseturn === 1) {
            player1name = $(this).prev().val()
            sayHelloToName('player1')
            whoseturn++
        } else if (whoseturn === 2) {
            player2name = $(this).prev().val()
            sayHelloToName('player2')
        }
    }); // end of nameSubmit onClick

    // This is when the player has entered their name! It will now fade out the form and show them a message saying 'Hello, NAME' and ask for their DOB.
    // FIXME: This has been prepped for player 2
    const sayHelloToName = function (player) {

        // fade out the name form
        $('#nameDiv').fadeOut(1000)

        // it will now say hi to whichever play it is

        if (player === 'player1') {
            $('h1.logoSelectionWelcome').html(`Hello ${player1name}`)
        } else if (player === 'player2') {
            $('h1.logoSelectionWelcome').html(`Hello ${player2name}`)
        }

        $('#chooseLogo').delay(1500).fadeIn(2000)
    }; // end of sayHelloToName()

    // This is the form that turns up asking players for their DOB. It is going to set the players DOB as a string and begin the next few functions
    // FIXME: This is being prepped for player 2 
    // TODO: Need to come back to this to do whichZodiacSign() for p2

    $('#dobSubmit').on('click', function (eventObject) {
        let dob = $(this).prev().val()
        
        if (whoseturn === 1) {
            player1dobStringArray = dob.split('-')
            playerDOBFunction('player1')
            whichZodiacSign('player1')
        } else if (whoseturn === 2) {
            player2dobStringArray = dob.split('-')
            playerDOBFunction('player2')
            whichZodiacSign('player2')
        }

    }); // end of dobSubmit onClick

    // this function really only turns their DOB string array in to an actual numbered array for later use. This is a helper function.
    const playerDOBFunction = function(player) {

        if (player === 'player1') {
            player1dob = player1dobStringArray.map(Number)
        } else if (player === 'player2') {
            player2dob = player2dobStringArray.map(Number)
        }
        
    }; // end of playerDOBFunction

    const whichZodiacSign = function () {

        let month = player1dob[1]
        let day = player1dob[2]

        const applyImage = function () {
            player1Image = `images/zodiac-symbols/${player1starSign}.png`
            console.log(player1Image)
        }
        
        //Capricorn
        if ((month === 12 && day >= 22) || (month === 01 && day <= 19)) {
            player1starSign = 'Capricorn'
        } 

        // Aquarius
        else if ((month === 01 && day >= 20) || (month === 02 && day <= 18)) {
            player1starSign = 'Aquarius'
        } 

        // Pisces
        else if ((month === 02 && day >= 19) || (month === 03 && day <= 20)) {
            player1starSign = 'Pisces'
        } 

        // Aries
        else if ((month === 03 && day >= 21) || (month === 04 && day <= 19)) {
            player1starSign = 'Aries'
        } 

        // Taurus
        else if ((month === 04 && day >= 20) || (month === 05 && day <= 20)) {
            player1starSign = 'Taurus'
        } 

        // Gemini
        else if ((month === 05 && day >= 21) || (month === 06 && day <= 21)) {
            player1starSign = 'Gemini'
        } 

        // Cancer - done
        else if ((month === 06 && day >= 22) || (month === 07 && day <= 22)) {
            player1starSign = 'Cancer'
        } 
        
        // Leo
        else if ((month === 07 && day >= 23) || (month === 08 && day <= 22)) {
            player1starSign = 'Leo'
        } 
        
        // Virgo
        else if ((month === 08 && day >= 23) || (month === 09 && day <= 22)) {
            player1starSign = 'Virgo'
        } 
        
        // Libra
        else if ((month === 09 && day >= 23) || (month === 10 && day <= 23)) {
            player1starSign = 'Libra'
        } 
        
        // Scorpius
        else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
            player1starSign = 'Scorpius'
        } 
        
        // Sagittarius
        else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
            console.log('You are Sagittarius!')
        }         

        applyImage()

    }; // end of whichZodiacSign()

    const showBoard = function () {
        $('.tictactoeBoard').fadeIn(3000).css({
            'display': 'grid',
        })
    }

    const endOfCharCreation = function () {
        $('#charCreation').fadeOut(2000)
        $('#gameBoard').delay(2000).fadeIn(2000)
        showBoard()
    }

    const showWinnerAnnouncement = function () {
        $('.fixedContainer').toggle()
    }

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

    const disableBoardClicks = function () {
        $('.boardSquare').css({'pointer-events': 'none'})
    } // end of disableBoardClicks()

    const enableBoardClicks = function () {
        $('.boardSquare').css({'pointer-events': 'all'})
    } // end of disableBoardClicks()

    const resetBoard = function () {
        squaresClicked = [];
        squaresClickedByPlayer1 = [];
        squaresClickedByPlayer2 = [];
        currentPlayer = 'Player1';
        turnTracker = 1;
        $('.boardSquare').css({ 'backgroundImage': 'none' })
        showWinnerAnnouncement()
    } // end of resetBoard()

    const startOver = function () {
        window. location. reload()
    } // end of startOver()

    const showPlayAgainButton = function () {
        $('input#nextGame').fadeIn().css({
            'display': 'block',
        })
    }

    const hidePlayAgainButton = function () {
        $('input#nextGame').fadeOut()
    }

    const announceWinner = function (h3node, winner, wins) {

        const showWinner = function (h3node, winner, wins) {

            $(`h3#${h3node}`).html(`Score: ${wins}`)

            let $winnerMessage = $('<h3 id="winner-message">')
            $winnerMessage.html(`${winner} wins this game!`)
            $('div#winnerAnnouncement').prepend($winnerMessage)
            
        }

        showWinnerAnnouncement()
        showWinner(h3node, winner, wins)
        showPlayAgainButton()
    }

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
            ) 
            
            {

                player1wins++
                disableBoardClicks()
                announceWinner('player1score', 'Player 1', player1wins)

            } 
            
            // TODO: Do cat animation and call it a cats game
            else if (squaresClicked.length === 9) {
                let $drawMessage = $('<h3 id="winner-message">')
                $drawMessage.html("It's a draw!")
                $('div#winnerAnnouncement').prepend($drawMessage)
                showPlayAgainButton()
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

                player2wins++
                disableBoardClicks()
                announceWinner('player2score', 'Player 2', player2wins)
                showPlayAgainButton()
            } 
            
            // TODO: Do cat animation and call it a cats game
            else if (squaresClicked.length === 9) {
                let $drawMessage = $('<h3 id="winner-message">')
                $drawMessage.html("It's a draw!")
                $('div#winnerAnnouncement').prepend($drawMessage)
            }
        }
    }; // end of checkIfWon()

    $('.boardSquare').on('click', function () {

        $square = $(this)
        idOfSquare = $(this).attr('id');
        console.log($square)


        const putInSymbol = function () {
            if (currentPlayer === 'Player1') {
                $square.css("background-image", "url(" + player1Image + ")");
            }

            // TODO: Get date from second player and choose image
            else {
                $square.css("background-image", "url(" + player1Image + ")");
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

    $('input#startOver').on('click', function () {
        startOver()
    })

    $('input#nextGame').on('click', function () {
        resetBoard()
        hidePlayAgainButton()
        enableBoardClicks()
        $('h3#winner-message').remove()
    })
        
}); // document.ready()

// next actions

// Allow players to customize their tokens (X, O, name, picture, etc)

// do custom pictures

// create a separate page where someone writes their name, chooses their player piece
// (choose from 4 standard)
// upload your own image & use

// Get inventive with your styling, e.g. use hover effects or animations to spiff things up

// 

// inspo boards

// https://g.co/kgs/Znz3Z8