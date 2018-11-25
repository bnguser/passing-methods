import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'max', age: '28' },
      { name: 'manu', age: '29' },
      { name: 'sathish', age: '33'}
    ],
    otherState: 'some other values'
  }
  switchNameHandler = (newName)=> {
   // console.log('was clicked');
    this.setState ({
      persons: [
        { name: newName, age: '28' },
        { name: 'manu', age: '29' },
        { name: 'sathish', age: '38'}
      ]
    })
    }

  render() {
    return (
      <div className="App">
        <h1>Hi, i'm react app</h1>
        <p>This is really working</p>
        <button onClick ={this.switchNameHandler.bind(this,'Maximize')}>Switch Name</button>
        <Person 
        name ={this.state.persons[0].name} 
        age ={this.state.persons[0].age}/>
        <Person 
        name = {this.state.persons[1].name} 
        age ={this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this, 'Max!')}>My hobbies : Racing</Person>
        <Person 
        name = {this.state.persons[2].name} 
        age = {this.state.persons[2].age}/>
      </div>
    );
  }
}
  
export default App;