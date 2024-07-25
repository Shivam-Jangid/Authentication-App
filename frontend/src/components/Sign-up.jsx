import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
export default function Signup() {
  const [username,setusername] = useState("");
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const navigate = useNavigate();
  useEffect(function(){
    const userSignedin = localStorage.getItem('user');
    if(userSignedin){
      navigate('/');
    }
  });
  const insertData = async ()=>{
    const res = await fetch("https://authentication-app-3-wd3a.onrender.com/signup",{
    method:'post',
    body:JSON.stringify({username,email,password}),
    headers:{
      'Content-Type':"application/json"
    }
  });
  if(res.status == 200){
    const newRes = await res.json();
    localStorage.setItem("user",JSON.stringify(newRes.user));
    localStorage.setItem("token",JSON.stringify(newRes.token));
    navigate('/');
  }
  else{
    if(res.status == 403){
      alert("User already exists");
      navigate("/Sign-up");
    }
    else {
      alert("Invalid username or password");
      navigate("/Sign-up");
    }
  }
  }
  return (
    <div className='inputData'>
      <h1 className='my-3'>Register Yourself !!</h1>
     <input type="text" className = "input" value={username} onChange={(e)=>setusername(e.target.value)} placeholder='Enter username'/>
     <input type="text" className = "input" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter email'/>
     <input type="password" className = "input" value={password} onChange={(e)=>setpassword(e.target.value)}  placeholder='Enter password'/>
     <button className='button' onClick={insertData}>Sign Up</button>
    </div> 
  )
}
