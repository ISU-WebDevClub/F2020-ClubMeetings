//this part is acutally what changes the elements
document.getElementById('red').onclick = turnRed;
document.getElementById('yellow').onclick = turnYellow;
document.getElementById('green').onclick = turnGreen;

//functions after the elements
function turnRed() {
    clear();
    document.getElementById('red').style.backgroundColor = "#ff0000";
}
function turnYellow() {
clear();
document.getElementById('yellow').style.backgroundColor = "#ffff00";
}
function turnGreen() {
clear();
document.getElementById('green').style.backgroundColor = "#00ff00";
}
function clear(){
    // you can use the single or double in js- also the semi colon doesnt matter but i like to put it there just because it offers better readability
    document.getElementById('red').style.backgroundColor = "#333";
    document.getElementById('yellow').style.backgroundColor = "#333";
    document.getElementById('green').style.backgroundColor = "#333";
}