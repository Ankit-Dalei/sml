import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './Model'


const Contact = () => {
  return (
    <>
      
      <div className="contact_body">
        <div className="contact_form_section">
          <div className="get_in_touch_contact_section">
            <span className="get_con">GET IN TOUCH</span>
            <span className="con_con">Contact.</span>
          </div>
          <form action="" className="form_contact">
            <label for="">Your Name</label>
            <input type="text"/>
            <span></span>
            <label for="">Your Email</label>
            <input type="text"/>
            <span></span>
            <label for="">Your Number</label>
            <input type="text"/>
            <span></span>
            <label for="">Your Feedback</label>
            <div className="m_i_c">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <span></span>
            <button className="btn_can">send</button>
          </form>
        </div>
        <div className="contact3d_structure">
          <Canvas camera={{ fov: 35, zoom: 3, near: 1, far: 1000 }}>
            <Model/>
          </Canvas>
        </div>
      </div>
    </>
  )
}

export default Contact
