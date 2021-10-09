$(document).ready(function(){
    // set initially button state hidden
    $("#btn").hide();
    $("#btn").click();
    // use keyup event on email field
    $("#user").keyup(function(){
        if(validateUsername()){
            // if the email is validated
            // set input email border green
            $("#user").css("border","2px solid green");
            // and set label 
            $("#username").html("<p class='text-success'>Success!</p>");
        }else{
            
            $("#user").css("border","2px solid red");
            $("#username").html("<p class='text-danger'>Invalid Username</p>");
        }
        buttonState();
    });
    // use keyup event on password
    $("#pass").keyup(function(){
        // check
        if(validatePassword()){
            // set input password border green
            $("#pass").css("border","2px solid green");
            //set passMsg 
            $("#passMsg").html("<p class='text-success'>Success!</p>");
        }else{
                // set input password border red
            $("#pass").css("border","2px solid red");
            //set passMsg 
            $("#passMsg").html("<p class='text-danger'>Invalid password</p>");
        }
        buttonState();
    });
});

function buttonState(){
    if(validateUsername() && validatePassword()){
        // if the both Username and password are validate
        // then button should show visible
        $("#btn").show();
    }else{
        // if both username and pasword are not validated
        // button state should hidden
        $("#btn").hide();
    }
}
function validateUsername(){
   
    var name=$("#user").val();
    // use reular expression
    //  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
     var reg = /(?:^|\W)admin(?:$|\W)*$/
     if(reg.test(name)){
         return true;
     }else{
         return false;
     }

}
function validatePassword(){
    //get input password value
    var pass=$("#pass").val();
    // check it s length
    var regex = /(?:^|\W)12345(?:$|\W)*$/
     if(regex.test(pass)){
         return true;
     }else{
         return false;
     }
}
 $("#btn").click(function(){
    if(validatePassword()&&validateUsername()==true){
        // window.location="/src/views/index";   
    }
   });