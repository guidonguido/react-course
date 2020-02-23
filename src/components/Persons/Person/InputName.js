import React , {useRef, useEffect, useContext} from 'react';
import InputChangedContext from '../../../context/inputChangedContext';

const InputName = (props) =>{
    const inputElementRef = useRef();

    const inputChangedContext = useContext(InputChangedContext);

    useEffect(
        () => {
            inputElementRef.current.focus();
        }
    , [])

    if (inputChangedContext.changed !== undefined)
        return (<input type="text" onChange={inputChangedContext.changed} value={props.value} ref={inputElementRef}/>);
    else
        return (<div ref={inputElementRef} />);
}

export default InputName;