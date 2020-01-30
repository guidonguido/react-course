import React, { Component } from 'react';
import './App.css';
//import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';
import Person from './Person/Person';

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : '#44c767'} ;
    border-radius:28px;
    border:1px solid #18ab29;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:14px;
    padding:16px 31px;
    text-decoration:none;
    text-shadow:0px 1px 0px #2f6627;
    margin: 10px;
    
    &:hover {
    background-color: ${props => props.alt ? 'salmon' : '#5cbf2a'}; 
    }

    &:active {
    position:relative;
    top:1px;
  }
  
`;

class App extends Component {
  state = {
    persons: [
      {name: 'Guido', age: '22'},
      {name: 'Petre', age: '21'}
    ],

    personsToIterate: [
      {key: '1', name: 'Guido', age: '22'},
      {key: '2', name: 'Petre', age: '21'},
      {key: '3', name: 'Giorgio', age: '22'},
      {key: '4', name: 'Gabi', age: '21'}
    ],

    showPersons : false
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

  nameInputHandler = (event, key) => {
    const personIndex = this.state.personsToIterate.findIndex(p => { 
      return p.key === key;
    });

    const person = {...this.state.personsToIterate[personIndex]}; 
    //spread operator così non midifichiamo la persona originale ma ne creiamo un'altra
    person.name = event.target.value;

    const personsToIterate = [...this.state.personsToIterate];
    personsToIterate[personIndex] = person;


    this.setState({
      personsToIterate:personsToIterate
      }
    )
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (index) => {
    const personsToIterate = [...this.state.personsToIterate];
    personsToIterate.splice(index, 1);
    this.setState({personsToIterate : personsToIterate});
  }

  render() {            //si usa className per accedere alle classi CSS perchè class è già usato per la classe JS
    
    let persons = null;

    let buttonStyle =  {
      backgroundColor: '#44c767',
      borderRadius: '28px',
      border: '1px solid #18ab29',
      display: 'inline-block',
      cursor: 'pointer',
      color: '#ffffff',
      fontFamily: 'Arial',
      fontSize: '14px',
      padding: '16px 31px',
      textDecoration: 'none',
      textShadow: '0px 1px 0px #2f6627',
      margin: '10px',
      ':hover': 'backgroundColor:#5cbf2a',
      ':active': 'position:relative; top:1px'
    };

    if(this.state.showPersons)
    { persons = (
      <div>
        <Person 
        name = {this.state.persons[0].name} 
        age = {this.state.persons[0].age} 
        click = {this.switchNameHandler.bind(this, 'Guidongui')} 
        changed = {this.nameChangedHandler}

        selected = { event => this.setState({persons: [{name: event.target.value, age: '22'},{name: 'PetreRic', age: '21'}]})}> 
        Mi piacciono gli unicorni </Person>
      
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age} 
          click = {() => this.switchNameHandler('Ho stato io')} />
        <Person/>
          {this.state.personsToIterate.map((person, index) => {
            return (  
              <div>
                <Person name={person.name} age={person.age} 
                key={person.key}
                changed={(event)=>this.nameInputHandler(event, person.key)}/>
                <button onClick={this.deletePersonHandler.bind(this,index)}>
                  Elimina Persona
                </button>
              </div>
          )})}
      </div>);

      //buttonStyle.backgroundColor='red';
    }
 
    let paragraphClasses = ['red', 'bold'].join(" "); //Unisce in stringhe tipo "red bold"

    const classes = [];

    if(this.state.personsToIterate.length <= 2){
      classes.push('red');
    }

    if(this.state.personsToIterate.length >= 1){
      classes.push('bold');
    }


    return (
 //     <StyleRoot>
        <div className="App">
          <h1> Ciao, sono Guido e sviluppo un'App React</h1>
          <p className={classes.join(" ")}> Ricorda che questo non è testo HTLM ma JSX, 
              per questo si usa className per riferirsi alle classi CSS </p>
          <div>
            <StyledButton key="button1" alt={this.state.showPersons} onClick={this.togglePersonHandler}>Visualizza lista delle Persone</StyledButton>
            <StyledButton key="button2" alt={this.state.showPersons} onClick={this.switchNameHandler.bind(this, 'Guidonguido')}>
              Visualizza i Nickname
            </StyledButton>          
          </div>

          {persons}

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
//      </StyleRoot>
    );

    /*  In realtà è codice JSX, il compilatore lo compila come
        return React.createElement('div', {className: App}, React.createElement('h1', null,'Ciao...'));
    */
  }
}

//export default Radium(App);
export default App;
