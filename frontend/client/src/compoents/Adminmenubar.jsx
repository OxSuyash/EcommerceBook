import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Adminmenubar.scss"
import { server } from '../App'
import axios from 'axios'
import toast from 'react-hot-toast'

const Adminmenubar = () => {

  const adminLogout = async () => {
    try {
      const {data} = await axios.get(`${server}/admin/logout`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      toast.success(data.message)
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className="left-dash">
      <div className="admin-nav">
        {/* <Link to={"/dashboard/users"} ><button className='admin-btn' >All Users</button></Link>
            <Link to={"/dashboard/books"} ><button className='admin-btn' >All Books</button></Link>
            <Link to={"/dashboard/newbook"} ><button className='admin-btn'>+Book</button></Link>
            <Link to={"/dashboard/pending"} ><button className='admin-btn'>Pending Orders</button></Link> */}
        <Link to={"/dashboard"} className='adnav-item'><p>Dashboard</p></Link>
        <Link to={"/dashboard/users"} className='adnav-item'><p>All Users</p></Link>
        <Link to={"/dashboard/books"} className='adnav-item'><p>All Books</p></Link>
        <Link to={"/dashboard/newbook"} className='adnav-item'><p>+book</p></Link>
        <Link to={"/dashboard/pending"} className='adnav-item'><p>Pending orders</p></Link>
        <button className='admin-btn' onClick={adminLogout}>Admin logout</button>
      </div>

    </div>
  )
}

export default Adminmenubar