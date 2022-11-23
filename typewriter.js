//input => sentence
//output =>each letter 50ms delay
//how => loop through each letter and delay 
const sentence = "hello there from lighthouse labs";

function typewrite(word) {
  for (const char of word) { //each letter of sentence
    letter.push(char)
  }
}//end of function

//  typewrite(sentence)
function EachTime(word) {
  setTimeout(() => {
    console.log(word)
  }, 1000);
}

EachTime("hi")