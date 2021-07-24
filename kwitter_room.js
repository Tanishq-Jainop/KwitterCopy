

 var firebaseConfig = {
      apiKey: "AIzaSyAlq1f-APqUVUesTNYzgu-GFqaHixdnFAQ",
      authDomain: "quiter-app.firebaseapp.com",
      databaseURL: "https://quiter-app-default-rtdb.firebaseio.com",
      projectId: "quiter-app",
      storageBucket: "quiter-app.appspot.com",
      messagingSenderId: "959425266885",
      appId: "1:959425266885:web:f788e2936712194c419cac"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      user_name=document.getElementById("user_name").value;
      localStorage.setItem("user_name",user_name);
      window.location="index.html"
      } 
