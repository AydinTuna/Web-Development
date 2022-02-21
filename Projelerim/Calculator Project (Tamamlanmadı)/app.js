const firstInput = document.querySelectorAll(".input")[0];
const secondInput = document.querySelectorAll(".input")[1];
const inputs = document.querySelectorAll("tr")[1];
const tableBtn = document.querySelectorAll(".calculator")[1];


eventListeners();

function eventListeners() {
    inputs.addEventListener("click", inputElement)
    tableBtn.addEventListener("click", islemBtn);
}

function inputElement(e) {
    let inp = e.target;
    inp.addEventListener("focus", inputAl);
}

function inputAl(e) {
    let input1, input2;
    if (e.target == inputs.children[0].firstElementChild) {
        input1 = e.target.value; 
        console.log(input1);
    } else if (e.target == inputs.children[1].firstElementChild) {
        input2 = e.target.value; 
        console.log(input2);
    }

    hesapla(input1, input2);
}

function islemBtn(e) {
    let targetValue = e.target.value;
    console.log(targetValue);

    return targetValue;
}

function hesapla(inp1, inp2) {
    let sonuc = 0;
    if (islemBtn === "TOPLA") {
        console.log("debug");
        sonuc = inp1 + inp2; 
    } else if (islemBtn === "ÇIKART") {
        sonuc = inp1 - inp2;
    } else if (islemBtn === "ÇARP") {
        sonuc = inp1 * inp2;
    } else if (islemBtn === "BÖL") {
        sonuc = inp1 / inp2;
    }
    
    output(sonuc);
}

function output(sonuc) {
    inputs.children[2].setAttribute("value", sonuc);
}

