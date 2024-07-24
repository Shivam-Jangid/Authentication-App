import React from 'react'
import { useState } from 'react'
import { json, useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate();
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
    async function CheackValues(){
        try{
        const res =await fetch("https://localhost:3000/login",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    username,
                    password
                })
            });
            if(res.status == 200){
            const finalData = await res.json();
            localStorage.setItem("user",JSON.stringify(finalData.user));
            localStorage.setItem("token",JSON.stringify(finalData.token));
            navigate("/");
            }
            else if(res.status == 403){
                alert("user not found, sign up to continue");
                navigate("/Sign-up")
            }
            else{
                alert("invalid username or password");
                navigate("/Log-in");
            }
        }
        catch(err){
            console.log(err);
        }
    }
  return (
 <div className='inputData'>
      <h1 className='my-3'>Login to continue!!</h1>
     <input type="text" id = "username" value={username} onChange={(e)=>{
        setusername(e.target.value);
     }} className = "input" placeholder='Enter username'/>
     <input type="password" id = "password" value={password} onChange = {(e)=>{
        setpassword(e.target.value);
     }}
     className = "input" placeholder='Enter password'/>
     <button className='button' onClick={CheackValues}>Log In</button>
    </div>
  )
}
