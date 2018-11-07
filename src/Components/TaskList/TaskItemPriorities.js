// import React from 'react';

// const TaskItemPriorities = (props) => {
//     const priorClassArr = {
//         '1' : {
//             class: 'text-info font-weight-bold',
//             text: 'Thấp'
//         },
//         '2' : {
//             class: 'text-success font-weight-bold',
//             text: 'Trung bình'
//         },
//         '3' : {
//             class: 'text-danger font-weight-bold',
//             text: 'Cao'
//         }
//     };
//     let priorClass = priorClassArr[props.prior].class;
//     let priorText = priorClassArr[props.prior].text;

//     return (
//         <td className={priorClass}>{priorText}</td>
//     );
// };

// export default TaskItemPriorities;

import React, { Component } from 'react';

class TaskItemPriorities extends Component {
    priorClassArr = {
        '1': {
            class: 'text-info font-weight-bold',
            text: 'Thấp'
        },
        '2': {
            class: 'text-success font-weight-bold',
            text: 'Trung bình'
        },
        '3': {
            class: 'text-danger font-weight-bold',
            text: 'Cao'
        }
    };

    constructor(props){
        super(props);
        this.state = {
            prior: this.priorClassArr[props.prior]
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.prior) {
            this.setState({
                prior: this.priorClassArr[nextProps.prior]
            })
        }
    }

    render() {
        let priorClass = this.state.prior.class;
        let priorText = this.state.prior.text;
        return (
            <td className={priorClass}>{priorText}</td>
        );
    }
}

export default TaskItemPriorities;