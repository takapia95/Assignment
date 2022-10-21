window.onload = init;
function init() {
  draw();
}
//function to validate form on page 3
//onsubmit on form
function validationForm() {
  return validPass() && validUser();
}
//validates pass and repass are matching on page 3
function validPass() {
  var pass1 = document.getElementById('pass').value;
  var pass2 = document.getElementById('second_pass').value;
  if (pass1 !== pass2) {
    alert("Passwords need to match");
    return false;
  } else {
    return true;
  }
}

//make sure the name is not already used on page 3
function validUser() {
  var users = ["Harry", "Elizabeth", "Shana"];
  var name = document.forms["reg_form"]["username"].value;
  if (users.includes(name)) {
    alert("Username already used");
    return false;
  } else {
    return true;
  }
}

function draw() {
  var canvas = document.getElementById("myCanvas");
  if (canvas) {
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      ctx.font = "30px Comic Sans MS";
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.fillText("Hello World", 150, 100);
    } else {
      alert('You need Safari or Firefox 1.5+ to see this demo.');
    }
  }
}
