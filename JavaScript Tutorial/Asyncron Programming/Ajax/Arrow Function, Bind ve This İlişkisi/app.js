const person = {
    age: 25,

    // tellAge: function() {

    //     // this - person
    //     console.log(this);
    //     console.log(this.age);   // undefined, çünkü window objeinde age diye bir değer yok.
    // }.bind(this)

    tellAge: () => {
        console.log(this);
        console.log(this.age);
    }   // Aynı sonuç çıktı, arrow function bind fonk. ile this bağlıyormuş gibi sonuç verir.


    // this - window



}

person.tellAge();