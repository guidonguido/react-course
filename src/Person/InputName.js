import React from 'react';

const inputName = (props) =>{
    if (props.changed !== undefined)
        return <input type="text" onChange={props.changed} value={props.value}/>
    else
        return <div />
}

export default inputName;