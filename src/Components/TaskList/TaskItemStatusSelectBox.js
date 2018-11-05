import React, { Component } from 'react';

class TaskItemStatusSelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: props.status
        }
    }

    onChange = event => {
        this.setState({
            status: event.target.value
        });
    }

    render() {
        return (
            <div className="form-group ml-2">
                <label></label>
                <select className="form-control" name="status" id="" value={this.state.status} onChange={this.onChange}>
                    <option value={1}>Chưa bắt đầu</option>
                    <option value={2}>Đang tiến hành</option>
                    <option value={3}>Đã hoàn thành</option>
                    <option value={0}>Xoá</option>
                </select>
            </div>
        );
    }
}

export default TaskItemStatusSelectBox;