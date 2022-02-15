const userLogin = document.getElementById('login-submit').addEventListener('click', function() {
    //get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value; 

    //get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    // //verification
    if(userEmail == 'amir508_du@yahoo.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }

});