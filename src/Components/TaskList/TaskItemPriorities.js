import React from 'react';

const TaskItemPriorities = (props) => {
    const priorClassArr = {
        1 : {
            class: 'text-info font-weight-bold',
            text: 'Thấp'
        },
        2 : {
            class: 'text-success font-weight-bold',
            text: 'Trung bình'
        },
        3 : {
            class: 'text-danger font-weight-bold',
            text: 'Cao'
        }
    };
    let priorClass = priorClassArr[props.prior].class;
    let priorText = priorClassArr[props.prior].text;

    return (
        <td className={priorClass}>{priorText}</td>
    );
};

export default TaskItemPriorities;