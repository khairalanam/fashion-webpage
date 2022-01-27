function myFunction() {
    var x = document.getElementById("main-nav");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}