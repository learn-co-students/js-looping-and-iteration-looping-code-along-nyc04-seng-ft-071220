// Code your solutions in this file
//writeCards= ["Ada", "Brendan", "Ali"];

function writeCards (names, birthday) {
    let thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`)
    }
return thankYouCards
}

function countDown(top) {
    while (top > 0) {
    console.log(top);
    top--
    }
    console.log(0)
}