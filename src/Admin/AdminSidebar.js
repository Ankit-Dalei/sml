import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <>
      <div className="adminsidebar_body">
        <div className="adminsidebar_section">
        <div className="adminsidebar_top">
          <i class="fa-regular fa-face-smile"></i>
          Admin Adaa
        </div>
        <div className="adminsidebar_bottom">
          <ul type="none">
            <Link to={'/addAssest'} style={{textDecoration: 'none', color:'white'}}><li>Add Assest</li></Link>
            <Link to={'/UpdateAssest'} style={{textDecoration: 'none', color:'white'}}><li>Update Assest</li></Link>
            <Link to={'/AdminUsers'} style={{textDecoration: 'none', color:'white'}}><li>Users</li></Link>
            <Link to={'/AdminContacts'} style={{textDecoration: 'none', color:'white'}}><li>Contacts</li></Link>
          </ul>
        </div>
        </div>
        <Outlet/>
      </div>
      
    </>
  )
}

export default AdminSidebar
