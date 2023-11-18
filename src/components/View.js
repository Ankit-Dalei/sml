import React from 'react'
import ViewWatch from './ViewWatch'
import Suggestions from './Suggestions'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'

const View = (props) => {
    const location = useLocation();
    const receivedData = location.state?.data || 'No data received';
    const [id,catagory]=receivedData
    console.log(id,catagory)
return (
<>
{/* <Nav/> */}
    <div className="View_body">
        <div className="view_watch_sections_view">
            <ViewWatch id={id}/>
        </div>
        <div className="Suggestion_section_view">
            <Suggestions catagory={catagory}/>
        </div>
    </div>
</>
)
}

export default View