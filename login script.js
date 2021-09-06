document.getElementById("login-btn").addEventListener('click',function(event){
const getUserName=document.getElementById("login-username");
const getPassword=document.getElementById("login-password");

// console.log(getUserName.value);
// console.log(getPassword.value);

if(getUserName.value=='admin@gmail.com' && getPassword.value=='anis'){
    window.location.href = 'banking.html';

}


})