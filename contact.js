

function validateName(){
    let nameError = document.getElementById('nameError')
    let name = document.getElementById('name')

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


function validateMessage(){
    let message = document.getElementById('message')
    let messageError = document.getElementById('messageError')

    if(message.value.trim()==''){
        messageError.innerHTML = '(Message cannot be blank)'
        return false
    }else if(message.value.length < 6 || message.value.length >50){
        messageError.innerHTML='(Message length cannot be less than 6 characters or more than 20 characters)'
        return false
    }else{
        messageError.innerHTML=''
        return true
    }
}



function validateForm(){
    let subError = document.getElementById('subError')
    if(!validateEmail() || !validateName() || !validateMessage()){
        alert('Please resolve the errors');
        return false
    }else{
        subError.innerHTML=''
        alert('Your response submitted successfully')
        return true
    }
}