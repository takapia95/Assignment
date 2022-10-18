window.onload = init;
function init() {
  addLastUpdate();
}
 function validationForm() {
	      var name=['Harry','Elizabeth','Shana'];
	      var password=document.getElementById("pass").value;
		  var repass=document.getElementById("second_pass").value;
		  var user=document.getElementById("username").value;
		  if(password.length<8)
		  {
		     document.getElementById("error").innerHTML="Password length must be greater than 8 characters";
		  }
		   else if(password!==repass)
		   {
		    document.getElementById("error").innerHTML="Password does not match";
          
		   }
		   else
		   {
		      document.getElementById("error").innerHTML="";
		   }
		   for(var i=0;i<name.length;i++)
		   {
		      if(user==name[i])
			  {
			     document.getElementById("error").innerHTML="User Already Existed";
			  }
		   }
    }