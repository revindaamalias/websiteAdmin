  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAtQR6azLL2B1SlLcB-2Xu1I0lExxFDnnA",
    authDomain: "cambox-d0b24.firebaseapp.com",
    databaseURL: "https://cambox-d0b24.firebaseio.com",
    projectId: "cambox-d0b24",
    storageBucket: "cambox-d0b24.appspot.com",
    messagingSenderId: "680018435131",
    appId: "1:680018435131:web:6b9e41bae2d32c6574101e",
    measurementId: "G-35PT8MMFFB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("user_div").style.display = "block";
      document.getElementById("admin_div").style.display = "none";
    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("admin_div").style.display = "block";
    }
  });
  
  function myFunction(){
      var email = document.getElementById("email_field").value;
      var password = document.getElementById("password_field").value;

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

      window.alert("Error : " + errorMessage);

    //   Take user to a different or home page
  }
