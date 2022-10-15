const express=require('express');
const router=express.Router();



router.get('/',(req,res)=>{
    res.send("comments created")

})
router.post('/',(req,res)=>{
    res.send("comments created")

})

router.put('/',(req,res)=>{
    res.send("comments created")

})
router.delete('/',(req,res)=>{
    res.send("comments created")

})
module.exports= router;
