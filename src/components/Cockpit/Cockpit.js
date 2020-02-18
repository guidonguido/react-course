import React, {useEffect} from 'react';
import classes from './Cockpit.module.css'



const Cockpit = (props) => {
    useEffect(
        () => {
            console.log('[Cockpit.js] useEffect')
            //puoi fare richieste HTTP

            setTimeout(
                () => {
                    alert('Una persona è stata rimossa dalla lista')
                }, 1000
            );
        }
    , [props.personsToIterateLength]);

    const buttonClass = [classes.Button]
    
    if(props.showPersons)
        buttonClass.push(classes.Red);

    
    const assignedClasses = [];

    if(props.personsToIterateLength <= 2){
      assignedClasses.push(classes.red);
    }

    if(props.personsToIterateLength >= 1){
      assignedClasses.push(classes.bold);
    }

    return(
        <div>
            <h1> {props.title}</h1>
            <p className={assignedClasses.join(" ")}> Ricorda che questo non è testo HTLM ma JSX, 
                per questo si usa className per riferirsi alle classi CSS </p>
            <div>
                <button key="button1" className={buttonClass.join(" ")} onClick={props.togglePersonHandler}>Visualizza lista delle Persone</button>
                <button key="button2" className={buttonClass.join(" ")} onClick={props.switchNameHandler.bind(this, 'Guidonguido')}>
                Visualizza i Nickname
                </button>          
            </div>
          
        </div>

    );
}

export default Cockpit;