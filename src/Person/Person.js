import React from 'react';
import Note from './Note'
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> Sono il componente Persona, mi chiamo {props.name} e ho {props.age} anni. 
            Ecco un numero random: {Math.random()*10} </p>
            <Note content={props.children}/>
        </div>
        )
};

export default person;
