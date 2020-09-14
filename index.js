// Code your solutions in this file
// writeCards(["Ada", "Brendan", "Ali"], 'surprise gift');

function writeCards(names, surprise) {
    let finalArr = []
    for (let i = 0; i < names.length; i++ ){
        finalArr.push( `Thank you, ${names[i]}, for the wonderful ${surprise} gift!` )
    }
    return finalArr   
}

function countDown( numbers) {
    while (numbers > 0) {
        console.log(numbers);
        numbers -= 1;

    }
    console.log (numbers);
}