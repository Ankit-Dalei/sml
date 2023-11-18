import React from 'react';
import { Link,useNavigate  } from 'react-router-dom';

const Card = (props) => {
  const navigate = useNavigate();
  const imageSrc = `data:image/png;base64,${props.img}`;
  const dataToSend=[]
  dataToSend.push(props.id)
  dataToSend.push(props.catagory)
  const Nextpage=(()=>{
    navigate('/views', { state: { data: dataToSend } });
    // console.log("object")
  })

  return (
    <div className="card_body">
      {/* <Link to={{ pathname: '/views', state: { data: dataToSend } }}  className="CARD_img_space"> */}
      <div className="CARD_img_space" onClick={Nextpage}>
        <img src={imageSrc} alt={props.name} />
      </div>  
      {/* </Link> */}
      <div className="card_foot">
        <div className="card_foot_logo">
          {/* <Link to={`./${props.id}`}> */}
            <div className="card_foot_logos">
              <img src="./img/cutm.png" alt="" />
            </div>
          {/* </Link> */}
        </div>
        {/* <Link to={`./${props.id}`} className="card_foot_rest"> */}
        <div className="card_foot_rest" onClick={Nextpage}>
          <div className="card_foot_name">{props.name}</div>
          <div className="card_foot_publisher">{props.publisher}</div>
          <div className="card_foot_view_days">
            <span>{props.views}</span>
            <span>{props.time}</span>
          </div>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Card;
