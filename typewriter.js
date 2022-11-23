//input => sentence
//output =>each letter 50ms delay
//how => loop through each letter and delay
const sentence = "hello there from lighthouse labs";

let passTime = 0; //variable to pass time
const typewrite = function(word) {
  for (const char of word) { //each letter of sentence
    setTimeout(() => {
      process.stdout.write(char);
    }, passTime);
    passTime += 50; //change the pass time each loop
  }
  // console.log(letters)
};//end of function




typewrite(sentence);
