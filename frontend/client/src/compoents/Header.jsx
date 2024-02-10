import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate } from "react-router-dom"
import "../styles/Header.scss"
import axios from 'axios'
import { server } from '../App'
import toast from 'react-hot-toast'



const Header = () => {

    const [isAuth, setIsAuth] = useState(false)
    const hasReloaded = useRef(false);

    useEffect(() => {
        const checkStatus = async () => {

            const { data } = await axios.get(`${server}/user/profile`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            console.log(data)
            setIsAuth(data.userDetails.loginStatus)



        }
        checkStatus()

    }, [isAuth])





    const toggleMenu = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    const logout = async () => {
        try {
            const { data } = await axios.get(`${server}/user/logout`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            toast.success(data.message)
            window.location.reload()

        } catch (error) {
            toast.error(error.response.data.message)
        }

    }

    const logoutFunction = async () => {
        try {
            logout()
            toggleMenu()
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }



    return (
        <header>
            <nav className='navbar' >
                <Link to={"/"} className="nav-branding">SUYASH.</Link>

                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to={"/"} className="nav-link" onClick={toggleMenu}><p>Home</p></Link>
                    </li>

                    <li className='nav-item'>
                        <Link to={"/about"} className="nav-link" onClick={toggleMenu}><p>About</p></Link>
                    </li>

                    <li className='nav-item'>
                        <Link to={"/allbooks"} className="nav-link" onClick={toggleMenu}><p>demo getAllbooks</p></Link>
                    </li>

                    <li className='nav-item'>
                        <Link to={"/contact"} className="nav-link" onClick={toggleMenu}><p>Contact</p></Link>
                    </li>

                    {/* {
                        isAuth ? <li className='nav-item'>
                            <Link to={"/profile"} className="nav-link" onClick={toggleMenu}><p>Profile</p></Link>
                        </li> : <p>Profile</p>
                    } */}

                    <li className='nav-item'>
                        <Link to={"/profile"} className="nav-link" onClick={toggleMenu}><p>Profile</p></Link>
                    </li>

                    {/* <li className='nav-item'>
                        {
                            // isAuth ? <Link className="nav-link" onClick={logout} ><p onClick={toggleMenu}>Logout</p></Link> : <Link className="nav-link" to={"/login"} ><p onClick={toggleMenu}>Login</p></Link>

                            isAuth ? <button onClick={logoutFunction} >Logout</button> : <Link to={"/login"} ><button onClick={toggleMenu}>login</button></Link>
                        }
                    </li> */}

                </ul>

                <div className="hamburger " onClick={toggleMenu} >
                    <span className="bar" ></span>
                    <span className="bar" ></span>
                    <span className="bar" ></span>
                </div>

                <div className="header-search">
                    <Link to={"/search"} ><p>search</p></Link>
                </div>

            </nav>
        </header>
    )
}

export default Header