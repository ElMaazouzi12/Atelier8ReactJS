import React, {Component} from "react";

class InputTask extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="input-container">
                <input type="text" name="task" placeholder="Saisir une tache"/>
                <button>Add</button>
            </div>
        );
    }
}

export default InputTask;