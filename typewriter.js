//input => sentence
//output =>each letter 50ms delay
//how => loop through each letter and delay 
const sentence = "hello there from";

let passTime = 50 //variable to pass time
function typewrite(word) {
  for (const char of word) { //each letter of sentence
    setTimeout(() => {
      process.stdout.write(char)
    }, passTime);
    passTime += 50 //change the pass time each loop
  }
  // console.log(letters)
}//end of function




 typewrite(sentence)
