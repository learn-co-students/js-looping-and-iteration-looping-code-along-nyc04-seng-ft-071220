function writeCards(names,event){
  for(let i=0;i<names.length;i++){
    names[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`; 
  }
  return names;
}



function countDown(num){
  let i = 0
  while(i<=num){
    console.log(num--)
  }
}