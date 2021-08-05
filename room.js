var firebaseConfig = {
    apiKey: "AIzaSyB7QCIdKgHnDTjHM3cPIqG7VDgRG48qi2g",
    authDomain: "chatish-d21f5.firebaseapp.com",
    projectId: "chatish-d21f5",
    storageBucket: "chatish-d21f5.appspot.com",
    messagingSenderId: "1018403782633",
    appId: "1:1018403782633:web:4d1a78b18fbab12865d578"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("somename").innerHTML = "Welcome " + user_name + "!";

function addroom()
{
      var room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "chatish_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  var row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'> #" + Room_names +"</div><hr>";
  document.getElementById("output"),innerHTML = row;
  
  });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "chatish_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
