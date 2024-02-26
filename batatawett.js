const firebaseConfig = {
    apiKey: "AIzaSyCQICH6UCnLn0nifaBmHQLyzN5w2fT-dFY",
    authDomain: "batatawett-3d1c9.firebaseapp.com",
    databaseURL: "https://batatawett-3d1c9-default-rtdb.firebaseio.com",
    projectId: "batatawett-3d1c9",
    storageBucket: "batatawett-3d1c9.appspot.com",
    messagingSenderId: "22622489121",
    appId: "1:22622489121:web:262b65282c99d1374d3160"
  };

  firebase.initializeApp(firebaseConfig);

  user_name =localStorage.getItem("user_name");

  document.getElementById("userName").innerHTML = "Eae " + user_name + "!";
   
  function addRoom(){

    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose :"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "serves.html";
  }

  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});

}

getData();

   function Logout(){
        window.location="index.html";
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
    }

    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="serves.html"
    }
    
