import React, {Component} from 'react';

const UsersList = (props) => {
    return (
        <ul>
            {props.users.map(currentUser => 
            // map pozwala iterować tablicę
                <li key={currentUser.id} onClick={() => props.removeUser(currentUser.id, currentUser.name)}> {currentUser.name}</li>
                )}
        </ul>
    )
}

// class setValuePanel extends Component {

//     setValue = () => {
//         this.props.setCounter(parseInt(this.objInput.value));
//     }
//     render() {
//         return (
//             <div className="set-value-panel">
//         <input type="number" ref={input => this.objInput = input}/>
//         <button onClick={()=>{this.setValue()}}>Dodaj</button>
//         </div>
    
//         )};
// }


export default UsersList;