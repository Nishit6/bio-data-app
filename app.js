const express = require('express');
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const User = require('./models/user');
const env = require('dotenv')
const seedDB =require('./seed')

const methodOverride = require('method-override');


// Routes

const userRoute = require('./routes/userRoute')



// configuring mongoose
mongoose.connect(process.env.DB_URL, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,

  
})
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err))


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));


app.use(userRoute);


app.listen(process.env.PORT||3000,()=>{
    console.log("Server running at port 3000");
})

// seedDB();