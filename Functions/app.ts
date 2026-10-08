//functions types
function abcd(name:string,age:number,cb:(arg :string)=>void){
    //this cb is a call back function which takes a arg which is a string and returns void
    //we have to define the cb like this cb:(arg :string)=> void , void=> its 
    cb("Pratik");
}

abcd("Pratik",21,(arg :string)=>{
    console.log(arg);
})