import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function About() {
    const navigate = useNavigate();
    function MoveToHome(){
        navigate("/")
    }
  return (
    <div className='Outer' >
        <div className='Bolder'>
        Go to Home Tab to see more or click on the below button !!
        </div>
         <button  id= "Abbutton"onClick={MoveToHome}>Click Me !!</button>
    </div>
  )
}
