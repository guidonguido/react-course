import React , {useRef, useEffect} from 'react';

const InputName = (props) =>{
    const inputElementRef = useRef();

    useEffect(
        () => {
            inputElementRef.current.focus();
        }
    , [])

    if (props.changed !== undefined)
        return <input type="text" onChange={props.changed} value={props.value} ref={inputElementRef}/>
    else
        return <div ref={inputElementRef} />
}

export default InputName;