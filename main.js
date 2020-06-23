  var firebaseConfig = {
    apiKey: "AIzaSyA4WJR8Vmj_e2rnQf5S4iBK3ub2zWwpGHA",
    authDomain: "contact-9191f.firebaseapp.com",
    databaseURL: "https://contact-9191f.firebaseio.com",
    projectId: "contact-9191f",
    storageBucket: "contact-9191f.appspot.com",
    messagingSenderId: "909627760527",
    appId: "1:909627760527:web:af8ea6a46e395214aef5fa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var need = getInputVal('need');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company,  email, phone, need, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, need, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    need:need,
    message:message
  });
}
