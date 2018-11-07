import React, { Component } from 'react';

class TaskItemStatusSelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: props.status
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.status) {
            this.setState({
                status: nextProps.status
            });
        }
    }

    onChange = event => {
        this.setState({
            status: event.target.value
        }, () => {
            this.props.editTaskStatus(this.props.task, this.state.status)
        });
        // this.props.editTaskStatus(this.props.task, event.target.value);
    }

    render() {
        return (
            <div className="form-group ml-2">
                <label></label>
                <select className="form-control" name="status" id="" value={this.state.status} onChange={this.onChange}>
                    <option value={1}>Chưa tiến hành</option>
                    <option value={2}>Đang tiến hành</option>
                    <option value={3}>Đã hoàn thành</option>
                    <option value={4}>Xoá</option>
                </select>
            </div>
        );
    }
}

export default TaskItemStatusSelectBox;