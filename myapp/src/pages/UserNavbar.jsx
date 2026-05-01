import React from 'react'
import { useNavigate } from 'react-router-dom'
function UserNavbar() {
    const navigate  = useNavigate()

    const handleLogout = ()=>{
        localStorage.removeItem('Role')
        localStorage.removeItem('loggeduser')
        window.location.reload()
        navigate('/login')
    }
    return (
        <div>
            <nav>
                <a href='/user'>Home</a>
                 <a href='/userproducts'>Product</a>
                  <a href='/usercart'>Cart</a>
                  <button onClick={handleLogout}>Logout</button>
            </nav>
            
        </div>
    )
}

export default UserNavbar
