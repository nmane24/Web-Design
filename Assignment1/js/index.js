
var form = $('.form');
var btn = $('#submit');
var topbar = $('.topbar');
var input = $('#password');
var article =$('.article');
var tries = 0;
var h = input.height();


function clicked1(){
	var username1 = document.getElementById('username');
	var password1 = document.getElementById('password');
	
	if(username1.value == ""){
    alert("Enter Username !")
  }
  else if (password1.value == ""){
    alert("Enter password !")
  }

  else{
    window.open("page1.html","_self",false);
  }
}
