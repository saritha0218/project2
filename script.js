
let tell = ""
function clearScreen() {
  tell="";
    document.getElementById("result").value = "";
}
 

function display(value) {
     tell += value;
    document.getElementById("result").value = tell;
}
 

function calculate() {
    document.getElementById("result").value = eval(tell);
}