let value;

const programmer = {
    name : "Bahadır Tuna Aydın",
    age : 21,
    email : "aydinbahadirtuna@gmail.com",
    skills : ["HTML", "CSS", "JavaScript", "SQL", "NoSQL"],
    
    address : {
        city : "Ankara",
        street : "Bahçelievler"
    },

    work : function() {
        console.log("Mühendis Çalışıyor...");
    }
}

value = programmer;
//value = programmer.email; // Genel olarak
value = programmer["email"];
value = programmer.address.city;
value = programmer.work();

const programmers = [
    {
        name : "Bahadır",
        age : 25
    },
    {
        name : "Oğuz",
        age : 25
    }
];
value = programmers;
value = programmers[0].age;

console.log(value);