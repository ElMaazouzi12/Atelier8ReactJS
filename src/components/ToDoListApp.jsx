import React, {Component} from "react";
import DeleteTasks from "./DeleteTasks";
import FilterTask from "./FilterTask";
import InformationTask from "./InformationTask";
import InputTask from "./InputTask";
import Task from "./Task";

class ToDoListApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task : [
                {descreption : 'task1', completed : false}
            ]
        }
    }

    render() { 
        return ( 
            <div className="container">
                {this.state.map(item => {
                    <div>
                        <InputTask opt = {item}/>
                        <InformationTask />
                        <FilterTask />
                        <Task />
                        <DeleteTasks />
                    </div>
                })}
            </div>
        );
    }
}

export default ToDoListApp;