import React, { Component } from 'react';

import TaskItemLabels from './TaskItemLabels';
import TaskItemPriorities from './TaskItemPriorities';
import TaskItemMembers from './TaskItemMembers';

class TaskItem extends Component {
    render() {
        let { task } = this.props;
        let elmTaskItemLabels = task.labelArr.map((label, index) => {
            return <TaskItemLabels
                label={label}
                key={index}
            />;
        });
        let elmTaskItemMembers = task.memberIDArr.map((member, index) => {
            return <TaskItemMembers
                member={member}
                key={index}
            />;
        });
        return (
            <tr>
                <td className="text-center">1</td>
                <td className="text-center">{task.name}</td>
                <td className="text-center">
                    {elmTaskItemLabels}
                </td>
                <TaskItemPriorities prior={task.priority} />
                <td className="text-center">
                    {elmTaskItemMembers}
                </td>
                <td className="text-center d-flex align-items-center justify-content-center">
                    <button type="button" className="btn btn-outline-primary mt-2">Sửa</button>
                    <div className="form-group ml-2">
                        <label></label>
                        <select className="form-control" name="" id="">
                            <option>Chọn trạng thái</option>
                            <option>Chưa bắt đầu</option>
                            <option>Đang tiến hành</option>
                            <option>Đã hoàn thành</option>
                            <option>Xoá</option>
                        </select>
                    </div>
                </td>
                <td className="text-center">
                    <i className="fa fa-check-square-o mr-2" />
                </td>
            </tr>
        );
    }
}

export default TaskItem;