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

function addUser() {
  
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "quickpost_room.html";

}