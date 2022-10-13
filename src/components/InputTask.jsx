import React, { Component } from "react";
import {
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class InputTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newToDo: "",
    };
  }

  addTask = (e) => {
    e.preventDefault();
    if (this.state.newToDo) {
      let num = this.props.toDo.length + 1;
      let newTask = {
        id: num,
        description: this.state.newToDo,
        completed: false,
      };

      this.props.parentCallBack([...this.props.toDo, newTask]);
      this.setState({ newToDo: "" });
    }
  };

  render() {
    return (
            <div className="row">
                <div className="col input-group mb-3">
                    <input type="text" className="form-control" name="task" value={this.state.newToDo} onChange= { (e) => {this.setState({newToDo : e.target.value})} }placeholder="Saisir une tache"/>
                </div>
                <div className="col-auto">
                    <button onClick={this.addTask} className="btn btn-primary">
                      <FontAwesomeIcon icon = {faPlus}/>
                    </button>
                </div>
            </div>
    );
  }
}

export default InputTask;
