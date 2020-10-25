var gbtn = document.getElementById('google_btn');
var sbtn = document.getElementById('signin_btn');
var input_email = document.getElementById('inputEmail');
var input_password = document.getElementById('inputPassword');

gbtn.addEventListener('click', function() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(feedback) {

    var token = feedback.credential.accessToken;
    var user = feedback.user;
    window.location.href = "lobby.html";
  }).catch(function(error) {
    alert('Oops! Error!')
  });
});




sbtn.addEventListener('click', function() {
  firebase.auth().signInWithEmailAndPassword(input_email.value, input_password.value).then(function(feedback) {
    window.location.href = "lobby.html";
  }).catch(function(error) {
    input_email.value = "";
    input_password.value = "";
    alert('Oops! Make sure you signed up your account and entered the correct password!')
  });
});
