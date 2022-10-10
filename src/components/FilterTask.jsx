import React, {Component} from "react";

class FilterTask  extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <div className="filter-btns">
                <button onClick={this.props.filterTaskAll}>All</button>
                <button onClick={this.props.filterTaskCompleted}>Termine</button>
                <button onClick={this.props.filterTaskNotCompleted}>En cours</button>
            </div>
        );
    }
}

export default FilterTask;