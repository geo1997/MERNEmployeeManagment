import React, {Component} from 'react';
import axios from 'axios'
import {API} from '../config'


class EmployeeAdd extends Component {
    constructor(props) {
        super(props);

        this.state ={
            firstName:'',
            lastName:'',
            email:'',
            basicSal:'',

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }


    componentDidMount() {
        axios.get(`${API}/employee/`+this.props.match.params.id)
            .then(res =>{
                this.setState({
                    firstName:res.data.firstName,
                    lastName:res.data.lastName,
                    email:res.data.email,
                    basicSal:res.data.basicSal
                })
            })
            .catch((err) =>{
                console.log(err)
            })
    }


    onChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        const employee={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            basicSal: this.state.basicSal
        }

        axios.put(`${API}/update/emp/`+this.props.match.params.id,employee)
            .then(res => {
                console.log(res.data.content)
                window.alert("Updated Employee")
            })

        this.setState({
            firstName:'',
            lastName:'',
            email:'',
            basicSal:''
        })
         window.location= '/'
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h2>
                        <div className="row">
                            <div className="col-md-6 mt-5 mx-auto">
                                <form noValidate onSubmit={this.onSubmit}>
                                    <h1 className="h3 mb-3 font-weight-normal">
                                        <p align="center">Edit Employee</p>
                                    </h1>
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="firstName"
                                            placeholder="Enter First Name"
                                            value={this.state.firstName}
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="LastName">Last Name </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="lastName"
                                            placeholder="Enter Last Name"
                                            value={this.state.lastName}
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Enter Email"
                                            value={this.state.email}
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="basicSal">Basic Salary </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="basicSal"
                                            placeholder="Enter Basic Salary"
                                            value={this.state.basicSal}
                                            onChange={this.onChange}/>
                                    </div>

                                    <button className="btn btn-lg btn-primary btn-block">
                                        Edi Employee
                                    </button>
                                </form>
                            </div>
                        </div>
                    </h2>

                </div>
            </div>
        );
    }
}

export default EmployeeAdd;