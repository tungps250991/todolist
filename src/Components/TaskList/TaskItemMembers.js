// import React from 'react';

// const TaskItemMembers = (props) => {
//     return (
//         <img src={`./img/${props.member}.jpg`} className="user" alt={props.member} />
//     );
// };

// export default TaskItemMembers;

import React, { Component } from 'react';

class TaskItemMembers extends Component {
    constructor(props){
        super(props);
        this.state = {
            member: props.member
        }
    };

    render() {
        return (
            <img src={`./img/${this.state.member}.jpg`} className="user" alt={this.state.member} />
        );
    }
}

export default TaskItemMembers;