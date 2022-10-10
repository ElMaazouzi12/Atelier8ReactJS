import React, {Component} from "react";


class DeleteTasks extends Component {
    constructor(props) {
        super(props);
    }



    render() { 
        return ( 
            <div className="deletetask-container">
                <button onClick={this.props.deleteAll}>Supprimer tous</button>
                <button onClick={this.props.deleteCompleted}>Supprimer Termine</button>
            </div>
        );
    }
}

export default DeleteTasks;