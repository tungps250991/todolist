import React from 'react';

const TaskItemMembers = (props) => {
    return (
        <img src={`./img/${props.member}.jpg`} className="user" alt={props.member} />
    );
};

export default TaskItemMembers;