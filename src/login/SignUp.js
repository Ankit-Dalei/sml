import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'



const SignUp = () => {
    const navigate=useNavigate();
    const [userSignin,SetUserSignin]=useState({
                Username:"",
                Email:"",
                Password:""
                // check:"false"
            })
    const Signin=((e)=>{
        e.preventDefault();
        const sr={...userSignin}
        const username=sr.Username
        const email=sr.Email
        const password=sr.Password
        const role=false
        // const check=sr.check
        if (password.length < '8') {
            // console.log(Password)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Enter Password Greater than 8"
              });
        } 
        else if (password.length > '10') {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Enter Password less than 10"
              });
        }
        else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            // console.log(Email)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Enter Valid Email"
              });
            //   ccg
        }
        else {
            const data={username,email,password,role}
            // console.log(data)
            fetch('http://localhost:8080/api/post',{
                method:"post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(data)
            }).then(()=>{
                // console.log("sent")
                navigate("/")

                
            }).catch((e)=>{
                console.log(e)
            })
        }
    })
    // const check=(()=>{
    //     if (userSignin.check === "false") {
    //         SetUserSignin("true")
    //         console.log('object')
    //     }
    //     else{
    //         SetUserSignin("false")
    //         console.log('lkjhgfcx')
    //     }
    // })
    const schange=((e)=>{
        const name=e.target.name
        const value=e.target.value
        // console.log(name , value)
        SetUserSignin({...userSignin, [name]:value})
    })
  return (
    <>
      <div className="Home_back_body">
        <img src="./img/bg.png" alt="./img/bg.png"/>
      </div>
      <div className="Sign_body">
        <div className="Sign_body_section">
            {/* <div class="Sign_body_left"> */}
            <form className="Sign_body_left" onSubmit={Signin}>
                <div className="sign_left_head">
                    Create new account
                </div>
                <div className="sign_left_inputs">
                    <div className="sign_left_input">
                        <i className="fa-solid fa-user"></i>
                        <input type="text" placeholder='Username' value={userSignin.Username} onChange={schange} name='Username' required/>
                    </div>
                    <div className="sign_left_input">
                        <i className="fa-solid fa-envelope"></i>
                        <input type="text" placeholder='Email' value={userSignin.Email} onChange={schange} name='Email' required/>
                    </div>
                    <div className="sign_left_input">
                        <i className="fa-solid fa-lock"></i>
                        <input type="text" placeholder='Password' value={userSignin.Password} onChange={schange} name='Password' required/>
                    </div>
                </div>
                {/* <div className="sign_left_terms">
                    <input type="checkbox" name="check" id="" value={userSignin.check} onChange={schange} onClick={check} required /> I read and agree to Terms & Conditions
                </div> */}
                <div className="sign_left_button_foot">
                    <button>CREATE ACCOUNT</button>
                </div>
            </form>
            {/* </div> */}
            <div className="Sign_body_right">
                
            </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
