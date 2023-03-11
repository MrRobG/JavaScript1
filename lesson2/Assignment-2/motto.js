function getMotto() {
  return prompt('Please enter your favorite motto:');
}

function getCount() {
  return parseFloat(prompt('How many times would you like to see your motto:'));
}

function printMotto(motto, count) {
  for (let i = 1; i <= count; i++) {
    console.log(motto);
  }
}

let motto = getMotto();

let count = getCount();

printMotto(motto, count);
