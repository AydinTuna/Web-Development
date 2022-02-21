const btnYorum = document.getElementById("btnFilmYorum");
const inpYorum = document.getElementById("txtAreaYorum");
const err3 = document.getElementById("err3");
var yorumLog;

btnYorum.addEventListener("mousedown", function(e) {
    btnYorum.style.transition = "background 0.1s";
    btnYorum.style.background = "#555";
});
btnYorum.addEventListener("mouseup", function(e) {
    btnYorum.style.transition = "background 0.1s";
    btnYorum.style.background = "#333";
});
btnYorum.addEventListener("mouseleave", function(e) {
    btnYorum.style.background = "#e38203";
});
btnYorum.addEventListener("mouseover",function(e) {
    btnYorum.style.background = "#333";
});