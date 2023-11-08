import React from 'react'

const ForgotPassword = () => {
  return (
    <>
      <div className="Home_back_body">
        <img src="./img/bg.png"/>
      </div>
      <div className="Sign_body">
        <div className="Sign_body_section">
            {/* <div class="Sign_body_left"> */}
            <form action="" className="Sign_body_left">
                <div className="sign_left_head">
                    Forgot Password
                </div>
                <div className="sign_left_inputs">
                    <div className="sign_left_input">
                        <i className="fa-solid fa-user"></i>
                        <input type="text" placeholder='Email'/>
                    </div>
                    <div className="sign_left_input">
                        <i className="fa-solid fa-lock"></i>
                        <input type="text" placeholder='Password'/>
                    </div>
                    <div className="sign_left_input">
                        <i className="fa-solid fa-lock"></i>
                        <input type="text" placeholder='Re-Password'/>
                    </div>
                </div>
                <div className="sign_left_terms">
                    <input type="checkbox" name="" id=""/> I read and agree to Terms & Conditions
                </div>
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

export default ForgotPassword
