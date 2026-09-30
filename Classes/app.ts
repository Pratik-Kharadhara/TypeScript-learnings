//classes help us to create object instance
class Bottle {
    price=100;
    color="blue";
    capacity=1000;
}

let b1 = new Bottle();//this will us give us a new bottle object with the mentioned attribute

//constructor
//its a function used in class to get the input in requires to create the object 

class Bottle2{
    constructor(public color:string,public capacity:number, public price:number){
        
    }
}

let b2 = new Bottle2("Blue",1000,300); //its give b1
// Bottle {price: 100, color: 'blue', capacity: 1000}

let b3 = new Bottle2("Green",750,250); //Bottle2 {color: 'Blue', capacity: 1000, price: 300}

//suppose we want a value which is default 
class Human{
    constructor(public name:string="Jhon Doe",public Nationality:string){
        //the name if we don't push anything it will use default name Jhon Doe
    }
    
}

let h1 = new Human(undefined,"Indian");//it will give use default name Jhon Doe ,
//Human {name: 'Jhon Doe', Nationality: 'Indian'}

let h2 = new Human("Pratik","German");//Human {name: 'Pratik', Nationality: 'German'}


//this keyword
//this keyword is used for accessing the varibale or any attribute inside a method
//  of that class

class example{
    public name:string ="Pratik";
    public age:number =21;
    //to acces this attributes we need to use this 
    random(){
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