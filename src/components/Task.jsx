import {
  faCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task-container">
        {this.props.toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, index) => {
          return (
            <React.Fragment>
              <div className="taskBg">
                <div className={task.completed ? "done" : "fall"}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.description}</span>
                </div>
                <div className="iconsWrap">
                  <span onClick={(e) => this.props.markCompleted(task.id)}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  {task.completed ? null : (
                    <span onClick={() =>this.props.handleForUpdate({
                      id : task.id,
                      description : task.description,
                      completed : task.completed ? true : false
                    })}>
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}
                  <span className="delete-btn" onClick={() => {this.props.deleteTask(task.id);
                    }}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Task;
