import React, {Component} from 'react';
import Note from './Note';
//import Radium  from 'radium';   //rimuovi per styledComponent
import styled from 'styled-components';
import classes from './Person.module.css';
import './InputName';
import InputName from './InputName';

const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };//dopo la dimensione 500px dello schermo la larghezza massima del component persona rimale 450

class Person extends Component {

    constructor(props)
    {
        super(props);
    }


    render() {
    return (
//        <div className="Person" style={style}>
        <div className={classes.Person}>
            <p onClick={this.props.click}> Sono il componente Persona, mi chiamo {this.props.name} e ho {this.props.age} anni. 
            Ecco un numero random: {Math.random()*10} </p>
            <Note content={this.props.children}/>
            <InputName changed={this.props.changed} value={this.props.name}/>

            <select name="Nome" onChange={this.props.selected}>
                <option></option>
                <option value="pompelmo">Pompelmo</option>
                <option value="limone">Limone</option>
                <option selected value="cocco">Cocco</option>
                <option value="mango">Mango</option>
            </select>
        </div>
        )
}
    }


//export default Radium(person);
export default Person;