// Code your solutions in this file
function writeCards(namesArray, eventName) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
        thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!` )
    }
    return thankYouCards;    
}

function countDown(integer) {
    while (integer > 0) {
        console.log(integer);
        integer -= 1;
    }
    console.log(integer);
}