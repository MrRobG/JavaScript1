function myFunction() {
  let username = prompt('Please enter your name', 'Adventurer');
  if (username != null) {
    document.getElementById('demo').innerHTML =
      'Hello ' + username + '! How are you today?';
  }
  alert(' Hello ' + username + '. Welcome!');
}

console.log('Hello Adventurer!');
