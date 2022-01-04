function Addition() {
    let input = document.getElementById("numberInput").value;
    let input2 = document.getElementById("numberInput2").value;
    let addition = input + input2;
    document.getElementById("Addition").innerText = "Result: " + addition;
}