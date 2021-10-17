const mongoose = require('mongoose');
const User = require('./models/user');




const userArray = [

    {
        
        name:"Nishit",
        age:21,
        address:'xyz',
        gender:'male',
        phone:'7721869369'
    }
    
]

 function seed (){

    User.insertMany(userArray)
   
 .then(()=>{
        console.log("Data Seeded Successfully....");
    })
    
.catch((err)=>{
        console.log(err);
        console.log("Seeding Error");
    })
}


module.exports = seed;