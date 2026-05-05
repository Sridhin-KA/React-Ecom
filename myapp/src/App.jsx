import React from 'react'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import UserIndex from './pages/UserIndex'
import Protect from './pages/Protect'
import Admin from './pages/Admin'
import AdminNavbar from './pages/AdminNavbar'
import UserNavbar from './pages/UserNavbar'
import { BrowserRouter , Routes, Route, Link} from 'react-router-dom'
import AdminProduct from './pages/AdminProduct'
import UserProducts from './pages/UserProducts'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
function App() {
    const role = localStorage.getItem('Role')
    return (
        <div>
           <BrowserRouter>
            {role==='Admin'?<AdminNavbar/> : role==='User'?<UserNavbar/>:null}
           
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/user' element={<Protect> <UserIndex/> </Protect>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/adminproduct' element={<AdminProduct/>}/>
            <Route path='/userproducts' element={<UserProducts/>}/>
            <Route path='/usercart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
           </Routes>
           </BrowserRouter>
        </div>
    )
}

export default App
