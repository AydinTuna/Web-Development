// function Employee(name,age) {
//     this.name = name;
//     this.age = age;
//     this.showInfos = function() {
//         console.log(`İsim: ${this.name} Yaş: ${this.age}`);
//     }
// }

// const emp1 = new Employee("Bahadır",21);
// const emp2 = new Employee("Tuna",21);

// Eğer binlerce Employee constructor'ından iki tane değil de binlerce obje oluşturuyor olsaydık, bu durumda binlerce "showInfos" fonksiyonumuz oluşurdu.
// Çünkü "showInfos" fonksiyonu Employee Constructor'ının bir özelliği olduğundan her obje oluşturulduğunda "age" ve "name" özellikleri gibi kopyalanırdı.
// Bu işlem gereksiz çok fazla yer tutacağı için fonksiyonumuzu "prototype" a yazmalıyız. Bu sayede sadece ihtiyaç anında fonksiyon kullanılacak ve gereksiz
// yer tutmayacaktır.

function Employee(name,age) {
    this.name = name;
    this.age = age;
}
Employee.prototype.showInfos = function() {
    console.log(`İsim: ${this.name} Yaş: ${this.age}`);
}

const emp1 = new Employee("Bahadır",21);
const emp2 = new Employee("Tuna",21);

console.log(emp1);
console.log(emp2);
emp2.showInfos();