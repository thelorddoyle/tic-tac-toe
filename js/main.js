$( document ).ready(function() {
    console.log( "document ready!" );

    turnTracker = 1;

    $('.boardSquare').on('click', function () {

        isClicked = $(this).data('status')

        if (isClicked === 'unclicked') {

            if (turnTracker % 2 !== 0) {
                idOfSquare = $(this).attr('id');
                const $entry = $('<p>');
                $entry.text('x');
                $(this).append($entry);
                turnTracker++
                $(this).data('status', 'clicked')
                $(this).data('clickedby', 'player1')
                console.log($(this).data('clickedby'))
                checkIfWon('player1')
            }
            else {
                idOfSquare = $(this).attr('id');
                const $entry = $('<p>');
                $entry.text('o');
                $(this).append($entry);
                turnTracker++
                $(this).data('status', 'clicked')
                $(this).data('clickedby', 'player2')
                console.log($(this).data('clickedby'))
                checkIfWon('player2')
            };
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