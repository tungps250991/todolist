import React, { Component } from 'react';

class TaskItemStatusLabel extends Component {
    statusArr = {
        1: "fa-anchor", // Chua tien hanh
        2: "fa-spinner", // Dang bat dau
        3: "fa-check-square-o", // Hoan thanh
        4: "fa-trash-o", // Huy bo
    }

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
            })
        }
    }

    render() {
        let icon = this.statusArr[this.state.status];
        return (
            <i className={`fa ${icon} mr-2`} />
        );
    }
}

export default TaskItemStatusLabel;