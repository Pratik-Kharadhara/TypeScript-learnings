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