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

console.log('Hello Adventurer!');
