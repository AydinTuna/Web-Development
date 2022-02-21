let sayac = 0;

while(1 < 2) {
    console.log(`Hello World ${sayac}`);
    sayac += 1;

    if(sayac === 100) {
        console.log("Döngü Sonlandırıldı");
        break;
    }
}

// Do While 

let i = 0;

do {
    console.log("Merhaba");
    i++
} while(i < 10); 


// foreach 

const langs = ["HTML", "CSS", "JavaScript", "TypeScript"];

langs.forEach(function(lang, index) {
    console.log(lang, index);
});
// Call back function kullandık

const users = [
    {name : "Mustafa", age : 25},
    {name : "Zeynep", age : 24},
    {name : "Ali", age : 26},
];

const names = users.map(function(user) {
    return user.name;
});

console.log(names);

const ages = users.map(function(user) {
    return user.age;
});

console.log(ages);


// for in döngüsü

const user = {
    name : "Mustafa",
    age : 25
};

for (let key in user) {
    console.log(key, user[key]);
}

const numbers = [1,2,34,55,67,77,24];

for (let key in numbers) {
    console.log(key);
    console.log(numbers[key]);
    console.log(key, numbers[key]);
    
}