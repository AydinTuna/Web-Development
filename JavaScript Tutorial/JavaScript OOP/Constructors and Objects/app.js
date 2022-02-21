// console.log(this);   // Global Scope işaret ediyor

// function Employee() {   // Yapıcı fonksiyon - Constructor
//     this.name = "Bahadır";
// }

// const emp1 = new Employee();    // Constructor dan obje oluşturduk.

// console.log(emp1);

function Employee(name,age,salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    // console.log(this);     // This burada Function Scope işaret ettiği için Global Scope ile karışmadı ve objelerimizi yazdırdık.

    this.showInfos = () => {
        console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("Bahadır",21,500000);
const emp2 = new Employee("Tuna",21,500001);
// console.log(emp1);
// console.log(emp2);
emp1.showInfos();
emp2.showInfos();


