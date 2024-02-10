import React, { useState } from 'react'
import { server } from '../App'
import axios from 'axios'
import toast from 'react-hot-toast'
import "../styles/signup.scss"
import { Link } from 'react-router-dom'


const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${server}/user/new`, {
                name, email, password
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                })
          toast.success(data.message)
            
        } catch (error) {
            console.log(error)
            
        }

    }


    return (
        <div className="signup-container">
            <form className="signup-form-main" onSubmit={submitHandler}>
                <p className="signup-form-name">
                    <p>Register</p>
                </p>

                <div className="signup-input-items">
                    <input type="text" name="name" id="name" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required /> <br />

                    <input type="email" name="email" id="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />
                    <input type="password" name="password" id="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required /> <br />

                    <div className="form-button">
                        <button type='submit'>Sign up</button>
                    </div>
                </div>
                <div className="login">
                    <p>login <Link to={"/login"} >Here</Link></p>
                </div>

            </form>
        </div>
    )
}

export default Signup