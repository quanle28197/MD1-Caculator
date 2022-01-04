function Addition() {
    let input = Number( document.getElementById("numberInput").value);
    let input2 = Number ( document.getElementById("numberInput2").value);
    let addition = input + input2;
    document.getElementById("result").innerHTML = "Result: " + addition;
}
function Subtraction() {
    let input = Number (document.getElementById("numberInput").value);
    let input2 =Number ( document.getElementById("numberInput2").value);
    let subtraction = input - input2;
    document.getElementById("result").innerHTML = "Result: " + subtraction;
}
function Multiptication() {
    let input = Number (document.getElementById("numberInput").value);
    let input2 =Number ( document.getElementById("numberInput2").value);
    let multiptication = input * input2;
    document.getElementById("result").innerHTML = "Result: " + multiptication;
}
function Division() {
    let input = Number (document.getElementById("numberInput").value);
    let input2 =Number ( document.getElementById("numberInput2").value);
    let division = input / input2;
    document.getElementById("result").innerHTML = "Result: " + division;
}