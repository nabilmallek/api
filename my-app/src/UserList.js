import React, { Component } from 'react'
import axios from 'axios'
 

class UserList extends Component {
  
  state ={
      users :[]
  }
  
    
    
    
    componentDidMount() { 
    axios.get("https://jsonplaceholder.typicode.com/users") 
  .then((res) => {

  this.setState({users:res.data})

}) 
}
   
    render() {
        return (
            <div>
              {this.state.users.map(user => <span> {user.name}  </span>)}  
            </div>
        )
    }
}
export default UserList