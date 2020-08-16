import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Project from './components/project'
import Resume from "./components/Resume"
class App extends Component {
  render(){
  return (
    <>
       <Switch>
        <Route exact path="/" render={()=> <Home />}/>  
        <Route exact path="/resume" render={()=> <Resume />}/> 
        <Route exact path="/project/" render={() => <Project />} />
       </Switch>
    </>
  );
  }
}

export default App;
