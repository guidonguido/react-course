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
          click = {this.switchNameHandler.bind(this, 'Guidongui')} > Mi piacciono gli unicorni </Person>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age} 
          click = {() => this.switchNameHandler('Ho stato io')} />
        <Person/>
      </div>
    );

    /*  In realtà è codice JSX, il compilatore lo compila come
        return React.createElement('div', {className: App}, React.createElement('h1', null,'Ciao...'));
    */
  }
}

export default App;
