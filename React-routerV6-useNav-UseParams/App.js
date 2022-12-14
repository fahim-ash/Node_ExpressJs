import { useState ,useEffect} from "react";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
function App(){
  return(
    <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to ="/Profile">Profile</Link>
        </nav>


        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Profile/:username" element={<Profile/>}/>
          <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>

  )
}

export default App;