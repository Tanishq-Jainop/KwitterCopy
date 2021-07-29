

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
      console.log("room Name-"+room_name);
      row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTMl+=row;
      //End code
      });});}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";``
      }
      function addRoom()
      {
        room_name = document.getElementById("room_name").value;
      
        firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
        });
      
          localStorage.setItem("room_name", room_name);
          
          window.location = "kwitter_page.html";
      }
      
      function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
             Room_names = childKey;
             console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML+=row;
          });
        });
      
      }     

