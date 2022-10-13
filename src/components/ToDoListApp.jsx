import React, {Component} from "react";
import InputTask from "./InputTask";
import InformationTask from "./InformationTask";
import FilterTask from "./FilterTask";
import Task from "./Task";
import DeleteTasks from "./DeleteTasks";
import UpdateForm from "./UpdateForm";


class ToDoListApp extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        toDo : [
            {id:1, description: 'Task 1', completed: false},
            {id:2, description: 'Task 2', completed: false},
            {id:3, description: 'Task 3', completed: true},
            {id:4, description: 'Task 4', completed: false}
        ],
        updateData : ''
      }
    }

    

    handleTask = (inputData) =>{
      this.setState({toDo: inputData})
    }

    filterTask = (inputData) =>{
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

    
      // Cancel update
  ///////////////////////////
  cancelUpdate = () => {
    this.setState({updateData : ''})
  }

  // Change task for update
  ///////////////////////////
  changeTask = (e) => {
    let newEntry = {
      id: this.state.updateData.id,
      description: e.target.value,
      completed: this.state.updateData.completed ? true : false
    }
    this.setState({updateData : newEntry});
  }

  // Update task
  ///////////////////////////
  updateTask = () => {
    let filterRecords = [...this.state.toDo].filter( task => task.id !== this.state.updateData.id );
    let updatedObject = [...filterRecords, this.state.updateData]
    this.setState({toDo : updatedObject})
    this.setState({updateData : ''})
  }

  handleForUpdate = (data) => {
   return this.setState({updateData : data})
  }

    render() { 
      return (
        <div className="containerToDoList">
          {this.state.updateData && this.state.updateData ? (
            <UpdateForm 
            updateData={this.state.updateData}
            changeTask={this.changeTask}
            updateTask={this.updateTask}
            cancelUpdate={this.cancelUpdate}
          />

          ):(
            <InputTask toDo = {this.state.toDo}  parentCallBack = {this.handleTask}/>
          )}
          
          <InformationTask toDo = {this.state.toDo}/>
          <FilterTask 
             toDo = {this.state.toDo}
             filterTask = {this.filterTask}
          />
          {this.state.toDo && this.state.toDo.length ? "" : "No Task..."}
          <Task 
            toDo = {this.state.toDo} 
            deleteTask = {this.deleteTasks} 
            markCompleted = {this.markCompleted}
            handleForUpdate = {this.handleForUpdate}

            />
          <DeleteTasks deleteAll = {this.deleteAll} deleteCompleted = {this.deleteCompleted}/>
        </div>
      );
    }
  }
   
export default ToDoListApp;