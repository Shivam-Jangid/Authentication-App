import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Nav from "./components/Nav";
import Home from './components/Home';
import About from './components/About';
import PrivateComp from './components/PrivateComp';
import "./App.css";
import Signup from './components/Sign-up';
import Login from './components/Login';
function App() {
    return (
   <>
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route element = {<PrivateComp/>}>
    <Route path='/' element = {<Home/>}/>
    <Route path='/About' element ={<About/>}/>

    <Route path='/Log-out' element ={<h1>Logged Out Successfully</h1>}/>
    </Route>
    <Route path='/Sign-up' element = {<Signup/>}/>
    <Route path='/Log-in' element = {<Login/>}/>
   </Routes>
   </BrowserRouter>
  </>
  );
}

export default App;
