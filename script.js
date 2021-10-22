var a;
function getName(){
  //get value from input field and save as "a"
   a = document.getElementById('username').value;
  //create LS key with value of "a"
  localStorage.setItem('uName', a);
  //automatically take the user to page two.html
  location.href = "two.html"
  window.alert(a)
}

function getUser(){
  //gets the created item in function getName that has the value of the input field
  var b = localStorage.getItem('uName');
  //gets the place holder paragraph and then gives it the value of hello and whatever the user inputted
  document.getElementById('placeholder').innerHTML = "Hello" + b
}
