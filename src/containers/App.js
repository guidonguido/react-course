import React, { Component } from 'react';
//import Radium, {StyleRoot} from 'radium';
import classes from "./App.module.css";
import styled from 'styled-components';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import InputChangedContext from '../context/inputChangedContext'

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

  constructor(props)
  {
    super(props);
    console.log('[App.js] constructor');
  }
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

    showPersons : false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props,state)
  {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount()
  {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }


  componentDidUpdate()
  {
    console.log('[App.js] componentDidUpdate')
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
    //importante cambiare l'array di persone con lo spread operator, confrontato al vecchio risulterà diverso
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

  toggleCockpitHandler = () => {
    const doesShow = this.state.showCockpit;
    this.setState({showCockpit : !doesShow})
  }

  deletePersonHandler = (index) => {
    const personsToIterate = [...this.state.personsToIterate];
    personsToIterate.splice(index, 1);
    this.setState({personsToIterate : personsToIterate});
  }

  render() {            //si usa className per accedere alle classi CSS perchè class è già usato per la classe JS
    console.log('[App.js] render');

    let persons = null;

    if(this.state.showPersons)
    { persons = (
      <div>
        <InputChangedContext.Provider value={{changed: this.nameChangedHandler}}>
          <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age} 
          click = {this.switchNameHandler.bind(this, 'Guidongui')}
          selected = { event => this.setState({persons: [{name: event.target.value, age: '22'},{name: 'PetreRic', age: '21'}]})}> 
          Mi piacciono gli unicorni </Person>
        </InputChangedContext.Provider>
        
          <Person 
            name = {this.state.persons[1].name} 
            age = {this.state.persons[1].age} 
            click = {() => this.switchNameHandler('Ho stato io')} />
          <Person/>
        
          <Persons 
            personsToIterate={this.state.personsToIterate}
            nameInputHandler={this.nameInputHandler}
            deletePersonHandler={this.deletePersonHandler}
            />
        
      </div>);
    }

    let cockpit = null;

    if(this.state.showCockpit)
    {
      cockpit = (<Cockpit 
            title = {this.props.title}
            personsToIterateLength={this.state.personsToIterate.length}
            togglePersonHandler={this.togglePersonHandler}
            switchNameHandler={this.switchNameHandler}
            showPersons={this.state.showPersons}
              />)

    }
 
    let paragraphClasses = ['red', 'bold'].join(" "); //Unisce in stringhe tipo "red bold"


    return (
 //     <StyleRoot>
        <WithClass classes={classes.App}>
          
        <button onClick={this.toggleCockpitHandler}> Visualizza Cockpit </button>
          {cockpit}
          {persons}
        </WithClass>
          
//      </StyleRoot>
    );

    /*  In realtà è codice JSX, il compilatore lo compila come
        return React.createElement('div', {className: App}, React.createElement('h1', null,'Ciao...'));
    */
  }
}

//export default Radium(App);
export default App;
