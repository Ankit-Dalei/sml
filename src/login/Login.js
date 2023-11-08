import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Login = () => {
    const [userLogin,SetUserLogin]=useState({
        Username:"",
        Password:""
    })
    const login=((e)=>{
        e.preventDefault();
        const lr={...userLogin}
        const Username=lr.Username
        const Password=lr.Password
        

        if (Password.length < '8') {
            // console.log(Password)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Enter Valid Password"
              });
        } 
        else if (Password.length > '10') {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Enter Valid Password"
              });
        }
        else if (!Username.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            // console.log(Email)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Enter Valid Email"
              });
        }
        else {
            const data={Username,Password}
            console.log(data)
        }
    })
    const lchange=((e)=>{
        const name=e.target.name
        const value=e.target.value
        // console.log(name , value)
        SetUserLogin({...userLogin, [name]:value})
    })
  return (
    <>
      <div className="login_body">
        {/* <!-- <div class="login_body_section"> --> */}
        <form action="" className="login_body_section" onSubmit={login}>
            <div className="login_img_sec">
                <img src="./img/lock.png" alt=""/>
            </div>
            <div className="login_button_sec lbbig">
                Login Now
            </div>
            <div className="login_input_sec">
                <label for="">Username*</label>
                <input type="text" placeholder="Enter Your Username" value={userLogin.Username} onChange={lchange} name='Username'/>
            </div>
            <div className="login_input_sec">
                <label for="">Password*</label>
                <input type="text" placeholder="Enter Your Password" value={userLogin.Password} onChange={lchange} name='Password'/>
            </div>
            <div className="login_button_sec">
                <button>LOGIN</button>
            </div>
            <div className="login_footer_sec">
               <Link style={{textDecoration: 'none',color:'rgb(255, 255, 255)'}} to={'./Signup'}><div className="lleft">Don't have an account?</div></Link>
                <Link style={{textDecoration: 'none',color: 'rgb(255, 255, 255)'}} to={'./forgot_password'}><div className="lright">Forgot password?</div></Link>
            </div>
        </form>
        {/* <!-- </div> --> */}
      </div>
    </>
  )
}

export default Login
