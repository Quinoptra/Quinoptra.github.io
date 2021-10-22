var a;
function getName(){
  //get value from input field and save as "a"
   a = document.getElementById('username').value;
  window.alert(a)
  //create LS key with value of "a"
   localStorage.setItem('uName', a);
  //automatically take the user to page two.html
  location.href = "two.html"
  window.alert(a)
}

function getUser(){
  var b = localStorage.getItem('uName');
  document.getElementById('placeholder').innerHTML = "Hello" + b
}
