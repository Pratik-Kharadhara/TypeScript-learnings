//functions types
function abcd(name:string,age:number,cb:(arg :string)=>void){
    //this cb is a call back function which takes a arg which is a string and returns void
    //we have to define the cb like this cb:(arg :string)=> void , void=> its 
    cb("Pratik");
}

abcd("Pratik",21,(arg :string)=>{
    console.log(arg);
})
//spread and rest parameters
//its written as ...
//REST parameter -> it puts takes all the values and merge it to one array 
//like here calculateTotal(100, 250) , then the calculateTotal ...prices combines it to 100,250
function calculateTotal(...prices: number[]): number {
    let total = 0;

    for (let price of prices) {
        total += price;
    }

    return total;
}

console.log(calculateTotal(100, 250));       // 350
console.log(calculateTotal(100, 250, 50));   // 400
console.log(calculateTotal(10, 20, 30, 40)); // 100

//Spread -> ... spreads the value and send it to the function parameter
let marks: number[] = [78, 92, 65, 88];

function findHighest(a: number, b: number, c: number, d: number): number {
    return Math.max(a, b, c, d);
}

//here the marks is being spread and send it to the function
console.log(findHighest(...marks));