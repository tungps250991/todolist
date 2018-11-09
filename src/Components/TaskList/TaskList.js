import React, { Component } from 'react';

import TaskItem from './TaskItem';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr: ''
        }
    }

    handleSearch = event => {
        this.setState({
            searchStr: event.target.value
        }, () => {
            this.props.filterTask('search', this.state.searchStr);
        });
    }

    render() {
        let { tasksData, openEditTask, editTaskStatus } = this.props;
        let elmTaskItemms = tasksData.map((task, index) => {
            return <TaskItem
                task={task}
                key={index} // Cannot use key as prop
                openEditTask={openEditTask}
                index={index}
                editTaskStatus={editTaskStatus}
            />;
        });
        return (
            <div className="col-md-9 px-0">
                <div className="container-fluid px-0">
                    <div className="row header header--right d-flex align-items-center mx-0">
                        <div className="col-md-6">
                            <div className=" d-flex justify-content-between">
                                <h3 className="text-left ml-2 ">Danh sách công việc</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group text-left my-0">
                                <input type="text" className="form-control" placeholder="Tìm kiếm công việc" onChange={this.handleSearch} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Công việc</th>
                                <th className="text-center">Nhãn</th>
                                <th className="text-center">Độ ưu tiên</th>
                                <th className="text-center">Người thực hiện</th>
                                <th className="text-center">Xử lý</th>
                                <th className="text-center">Tình trạng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elmTaskItemms}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TaskList;