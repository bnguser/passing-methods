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

    nameChangedHandler = (event)=>{
      this.setState ({
        persons: [
          { name: 'maximize', age: '28' },
          { name: event.target.value, age: '29' },
          { name: 'sathish', age: '38'}
        ]
      })
    }

  render() {
    const style = {
      backgroundColor: 'white',
      padding: '8px',
      cursor: 'Pointer',
      border: '1px solid blue',
      font: 'inherit'
    };

    return (
      <div className="App">
        <h1>Hi, i'm react app</h1>
        <p>This is really working</p>
        <button onClick ={()=>this.switchNameHandler('Maximize')}>Switch Name</button>
        <Person 
        name ={this.state.persons[0].name} 
        age ={this.state.persons[0].age}/>
        <Person 
        name = {this.state.persons[1].name} 
        age ={this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this, 'Max!')}
        changed = {this.nameChangedHandler}>My hobbies : Racing</Person>
        <Person 
        name = {this.state.persons[2].name} 
        age = {this.state.persons[2].age}/>
      </div>
    );
  }
}
  
export default App;