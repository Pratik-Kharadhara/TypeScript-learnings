//Interfaces : its a defined strcuture or shape of a object
function XYZ(obj){
    obj. //it gives us error as obj has no structure or shape defined
} 
interface User {
    id:Number;
    Name : string;
    Age : Number
}
function abc(obj:User){
  console.log(obj.Age+" "+obj.Name+" "+obj.id)
}
abc({
    id:2201,
    Name:'Pratik',
    Age:21
})

//extending interface
//if we want to add some for feature into a existing interface
interface ADMIN extends User {
    isAdmin : boolean;
}

function xyz(a:ADMIN){
    a.isAdmin; //we can have isAdmin feature
}

//Merging Interface 
//if we had define two different interface we can merge their properties
interface ABC{
    name:string;
}
interface ABC {
    age:number;
}
function merge(a:ABC){
    //we can access the both 
    a.age;
    a.name;
}

