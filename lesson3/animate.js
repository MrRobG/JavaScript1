function move() {
  let id = null;
  const elem = document.getElementById('animate');
  let position = 0;
  clearInterval(id);
  id = setInterval(frame, 5);

  function frame() {
    if (position == 350) {
      clearInterval(id);
    } else {
      position++;
      elem.style.top = position + 'px';
      elem.style.left = position + 'px';
    }
  }
}
