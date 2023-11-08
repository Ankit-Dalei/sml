import React from 'react'
import ViewWatch from './ViewWatch'
import Suggestions from './Suggestions'

const View = () => {
return (
<>
    <div className="View_body">
        <div className="view_watch_sections_view">
            <ViewWatch />
        </div>
        <div className="Suggestion_section_view">
            <Suggestions />
        </div>
    </div>
</>
)
}

export default View