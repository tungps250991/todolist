import React, { Component } from 'react';

class InitializeTask extends Component {
    handleClick = () => {
        this.props.initializeTask();
        window.location.reload();
    }
    render() {
        return (
            <button type="button" className="btn btn-primary my-3" onClick={this.handleClick}>
                <i className="fa fa-pencil-square-o" />
                Khởi tạo task
            </button>
        );
    }
}

export default InitializeTask;