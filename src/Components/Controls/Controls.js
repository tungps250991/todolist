import React, { Component } from 'react';

import FilterProgress from './FilterProgress';
import FilterLabel from './FilterLabel';
import FilterPriority from './FilterPriority';
import Sort from './Sort';
import InitializeTask from "./InitializeTask";

class Controls extends Component {
    handleOpen = () => {
        this.props.openAddNewTask();
    }

    render() {
        return (
            <div className="col-md-3 text-center px-0">
                <div className="header header--left d-flex align-items-center">
                    <img src="./img/user_1.jpg" className="ml-2 user" alt="" />
                    <h3 className="text-white d-inline font-weight-light ml-2">Lê Quang Song</h3>
                </div>
                <button type="button" className="btn my-3 btn--newTask" data-toggle="modal" data-target="#modalTask" onClick={this.handleOpen}>
                    <i className="fa fa-pencil-square-o" />
                    Tạo Task mới
                </button>
                <InitializeTask initializeTask={this.props.initializeTask} />
                {/* Filter */}
                <div className="px-3">
                    <FilterProgress />
                    <FilterLabel />
                    <FilterPriority />
                    <Sort />
                </div>
            </div>
        );
    }
}

export default Controls;