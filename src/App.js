import React from 'react'; 
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Services from './components/pages/Services';
import InsuranceForm from './components/pages/InsuranceForm';
import SignUp from './components/pages/SignUp';




function App() {
  return (
    <>
    <Router>
     <NavBar/> 
     <Switch>
       <Route path="/" exact component = {Home}/>
       <Route path="/services" exact component = {Services}/>
       <Route path="/forms-insurance" exact component = {InsuranceForm}/>
       <Route path="/sign-up" exact component = {SignUp}/>

       
     </Switch>
     </Router>
    </>
  );

    
}

export default App;

// 8:00