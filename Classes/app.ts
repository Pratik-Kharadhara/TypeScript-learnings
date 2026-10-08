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
//Public Private 
//public classes or methods can be used by the all he classes and methods
//private can only be accessable by the parent class or methods

class bottleMaker{
    constructor(public brand:string){

    }
    outPut(){
        console.log(this.brand);
    }
}

const bottle1= new bottleMaker("Milton");
bottle1.outPut(); //Milton as its defined as public

class bottleMaker2{
    constructor(private brand:string){

    }
    private output(){
        console.log(this.brand)
    }
}

const bottle2 = new bottleMaker2("chilton"); 
/*bottleMaker2 {brand: 'chilton'}
brand
: 
"chilton"
*/
bottle2.output(); // although it will run but the error shows here as output is privat
console.log(bottle2.brand);//similiarly can't acces brand which is private  although it runs

//Protected- access modifier
//it helps to access the variable in that class and the class which extends it 
class Example1{
    protected name :string = "Chilton";
}
class Example2 extends Example1 {
    
    constructor(public material : string){
        super();
    }
    changeName(){
        this.name = "New Name"; //chilton->new name
        console.log(this.name);
    }
}

let ex = new Example2("Steel");
ex.changeName();/*ƒ changeName() {
        this.name = "New Name"; //chilton->new name
        console.log(this.name);
    }*/

//Read Only
//it makes a varibale unchangeble 
class User{
    constructor(public readonly name:string){}

    changeName(){
        this.name="changed";//the name can't ba changbale as it a readonly
    }
}

let user = new User("Pratik");
user.changeName();//although it will chhange but still it will send the error

//getter and setter
//get is a method to get any value
//set is used to set any value

class GetterSetter{
    
    constructor(public _a:number,public _b: string){}
    //_a and _b is done beacuse other wise it will be same as the getter and setter method names
    get a(){ 
        return this._a;
    }
    set b(newValue : string){
        this._b = newValue;
    }
}

let ab = new GetterSetter(21,"Pratik");
ab.a; //21
ab.b = "Debanjan"; /*ab.b = "Debanjana"
'Debanjana' */

//Static keyword
//if we use static keyword before any varibale or method 
//then we don't need to create a object instance we can directly access them 
class User2{
    static name:string =  "Pratik";
    static getName(){
        return this.name;
    }
}
User2.name // 'Pratik'
User2.getName()//'Pratik'

//Abstract Classes : for a abstract class you can't instantiate or create a object.
//as Abstract classes is not ment to be instantiated then it has to be exntended and implemnt
abstract class User3 {
    constructor(
        public name:string,
        public age:number
    ) {}

    //abstract method: if a method is set as abstract , child class extending that class must implement/define that method
    abstract getUserName():void;
}


class Pratik extends User3{
    constructor(
         public name:string,
        public age:number,
        public UserName : string,
    ){ //as its inheritated from User3
        super(name,age)
    }
    //have to implement the abstract method
    getUserName(): void {
        console.log(this.UserName);
    }
}

let pratik = new Pratik("Pratik",21,"Pratik-Kharadhara");
pratik.UserName //'Pratik-Kharadhara'
pratik/*
Pratik {name: 'Pratik', age: 21, UserName: 'Pratik-Kharadhara'} */

