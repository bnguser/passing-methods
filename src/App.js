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
    otherState: 'some other values',
    showPersons: false
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

    togglePersonHandler =()=>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
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
        <button 
        style = {style}
        onClick ={this.togglePersonHandler}>Switch button</button>
        
        {this.state.showPersons === true ?
        <div>
          
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
          
       
        </div> : null
        }
        
      </div>
    );
  }
}
  
export default App;