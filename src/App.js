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
  
    nameChangedHandler = (event)=>{
      this.setState ({
        persons: [
          { name: 'maximize', age: '28' },
          { name: event.target.value, age: '29' },
          { name: 'sathish', age: '38'}
        ]
      })
    }
    deletePersonHandler = (personIndex)=>{
      const persons = this.state.persons;
      persons.splice(personIndex,1);
      this.setState({persons: persons})

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

    let persons = null;

    if(this.state.showPersons)
    {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person 
            click = {()=>this.deletePersonHandler(index)}
            name = {person.name}
            age = {person.age}/>
            })}
         </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, i'm react app</h1>
        <p>This is really working</p>
        <button 
        style = {style}
        onClick ={this.togglePersonHandler}>Switch button</button>
        {persons}            
        
      </div>
    );
  }
}
  
export default App;