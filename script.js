var name = document.getElementById('username').value
function saveuser(){
  window.alert(name)
}
function callingVar(){
  window.alert(name)
}

var a;
function getName(){
  //get value from input field and save as "a"
   a = document.getElementById('username').value;
  //create LS key with value of "a"
   localStorage.setItem('uName', a);
  //automatically take the user to page two.html
  location.href = "two.html"
}
