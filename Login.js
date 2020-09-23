function getInfo(){
    var storedLogIns = [
        {  
            username = "",
            password = ""
        }
    ]
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i = 0; i < storedLogIns.length; i++){
        if(username == storedLogIns[i].username && password == storedLogIns[i].password)
        {
            window.location.replace("gamesloggedin.html");
        }
    }
}

