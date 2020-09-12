// Code your solutions in this file
// function writeCards(arrNames,birthday) {
//     let thankYouCards =[]
//     for (let i = 0; i < arrNames.length; i++){
//         thankYouCards.push(`Thank you,${arrNames[i]}, for the wonderful ${birthday}gift!`)
//     }
//     return thankYouCards
// }

// function countDown(startingNumber) {
//     while (stratNum > 0){
//         console.log(startingNumber);
// should print the numbers in the starting num and your counting down so -= 1 not up 
//         startingNumber -= 1;
//     }
// //     console.log(startingNumber);
//  your not returning anything you just want to see the numbers 
// }

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
  
  function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }