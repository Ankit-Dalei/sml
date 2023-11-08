import { click } from '@testing-library/user-event/dist/click'
import React from 'react'

const ViewWatch = () => {
  const zoom=(()=>{
    console.log("call")
    const frame=document.getElementById("frame")
    const cross=document.querySelector("#cross")
      frame.classList.toggle("full");
      cross.classList.toggle("showss");
  })
const back=(()=>{
  const frame=document.getElementById("frame")
    const cross=document.querySelector("#cross")
      frame.classList.remove("full");
      cross.classList.remove("showss");
})
return (
<>
  <div className="viewwatch_body">
    <div className="iframe_section_viewwatch" id='frame'>
      <button><i className="fa-solid fa-reply hide" id='cross' onClick={back}></i></button>
      <iframe src="https://fentonesports.com/test/" frameborder="0" className="iframe"></iframe>
    </div>
    <div className="comment_section_view">
      <div className="csv_viewwatch">
        <div className="chennal_like_etc_section_viewwatch">
          <div className="P_name_viewwatch">
            Lorem ipsum dolor sit amet consectetur  jhgfdfgb
          </div>
          <div className="p_che_li_viewwatch">
            <div className="p_che_li_left_viewwatch">
              <div className="p_logo_viewwatch">
                <img src="./img/cutm.png" alt=""/>
              </div>
              <div className="p_chennel_name_viewwatch">
                <div className="p_name_viewwatch">
                  Centurion University
                </div>
                <div className="p_subscribe_count_viewwatch">
                  62.1K subscribers
                </div>
              </div>
              <div className="p_subscrib_button_viewwatch">
                <button>Subscribe</button>
              </div>
            </div>
            <div className="p_che_li_right_viewwatch">
              <div className="p_che_li_ri_left_viewwatch">
                <div className="P_like_viewwatch">
                  <i className="fa-regular fa-thumbs-up"></i>
                </div>
                <div className="P_dislike_viewwatch">
                  <i className="fa-regular fa-thumbs-down"></i>
                </div>
              </div>
              <div className="p_che_li_ri_center_viewwatch">
                <i className="fa-regular fa-clock"></i> Watch Later
              </div>
              <div className="p_che_li_ri_right_viewwatch" id='zoomm'>
                <i className="fa-solid fa-expand" onClick={zoom}></i>
              </div>
            </div>
          </div>
          <div className="p_description_viewwatch">

          </div>
        </div>
        <div className="comment_input_section_viewwatch">

        </div>
        <div className="comment_display_section">

        </div>
      </div>
    </div>
  </div>
</>
)
}

export default ViewWatch