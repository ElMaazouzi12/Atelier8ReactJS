import React, { Component } from "react";

class InformationTask extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="containerInfoTask">
        <div>Nombre Totale : {this.props.toDo.length}</div>
        <div>
          Nombre Termine :
          {
            this.props.toDo.filter((item) => {
              return item.completed === true;
            }).length
          }
        </div>
        <div>
          Nombre En cours :
          {
            this.props.toDo.filter((item) => {
              return item.completed === false;
            }).length
          }
        </div>
      </div>
    );
  }
}

export default InformationTask;
