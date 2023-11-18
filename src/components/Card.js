import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const imageSrc = `data:image/png;base64,${props.img}`;

  return (
    <div className="card_body">
      <Link to={`/view/${props.id}`} key={props.id} className="CARD_img_space">
        <img src={imageSrc} alt={props.name} />
      </Link>
      <div className="card_foot">
        <div className="card_foot_logo">
          <Link to={`./${props.id}`}>
            <div className="card_foot_logos">
              <img src="./img/cutm.png" alt="" />
            </div>
          </Link>
        </div>
        <Link to={`./${props.id}`} className="card_foot_rest">
          <div className="card_foot_name">{props.name}</div>
          <div className="card_foot_publisher">{props.publisher}</div>
          <div className="card_foot_view_days">
            <span>{props.views}</span>
            <span>{props.time}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
