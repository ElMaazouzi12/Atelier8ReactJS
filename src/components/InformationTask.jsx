import React, {Component} from "react";

class InformationTask extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="numbers-container">
                <div>Nombre Totale : {}</div>
                <div>Nombre Termine : {}</div>
                <div>Nombre En cours : {}</div>
            </div>
        );
    }
}

export default InformationTask;