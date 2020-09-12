// Code your solutions in this file
let new_array = []

function writeCards(name_array, occasion) {
    for (let i = 0; i < name_array.length; i++) {
        new_array.push(`Thank you, ${name_array[i]}, for the wonderful ${occasion} gift!`)
    }
    return new_array
}

function countDown(number) {
    while ( number > 0 ) {
        console.log(number)
        number -= 1
    }
    console.log(number)
}

