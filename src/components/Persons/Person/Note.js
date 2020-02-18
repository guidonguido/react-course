import React from 'react';

const note = (props) =>{
    const infos = props.content;
    if (!infos)
        return <p> Nessuna nota inserita </p>;
    else
        return <p> Note: {infos} </p>
}

export default note;
