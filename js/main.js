var panel01 = document.getElementById("panel-01");
var panel02 = document.getElementById("panel-02");

function loaded() {
    panel01.classList.add("loaded");
    panel02.classList.add("loaded");
}
window.onload = loaded;