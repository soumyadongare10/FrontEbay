// import logo from './logo.svg';
// import { BrowserRouter as Router,Route,Switch, Redirect } from "react-router-dom";
//  import Footer from './Components/Footer/Footer';
// import Login from './Components/Login/Login';
// import EmployeeForm from './Components/EmployeeForm/EmployeeForm';
// import AttendenceForm from './Components/AttendenceForm/AttendenceForm';
// import Card from './Components/Card/Card';
// import Salary from './Components/Salary/Salary';
// import Dashboard from './Components/Dashboard/Dashboard';
// import HeaderPre from './Components/HeaderPre/HeaderPre';
// import Dummy from './Components/Dummy/Dummy';

// function App() {
//   return (
//     <div >
//        <Router>
//              <Switch>
//              <Route exact path="/" component={Login}/>
//             <Route exact path="/dashboard" component={​() =>localStorage.getItem('token') ? <Dashboard/> : <Redirect to="/"/>}/>​

//             <Route exact path="/Attendence" component={​() =>localStorage.getItem('token') ? <AttendenceForm/> : <Redirect to="/"/>}/>​
//             <Route exact path="/EmployeeForm" component={​() =>localStorage.getItem('token') ? <EmployeeForm/> : <Redirect to="/"/>}/>​
//             <Route exact path="/salary" component={​() =>localStorage.getItem('token') ? <Salary/> : <Redirect to="/"/>}/>​
//              </Switch> 
//           <Footer/> 
//         </Router> 
//     </div>
//   );
// }

// export default App;



import logo from './logo.svg';
import { BrowserRouter as Router,Route,Switch,Redirect } from "react-router-dom";
 import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import EmployeeForm from './Components/EmployeeForm/EmployeeForm';
import AttendenceForm from './Components/AttendenceForm/AttendenceForm';
import Card from './Components/Card/Card';
import Salary from './Components/Salary/Salary';
import Dashboard from './Components/Dashboard/Dashboard';
import HeaderPre from './Components/HeaderPre/HeaderPre';
import Dummy from './Components/Dummy/Dummy';

function App() {
  return (
    <div >
       <Router>
             <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/dashboard" component={() => localStorage.getItem('token') ? <Dashboard /> : <Redirect to="/" />} />
            <Route exact path="/Attendence" component={() => localStorage.getItem('token') ? <AttendenceForm /> : <Redirect to="/" />} />
            <Route exact path="/EmployeeForm" component={() => localStorage.getItem('token') ? <EmployeeForm /> : <Redirect to="/" />} />
            <Route exact path="/salary" component={() => localStorage.getItem('token') ? <Salary /> : <Redirect to="/" />} />
  
          </Switch> 

          
             <Footer/> 
        </Router> 
    </div>
  );
}

export default App;

