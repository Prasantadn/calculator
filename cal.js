function display() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);

    let add = num1+num2;
    document.querySelector("#ans").value = add.toFixed(2);
}

function display2() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    
    let add = num1-num2;
    document.querySelector("#ans").value = add.toFixed(2);
}

function display3() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);

    let add = num1/num2;
    document.querySelector("#ans").value = add.toFixed(2);
}

function display4() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    
    let add = num1*num2;
    document.querySelector("#ans").value = add.toFixed(2);
}

function display5() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    
    let add = num1**num2;
    document.querySelector("#ans").value = add.toFixed(2);
}

document.querySelector(".center").style.textAlign ="center";
document.querySelector(".center").style.fontFamily ="cursive";
document.querySelector(".center").style.border = "thick solid black";
document.querySelector(".center").style.padding = "30px";
document.querySelector("body").style.margin ="80px";