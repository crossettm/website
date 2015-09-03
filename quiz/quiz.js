//quiz begins, no answers correct
var correctAnswers = 0;

//quiz
var answer1 = prompt('Question 1: What is the capital of Canada?');
if (answer1.toLowerCase() === 'ottawa') {
  correctAnswers += 1;
} 

var answer2 = prompt('Question 2: Do more people live in Africa or North America?');
if (answer2.toLowerCase() === 'africa') {
  correctAnswers += 1;
} 

var answer3 = prompt('Question 3: What is the approximate population of the world? (Enter the letter): a. 900 million     b. 6 billion     c. 47 billion');
if (answer3.toLowerCase() === 'b') {
  correctAnswers += 1;
} 

var answer4 = prompt('Question 4: In which modern country was coffee first cultivated?');
if (answer4.toLowerCase() === 'ethiopia') {
  correctAnswers += 1;
} 

var answer5 = prompt('Question 5: Which language is spoken in Iran?');
if (answer5.toLowerCase() === 'persian') {
  correctAnswers += 1;
} 

//output
document.write('You got ' + correctAnswers + ' out of 5 questions correct.');

//ranking
if (correctAnswers === 5) {
  document.write('  You earned a gold medal!');
} else if (correctAnswers >= 3) {
  document.write('  You earned a silver medal!');
} else {
  document.write('  You did not earn a medal!');
}







