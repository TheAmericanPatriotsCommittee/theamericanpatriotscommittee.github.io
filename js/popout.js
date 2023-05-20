// Popout
// Toggle menu visibility
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Attach click event listener to navbar icon
var navbarIcon = document.getElementById("navbar-icon");
navbarIcon.addEventListener("click", toggleMenu);
