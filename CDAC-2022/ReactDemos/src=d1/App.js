import { Component } from 'react';
import './App.css';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import Calc from './Calc';

//Stateless Components are functions that has no data in them. They simply contain XML content which will be rendered to the Actual DOM. 
//Statefull  Components are classes that derive from Component class of React and will data to display, set and even modify it. These components can have logic of the data output. 

function MyButton(props){
  return(
    <button>{props.content}</button>
  )
}

class App extends Component {
  onClick(event) {
    alert("Button was clicked")
    event.preventDefault();
  }

  render(){
    return (
      <div>
      {/* <h1>Hello from React App!!!</h1> */}
        <AppHeader/>    
        {/* <h3>Other sections of the App will appear here!!</h3> */}
        <Calc/>
        <MyButton handler="{this.onClick}" content="Apple123"/>
        <AppFooter company="Phaniraj.Inc" year="2021"/>
      </div>
    );
  }
}

export default App;
