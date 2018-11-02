import React, { Component } from 'react';
import './App.css';

import Controls from './Components/Controls/Controls';
import TaskList from './Components/TaskList/TaskList';
import Modal from './Components/Modal/Modal';

import tasksData from './data/Data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {}
    }
  };

  getTask = (task) => {
    this.setState({ task });
  }

  render() {
    return (
      <div className="App">
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Controls />
            {/* DISPLAY */}
            <TaskList tasksData={tasksData} getTask={this.getTask} />
          </div>
        </div>
        {/* The Modal */}
        <Modal task={this.state.task} />
      </div>
    );
  }
}

export default App;
