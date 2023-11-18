import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  const obj={
    "Nav":<i className="fa-solid fa-house"></i>,
    "likes":<i className="fa-regular fa-thumbs-up"></i>,
    "watch_later":<i className="fa-solid fa-clock-rotate-left"></i>,
    "Contact":<i className="fa-solid fa-shapes"></i>,
    "history":<i className="fa-regular fa-clock"></i>,
    // "x":<i class="fa-solid fa-list"></i>,
    // "y":<i class="fa-solid fa-layer-group"></i>,
    // "z":<i class="fa-solid fa-microchip"></i>,
    "VR":<i className="fa-solid fa-vr-cardboard"></i>
  }
  const updatedNums = Object.entries(obj).map(([lis,i])=>{
      return <Link to={`./${lis}`}><li>{i}</li></Link>;
  });

  return (
    <>
    <div className="SidebarBody">
        <ul type='none'>
            {updatedNums}
        </ul> 
    </div>
    </>
  )
}

export default Sidebar
