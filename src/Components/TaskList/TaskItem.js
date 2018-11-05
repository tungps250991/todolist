import React, { Component } from 'react';

import TaskItemLabels from './TaskItemLabels';
import TaskItemPriorities from './TaskItemPriorities';
import TaskItemMembers from './TaskItemMembers';
import TaskItemStatusLabel from './TaskItemStatusLabel';
import TaskItemStatusSelectBox from './TaskItemStatusSelectBox';

class TaskItem extends Component {
    eventModify = () => {
        this.props.openEditTask(this.props.task);
    };

    render() {
        let { task, index } = this.props;
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
        const taskIndex = index + 1;

        return (
            <tr>
                <td className="text-center">{taskIndex}</td>
                <td className="text-center">{task.name}</td>
                <td className="text-center">
                    {elmTaskItemLabels}
                </td>
                <TaskItemPriorities prior={task.priority} />
                <td className="text-center">
                    {elmTaskItemMembers}
                </td>
                <td className="text-center d-flex align-items-center justify-content-center">
                    <button type="button" className="btn btn-outline-primary mt-2" data-toggle="modal" data-target="#modalTask" onClick={this.eventModify}>Sửa</button>
                    <TaskItemStatusSelectBox status={task.status} />
                </td>
                <td className="text-center">
                    <TaskItemStatusLabel status={task.status} />
                </td>
            </tr>
        );
    }
}

export default TaskItem;