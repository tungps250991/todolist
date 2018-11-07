import React, { Component } from 'react';

class FilterPriority extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priority: -1
        }
    }

    handleFilterProgress = event => {
        this.setState({
            priority: parseInt(event.target.value)
        }, () => {
            this.props.filterTask('priority', this.state.priority);
        });
        // this.props.filterTask('priority', event.target.value);
    }

    render() {
        return (
            <div className="form-group text-left">
                <label htmlFor="sel1">Độ ưu tiên</label>
                <select className="form-control" value={this.state.priority} onChange={this.handleFilterProgress}>
                    <option className="font-weight-bold" value={-1}>Tất cả</option>
                    <option className="text-info font-weight-bold" value={1}>Thấp</option>
                    <option className="text-success font-weight-bold" value={2}>Trung bình</option>
                    <option className="text-danger font-weight-bold" value={3}>Cao</option>
                </select>
            </div>
        );
    }
}

export default FilterPriority;