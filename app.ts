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