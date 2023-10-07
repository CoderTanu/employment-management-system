import React, { Component } from 'react'
import EmployeeServices from '../services/EmployeeServices'
 class ListEmpleComponent extends Component {


    constructor(props){
    super(props)

    this.state={
      employees: []
    }


   this.addEmployee =this.addEmployee.bind(this);
   this.updateEmployee=this.updateEmployee.bind(this);
   this.deleteEmployee=  this.deleteEmployee.bind(this);
  //  this.ViewEmployee =  this.ViewEmployee.bind(this);

}

componentDidMount(){
    EmployeeServices.getEmployees().then((Response) => {
        
   
   this.setState({employees : Response.data});
 

    })


   
}

addEmployee(){
  console.log("inside add method")
  this.props.history.push("/add-Details")
}

updateEmployee(id){
 this.props.history.push(`/update-Details/${id}`)
}

deleteEmployee(id){

   EmployeeServices.deleteEmployee(id).then( Response => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
}

ViewEmployee(id){
   this.props.history.push(`/view-employee/${id}`);
}



  render() {
    return (
      <div>
     
     <h2  className="text-center">Employees List</h2>

          <div>
           <button type="button"  class="btn btn-primary " onClick={this.addEmployee}>Add Employees</button>
        </div> 


     <div className="row">
    <table className="table table-striped table-bordered">
<thead>
<tr>
    <th>Employee Name</th>
    <th>Employee Job</th>
    <th>Employee Salary</th>
    <th>Employee DeptNo</th>
    <th>Employee MrgNo</th>  
     <th>Actions</th>  
</tr>

</thead>

<tbody>
   {
this.state.employees.map (

emp =>
<tr key = {emp.id}>
<td>{emp.empName}</td>
<td>{emp.job}</td>
<td>{emp.sal}</td>
<td>{emp.deptNo}</td>
<td>{emp.mrgNo}</td>

<td>
 <button type="button"  class="btn btn-info " onClick={() => this.updateEmployee(emp.id)} style={{margin:"8px"}}>Update</button>
  <button type="button"  class="btn btn-danger " onClick={this.deleteEmployee(emp.id)} style={{margin:"8px"}}>Delete</button>
  <button type="button"  class="btn btn-info" onClick={this.ViewEmployee(emp.id)} style={{margin:"8px"}} >View</button>
</td>
</tr>
)
}

</tbody>

</table>


          </div>

      </div>
    )
}
}



export default ListEmpleComponent