import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Guido', age: '22'},
      {name: 'Petre', age: '21'}
    ]
  }

  switchNameHandler = (namePar) => {

    this.setState({
      persons: [
      {name: namePar, age: '22'},
      {name: 'PetreRic', age: '21'}
      ]
    });

  }

  nameChangedHandler = (event) => {

    this.setState({
      persons: [
      {name: event.target.value, age: '22'},
      {name: 'PetreRic', age: '21'}
      ]
    });

  }

  render() {            //si usa className per accedere alle classi CSS perchè class è già usato per la classe JS
    return (
      <div className="App">
        <h1> Ciao, sono Guido e sviluppo un'App React</h1>
        <p> Ricorda che questo non è testo HTLM ma JSX, 
            per questo si usa className per riferirsi alle classi CSS </p>
        <button onClick={this.switchNameHandler.bind(this, 'Guidonguido')}>Visualizza i Nickname</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age} 
          click = {this.switchNameHandler.bind(this, 'Guidongui')} 
          changed = {this.nameChangedHandler}> Mi piacciono gli unicorni </Person>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age} 
          click = {() => this.switchNameHandler('Ho stato io')} />
        <Person/>

        <div>
          <h1> Assignment for base syntax section</h1>
            <ol>
              <li>Create TWO new components: UserInput and UserOutput</li>
              <li>UserInput should hold an input element, UserOutput two paragraphs</li>
              <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
              <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
              <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
              <li>Add a method to manipulate the state (=> an event-handler method)</li>
              <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
              <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
              <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
              <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
          </ol>
        </div>
      </div>
    );

    /*  In realtà è codice JSX, il compilatore lo compila come
        return React.createElement('div', {className: App}, React.createElement('h1', null,'Ciao...'));
    */
  }
}

export default App;
