import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
        <div className="card">
            <div className="left">
                <h1>Lama Social.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, minus sunt illo architecto itaque provident tempore porro facilis sed blanditiis totam, atque quam placeat earum soluta nobis corrupti quod labore.</p>
                <span>Already have an account?</span>
                <Link to={'/login'}>
                <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                 <form>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Username'/>
                    <input type="password" placeholder='Password' />
                    <input type="password" placeholder='Email' />
                    <button>Register</button>
                 </form>
            </div>
        </div>
    </div>
  )
}

export default Register