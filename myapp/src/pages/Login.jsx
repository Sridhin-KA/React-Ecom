import React,{useState} from 'react'
import { useNavigate  } from 'react-router-dom'


function Login() {
    const[user,setUser]=useState({Email:'',Password:''})

    const navigate = useNavigate()
    const handledata=(e)=>{
        setUser({
            ...user,[e.target.name]:e.target.value
        })

    }
    const Handlelogin=()=>{

            const adminmail = 'admin@gmail.com'
            const adminpass = 'admin'
            if(!user.Email && !user.Password){
                alert('Both fields required')
                return
            }

            if (user.Email === adminmail && user.Password === adminpass){
                localStorage.setItem('Role','Admin')
                alert('Admin Login Successful')
                window.location.reload()
                navigate('/admin')
                return
            }

            let userD=JSON.parse(localStorage.getItem('User'))
            console.log(userD);
            
            const exist=userD.find(i=>i.email===user.Email && i.password===user.Password)

            if(exist){
                 localStorage.setItem('loggeduser',JSON.stringify(user))
                 localStorage.setItem('Role','User')
                alert('Login Successful')
                window.location.reload()
                navigate('/user')
                return
            }else{
                alert('Account not found')
                navigate('/register')
            }

        }
  return (
    <>
        <div className='log-container'>
            <h2 className='log'>Login</h2>

            <div className='log-group'>
                <label>E-mail: </label>
                <input className='log' type='email' placeholder='Enter Your E-mail' name='Email' onChange={handledata}/><br/>
            </div>

            <div className='log-group'>
                 <label>Password: </label>
                 <input className='log' type='password' placeholder='Enter Password' name='Password' onChange={handledata}/><br/>
            </div>
            

            <button className='btn' onClick={Handlelogin}> Login</button>

        </div>
        
    </>
  )
}

export default Login