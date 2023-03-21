function submitData() {
  let min = guessForm.min.value;
  let max = guessForm.max.value;
  if (min == '' || max == '') {
    updateDOM('Please enter a min and max range', 'red');
    return false;
  }
  if (min.value > max.value) {
    updateDOM('The minimum range cannot be greater than the top range', 'red');
    return false;
  }
  numberGuessGame(min, max);
  return false;
}
function updateDOM(value, color) {
  document.getElementById('output').innerHTML = value;
  document.getElementById('output').style.color = color;
}
function numberGuessGame(min, max) {
  let number_of_guesses = 0;
  let num = Math.ceil(randomNumber(min, max));
  let guess;
  let message =
    "I'm thinking of a number between " +
    min +
    ' and ' +
    max +
    '. Try to guess it!';
  console.log(num);
  do {
    if (guess < num) {
      message = 'Too low try again!';
    }
    if (guess > num) {
      message = 'Too high try again!';
    }
    number_of_guesses++;
    guess = parseInt(prompt(message));
  } while (num !== guess);
  updateDOM(
    'Congratulations! You have guessed correct! It only took you ' +
      number_of_guesses +
      ' attempt(s)!',
    'green'
  );
}
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
