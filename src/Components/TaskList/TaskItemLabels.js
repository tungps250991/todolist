// import React from 'react';

// const TaskItemLabels = (props) => {
//     const colorArr = {
//         'Frontend': '#389E0D',
//         'Backend': '#722ED1',
//         'API': '#13C2C2',
//         'Issue': '#CF1322',
//     }
//     return (
//         <i className="fa fa-circle" style={{ color: colorArr[props.label] }} />
//     );
// };

// export default TaskItemLabels;

import React, { Component } from 'react';

class TaskItemLabels extends Component {
    colorArr = {
        'Frontend': '#389E0D',
        'Backend': '#722ED1',
        'API': '#13C2C2',
        'Issue': '#CF1322',
    }

    constructor(props) {
        super(props);
        this.state = {
            label: props.label
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.label) {
            this.setState({
                label: nextProps.label
            })
        }
    }
    
    render() {
        let color = this.colorArr[this.state.label];
        return (
            <i className="fa fa-circle" style={{ color: color }} />
        );
    }
}

export default TaskItemLabels;