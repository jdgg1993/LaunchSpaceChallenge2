# API handler
```
var api = {
     get: function (request, response, next) {
        console.log(request.query);
        var query = {
            sql: "SELECT * FROM Users"
        };
        
        request.azureMobile.data.execute(query)
            .then(function (results) {
                response.json(results);
            })
            .catch(next);
    },
    post: function (request, response, next) {
        console.log(request.query);
        var query = {
            sql: "INSERT INTO Users (name) VALUES ('" + request.query.username + "')"
        };
        
        request.azureMobile.data.execute(query)
            .then(function (results) {
                response.json(results);
            })
            .catch(next);
    }
};

module.exports = api;
```
# Calling API from website

## POST
```
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
```

## GET
```
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
```