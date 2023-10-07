import React, { Component } from 'react'

import EmployeeServices from '../services/EmployeeServices'


class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeServices.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (

            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee Name:  </label>
                            <div> { this.state.employee.empName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Job: </label>
                            <div> { this.state.employee.job }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Salary </label>
                            <div> { this.state.employee.sal }</div>
                        </div>
                        <div className = "row">
                            <label> Employee DeptNo. : </label>
                            <div> { this.state.employee.deptNo }</div>
                        </div>
                        <div className = "row">
                            <label> Employee MrgNo. : </label>
                            <div> { this.state.employee.mrgNo }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent