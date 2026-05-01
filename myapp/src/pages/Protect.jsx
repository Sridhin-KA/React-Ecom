import React from 'react'
import { Navigate } from 'react-router-dom'

function Protect({children}) {
    const user = JSON.parse(localStorage.getItem('loggeduser'))

    return user ? children : <Navigate to='/login' />
}

export default Protect
