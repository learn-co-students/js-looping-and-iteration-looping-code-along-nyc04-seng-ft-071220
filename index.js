function writeCards(arrName, eventName) {
    let arr = [];
    for (let i=0; i<arrName.length;i++) {
        arr.push(`Thank you, ${arrName[i]}, for the wonderful ${eventName} gift!`);
    }
    return arr;
}

function countDown(num) {
    let counter = num;
    while (counter >= 0) {
        console.log(counter);
        counter--;
    }
}