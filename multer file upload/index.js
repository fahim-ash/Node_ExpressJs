const express=require("express");
const app=express();
const multer=require("multer");
const path=require('path')
// app.set()

// multer works as kind of a middleware
const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'Images') //  for error

    },
    filename:(req,file,cb)=>{
        console.log(file)
        cb(null, Date.now()+ path.extname(file.originalname)) // creating file name
    }

})

const upload=multer({storage:storage})

app.get("/upload",(req,res)=>{
    res.send("Upload")

});
app.post("/upload",upload.single("image"),(req,res)=>{
    res.send("Image Uploaded")

});


app.listen(3000);
console.log("the app is running")


