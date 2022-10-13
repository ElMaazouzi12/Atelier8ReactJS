import React from "react";

function FilterTask(props) {
    

    return ( 
        <div className="filter-btns">
            <button onClick={props.filterTaskAll}>All</button>
            <button onClick={props.filterTaskCompleted}>Termine</button>
            <button onClick={props.filterTaskNotCompleted}>En cours</button>
        </div>
    )
}



export default FilterTask;