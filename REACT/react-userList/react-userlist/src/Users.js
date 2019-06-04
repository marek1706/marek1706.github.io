import React, {Component} from 'react';
import UsersList from './UsersList';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            users:[]
        }
    }

    onInputChange = (event) => {
        this.setState({userName: event.target.value});
        console.log(event.target.value);
    }
    
        
     addNewUser = () => {
         let user = {
             name: this.state.userName,
             id: Date.now()
         }
        this.setState(prevState => {
            return({
                users: prevState.users.concat(user),
                userName:''
            })
        })
}
    removeUser = (id, name) => {
        let users = this.state.users;

        users = users.filter(currentUser => {
            if (currentUser.id !== id) return currentUser;
        });

        // users = users.filter(currentUser => currentUser.id !== id) alternatywny zapis powyższego

        
        this.setState({users: users});

        // this.setState(prevState => {
        //     return({users});
        // })
    }
    

    render() {
        console.log(this.state.users)
        return (
            <div>
                <input 
                    value={this.state.userName}
                    onChange={this.onInputChange} 
                    ref={input => this.inputValue = input}
                    type="text" placeholder="Name"
                    />
                    <button onClick={this.addNewUser}>Add User</button>
                <UsersList 
                users={this.state.users}
                removeUser={this.removeUser}
                />
                 </div>
         )
     }
}
// get Users = () => {
//     console.log(działa)
// }

 

export default Users;
