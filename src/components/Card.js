import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
      <div className="card_body">
        <Link to={`./${props.id}`} className="CARD_img_space">
        {/* <div className="CARD_img_space"> */}
         {props.img} 
        {/* </div> */}
        </Link>
        <div className="card_foot">
            <div className="card_foot_logo">
            <Link to={`./${props.id}`}>
                <div className="card_foot_logos">
                    <img src="./img/cutm.png" alt=""/>
                </div>
            </Link>
            </div>
            {/* <div className="card_foot_rest"> */}
            <Link to={`./${props.id}`} className="card_foot_rest">
                <div className="card_foot_name">{props.name}</div>
                <div className="card_foot_publisher">{props.publisher}</div>
                <div className="card_foot_view_days">
                    <span>{props.views}</span>
                    <span>{props.time}</span>
                </div>
            </Link>
            {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default Card
