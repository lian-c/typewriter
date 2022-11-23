//input => sentence
//output =>each letter 50ms delay
//how => loop through each letter and delay 
const sentence = "hello there from";

let letters = [];
function typewrite(word) {
  for (const char of word) { //each letter of sentence
    letters.push([char])
  }
  // console.log(letters)
  for (const index in letters) {
    EachTime(letters[index])
  }
}//end of function




 typewrite(sentence)
function EachTime(word) {
  setTimeout(() => {
    console.log(word)
  }, 1000);
}

// typewrite(sentence)