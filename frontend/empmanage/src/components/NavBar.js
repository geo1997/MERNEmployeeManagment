import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Link} from 'react-router-dom'


class NavBar extends Component {
    render() {
        return (
            <div >
                <Navbar bg="dark" variant="dark" >
                    <Navbar.Brand href="#home">EmployeeTracker</Navbar.Brand>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto ">
                            <li className="nav-item ">
                              <Link to="/" className="nav-link">Employees</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add" className="nav-link">New Employee</Link>
                            </li>
                            <li className="nav-item">

                            </li>

                        </ul>
                    </div>

                </Navbar>
            </div>
        );
    }
}

export default NavBar;