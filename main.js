const firebaseConfig = {
    apiKey: "AIzaSyCQICH6UCnLn0nifaBmHQLyzN5w2fT-dFY",
    authDomain: "batatawett-3d1c9.firebaseapp.com",
    databaseURL: "https://batatawett-3d1c9-default-rtdb.firebaseio.com",
    projectId: "batatawett-3d1c9",
    storageBucket: "batatawett-3d1c9.appspot.com",
    messagingSenderId: "22622489121",
    appId: "1:22622489121:web:262b65282c99d1374d3160"
  };
  

  firebase.initializeApp(firebaseConfig)
  function login(){
    var userName= document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
        purpose:"add user"
    })
    alert("bem vindo"+userName)
    setTimeout(() => {
        window.location="batatawett.html"
    }, 2000);
  }