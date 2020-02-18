import React, {Component} from 'react';
import Person from './Person/Person';
import classes from "./Persons.module.css";


class Persons extends Component {

 // static getDerivedStateFromProps(props, state)
 // { console.log('[Persons.js] getDerivedStateFromProps' );
 // return state
 // }

  shouldComponentUpdate(nextProps, nextState)
  { console.log('[Persons.js] shouldComponentUpdate' );
    if(nextProps.personsToIterate !== this.props.personsToIterate)
      return true;
    else
      return false; //Significa che non bisogna rirenderizzare Persons se non cambiano le persone da visualizzare
                    //Migliora le performance evitando reRendering inutili

  }
  
  getSnapshotBeforeUpdate(prevProps, prevState)
  {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot fatto'};
  }

  componentDidUpdate(prevProps, prevState, snapshot)
  {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[Persons.js rendering...');

    return this.props.personsToIterate.map((person, index) => {
        return (  
          <div>
            <Person 
            name={person.name} 
            age={person.age} 
            key={person.key}
            changed={(event)=>this.props.nameInputHandler(event, person.key)}/>

            <button 
            className={classes.Button} 
            onClick={this.props.deletePersonHandler.bind(this,index)}>
              Elimina Persona
            </button>
          </div>
        )})}}


    export default Persons;