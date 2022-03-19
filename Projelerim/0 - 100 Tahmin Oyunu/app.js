const btnHesapla = document.getElementById("hesapla");
const btnPc = document.getElementById("pc");
const btnInsan = document.getElementById("insan");
const inp1 = document.getElementById("1.kisi");
const inp2 = document.getElementById("2.kisi");

if (btnPc.value === "pc") {
    
    
}

const goruntule = (e) => {
    console.log(inp1.value);
    inp2.value = inp1.value;    
    e.preventDefault();
}
btnHesapla.addEventListener("click",goruntule);





