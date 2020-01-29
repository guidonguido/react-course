import React from 'react';
import Note from './Note';
import Radium  from 'radium';   //rimuovi per styledComponent
import './Person.css';
import './InputName';
import InputName from './InputName';

const person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }; //dopo la dimensione 500px dello schermo la larghezza massima del component persona rimale 450

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}> Sono il componente Persona, mi chiamo {props.name} e ho {props.age} anni. 
            Ecco un numero random: {Math.random()*10} </p>
            <Note content={props.children}/>
            <InputName changed={props.changed} value={props.name}/>

            <select name="Nome" onChange={props.selected}>
                <option></option>
                <option value="pompelmo">Pompelmo</option>
                <option value="limone">Limone</option>
                <option selected value="cocco">Cocco</option>
                <option value="mango">Mango</option>
            </select>
        </div>
        )
};

export default Radium(person);
