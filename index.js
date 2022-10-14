const express = require("express");
const app = express();
app.use(express.json());

let userList = [
  {
    id:1,
    name: "ash",
    age: 19,
    married: false,
  },
  {
    id:2,
    name: "paulo",
    age: 20,
    married: false,
  },
  {
    id:3,
    name: "Jennifer",
    age: 22,
    married: true,
  },
];

/* we can have endpoints (ex: /users) with same names but different methods */

//GET
app.get("/users", (req, res) => {
  res.json(userList);
});


//POST
app.post("/users", (req, res) => {
  const newUser = req.body;
  userList.push(newUser);
  res.json(userList);
});

//PUT

app.put("/users",(req,res)=>{
  const newName=req.body.newName;
  userList.map( (i)=>  i.name= newName);
  res.json(userList);

});
//params : string or number that you can send with the URL (ex : 1st user URL : ash.com/users/1)

//Delete 
app.delete("/users/:id",(req,res)=>{
  const deleteID=req.params.id;
  for (let i in userList)
    if (userList[i].id==deleteID) {
      userList.splice(i,1);  //  splice(index,how many items to delete)
    }
 
  res.json(userList)
})


let port=3000
app.listen(port, () => {
  console.log(`Server running on port ${port} `);
});
