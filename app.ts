//var a = 10;
//console.log(a);

let a = [10,23,144,"Pratik","John"]; //its a illegal declaration TS as it contains both the NUM and String

//tuples
//its a fixed length array where each elemnt can have a specific distinct data type and position
let arr: [string,number] = ["Pratik",7];                

//enums
enum RULES{
        ADMIN="admin",
        ROLL="roll"
}
RULES.ADMIN; // by this we can acces this later in our applicationn devlopment

//defined 
let b : number; //if we define anything otherthan number for b it will show us error 

//basuc types:
//any
let x;
x=12;
//x="Pratik";
x.charAt(2); //why its working beacuse x containes a value which is string but if we remove that 
//it will show error

//unknown
let y:unknown;
y=12;
y="Pratik";
y.chartAt; //it throws a error , as we have to check y's type and then operate
if(typeof y === "string"){
        y.charAt(2);
}
if(typeof y === "number"){
        y.toString();
}

//void : we have define void for those function which returns void 
function abcd():void{
        console.log("hello");
}

//null and undefined
let abc : null ; //abc have to be null
let def : undefined ; //abc have to be undefined

//never : when we sure a function won't return anything it s infinite loop then we 
function fun():never{
        while(true){
                
        }
}
console.log("i am not running"); // its not gonna run as the function above is set to never type
//which won't let the next code to run