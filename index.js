// // Code your solutions in this file
// for (let age = 39; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//   }

//   const gifts = ["teddy bear", "drone", "doll"];
 
// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
 
//   return gifts;
// }
 
// wrapGifts(gifts);

function writeCards(arrName, evenName) {
    let arr = [];
    for (let i=0; i<arrName.length;i++) {
        arr.push(`Thank you, ${arrName[i]}, for the wonderful ${evenName} gift!`);
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
