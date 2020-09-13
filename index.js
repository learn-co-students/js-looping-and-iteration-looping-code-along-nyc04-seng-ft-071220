// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];
function writeCards(namesArray, event) {
    let thankYouCards = [];
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}

// function countDown(countdown) {
//     while (countdown > 0) {
//         console.log(countdown);
//         countdown -= 1;
        
        function countDown(startingNumber) {
            while (startingNumber > 0) {
                console.log(startingNumber);
                startingNumber -= 1;
            }
            
            console.log(startingNumber);
        }
    // }
    // console.log(countdown);
// }
