import React from 'react'
import { useNavigate } from 'react-router-dom'
function AdminNavbar() {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.removeItem('Role')
        window.location.reload()
        navigate('/login')
    }
    return (
        <div>
            <nav>
                <a href='/admin'>Home</a>
                 <a href='/adminproduct'>Product</a>
                  <a href='/admin'>Users</a>
                   <a href='/admin'>Orders</a>
                   <button onClick={handleLogout}>Logout</button>
            </nav>
            
        </div>
    )
}

export default AdminNavbar
