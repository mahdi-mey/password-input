const passField = document.querySelector('#password-field')
const aykon = document.querySelector('#aykon')
const togglePassword = document.querySelector('.toggle-password')

togglePassword.addEventListener('click', function () {
    if(passField.type === 'text'){
        console.log('input is text')
        passField.setAttribute('type', 'password')
        aykon.className = 'pass-icon fa fa-eye'
    }
    else if(passField.type === 'password'){
        // console.log('input is password')
        passField.setAttribute('type', 'text')
        aykon.className = 'pass-icon fa fa-eye-slash'
    }
})