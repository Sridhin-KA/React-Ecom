import React,{useState} from 'react'
import { useNavigate  } from 'react-router-dom'

function Register() {
    const [user,setUser] = useState({email:'',password:''})

    const navigate = useNavigate()

    const handlechange = (e)=>{
        setUser({
            ...user,[e.target.name]:e.target.value
        })
    }
    const handlesubmit =()=>{
        if (!user.email && !user.password){
            alert('all fields are required')
            return
        }
        let users = JSON.parse(localStorage.getItem('User')) || []
        console.log(typeof(users));
        

        const exist = users.find(i=>i.email === user.email )

        if (exist){
            alert('email already registerd')
            return
        }
        users.push(user)
        localStorage.setItem('User',JSON.stringify(users))
        alert('Registration complete')
        navigate('/login')
    }

    return (
        <div>
            <input type="email" name='email' onChange={handlechange} placeholder='enter email' />
            <br />
            <input type="password" name='password' onChange={handlechange} placeholder='Enter password' />
            <br />
            <button onClick={handlesubmit}>Register</button>
            
        </div>
    )
}

export default Register
