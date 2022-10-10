import React, {Component} from "react";
import InputTask from "./InputTask";
import InformationTask from "./InformationTask";
import FilterTask from "./FilterTask";
import Task from "./Task";
import DeleteTasks from "./DeleteTasks";


class ToDoListApp extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        toDo : [
            {id:1, description: 'Task 1', completed: false},
            {id:2, description: 'Task 2', completed: false},
            {id:3, description: 'Task 3', completed: true},
            {id:4, description: 'Task 4', completed: false}
        ]
      }
    }

    
    handleTask = (inputData) =>{
      this.setState({toDo: inputData})
    }

    deleteTasks = (id) => {
      let newTasks = this.state.toDo.filter( task => task.id !== id)
      this.setState({toDo :newTasks})
    }

    markCompleted = (id) => {
      let newTask = this.state.toDo.map( task => {
        if( task.id === id) {
          return { id : task.id, description : task.description, completed : !task.completed}
        } 
        return task;
      })
      this.setState({toDo : newTask});
    }

    deleteAll = () => {
      this.setState({toDo : []})
    }

    deleteCompleted = () => {
      let newTasks = this.state.toDo.filter( task => {return !task.completed})
      this.setState({toDo :newTasks})
    }

    filterTaskAll = () => {
      let newTasks = this.state.toDo.map( task => {return task})
      this.setState({toDo :newTasks})
    }
    filterTaskCompleted = () => {
      let newTasks = this.state.toDo.filter( task => {return task.completed})
      this.setState({toDo :newTasks})
    }
    filterTaskNotCompleted = () => {
      let newTasks = this.state.toDo.filter( task => {return task.completed})
      this.setState({toDo :newTasks})
    }

    render() { 
      return (
        <div className="containerToDoList">
          <InputTask toDo = {this.state.toDo} parentCallBack = {this.handleTask}/>
          <InformationTask toDo = {this.state.toDo}/>
          <FilterTask 
             filterTaskAll = {this.filterTaskAll}
             filterTaskCompleted = {this.filterTaskCompleted}
             filterTaskNotCompleted = {this.filterTaskNotCompleted}
          />
          <Task 
            toDo = {this.state.toDo} 
            deleteTask = {this.deleteTasks} 
            markCompleted = {this.markCompleted}/>
          <DeleteTasks deleteAll = {this.deleteAll} deleteCompleted = {this.deleteCompleted}/>
        </div>
      );
    }
  }
   
export default ToDoListApp;