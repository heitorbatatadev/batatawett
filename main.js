function login(){

  userName= document.getElementById("batata_name").value;

  localStorage.setItem("user_name", userName);

  window.location = "batatawett.html"
}

