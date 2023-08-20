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

function validateForm(){
    let subError = document.getElementById('subError')
    if(!validateEmail() || !validatePassword() ){
        subError.innerHTML='Please resolve the errors'
        return false
    }else{
        subError.innerHTML=''
        alert('You are logged in successfully')
        return true
    }
}