const aBolum = [];
const bBolum = [];

function ebobA (a) {
    let counter;
    let bolumKalan;
    for (let i = 2; i < a; i++) {
        bolumKalan = (a % i);
        if (bolumKalan === 0) {
            counter = a / i;
            aBolum.push(counter);
        }
    }
    return aBolum;
}
function ebobB (b) {
    let counter;
    let bolumKalan;
    for (let i = 2; i < b; i++) {
        bolumKalan = (b % i);
        if (bolumKalan === 0) {
            counter = b / i;
            bBolum.push(counter);
        }
    }
    return bBolum;
}

console.log(ebobA(12));
console.log(ebobB(18));