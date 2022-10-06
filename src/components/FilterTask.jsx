import React, {Component} from "react";

class FilterTask  extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="filter-btns">
                <button>All</button>
                <button>Termine</button>
                <button>En cours</button>
            </div>
        );
    }
}

export default FilterTask;