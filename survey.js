const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];
const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const askQuestions = (x) => {
  rl.question(questions[x], (answer) => {
    answers.push(answer);
    if (x + 1 < questions.length) {
      askQuestions(x + 1);
    } else {
      rl.close();
      console.log(`\nANSWERS: ${answers}`);
    }
  });
};
askQuestions(0);
