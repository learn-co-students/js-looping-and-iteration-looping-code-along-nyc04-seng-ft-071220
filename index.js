
function writeCards(name, event) {
    let arr = []
    for (let i=0; i < name.length; i++){
        arr.push (`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return arr
}


function countDown(num) {
    while (num >= 0) {
        console.log( num )
        num --
    } 
}