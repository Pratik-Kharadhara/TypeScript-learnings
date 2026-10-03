"use strict";
//classes help us to create object instance
class Bottle {
    price = 100;
    color = "blue";
    capacity = 1000;
}
let b1 = new Bottle(); //this will us give us a new bottle object with the mentioned attribute
//constructor
//its a function used in class to get the input in requires to create the object 
class Bottle2 {
    color;
    capacity;
    price;
    constructor(color, capacity, price) {
        this.color = color;
        this.capacity = capacity;
        this.price = price;
    }
}
let b2 = new Bottle2("Blue", 1000, 300); //its give b1
// Bottle {price: 100, color: 'blue', capacity: 1000}
let b3 = new Bottle2("Green", 750, 250); //Bottle2 {color: 'Blue', capacity: 1000, price: 300}
//suppose we want a value which is default 
class Human {
    name;
    Nationality;
    constructor(name = "Jhon Doe", Nationality) {
        this.name = name;
        this.Nationality = Nationality;
        //the name if we don't push anything it will use default name Jhon Doe
    }
}
let h1 = new Human(undefined, "Indian"); //it will give use default name Jhon Doe ,
//Human {name: 'Jhon Doe', Nationality: 'Indian'}
let h2 = new Human("Pratik", "German"); //Human {name: 'Pratik', Nationality: 'German'}
//this keyword
//this keyword is used for accessing the varibale or any attribute inside a method
//  of that class
class example {
    name = "Pratik";
    age = 21;
    //to acces this attributes we need to use this 
    random() {
        console.log(this.name);
        console.log(this.age);
    }
}
let c1 = new example(); // when we run the c1 object instance
/**  example {name: 'Pratik', age: 21}
age
:
21
 name
 :
"Pratik"*/
//Public Private 
//public classes or methods can be used by the all he classes and methods
//private can only be accessable by the parent class or methods
class bottleMaker {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    outPut() {
        console.log(this.brand);
    }
}
const bottle1 = new bottleMaker("Milton");
bottle1.outPut(); //Milton as its defined as public
class bottleMaker2 {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    output() {
        console.log(this.brand);
    }
}
const bottle2 = new bottleMaker2("chilton");
/*bottleMaker2 {brand: 'chilton'}
brand
:
"chilton"
*/
bottle2.output(); // although it will run but the error shows here as output is privat
console.log(bottle2.brand); //similiarly can't acces brand which is private  although it runs
//Protected- access modifier
//it helps to access the variable in that class and the class which extends it 
class Example1 {
    name = "Chilton";
}
class Example2 extends Example1 {
    material;
    constructor(material) {
        super();
        this.material = material;
    }
    changeName() {
        this.name = "New Name"; //chilton->new name
        console.log(this.name);
    }
}
let ex = new Example2("Steel");
ex.changeName(); /*ƒ changeName() {
        this.name = "New Name"; //chilton->new name
        console.log(this.name);
    }*/
//Read Only
//it makes a varibale unchangeble 
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    changeName() {
        this.name = "changed"; //the name can't ba changbale as it a readonly
    }
}
let user = new User("Pratik");
user.changeName(); //although it will chhange but still it will send the error
