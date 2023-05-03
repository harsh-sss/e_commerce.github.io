// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyD4w-O-ugqmNyKfanFXFlATsSs4UhAwEpU",
    authDomain: "uptherocket-1a06c.firebaseapp.com",
    databaseURL: "https://uptherocket-1a06c-default-rtdb.firebaseio.com",
    projectId: "uptherocket-1a06c",
    storageBucket: "uptherocket-1a06c.appspot.com",
    messagingSenderId: "638357444233",
    appId: "1:638357444233:web:d1f3c16c3e3aac7ded9858"
  };

  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var email = getInputVal('email');
    var name = getInputVal('name');
    var services  = getInputVal('services');
    // var phone = getInputVal('phone');
    // var message = getInputVal('message');
  
    // Save message
    saveMessage(email, name, services);
  
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
  function saveMessage(email, name, services){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      email: email,
      name: name,
      services: services
    });
  }