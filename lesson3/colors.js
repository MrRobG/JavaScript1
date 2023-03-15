function changeColor() {
  let colors = ['teal', 'blue', 'red', 'orange', 'black'];
  let randomn = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomn];
}
