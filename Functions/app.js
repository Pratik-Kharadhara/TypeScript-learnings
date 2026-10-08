"use strict";
//functions types
function abcd(name, age, cb) {
    //this cb is a call back function which takes a arg which is a string and returns void
    //we have to define the cb like this cb:(arg :string)=> void , void=> its 
    cb("Pratik");
}
abcd("Pratik", 21, (arg) => {
    console.log(arg);
});
