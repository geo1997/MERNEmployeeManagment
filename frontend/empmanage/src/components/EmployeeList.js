import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {API} from "../config";

//table render with employee details - functional component
const Employee = props =>(
    <tr>
        <td>
            {props.employee.firstName}
        </td>
        <td>
            {props.employee.lastName}
        </td>
        <td>
            {props.employee.email}
        </td>
        <td>
            {props.employee.basicSal}
        </td>
        <td>
          <Link to={"/edit/"+props.employee._id}>Edit</Link> | <a href="#" onClick={() => {props.deleteEmployee(props.employee._id)}}>Delete</a>
        </td>
        
    </tr>
)


class EmployeeList extends Component {

    constructor(props) {
        super(props);

        this.deleteEmployee = this.deleteEmployee.bind(this);


        this.state = {employees :[]}
    }

    //before page render get employee list
componentDidMount() {
        axios.get(`${API}/employees`)
            .then(res =>{
                this.setState({employees:res.data})
            })
            .catch((err) =>{
                console.log(err)
            })
}

//employee delete by passing id
    deleteEmployee(id){
        axios.delete(`${API}/delete/emp/`+id)
            .then(res => console.log(res.data));
        this.setState({
            employees: this.state.employees.filter(el=> el._id !== id)
        })
    }

    //render employee details
    employeeList(){
        return this.state.employees.map(eachEmp =>{
            return <Employee employee={eachEmp} deleteEmployee={this.deleteEmployee} key={eachEmp._id}/>
        })
    }

    render() {
        return (
            <div className="container">
                <h1 align="center"  style={{marginTop:20}}>Employee List</h1>
                <h4>
                    <table className="table " style={{marginTop:50}}>
                        <thead className="thead-light" >
                        <tr>
                            <th> First Name</th>
                            <th> Last Name</th>
                            <th> Email</th>
                            <th>Basic Salary</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.employeeList()}
                        </tbody>
                    </table>
                </h4>
            </div>
        );
    }
}

export default EmployeeList;