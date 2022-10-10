import React, { Component } from "react";

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
            <div className="task__container">
                <div className="col1">
                    <input type="text" className="" name="task" value={this.state.newToDo} onChange= { (e) => {this.setState({newToDo : e.target.value})} }placeholder="Saisir une tache"/>
                </div>
                <div className="col2">
                    <button onClick={this.addTask} className="">
                    Add Task
                    </button>
                </div>
            </div>
    );
  }
}

export default InputTask;
