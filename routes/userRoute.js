const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.get('/',(req,res)=>{

    res.render('main')
})

router.get('/new',(req,res)=>{

    res.render('new')
})

router.post('/new',async(req,res)=>{

    const newUser = await User.create(req.body);

    res.redirect('/show');

})

router.get('/show',async(req,res)=>{

    try {
        const users = await User.find({});
       
        res.render('user',{users});
       } catch (error) {
           console.log("error");
           
       } 

})

router.get('/user/:id/edit',async(req,res)=>{

    const user = await User.findById(req.params.id);
       
        res.render('edit',{user});
     
})

router.patch('/user/:id',async(req,res)=>{

    const user = await User.findByIdAndUpdate(req.params.id,req.body);
       console.log(user)
        res.redirect('/show');
     
})

router.delete('/user/:id',async(req,res)=>{

   await User.findByIdAndDelete(req.params.id);
       
        res.redirect('/show');
     
})

module.exports=router;