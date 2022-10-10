import {
  faCheck,
  faCircle,
  faPeace,
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
        {this.props.toDo && this.props.toDo.length ? "" : "No Task..."}
        {this.props.toDo.map((task, index) => {
          return (
            <React.Fragment>
              <div className="taskBg">
                <div className={task.completed ? "done" : ""}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.description}</span>
                </div>
                <div className="iconsWrap">
                  <span onClick={(e) => this.props.markCompleted(task.id)}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  {task.completed ? null : (
                    <span>
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}
                  <span onClick={() => this.props.deleteTask(task.id)}>
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
