import React from 'react'
import { Link } from 'react-router-dom';

const Courses = () => {
    const obj={
        "CSE":"CSE",
        "BSE":"BSE",
        "EEE":"EEE",
        "ECE":"ECE",
        "EC":"ECE",
        "EE":"ECE",
        "CE":"ECE",
        "E":"ECE",
        "C":"ECE",
        "ECEih":"ECE",
        "EjhgCE":"ECE",
        "EhgCE":"ECE",
        "Aerospace":"Aerospace",
        "Aerospae":"Aerospace",
        "Aerospce":"Aerospace",
        "Aeroace":"Aerospace",
        "Aespace":"Aerospace",
        "rospace":"Aerospace",
        "Aospace":"Aerospace",
        "Aspace":"Aerospace",
        "space":"Aerospace",
        "Aerace":"Aerospace",
        "Aerce":"Aerospace",
        "Aece":"Aerospace",
        "Biology":"Biology"
      }
      const Coursesr = Object.entries(obj).map(([lis,i])=>{
          return <Link to={`./${lis}`}><li>{i}</li></Link>;
      });
  return (
    <>
      <div className="courses_body">
        <ul type='none'>
            {Coursesr}
        </ul>
      </div>
    </>
  )
}

export default Courses
