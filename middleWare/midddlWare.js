const express=require('express');
const app=express();

app.use(express.json());


const logger=(req,res,next)=>{
    const name=req.body.name;

    if (name=="Ash") {
        next()
        
    } else {
        res.json({error:"user not found"})
    }

}

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.post ('/',logger,(req,res)=>{
    res.send("login successful")

})

app.listen(3000,()=>{
    console.log("Server is running")
})
