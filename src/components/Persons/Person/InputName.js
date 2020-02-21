import React , {useRef, useEffect} from 'react';
import InputChangeContext from '../../../context/inputChangeContext'
import InputChangedContext from '../../../context/inputChangeContext';

const InputName = (props) =>{
    const inputElementRef = useRef();

    useEffect(
        () => {
            inputElementRef.current.focus();
        }
    , [])

    return(
    <InputChangedContext.Consumer>
    {(context) => {

        if (context.changed !== undefined)
            return (<input type="text" onChange={context.changed} value={props.value} ref={inputElementRef}/>);
        else
            return (<div ref={inputElementRef} />);
    
    }}
    </InputChangedContext.Consumer>
    )
}

export default InputName;