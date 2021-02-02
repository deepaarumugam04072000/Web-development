
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerHTML = message;

}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkPasswordMatch(input1,input2){
    if(input1.value.trim() === input2.value.trim())//trim() removes extra spaces in starting and ending of the string
    {
        showSuccess(input2);
    }else{
        showError(input2,'Passwords not matched!');
    }

}

function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be atleast ${min} characters `); //${variable} --dollar symbol used to display the value of the variable..
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters `); //${variable} --dollar symbol used to display the value of the variable..
    }else{
        showSuccess(input);
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

function isValidEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input).toLowerCase());
}

function checkRequired(inputArr){
    /*if(username.value === ''){
        showError(username,'Username is required!');
   }else{
       showSuccess(username);
   }

   if(email.value === ''){
        showError(email,'Email is required!');
   }else if(!isValidEmail(email.value)){
        showError(email,'Email is invalid!');
   }else{
       showSuccess(email);

   }

   if(password.value === ''){
        showError(password,'Password is required!');
   }else{
       showSuccess(password);
   }

   if(password2.value === ''){
        showError(password2,'confirm password is required!');
   } else{
       showSuccess(password2);
   }*/  

   //instead of these much code we are running for loop

   inputArr.forEach( function(input){
       console.log(input.value);
       if(input.value.trim() === ''){
           showError(input, `${getFieldName(input)} is required!`);
       }
       else{
           showSuccess(input);
       }
   });

}

function displayUsers(name,mail){
    var n=0;
    for(var user=0;user<5;user++){
        var newRow = n.insertRow();
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(user+1);
        newCell.appendChild(newText);

        var newCell = newRow.insertCell();
        var newText = document.createTextNode(users[user].name);
        newCell.appendChild(newText);
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(users[user].email);
        newCell.appendChild(newText);

        
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();//it prevents the default submission of the form
    //console.log(username.value);
   
    //Validation
    
    checkRequired([username,email,password,password2]);

  
   checkLength(username,3,20);
   checkLength(password, 6, 10);
   checkPasswordMatch(password,password2);
   displayUsers(username,email);
});
