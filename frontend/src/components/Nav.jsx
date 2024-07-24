import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
export default function Nav() {
  const currentUser = localStorage.getItem("user");
  const navigate = useNavigate();
  return (
    <div>
        {currentUser ?<ul className='nav-ul'>  
            <li><Link to="/" className='no-underline'>Home</Link></li>
            <li><Link to = "/About" className='no-underline'>About</Link></li>
  
            <li><Link onClick={()=>{
                alert("Are you sure to log out ???");
                localStorage.clear();
                navigate("/Sign-up");
              }} to = "/Sign-up" className='no-underline'>Log-Out</Link></li>
              <Link onClick={()=>{
                localStorage.clear();
                navigate("/Log-in");
              }} to = "/Log-in"></Link>
                      </ul>:
                <ul className='nav-ul'> 
              <li><Link to = "/Sign-Up" className='no-underline'>Sign up</Link></li>
              <li><Link to="/Log-in" className='no-underline'>Log in</Link></li>

        </ul>
        }

    </div>
  )
}

