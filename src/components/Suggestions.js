import React from 'react'
import { Link } from 'react-router-dom'


// 
const Suggestions = (props) => {
  const img = `data:image/png;base64,${props.img}`;
  // const sloop=[]
  //   for (let index = 0; index < 10; index++) {
  //     sloop.push(<>
      //  <div className="suggestion_body">
      //   <div className="suggesting_p_img_section">
      //   {/* <Link to={`./`}> */}
      //     <img src="./img/model.jpg" alt=""/>
      //   {/* </Link> */}
      //   </div>
      //   <div className="suggestion_p_des_section">
      //     <div className="suggestion_p_name_section">
      //     {/* <Link to={`./`}> */}
      //       {props.catagory}
      //     {/* </Link> */}
      //     </div>
      //     <div className="suggestioin_p_chennal_name_section">
      //     {/* <Link to={`./`}> */}
      //       CENTURION UNIVERSITY
      //     {/* </Link> */}
      //     </div>
      //     <div className="suggestion_p_chennel_view_section">
      //       <div className="suggestion_p_total_views_section">
      //         1M views . 
      //       </div>
      //       <div className="suggetion_p_time_section">
      //         10 days ago
      //       </div>
      //     </div>
      //   </div>
      //   <div className="suggestion_p_dot_section">
      //     <i class="fa-solid fa-ellipsis-vertical"></i>
      //   </div>
      //  </div>
      // </>);
    // }
  return (
    <>
       {/* {sloop} */}
       <div className="suggestion_body">
        <div className="suggesting_p_img_section">
        {/* <Link to={`./`}> */}
          <img src={img} alt=""/>
        {/* </Link> */}
        </div>
        <div className="suggestion_p_des_section">
          <div className="suggestion_p_name_section">
          {/* <Link to={`./`}> */}
            {props.name}
          {/* </Link> */}
          </div>
          <div className="suggestioin_p_chennal_name_section">
          {/* <Link to={`./`}> */}
            CENTURION UNIVERSITY
          {/* </Link> */}
          </div>
          <div className="suggestion_p_chennel_view_section">
            <div className="suggestion_p_total_views_section">
              1M views . 
            </div>
            <div className="suggetion_p_time_section">
              10 days ago
            </div>
          </div>
        </div>
        <div className="suggestion_p_dot_section">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
       </div>
    </>
  )
}

export default Suggestions
