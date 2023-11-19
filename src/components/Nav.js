import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Link, Outlet, Route } from 'react-router-dom'
import Space from './Space'
import Profile from './Profile'
import Main from './Main'

const Nav = () => {

  const img=<img src="./img/3d-smart-learning-high-resolution-logo-transparent.png" alt="img"/>
  const [show, setShow]=useState("true")
  const [showpro, setShowpro]=useState("false")
  // const img =()=>{
  //   return <img src="./img/3d-smart-learning-high-resolution-logo-transparent.png"/>;
  // }
  const profileclick=(()=>{
    if (showpro ==="true") {
      setShowpro("false")
      // console.log(show)
    } else {
      setShowpro("true")
      
      // console.log(show)
    }
  })
  const clicked=(()=>{
    if (show ==="true") {
      setShow("false")
      // console.log(show)
    } else {
      setShow("true")
      // console.log(show)
    }
  })
  return (
    <>
      <div className="Navbody">
        <div className="Navleft">
            <div className="Nav_sidebar_manipulator" onClick={clicked}><i className="fa-solid fa-list"></i></div>
            <div className="Navlogo">{img}</div>
        </div>
        <div className="Navcenter">
            <div className="Nav_search_manipulator">
                <input type="text" placeholder="Search"/>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
        <div className="Navright">
            <div className="Nav_Day_night">
              <img src="./img/gramtarag.png"/>
            </div>
            <div className="login">
              {/* <Link to={"/profile"}> */}
              <button onClick={profileclick}><i className="fa-solid fa-user"></i></button>
              {/* </Link> */}
            </div>
        </div>
      </div>
      {show ==="true" && <Sidebar/>}
      {show ==="false"}

      {showpro ==="true" && <Profile />}
      {showpro ==="false"}
      
      <Space/>
      <Outlet/>
      {/* <Main/> */}
      {/* <Route index element={<Main />} /> */}
    </>
  )
}

export default Nav
