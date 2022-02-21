// console.log(this);  // Window objesini çağırır.

// alert("merhaba");

// console.log(confirm("Emin misiniz?"));

// const cevap = prompt("2 + 2 = ?");
// console.log(cevap);

if (confirm("Sayfa Yenilensin mi")) {
    window.location.reload();
}
else {
    console.log("sayfa yenilenmedi");
}