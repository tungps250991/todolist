import React, { Component } from 'react';
import './App.css';

import Controls from './Components/Controls/Controls';
import TaskList from './Components/TaskList/TaskList';
import Modal from './Components/Modal/Modal';

import tasksData from './data/Data';
import randomID from 'random-id';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {},
      tasks: [],
      isAddNewTask: true
    }
  };

  initializeTask = () => {
    localStorage.setItem("tasksData", JSON.stringify(tasksData));
  }

  componentDidMount() {
    // console.log("componentDidMount");
    let jsonTasks = JSON.parse(localStorage.getItem("tasksData"));
    if (jsonTasks) {
      this.setState({
        tasks: jsonTasks
      })
    }
  }

  // componentWillMount() {
  //   // console.log("componentWillMount");
  //   // This will deprecate soon
  // }

  addNewTask = (task) => {
    if (this.state.isAddNewTask) {
      let jsonTasks = JSON.parse(localStorage.getItem("tasksData"));
      task.id = randomID(5);
      task.priority = parseInt(task.priority);
      jsonTasks = [...jsonTasks, task];
      this.setState({
        tasks: jsonTasks,
      });
      localStorage.setItem("tasksData", JSON.stringify(jsonTasks));
    }
  }

  openAddNewTask = () => {
    this.setState({
      task: {},
      isAddNewTask: true
    });
  }

  editTask = (task) => {
    if (!this.state.isAddNewTask) {
      let jsonTasks = JSON.parse(localStorage.getItem("tasksData"));
      for (let element of jsonTasks) {
        if (element.id === task.id) {
          element.name = task.name;
          element.description = task.description;
          element.priority = task.priority;
          element.memberIDArr = task.memberIDArr;
          element.labelArr = task.labelArr;
          element.status = parseInt(task.status);
        }
      }
      this.setState({
        tasks: jsonTasks,
      });
      localStorage.setItem("tasksData", JSON.stringify(jsonTasks));
    }
  }

  openEditTask = (task) => {
    this.setState({
      task: task,
      isAddNewTask: false
    });
  }

  editTaskStatus = (task, status) => {
    let jsonTasks = JSON.parse(localStorage.getItem("tasksData"));
    for (let element of jsonTasks) {
      if (element.id === task.id) {
        element.status = status;
      }
    }
    this.setState({
      tasks: jsonTasks
    });
    localStorage.setItem("tasksData", JSON.stringify(jsonTasks));
  }

  filterTask = (filterType, filter) => {
    let jsonTasks = JSON.parse(localStorage.getItem("tasksData"));
    let filteredJsonTasks = jsonTasks.filter(element => {
      let expression = false;
      switch (filterType) {
        case "status":
        case "priority":
          expression = element[filterType] === filter || filter === -1;
          break;
        case "label":
          expression = element.labelArr.includes(filter);
          break;
        default:
          break;
      }
      return expression;
    });
    this.setState({
      tasks: filteredJsonTasks
    });
  }

  render() {
    // console.log("render");
    return (
      <div className="App">
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Controls initializeTask={this.initializeTask} openAddNewTask={this.openAddNewTask} filterTask={this.filterTask} />
            {/* DISPLAY */}
            <TaskList tasksData={this.state.tasks} openEditTask={this.openEditTask} editTaskStatus={this.editTaskStatus} />
          </div>
        </div>
        {/* The Modal */}
        <Modal task={this.state.task} addNewTask={this.addNewTask} editTask={this.editTask} isAddNewTask={this.state.isAddNewTask} />
      </div>
    );
  }
}

export default App;
