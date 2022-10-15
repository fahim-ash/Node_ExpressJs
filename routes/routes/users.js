const express=require('express');
const router=express.Router();



router.get('/',(req,res)=>{
    res.send("user created")

})
router.post('/',(req,res)=>{
    res.send("user created")

})

router.put('/',(req,res)=>{
    res.send("user created")

})
router.delete('/',(req,res)=>{
    res.send("user created")

})
module.exports =router;