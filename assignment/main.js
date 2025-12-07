
//Creating Objects Using Object Literal
     const student = {
    name: "Amina",
    age: 20,
    course: "Data Science"
};

console.log(student);


//Car Object

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

console.log(car);


//Mobile Phone Object

const phone = {
    company: "Samsung",
    storage: "128GB",
    battery: "85%"
};

console.log(phone);





 // Using Constructor Functions

   //Employee Constructor

   function Employee(name, salary, role) {
    this.name = name;
    this.salary = salary;
    this.role = role;
}

const emp1 = new Employee("Khalid", 500, "Manager");
console.log(emp1);
const emp2 = new Employee("Sara", 450, "Developer");
console.log(emp2);

//Product Constructor

function Product(productName, price, inStock) {
    this.productName = productName;
    this.price = price;
    this.inStock = inStock;
}

const product1 = new Product("Laptop", 1200, true);
console.log(product1);
const product2 = new Product("Headphones", 150, false);
console.log(product2);

//Book Constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}       
const book1 = new Book("1984", "George Orwell", 328);
console.log(book1);




//Using ES6 Classes
    
    //teacher Class

    class Teacher {
    constructor() {
        this.name = "Fatima";
        this.subject = "Math";
        this.experience = 5;
    }
}

const teacher1 = new Teacher();
console.log(teacher1);

//bankAccount Class

class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }
}

const acc1 = new BankAccount("AC12345", "Abdirahman", 3000);
console.log(acc1);
const acc2 = new BankAccount("AC67890", "Layla", 4500);
console.log(acc2);

//amnimal Class
class Animal {
    constructor(type, color, age) {
        this.type = type;
        this.color = color;
        this.age = age;
    }
}

const myCat = new Animal("Cat", "White", 2);
console.log(myCat);



//Accessing & Updating Elements

    //laptop Object
    const laptop = { brand: "Dell", ram: "8GB", price: 700 };

console.log(laptop.brand);  // Access
laptop.ram = "16GB";        // Update

console.log(laptop);
//user profile Object
const user = { username: "Ali2025", email: "ali@example.com", age: 22 };

console.log(user.email);
user.email = "ali.new@example.com";

console.log(user);

//hotel room
const room = { roomNumber: 105, price: 50, type: "Single" };

console.log(room.price);
room.price = 40;

console.log(room);




//Adding New Properties

    //car Object
    const car2 = { brand: "Honda", model: "Civic", year: 2019 };

car2.owner = "Omar";  
car2["last-service-date"] = "2025-01-01";

console.log(car2);

//student Objectconst student2 = { name: "Maryam", grade: "A", school: "Afbaro Academy" };

student2.age = 18;
student2["favorite-subject"] = "Physics";

console.log(student2);

//shop item Objectconst item = { itemName: "Milk", price: 2, category: "Food" };

item.quantity = 30;
item["discount-percentage"] = 10;

console.log(item);




//Iterating Through Objects

    //resturent menu

    const menu = { burger: 5, pizza: 8, juice: 3 };

for (let item in menu) {
    console.log(item + ": " + menu[item]);
}

//city info

const city = { population: 500000, mayor: "Hassan", area: "200 sq km" };

for (let key in city) {
    console.log(key + ": " + city[key]);
}
 
//Classroom Schedule

const schedule = { math: "8:00 AM", english: "10:00 AM", science: "1:00 PM" };

for (let subject in schedule) {
    console.log(subject + ": " + schedule[subject]);
}






//Objects JSON 

    //Convert Movie to JSON

    const movie = { title: "Inception", duration: "2h 30m", rating: 9 };

const movieJSON = JSON.stringify(movie);
console.log(movieJSON);

//JSON JavaScript Object

const jsonString = '{"name":"Sara","age":25,"country":"Kenya"}';

const obj = JSON.parse(jsonString);

console.log(obj.name);
console.log(obj.age);
console.log(obj.country);

//JSON  Object  JSON
const weather = { temperature: 32, humidity: "70%", condition: "Sunny" };

const jsonWeather = JSON.stringify(weather);
const finalObj = JSON.parse(jsonWeather);

console.log(finalObj);
