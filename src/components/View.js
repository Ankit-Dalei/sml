import React, { useEffect, useState } from 'react'
import ViewWatch from './ViewWatch'
import Suggestions from './Suggestions'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'

const View = (props) => {
    const location = useLocation();
    const receivedData = location.state?.data || 'No data received';
    const [id,catagory,contentlink,name]=receivedData
    // console.log(id,catagory)

    // const data=

    const [data,setData]=useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Replace 'your-api-endpoint' with the actual API endpoint
          const response = await fetch(`http://localhost:8080/api/content/${catagory}`);
          const Data = await response.json();
  
          // Step 4: Update state with the received data
          setData(Data);
          console.log(Data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData(); // Invoke the fetchData function
    }, []);

    const loops=data.map(item => (
        <Suggestions img={ item.thumbnail } name={item.name} id={item.id} contentlink={item.contentlink} description={item.description} catagory={item.catagory} likes={item.likes} Datetime={item.Datetime}/>
      ))
return (
<>
{/* <Nav/> */}
    <div className="View_body">
        <div className="view_watch_sections_view">
            <ViewWatch id={id} contentlink={contentlink} name={name}/>
        </div>
        <div className="Suggestion_section_view">
            {loops}
        </div>
    </div>
</>
)
}

export default View