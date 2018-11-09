import React, { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: -1
        }
    }

    handleSort = event => {
        this.setState({
            sort: event.target.value
        }, () => {
            this.props.sortTask(this.state.sort);
        })
    }

    render() {
        return (
            <div className="form-group text-left">
                <label>Sắp xếp theo công việc</label>
                <select className="form-control" value={this.state.sort} onChange={this.handleSort}>
                    <option value={-1}>Chọn thứ tự</option>
                    <option value="a-z">Từ A đến Z</option>
                    <option value="z-a">Từ Z đến A</option>
                </select>
            </div>
        );
    }
}

export default Sort;