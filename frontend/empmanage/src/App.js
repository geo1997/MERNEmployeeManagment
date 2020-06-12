import React from 'react';
import {BrowserRouter as Router , Route} from "react-router-dom";
import NavBar from './components/NavBar'
import EmployeeList from './components/EmployeeList'
import EmployeeAdd from './components/EmployeeAdd'
import EmployeeEdit from './components/EmployeeEdit'

//Routes
function App() {
  return (
    <div className="App">
        <Router>
            <NavBar/>
            <Route path="/" exact component={EmployeeList}/>
            <Route path="/add" exact component={EmployeeAdd}/>
            <Route path="/edit/:id" exact component={EmployeeEdit}/>

        </Router>

    </div>
  );
}

export default App;
