import React, { Component } from 'react'
import EmployeeServices from '../services/EmployeeServices'

export default class UpdateEmployeeComponent extends Component {

constructor(props){
    super(props)
 this.state ={
    id: this.props.match.params.id,
    
    empName : '',
    job: ' ',
    sal: ' ',
   deptNo: ' ',
    mrgNo : ' '
}


this.changeEmployeeNameHandler = this.changeEmployeeNameHandler.bind(this);
this.changeEmployeeJobHandler = this.changeEmployeeJobHandler.bind(this)
this.changedeptNoHandler = this.changedeptNoHandler.bind(this);
this.changeEmployeeMrgNoHandler= this.changeEmployeeMrgNoHandler.bind(this);
this.changeEmployeeSalaryHandler = this.changeEmployeeSalaryHandler.bind(this);
this.updateEmployee= this.updateEmployee.bind(this);

}


changeEmployeeNameHandler = (event) =>{

  this.setState({empName: event.target.value})

}


changeEmployeeJobHandler = (event) =>{

  this.setState({job: event.target.value})

}


changeEmployeeSalaryHandler = (event) =>{

  this.setState({sal: event.target.value})

}


changedeptNoHandler = (event) =>{

  this.setState({deptNo: event.target.value})

}


changeEmployeeMrgNoHandler = (event) =>{

  this.setState({mrgNo: event.target.value})

}


componentDidMount(){

  EmployeeServices.getEmployeeById(this.state.id).then((Response)=>
     {
        let employee = Response.data;
        console.log( "response"+ employee);
        this.setState({empName: employee.empName,
           job:employee.job, sal: employee.sal, deptNo: employee.deptNo,
            mrgNo: employee.mrgNo});
          });
}


updateEmployee = (event) =>{

    event.preventDefault();
    let employee ={empName : this.state.empName , job: this.state.job, 
        sal: this.state.sal,deptNo: this.state.deptNo, mrgNo: this.state.mrgNo};
        console.log("employee: " + JSON.stringify(employee))
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeServices.updateEmployee(employee, this.state.id).then(Response =>
          
          {
            this.props.history.push('/employees')

          });

}

      

cancel(){
     this.props.history.push('/')
}

  
  render() {
    return (
      <div>
        <div className='container'>
             <div className='row'>
                  <div className='card col-md-6 offset-md-3 offset-md-3'>
                          <h3 className='text-center'> Update Employee</h3>
                            <div className='card-body'>
                                   <form>
                                       <div className='form-group'>
                                        <label>Employee Name : </label>
                                         <input type="text"   className='form-control' value={this.state.empName}
                                         onChange={this.changeEmployeeNameHandler}></input>
                                           </div>

                                           <div className='form-group'> 
                                         <label>Employee Job : </label>
                                         <input type="text"   className='form-control' value={this.state.job}
                                         onChange={this.changeEmployeeJobHandler}></input>
                                         </div>
                                          
                                          <div className='form-group'> 
                                         <label>Employee Salary : </label>
                                         <input type="text"   className='form-control' value={this.state.sal}
                                         onChange={this.changeEmployeeSalaryHandler}></input>
                                          </div>

                                         <div className='form-group'> 
                                         <label>Employee DeptNo. : </label>
                                         <input type="text"  className='form-control' value={this.state.deptNo}
                                         onChange={this.changedeptNoHandler}></input>
                                         </div>

                                        <div className='form-group'> 
                                         <label>Employee MrgNo. : </label>
                                         <input type="text" className='form-control' value={this.state.mrgNo}
                                         onChange={this.changeEmployeeMrgNoHandler}></input>
                                        </div>
                                           <button className='btn btn-success mr-1' onClick={this.updateEmployee}>Save</button>
                                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{margin: "10px"}}>Cancel</button>
                                   </form>
                            </div>

                  </div>

             </div>



        </div>
      </div>
    )
  }
}

