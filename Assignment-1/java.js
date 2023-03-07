function myFunction() {
  let username = prompt('Please enter your name', 'Adventurer');
  if (username != null) {
    document.getElementById('demo').innerHTML =
      'Hello Squire ' + username + '! Are you ready for an adventure!?';
  }
  alert(' Hello ' + username + '. Welcome to the quest we call javascript!');
}

console.log('Hello Adventurer!');
