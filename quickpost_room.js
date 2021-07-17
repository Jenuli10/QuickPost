 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCCKw0RlrkoWiRc7q0nAiCLHQF4fhQlMhc",
  authDomain: "animals-asqg.firebaseapp.com",
  databaseURL: "https://animals-asqg-default-rtdb.firebaseio.com",
  projectId: "animals-asqg",
  storageBucket: "animals-asqg.appspot.com",
  messagingSenderId: "94050662315",
  appId: "1:94050662315:web:c6f9b7fb31e6563d06c4ee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";

  //FUNCTION ADD ROOM
  function addRoom ()
  {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose :"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "quickpost_page.html";
  }

//FUNCTION GET DATA

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
  });
  });
  }
  getData();




  function redirectoRoomName(name)
  {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "quickpost_page.html";
  }
  
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "quickpost.html";
  }