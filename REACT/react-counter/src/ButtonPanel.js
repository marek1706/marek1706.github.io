import React from 'react';

const ButtonPanel = (props) => {
    console.log(props);
    return (<div className="button-panel">
        <button onClick={props.changeCounterValue}>Dodaj 1</button>
        <button onClick={props.clearCounter}>Zeruj</button>
        <button onClick={props.initValue}>Przywróć stan</button>
        <button onClick={props.plustrzy}>Dodaj trzy</button>
        <button onClick={props.nextStep}>Zwiększ o X</button>
    </div>);
}
 

export default ButtonPanel;
