var URL = "http://launchspacetestdemo.azurewebsites.net/api/launchspaceusers";

function show() { 
    document.getElementById("demoButton").innerHTML=Date();
} 

function processName() {
    var name = document.getElementById("name").value;

    for (var i = 0; i < name.length; i++) {
        console.log(name[i]);
    }

    document.getElementById("result").innerHTML = "Number of characters: " + name.length;
}

function postRecord() {
    var name = document.getElementById("name").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("result").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", URL + "?username=" + name, true);
    xhttp.send();
}

function getRecord() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            for (var i = 0; i < response.length; i++) {
              document.getElementById("result").innerHTML += response[i].name + "<br> ";
            }
        }
    };
    xhttp.open("GET", URL, true);
    xhttp.send();
}