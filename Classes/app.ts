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