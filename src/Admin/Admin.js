import React, { useEffect } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminUpdate from './AdminUpdate'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const navigate=useNavigate();
  useEffect(() => {
  const redirect=setTimeout(()=>{
    navigate('/addAssest');
  },3000)
  }, []);
  return (
    <>
    <div className="admin_body">
      Welcome to admin Page
    </div>
    </>
  )
}

export default Admin
