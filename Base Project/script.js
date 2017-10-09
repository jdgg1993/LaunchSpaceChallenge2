function showAlert() {
    var name = document.getElementById("name").value;
    for (var i = 0; i < name.length; i++) {
        console.log(name[i]);

    }
    var alpha = {a:1, b:2, c:3};
    console.log(alpha[name[0]]);
    document.getElementById("result").innerHTML = "Result " + name.length;
}