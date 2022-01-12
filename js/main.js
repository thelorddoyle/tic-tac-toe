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
let draws = 0
let gamesPlayed = 0

$( document ).ready(function() {
    console.log( "document ready!" );

    // this is just the Initial Fade In of the title and then the name form
    const $gameWelcome = function () {
        $('#charCreationTitle').fadeIn(1000).fadeOut(500)
        $('#nameDiv').delay(1750).fadeIn(500)
    }; // end of $gameWelcome()

    // TODO: Turn this on to remake game correctly
    // $gameWelcome()

    // This is when the Tic-Tac-Zodiac NAME FORM shows up. It is asking for the players name before they enter their DOB.
    $('#nameSubmit').on('click', function () {

        // whoseturn simply finds out if this is player 1 or player 2 entering their name by working out how many times this tracker has ticked up (or at all)
        $('input#dobInput').val('')
        if (whoseturn === 1) {
            player1name = $(this).prev().val()
            sayHelloToName('player1')
        } else if (whoseturn === 2) {
            player2name = $(this).prev().val()
            sayHelloToName('player2')
        }
    }); // end of nameSubmit onClick

    // This is when the player has entered their name! It will now fade out the form and show them a message saying 'Hello, NAME' and ask for their DOB.
    const sayHelloToName = function (player) {

        // fade out the name form
        $('#nameDiv').fadeOut(500)

        // it will now say hi to whichever play it is

        if (player === 'player1') {
            $('h1.logoSelectionWelcome').html(`Hello ${player1name}`)
        } else if (player === 'player2') {
            $('h1.logoSelectionWelcome').html(`Hello ${player2name}`)
        }

        $('#chooseLogo').delay(750).fadeIn(1000)
    }; // end of sayHelloToName()

    // This is the form that turns up asking players for their DOB. It is going to set the players DOB as a string and begin the next few functions
    $('#dobSubmit').on('click', function (eventObject) {
        let dob = $(this).prev().val()
        
        if (whoseturn === 1) {
            player1dobStringArray = dob.split('-')
            playerDOBFunction('player1')
            whichZodiacSign('player1')
            $('#player1logo').attr('src', `${player1Image}`)
            whoseturn++
            player2Welcome()
        } else if (whoseturn === 2) {
            player2dobStringArray = dob.split('-')
            playerDOBFunction('player2')
            whichZodiacSign('player2')
            $('#player2logo').attr('src', `${player2Image}`)
            endOfCharCreation()
        }

    }); // end of dobSubmit onClick

    // this is just the Initial Fade In of the title and then the name form
    const player2Welcome = function () {
        $('#nameInput').val('')
        $('#howItWorks').css({'display': 'none'})
        $('#chooseLogo').fadeOut(500)
        let label = $('div#nameDiv').children()[1]
        $(label).html('And player 2 - your name is:')
        $('#nameDiv').delay(750).fadeIn(750)
    }; // end of player2Welcome()

    // this function really only turns their DOB string array in to an actual numbered array for later use. This is a helper function.
    const playerDOBFunction = function(player) {

        if (player === 'player1') {
            player1dob = player1dobStringArray.map(Number)
        } else if (player === 'player2') {
            player2dob = player2dobStringArray.map(Number)
        }
        
    }; // end of playerDOBFunction

    // helper function to return Star Sign

    const getSign = function (player) {

        let month;
        let day;

        if (player === 'player1') {
            month = player1dob[1]
            day = player1dob[2]
        } 
        else if (player === 'player2') {
            month = player2dob[1]
            day = player2dob[2]
        }

        //Capricorn
        if ((month === 12 && day >= 22) || (month === 01 && day <= 19)) {
        return 'Capricorn'
        } 

        // Aquarius
        else if ((month === 01 && day >= 20) || (month === 02 && day <= 18)) {
        return 'Aquarius'
        } 

        // Pisces
        else if ((month === 02 && day >= 19) || (month === 03 && day <= 20)) {
        return 'Pisces'
        } 

        // Aries
        else if ((month === 03 && day >= 21) || (month === 04 && day <= 19)) {
        return 'Aries'
        } 

        // Taurus
        else if ((month === 04 && day >= 20) || (month === 05 && day <= 20)) {
        return 'Taurus'
        } 

        // Gemini
        else if ((month === 05 && day >= 21) || (month === 06 && day <= 21)) {
        return 'Gemini'
        } 

        // Cancer - done
        else if ((month === 06 && day >= 22) || (month === 07 && day <= 22)) {
        return 'Cancer'
        } 
        
        // Leo
        else if ((month === 07 && day >= 23) || (month === 08 && day <= 22)) {
        return 'Leo'
        } 
        
        // Virgo
        else if ((month === 08 && day >= 23) || (month === 09 && day <= 22)) {
        return 'Virgo'
        } 
        
        // Libra
        else if ((month === 09 && day >= 23) || (month === 10 && day <= 23)) {
        return 'Libra'
        } 
        
        // Scorpius
        else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        return 'Scorpius'
        } 
        
        // Sagittarius
        else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return 'Sagittarius'
        }       
    }

    // the actual function of assigning the sign to an image and parsing that image as the image the player uses

    const whichZodiacSign = function (player) {

        let signName;
        
        if (player === 'player1') {
            signName = getSign('player1')
        } 
        else if (player === 'player2') {
            signName = getSign('player2')
        }

        const applyImage = function (signName) {
            if (player === 'player1') {
                player1Image = `images/zodiac-symbols/${signName}.png`
                $('#player1score').html(`${player1name}`)
            } else if (player === 'player2') {
                $('#player2score').html(`${player2name}`)
                player2Image = `images/backup-zodiac-symbols/${signName}.png`
            }
            
        }  

        applyImage(signName)

    }; // end of whichZodiacSign()

    const showBoard = function () {
        $('.tictactoeBoard').fadeIn(1500).css({
            'display': 'grid',
        })
    }

    const endOfCharCreation = function () {
        $('#charCreation').fadeOut(1000)
        $('#gameBoard').delay(1000).fadeIn(1000)
        showBoard()
    }

    // TODO: TURN THIS ON TO BYPASS INFO INPUT
    // helper function to bypass entering info
    const bypassInfoEntry = function () {
        player1name = 'Daniel'
        player2name = 'Prabina'
        player2dobStringArray = ['1988', '10', '14']
        player1dobStringArray = ['1989', '04', '18']
        playerDOBFunction('player1')
        whichZodiacSign('player1')
        $('#player1logo').attr('src', `${player1Image}`)
        playerDOBFunction('player2')
        whichZodiacSign('player2')
        $('#player2logo').attr('src', `${player2Image}`)
        endOfCharCreation()
    }

    bypassInfoEntry()

    const showWinnerAnnouncement = function () {
        $('#overlay').toggle()
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

            gamesPlayed++

            if (winner !== 'draw') {
                if (currentPlayer === 'Player1') {
                    $(`h4#${h3node}`).html(`Wins: ${wins}`)
                    let $winnerMessage = $('<h3 id="winner-message">')
                    $winnerMessage.html(`${player1name} wins this game!`)
                    $('div#winnerAnnouncement').prepend($winnerMessage)
                } else {
                    $(`h4#${h3node}`).html(`Wins: ${wins}`)
                    let $winnerMessage = $('<h3 id="winner-message">')
                    $winnerMessage.html(`${player2name} wins this game!`)
                    $('div#winnerAnnouncement').prepend($winnerMessage)
                }
            } else {
                $('.draws').html(`Draws: ${draws}`)
                let $drawMessage = $('<h3 id="winner-message">')
                $drawMessage.html("It's a draw!")
                $('div#winnerAnnouncement').prepend($drawMessage)
            }
            
        }

        showWinnerAnnouncement()
        // announceWinner('player1score', 'Player 1', player1wins)

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
                announceWinner('player1wins', 'Player 1', player1wins)

            } 
            
            // TODO: Do cat animation and call it a cats game
            else if (squaresClicked.length === 9) {

                draws++
                disableBoardClicks()
                announceWinner('','draw','')
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
                announceWinner('player2wins', 'Player 2', player2wins)
                showPlayAgainButton()
            } 
            
            // TODO: Do cat animation and call it a cats game
            else if (squaresClicked.length === 9) {
                draws++
                disableBoardClicks()
                announceWinner('','draw','')
                showPlayAgainButton()
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

            else {
                $square.css("background-image", "url(" + player2Image + ")");
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

        if (gamesPlayed < 3) {
            resetBoard()
            hidePlayAgainButton()
            enableBoardClicks()
            $('h3#winner-message').remove()
        } else {
            resetBoard()
            $('h3#winner-message').remove()
            console.log('Ready for next steps')
        }

    })

    const compatibility = {
        starSigns: {
            aries: {
                aries: {
                    rating: 75,
                    description: "When two Aries come together, it is imperative for at least one of them to have mastered the art of staying calm. If this is achieved by one of them, not through passive aggression but through rational thought, their relationship can be truly rewarding. As two warm and passionate people, they can share many adventurous moments that raise their energy levels sky high. If, however, none of them has this rational, grown-up ability, it is only possible to prolong their relationship based on superficial activities and sex, of course. Since the sign of Aries takes Saturn, the wise ruler of time, patience and responsibility to its detriment, one of these partners will have to learn their lesson and take responsibility for the future of their relationship if they are to last in time."
                },
                leo: {
                    rating: 83,
                    description: `The relationship of Aries and Leo is passionate and turbulent, but they don't seem to mind an occasional fight and a sharp word. When they fall in love deeply, they are almost impossible to separate as they stubbornly hold on to the idea of their future together. Although they are not two of the most romantic believers in love, they are passionate in their beliefs and when they find love, they will fight for it until there is literally nothing left of their relationship. 
                    
                    It is meaningless to advise gentle behavior or looking for peace, because the entire world of their relationship is based on the element of Fire they share. It is pointless to look for peace, when the opposite of peace is what attracts them in the first place. For as long as they love each other and stay faithful and true, they will be tied up in a relationship they need to fight for every day. Their main objective is to find a way to enjoy the fight and have fun.`
                },
                sagittarius: {
                    rating: 87,
                    description: "This is definitely a couple with lots of potential. They might have to stand up to their environment and defend their feelings from others, but this won't shake them too much, for neither of them thinks that much about the opinion of others anyway. If they manage to mend their philosophical differences and respect each other's different opinions, they could become one of the warmest relationships in the zodiac. Their main relationship advice would be to always tell the truth to each other and not go crazy about their healthy differences. Their differences are exactly the thing that could make their sexual life more exciting."
                },
                taurus: {
                    rating: 63,
                    description: "This is a relationship full of personal challenges and individual depth. If they want to succeed as a couple, many internal issues in both must be solved. Only if they both accomplish peace in their lives, have just enough education, just enough other relationships and acquired just enough humor, they might be able to put aside their differences and listen to each other well enough. It is not that hard, except when you are used to using your horns."
                },
                virgo: {
                    rating: 42,
                    description: "It's a good thing that the relationship between an Aries and a Virgo is never boring. Although in most cases they are not really meant to last, it can still be a fun experience if none of them takes their potential for a shared future too seriously. In case they take the best out of their relationship, giving it enough freedom and unpredictability, Virgo would incorporate some of Aries' energy, while Aries would allow Virgo to teach them how to organize their thoughts and communicate calmly. This way they might come to the point where their relationship could actually last, and the outcome depends on their ability to relax and have fun together."
                },
                capricorn: {
                    rating: 38,
                    description: `This is not an easy relationship. None of the partners has any trace of lightness and blissful ignorance. This is why their relationship might seem like a competition to ruin the relationship in the best possible way. It is hard to say who will get out of it a winner, for they will both feel lousy most of the time and be relieved that they finally separated. If they stubbornly decide they love each other too much to let each other go, both of them would probably bang their heads against a wall for years to come. 
                    
                    Their only chance of success is unconditional respect and the wideness of their views and expectations. They could truly complement each other, but only in a scenario where they would look for good in one another and highlight each other's qualities. Unfortunately, the malefic nature of their rulers rarely allows for them to be this positive and acceptance oriented. If they got together, and whatever their story is, they should think about the things they could learn from each other instead of looking for each other's shortcomings, and always stay out of each other's business.`
                },
                gemini: {
                    rating: 74,
                    description: `The overall impression of this couple would be good, exciting and challenging, a relationship where both partners can learn a lot and be active in a healthy way. The main problem with their romantic involvement is the lack of trust, especially if Aries partner gets too attached to Gemini, always fighting for their freedom. The need for conversation with a lot of essence is bigger than any positive or any negative aspects of their relationship and both of them should always have this in mind. In general, there is a big chance these two will end up together, because their shared love of adventure is bigger than most of their troubles.`
                },
                libra: {
                    rating: 62,
                    description: `However difficult it might be to reconcile these two natures, remember that this is a primal opposition that represents partners by signification. Aries and Libra are the couple of the zodiac, as much as any other opposing signs, for they are each other's seventh house, house of relationships. Even more so if we acknowledge the fact that Libra is the sign of relationships in general. Any problem they might have with each other is something to be worked on, because it shows what their personal problem with any relationship is. When they are madly attracted to each other and fall in love, there is almost nothing that could separate them, no matter the differences. Wouldn't we all like to find the middle ground with our loved one? They need to work on their bond, that's a fact, but their relationship is a promise of a perfect fit of two souls meant to be together.`
                },
                aquarius: {
                    rating: 68,
                    description: `This is a couple that lacks tenderness. They are not two brutes who let their relationship fade as soon as their passion does, but the distant examining look of Aquarius can take out the emotion out of it. Aries partner needs to be relaxed by their significant other, so they can melt down and show their true, warm emotional nature. In this relationship, they would have a distant partner that basically supports their primal, instinctive nature. Although it is nice to think that the point of each relationship is for partners to accept each other as they are, in this case that would take away every chance for an Aries to grow through togetherness and learn about their emotional nature. This is something they will never be satisfied with.
        
                    Still, every relationship with Aquarius can surprise us as much as any individual Aquarius could. With them as a partner, there is always room for an enlightening scenario that leaves all things to free will. In case they decide to share their lives together, they should have a screaming room they could individually visit once in a while. This would probably do the trick. And about that lack of emotion, they could just put in a lot of physical tenderness to begin with and let things go from there.`
                },
                cancer: {
                    rating: 47,
                    description: `This relationship can be painful for both partners and needs a lot of work put into it in order to work. It requires both of the partners to adapt and make changes in their behavior, while tip toing around each other most of the time. It is not an easy road, but the rewards are such inner understanding of passion, full of emotion and the ability to create something truly unique. If they succeed, they will probably never be satisfied with a different partner.`
                },
                scorpio: {
                    rating: 48,
                    description: `Think of this combination of signs through the most aggressive image of Fire and Water element. Fire evaporates Water, just like Aries shatters Scorpio's feelings. Water damps down Fire, just like Scorpio wears Aries out. They seem to bring out the worst in each other and this is nobody's fault, it is just hard to reconcile so much focused energy that moves in two different directions. Their relationship is like the process of nuclear fusion and often just too much to handle.`
                },
                pisces: {
                    rating: 29,
                    description: `This is a relationship disturbed mostly by the lack of trust and the ability of both parties to open up to their partner. Aries is ruled by Mars, the planet that rules our first chakra, responsible for our ability to set good boundaries. Pisces is ruled by Neptune, in charge of our entire aura and our permeability for outside stimuli. Since they are both responsible for our border with the outside world, it is hard to say which partner should loosen up and make it possible for them to come close. Their only chance of a happy ending is if Aries partner dives in and their Pisces partner wakes up.`
                }
            },
            leo: {
                aries: {
                    rating: 83,
                    description: `The relationship of Aries and Leo is passionate and turbulent, but they don't seem to mind an occasional fight and a sharp word. When they fall in love deeply, they are almost impossible to separate as they stubbornly hold on to the idea of their future together. Although they are not two of the most romantic believers in love, they are passionate in their beliefs and when they find love, they will fight for it until there is literally nothing left of their relationship.

                    It is meaningless to advise gentle behavior or looking for peace, because the entire world of their relationship is based on the element of Fire they share. It is pointless to look for peace, when the opposite of peace is what attracts them in the first place. For as long as they love each other and stay faithful and true, they will be tied up in a relationship they need to fight for every day. Their main objective is to find a way to enjoy the fight and have fun.`
                },
                leo: {
                    rating: 78,
                    description: `Two Leo partners can do the impossible and this fact could keep them in a perfectly satisfying relationship for a long time. Their main goal is to find true intimacy and understand each other's inner emotional beings. Leo has a habit to exaggerate and make drama out of small, irrelevant things, but this could be a good thing for their relationship because of their social status and the ability to support each other's theatrical needs.

                    If they begin a battle for supremacy, it might be a good idea to set the territory that each of them is in charge for. If one of them is the best at an emotional department, the other one can be the best in the sexual one. If they split their rules this way, it will be much easier for both of them to function and think of each other as worthy of the relationship. What might make a loving relationship between them impossible is the lack of respect. If they catch this disease, it might be best for them to part ways and search for different partners.`
                },
                sagittarius: {
                    rating: 75,
                    description: `Leo and Sagittarius are a very good fiery combination of signs, and when two people with these Sun signs come together, they inevitably fall in love. This love is warm, passionate and inspiring, and they will have a chance to create, perform and have fun together for as long as they feel this way. However, Sagittarius partner might lose interest in Leo because they tend to get pushed away by their static, fixed nature. The only way they might get to keep their passion and emotions going, is if they manage to listen to their softer emotions and remain tender and sensitive for one another.`
                },
                taurus: {
                    rating: 29,
                    description: `The relationship of Taurus and Leo could be aggressively challenging if not for their warm natures ruled by Venus and the Sun. Although they are both signs of fixed quality with entirely different natures, if they gather enough patience before they enter their relationship, they have a chance to become your archetypal couple of a girl and a boy. When their masculine and feminine principles are in balance, they can use them to mend their sexual, intellectual and financial circumstances and really enjoy each other.`
                },
                virgo: {
                    rating: 35,
                    description: `Leo and Virgo form a constructive relationship that rarely serves their emotional natures. They both tend to be too rational and their mental strength will rarely be a good foundation for a fairytale love they secretly wish for. Both of these signs have opposing signs linked to Neptune. Leo's opposing sign is Aquarius, the sign of Neptune's exaltation, while Virgo's opposing sign is the sign of Pisces, ruled by Neptune. Both of them need someone perfect, someone made just for them, and if they just think for a second that they don't belong together, their search of perfection will prevail. It is rare for these partners to form a strong emotional or sexual bond, however well they might get along when it comes to work and communication.`
                },
                capricorn: {
                    rating: 27,
                    description: `If they meet in the right moment, Leo and Capricorn might get along very well. The main problem in their relationship is the set of priorities they might not share, and the passion or determination that both of them have. It is not an easy job, reconciling Saturn with the Sun, but it brings great benefits when it is done. The structure Leo could get and the creativity they might build on together could lift them to exactly what they desired, however their relationship might end. They differ as much as the Earth and the Fire, but when they share a common goal, they are unstoppable.`
                },
                gemini: {
                    rating: 82,
                    description: `Gemini and Leo can have so much fun that it could make the rest of the zodiac envious. They both consider their day best spent in laughter, and if they share friends, they could seem like a perfect couple. Their main challenge is the difference in their approach to change and they both need to make room for small adjustments in their behavior if they want their relationship to last. Leo will need to make room for more movement and understand what seems to be “flakiness” of their changeable Gemini partner, while Gemini will have to understand that Leo is in fact keeping them together for however long they are meant to last. Their mutual respect can usually overcome any boundaries, and they should keep having fun and building their relationship on a solid foundation of childish joy.`
                },
                libra: {
                    rating: 75,
                    description: `If you want to sum up the relationship between a Leo and a Libra, you have to understand that their bond involves the beautiful and challenging dignities of Saturn and the Sun. They have a lot to learn from each other, and the main goal of their relationship is to reach the point of shared respect and responsibility in a perfect balance of power. It will sometimes be hard for them to overcome the need for competing, trying to determine who is a better, smarter or a more capable person. Even if they don't, their relationship will be something to enjoy and show off in public.`
                },
                aquarius: {
                    rating: 89,
                    description: `Signs of Leo and Aquarius combined represent the ultimate creativity, famous scientific discoveries, the first man in an airplane and the first man on the Moon. Imagine what these partners could do together if they let each other lead the way when the territory of their rule is in front of them. They both need to learn to let go of the image they have about themselves and about each other, or they won't get very far stuck in their unnecessary ego battle. Warm and cold, hearted and smart, nuclear gravitation and vacuum in space, it cannot be easy to mend their differences or form a stable, loving relationship. The best thing they could do is find a cause they will support together. This would give them a focus on the outer world and allow them to deepen the inner emotional world of their relationship while fighting outside of it.`
                },
                cancer: {
                    rating: 29,
                    description: `Although the Moon reflects the light from the Sun, the sign of Cancer doesn't really see Leo as the source of all their joy. Leo is a sign that should spread joy and love with an active approach to each one of their relationships. How is it possible that Cancer is immune? Well probably because the Moon circles around the Earth, not the Sun.

                    They are special, that's for sure. Both of them are strong individuals, each on their own plane. Their lack of understanding and emotional touch can be explained through the fact that both of them have a mission to spread love to the less fortunate signs of the zodiac. Not everyone is born with an emotional flow like Cancer and a huge, warm heart like Leo. If they kept all this love to themselves, some unfortunate souls would probably search for them aimlessly, and the world would be a much sadder place.`
                },
                scorpio: {
                    rating: 29,
                    description: `When Leo and Scorpio start dating, they might not know exactly what they are to expect. This is in no way an easy relationship, and both partners can be stubborn and stiff in their opinions, life choices and ways they handle reality. If they want to remain in a loving relationship, they need to understand each other's way of expressing emotions and respect each other's needs however different they might be from those they are used to. When they find a way to love each other without conditioning, they might realize that they are in search for the same thing - Unity.`
                },
                pisces: {
                    rating: 14,
                    description: `Leo and Pisces seem to be put on this Earth to spread entirely different kinds of love. The problem isn't in their element or their quality, as much as it is in their connection through the fall of Neptune, the ruler of Pisces. If they get attracted to each other, they will be subjected to the risk of great damage to their beliefs, their inner faith and usually succumb to mutual disrespect because of a simple lack of understanding. The beauty of their relationship could be developed through the fairytale approach of Pisces, if they build the heroic image of their Leo partner to the point in which other differences between them fade.`
                },
            },
            sagittarius: {
                aries: {
                    rating: 87,
                    description: `This is definitely a couple with lots of potential. They might have to stand up to their environment and defend their feelings from others, but this won't shake them too much, for neither of them thinks that much about the opinion of others anyway. If they manage to mend their philosophical differences and respect each other's different opinions, they could become one of the warmest relationships in the zodiac. Their main relationship advice would be to always tell the truth to each other and not go crazy about their healthy differences. Their differences are exactly the thing that could make their sexual life more exciting.`
                },
                leo: {
                    rating: 75,
                    description: `Leo and Sagittarius are a very good fiery combination of signs, and when two people with these Sun signs come together, they inevitably fall in love. This love is warm, passionate and inspiring, and they will have a chance to create, perform and have fun together for as long as they feel this way. However, Sagittarius partner might lose interest in Leo because they tend to get pushed away by their static, fixed nature. The only way they might get to keep their passion and emotions going, is if they manage to listen to their softer emotions and remain tender and sensitive for one another.`
                },
                sagittarius: {
                    rating: 74,
                    description: `One Sagittarius will easily fall in love with the other and their passionate relationship can change very fast. As two representatives of a mutable sign, they will adapt easily, but change their opinions and feelings toward each other with a similar ease. This doesn't always bring promise of a long-term relationship, for there is no partner to be the glue that holds them together. This doesn't mean they won't enjoy each other's company, find many things to share while they are together, and laugh as children while being on the same path. If they discover the true happiness of two Jupiter affected people combined, they might lose interest in everyone else and find that point of needed balance to keep them together in their travels for as long as they live.`
                },
                taurus: 0,
                virgo: 0,
                capricorn: 0,
                gemini: 5,
                libra: 10,
                aquarius: 10,
                cancer: 5,
                scorpio: 0,
                pisces: 5
            },
            taurus: {
                aries: 0,
                leo: 5,
                sagittarius: 0,
                taurus: 10,
                virgo: 10,
                capricorn: 10,
                gemini: 0,
                libra: 5,
                aquarius: 0,
                cancer: 10,
                scorpio: 10,
                pisces: 10
            },
            virgo: {
                aries: 5,
                leo: 0,
                sagittarius: 0,
                taurus: 10,
                virgo: 10,
                capricorn: 10,
                gemini: 5,
                libra: 0,
                aquarius: 0,
                cancer: 10,
                scorpio: 10,
                pisces: 5
            },
            capricorn: {
                aries: 0,
                leo: 0,
                sagittarius: 0,
                taurus: 10,
                virgo: 10,
                capricorn: 10,
                gemini: 5,
                libra: 0,
                aquarius: 0,
                cancer: 10,
                scorpio: 10,
                pisces: 10
            },
            gemini: {
                aries: 10,
                leo: 10,
                sagittarius: 10,
                taurus: 0,
                virgo: 0,
                capricorn: 0,
                gemini: 10,
                libra: 10,
                aquarius: 10,
                cancer: 0,
                scorpio: 0,
                pisces: 0
            },
            libra: {
                aries: 10,
                leo: 10,
                sagittarius: 10,
                taurus: 5,
                virgo: 0,
                capricorn: 5,
                gemini: 10,
                libra: 10,
                aquarius: 10,
                cancer: 0,
                scorpio: 0,
                pisces: 0
            },
            aquarius: {
                aries: 10,
                leo: 5,
                sagittarius: 10,
                taurus: 0,
                virgo: 5,
                capricorn: 0,
                gemini: 10,
                libra: 10,
                aquarius: 10,
                cancer: 0,
                scorpio: 0,
                pisces: 0
            },
            cancer: {
                aries: 0,
                leo: 5,
                sagittarius: 5,
                taurus: 10,
                virgo: 10,
                capricorn: 10,
                gemini: 0,
                libra: 0,
                aquarius: 0,
                cancer: 10,
                scorpio: 10,
                pisces: 10
            },
            scorpio: {
                aries: 0,
                leo: 5,
                sagittarius: 5,
                taurus: 10,
                virgo: 10,
                capricorn: 10,
                gemini: 0,
                libra: 0,
                aquarius: 5,
                cancer: 10,
                scorpio: 10,
                pisces: 10
            },
            pisces: {
                aries: 5,
                leo: 5,
                sagittarius: 5,
                taurus: 10,
                virgo: 5,
                capricorn: 10,
                gemini: 0,
                libra: 5,
                aquarius: 5,
                cancer: 10,
                scorpio: 10,
                pisces: 10
            },

        },    

        compatibilityCheck: function () {
            player1starSign = getSign('player1').toLowerCase()
            player2starSign = getSign('player2').toLowerCase()
            console.log('player 1 star sign: ', player1starSign)
            console.log('player 2 star sign: ', player2starSign)
        },
    
    };

    compatibility.compatibilityCheck()
    let boringResult = compatibility.starSigns[`${player1starSign}`][`${player2starSign}`]
    console.log(boringResult)
        
}); // document.ready()

// next actions

// make it so player 2's logo is the different color
// make the Draw function work and a cat walk along the bottom of the screen
// add multiplayer

// 

// inspo boards

// https://g.co/kgs/Znz3Z8