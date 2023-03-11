function myFunction() {
  let username = prompt('Please enter your name', 'Adventurer');
  if (username != null) {
    document.getElementById('demo').innerHTML =
      'Hello Squire ' + username + '! Are you ready for an adventure!?';
  }
  alert(
    ' Hello ' +
      username +
      '. Will you join our quest for ancient knowledge? We are on a mission to learn javascript!'
  );
}

function myfunction() {
  document.getElementById('test').innerHTML =
    parseFloat(10) +
    '<br>' +
    parseFloat('10') +
    '<br>' +
    parseFloat('10.33') +
    '<br>' +
    parseFloat('34 45 66') +
    '<br>' +
    parseFloat('He was 40');
}

console.log('Hello Adventurer!');
