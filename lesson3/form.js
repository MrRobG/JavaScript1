function validateForm() {
  let name = document.forms['myForm']['fname'].value;
  if (name == '') {
    alert('Name must be filled out!');
    return false;
  }
}
