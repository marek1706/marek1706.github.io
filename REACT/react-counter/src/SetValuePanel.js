import React, {Component} from 'react';

// funkcyjnie
// import React from 'react';

// const SetValuePanel = (props) => {
//     // console.log(props);

//     let objInput = null;
//     // console.log(objInput);

//     return (<div className="set-value-panel">
//         <input type="number" ref={input => objInput = input}/>
//         <button onClick={()=>{props.setCounter(parseInt(objInput.value))}}>Ustaw</button>
//         </div>
//     );
// }
// rozwiązanie klasowe

class setValuePanel extends Component {

    setNewValue = () => {
        this.props.setCounter(parseInt(this.objInput.value));
    }
    render() {
        return (
            <div className="set-value-panel">
        <input type="number" ref={input => this.objInput = input}/>
        <button onClick={()=>{this.setNewValue()}}>Ustaw</button>
        </div>
    
        )};
};


        




    export default setValuePanel;