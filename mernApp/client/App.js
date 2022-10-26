import "./App.css";
import { useState ,useEffect} from "react";
import Axios from 'axios';

function App(){
  const [listofUsers,setlistofUsers]=useState([]);
  const [name,setName]=useState("");
  const [age,setAge]=useState(0);
  const [userName,setUserName]=useState("");


  useEffect(()=>{
    Axios.get("http://localhost:3001/getUsers").then((response)=>{
        setlistofUsers( response.data);
        console.log(listofUsers);
      });

  },[]);

  const createUser=(()=>{
    Axios.post("http://localhost:3001/createUser",{
      name:name,
      age:age,
      userName:userName})

      .then((response)=>{
        alert("user created");
        setlistofUsers([...listofUsers,{name,age,userName}])

      });

  });

  return ( <div className="App">
    <div className="userDisplay">
      {listofUsers.map((user)=>{
        return (
        <div>
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
          <h1>UserName : {user.userName}</h1>
        </div> )

      })}

    </div>
    <div>
      <input type="text" placeholder="Name.." onChange={(event)=>{setName(event.target.value)}}></input>
      <input type="number" placeholder="Age.." onChange={(event)=>{setAge(event.target.value)}}></input>
      <input type="text" placeholder="User Name.." onChange={(event)=>{setUserName(event.target.value)}}></input>
      <button onClick={createUser}>Create user</button>
    </div>

  </div>
  
  );
}

export default App;