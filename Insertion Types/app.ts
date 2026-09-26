//there are mainly two type of insertion 

//UNION
let a :string| null|number ; //a can be any of those 3

//INTERSECTION
 type User ={
    name:string,
    age:number
 }
 type admin = User & {
    getDetails(user:User):void; //admin = User + getDetails function which return void and accept User
 }

 function xyz(a:admin){
    //by using intersection we have all the 3 features
    a.getDetails;
    a.age;
    a.name;
 }