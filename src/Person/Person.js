import React from 'react';
import Note from './Note';
import './Person.css';
import './InputName';
import InputName from './InputName';

const person = (props) => {
    return (
        <div className="Person">
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

export default person;
