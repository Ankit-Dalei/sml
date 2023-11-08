import React, { useState } from 'react'
import Login from '../login/Login'
import { Link } from 'react-router-dom'

const Home = () => {
  const [showpro, setShowpro]=useState("false")
  // const img =()=>{
  //   return <img src="./img/3d-smart-learning-high-resolution-logo-transparent.png"/>;
  // }
  const profileclick=(()=>{
    if (showpro ==="true") {
      setShowpro("false")
      // console.log(showpro)
    } else {
      setShowpro("true")
      // console.log(showpro)
    }
  })
  return (
    <>
      <div className="Home_back_body">
      <img src="./img/bg.png"/>
      </div>
      <div className="home_body">
        <div className="home_nav">
          {/* <Link to={'./login'}> */}
          <button onClick={profileclick}> LogIn </button>
          {/* </Link> */}
        </div>
        <div className="homemain-banner">

        <div className="homebanner-left">
    <h1>Master In 3D Architecher Join AR VR</h1>
    <h4>From only $199.View</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </div>
        <div className="homebanner-right">
    <img src="./img/shap.png" alt=""/>
        </div>
        </div>
        <div className="homeabout">
        <h1>Start using 3D Smart Learning Platform Now</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores cupiditate debitis cum tempore invento lorem20</p>
        </div>
        <div className="homemain-price">
        <div className="homepricing">
    <div className="homepricing-left">
        <img src="./img/shap.png" alt=""/>
    </div>
    <div className="homepricing-right">
      <div className="hr_section">
        <h1>1M+</h1>
        <h2>Numbers of subscribers</h2>
      </div>
      <div className="hr_section">
        <h3>19.9USD <span>/ year</span> </h3>
        <h4>30-DAY <span>REFUND GUARANTEE</span> </h4>
      </div>
      <div className="hr_section">
      <Link style={{textDecoration: 'none',color:'rgb(255, 255, 255)'}} to={'./Signup'}>
        <button>SignUP Now</button>
      </Link>
      </div>
    </div>
        </div>
        </div>
        <div className="home_demo_content_section">
          <div className="home_3d_struc_cards">
            <div className="home_3d_struc_card"></div>
            <div className="home_3d_struc_card"></div>
            <div className="home_3d_struc_card"></div>
            <div className="home_3d_struc_card"></div>
            <div className="home_3d_struc_card"></div>
            <div className="home_3d_struc_card"></div>
            <div className="home_3d_struc_card"></div>
            <div className="home_3d_struc_card"></div>
          </div>
        </div>
        <div className="footer_home">
          © 2023 CUTM™. All Rights Reserved.
        </div>
      </div>
      {showpro ==="true" && <Login/>}
      {showpro ==="false"}
    </>
  )
}

export default Home
