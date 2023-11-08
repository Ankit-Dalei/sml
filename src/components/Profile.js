import React from 'react'

const Profile = () => {
  return (
    <>
      <div className="profile_body">
        <div className="profile_body_inner">
          <div className="profile_img">
            <img src="./img/p.jpg"/>
          </div>
          <div className="profile_name_section">
            <div className="profile_name_header">
              Ankit Dalei
            </div>
            <div className="profile_name_footer">
              <div className="profile_min_div_sec">
                <div className="profile_min_div_sec_left">
                  Name
                </div>
                <div className="profile_min_div_sec_right">
                  : Ankit Dalei
                </div>
              </div>
              <div className="profile_min_div_sec">
                <div className="profile_min_div_sec_left">
                  DOB
                </div>
                <div className="profile_min_div_sec_right">
                  : 52-20-5005
                </div>
              </div>
              <div className="profile_min_div_sec">
                <div className="profile_min_div_sec_left">
                  E-mail
                </div>
                <div className="profile_min_div_sec_right">
                  : Ankit Dalei@xyz
                </div>
              </div>
              <div className="profile_min_div_sec">
                <div className="profile_min_div_sec_left">
                  Phone
                </div>
                <div className="profile_min_div_sec_right">
                  : 1234567890
                </div>
              </div>
              <div className="profile_min_div_sec ri">
                <button>Update</button>
              </div>
            </div>
          </div>
          <div className="profile_log_out_section">
            <button>Logout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
