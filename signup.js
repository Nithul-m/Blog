// function validateForm(){

// document.getElementById('signupForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const firstName = document.getElementById('firstName').value;
//     const lastName = document.getElementById('lastName').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;
//     const agreeTerms = document.getElementById('agreeTerms').checked;

//     if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '' || !agreeTerms) {
//       alert('Please fill in all fields and agree to the terms.');
//       return;
//     }

//     if (password.length < 6) {
//       alert('Password should be at least 6 characters long.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert('Passwords do not match.');
//       return;
//     }

//     alert('Sign up successful!');
   
// })};

function validateFullName(){
    let nameError = document.getElementById('fNameError')
    let name = document.getElementById('firstName')

    if(name.value.trim()==''){
        nameError.innerHTML = '(Name cannot be blank)';
        return false;
    }else if (name.value.length < 5){
        nameError.innerHTML = '(Name must not be less than 5 characters)';
        return false;
    }else
    nameError.innerHTML='';
    return true;
}

function validateLastName(){
    let nameError = document.getElementById('lNameError')
    let name = document.getElementById('lastName')

    if(name.value.trim()==''){
        nameError.innerHTML = '(Last name cannot be blank)';
        return false;
    
    }else
    nameError.innerHTML='';
    return true;
}

function validateEmail(){
    let email = document.getElementById('email')
    let emailError = document.getElementById('emailError')

    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email.value.trim() == ''){
        emailError.innerHTML = '(Email cannot be blank)'
        return false
    }else if(!email.value.match(regEx)){
        emailError.innerHTML = '(Email not in global format)'
        return false
    }else{
        emailError.innerHTML=''
        return true
    }
}

function validatePassword(){
    let password = document.getElementById('password')
    let passError = document.getElementById('passwordError')

    if(password.value.trim()==''){
        passError.innerHTML = 'Password cannot be blank'
        return false
    }else if(password.value.length < 6 || password.value.length >20){
        passError.innerHTML='Password length cannot be less than 6 characters or more than 20 characters'
        return false
    }else{
        passError.innerHTML=''
        return true
    }
}

function validateConfirmPassword(){
    let password = document.getElementById('password')
    let confirm = document.getElementById('confirmPassword')
    let cPasswordError = document.getElementById('cPasswordError')

   if(confirm.value != password.value){
       cPasswordError.innerHTML='Passwords do not match'
        return false
    }else{
        cPasswordError.innerHTML=''
        return true
    }
}

function validateForm(){
    let subError = document.getElementById('subError')
    const agreeTerms = document.getElementById('agreeTerms').checked;
    if(!validateEmail() || !validateFullName() || !validateLastName() || !validatePassword() || !validateConfirmPassword() || !agreeTerms){
        alert('Please resolve the errors');
        return false
    }else{
        subError.innerHTML=''
        alert('Your account has been created')
        return true
    }
}