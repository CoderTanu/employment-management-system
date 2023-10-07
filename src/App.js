
import './App.css';
import ListEmpleComponent from './Components/ListEmpleComponent';
import FooterComponent from './Components/FooterComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import HeaderComponent from './Components/HeaderComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './Components/ViewEmployeeComponent';

function App() {
  return (

    <div>
       <Router>
               <HeaderComponent/>
               <div className='container'>
                   <Switch>
                    <Route path="/" exact component={ListEmpleComponent}></Route>
                    <Route path="/employees" exact component={ListEmpleComponent}></Route>
                    <Route path="/add-Details"  component={CreateEmployeeComponent}></Route>
                    <Route path="/Update-Details/:id"  component={UpdateEmployeeComponent}></Route>
                    <Route path="/view-employee/:id"  component={ViewEmployeeComponent}></Route>
                   </Switch>
             
       </div>
         <FooterComponent/>
    </Router>
  </div>
  );
}

export default App;
