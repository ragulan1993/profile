//Author : Kulasingham Ragulan
//Index No : 20220768

var names = null;
var email = null;
var message = null

var radioButtons = null;
var radioButtonValue = null;

var subject = null;
var body = null;


document.getElementById("send-button").addEventListener("click", function(){
    console.log(body)
    var mailtoUrl = 'mailto:ragulan1993@gmail.com?subject='+encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoUrl;
});


document.getElementById("edit-button").addEventListener("click",function(){
    document.getElementById("detail-holder").style.display = "none";
});



function isValid(event){
    event.preventDefault();

    if(validateForm()){
        document.getElementById("detail-holder").style.display = "flex";
        
        document.getElementById("name-holder").textContent = "Name : " + names.value;
        document.getElementById("email-holder").textContent = "Email : "+ email.value;
        document.getElementById("subject-holder").textContent = "Subject : "+ radioButtonValue;
        document.getElementById("details-holder").textContent = "Details : "+ message.value;

        subject = radioButtonValue;
        body = "Name : " + names.value + "\nEmail : " + email.value + "\nDetails : " + message.value;
    }

}

function validateForm(){
    names = document.getElementById("name");
    email = document.getElementById("email");
    message = document.getElementById("query");

    radioButtons = document.getElementsByName("subject");


    if(names.value === "" || email.value === "" || message.value === ""){
        alert("Please fill all the fields.");
        return false;
    }
    var isChecked = false;

    for(var i = 0; i<radioButtons.length;i++){
        if(radioButtons[i].checked){
            radioButtonValue = radioButtons[i].value;
            isChecked = true;
            break;
        }
    }

    if(!isChecked){
        alert("Please select a subject.");
        return false;
    }

    if(!validateEmail(email.value)){
        alert("Please enter a valid email.");
        return false;
    }

    if(!ValidateName(names.value)){
        alert("Name is only contains alphabetical letters.");
        return false;
    }

    return true; 

}

function validateEmail(email){
    var emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailPattern.test(email);
}

function ValidateName(name){
    var namePattern = /^[a-zA-Z\s-]+$/;
    return namePattern.test(name);
}