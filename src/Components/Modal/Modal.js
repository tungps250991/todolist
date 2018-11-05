import React, { Component } from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            description: "",
            priority: -1,
            memberIDArr: [],
            labelArr: [],
            status: 1,
        }
    };

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.task !== prevProps.task) {
    //         this.setState(this.props.task);
    //     }
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.isAddNewTask) {
            this.setState({
                id: "",
                name: "",
                description: "",
                priority: -1,
                memberIDArr: [],
                labelArr: [],
                status: 1,
            });
        }
        if (nextProps && nextProps.task && !nextProps.isAddNewTask) {
            this.setState(nextProps.task);
        }
    }

    onSubmit = (event) => {
        // event.preventDefault();
        this.props.addNewTask(this.state);
        this.props.editTask(this.state);
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    memberChange = (newMember) => {
        this.setState({
            memberIDArr: newMember
        });
    }

    labelChange = (newLabel) => {
        this.setState({
            labelArr: newLabel
        });
    }

    render() {
        let task = this.state;
        return (
            <div className="modal fade" id="modalTask">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <form onSubmit={this.onSubmit}>
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">{this.props.isAddNewTask ? "Thêm Task" : "Sửa Task"}</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="taskName">Tên công việc:</label>
                                    <input type="text" className="form-control" id="taskName" name="name" value={task.name} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Mô tả:</label>
                                    <textarea className="form-control" rows={2} id="description" name="description" value={task.description} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="priority">Độ ưu tiên:</label>
                                    <select className="form-control" id="priority" name="priority" value={task.priority} onChange={this.onChange}>
                                        <option value={-1}>Chọn độ ưu tiên</option>
                                        <option value={1}>Thấp</option>
                                        <option value={2}>Trung bình</option>
                                        <option value={3}>Cao</option>
                                    </select>
                                </div>
                                <label>Người thực hiện:</label>
                                <br />
                                <CheckboxGroup name="memberIDArr" checkboxDepth={3} value={this.state.memberIDArr} onChange={this.memberChange}>
                                    <div className="form-check-inline"><label className="form-check-label"><Checkbox value="user_1" /> Nghĩa Văn</label></div>
                                    <div className="form-check-inline"><label className="form-check-label"><Checkbox value="user_2" /> Minh Tuấn</label></div>
                                    <div className="form-check-inline"><label className="form-check-label"><Checkbox value="user_3" /> Trung Hiếu</label></div>
                                    <div className="form-check-inline"> <label className="form-check-label"><Checkbox value="user_4" /> Tấn Khải</label></div>
                                </CheckboxGroup>
                                <br /><br />
                                <label>Nhãn:</label>
                                <br />
                                <CheckboxGroup name="labelArr" checkboxDepth={3} value={this.state.labelArr} onChange={this.labelChange}>
                                    <div className="form-check-inline"><label className="form-check-label"><Checkbox value="Frontend" /> Frontend</label></div>
                                    <div className="form-check-inline"> <label className="form-check-label"><Checkbox value="Backend" /> Backend</label></div>
                                    <div className="form-check-inline"> <label className="form-check-label"><Checkbox value="API" /> API</label></div>
                                    <div className="form-check-inline"> <label className="form-check-label"><Checkbox value="Issue" /> Issue</label></div>
                                </CheckboxGroup>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">{this.props.isAddNewTask ? "Thêm Task" : "Sửa Task"}</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;