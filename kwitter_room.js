

var firebaseConfig = {
      apiKey: "AIzaSyAlq1f-APqUVUesTNYzgu-GFqaHixdnFAQ",
      authDomain: "quiter-app.firebaseapp.com",
      projectId: "quiter-app",
      storageBucket: "quiter-app.appspot.com",
      messagingSenderId: "959425266885",
      appId: "1:959425266885:web:540ca484d7b4a475419cac"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
