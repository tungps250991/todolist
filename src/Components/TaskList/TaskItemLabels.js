import React from 'react';

const TaskItemLabels = (props) => {
    const colorArr = {
        'Frontend': '#389E0D',
        'Backend': '#722ED1',
        'API': '#13C2C2',
        'Issue': '#CF1322',
    }
    return (
        <i className="fa fa-circle" style={{ color: colorArr[props.label] }} />
    );
};

export default TaskItemLabels;
