import React, { Component } from 'react';

class FilterProgress extends Component {
    handleFilterProgress = (filter) => {
        this.props.filterTask('status', filter);
    }

    render() {
        return (
            <div className="filter filter--progress">
                <ul className="list-unstyled text-left">
                    Lọc
                    <li className="py-1 display-5 lead" onClick={this.handleFilterProgress.bind(this, -1)}>
                        <i className="fa fa-list mr-2" />Tất cả</li>
                    <li className="py-1 display-5 lead" onClick={this.handleFilterProgress.bind(this, 1)}>
                        <i className="fa fa-anchor mr-2" />Chưa tiến hành</li>
                    <li className="py-1 display-5 lead" onClick={this.handleFilterProgress.bind(this, 2)}>
                        <i className="fa fa-spinner mr-2" />Đang tiến hành</li>
                    <li className="py-1 display-5 lead" onClick={this.handleFilterProgress.bind(this, 3)}>
                        <i className="fa fa-check-square-o mr-2" />Hoàn thành</li>
                    <li className="py-1 display-5 lead" onClick={this.handleFilterProgress.bind(this, 4)}>
                        <i className="fa fa-trash-o mr-2" />Hủy bỏ</li>
                </ul>
            </div>
        );
    }
}

export default FilterProgress;
