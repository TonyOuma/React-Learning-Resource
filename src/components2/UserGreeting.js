import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn : false
        }
    }
    render() {

        // short circuit operator

        return this.state.isLoggedIn && <div>Welcome Ouma Tony</div>
        
        // Ternary variables
        /* return (
            this.state.isLoggedIn ? 
            <div>Welcome Ouma Tony</div> : 
            <div>Welcome Guest</div>
        ) */

        // if/else conditional rendering
        /*
        if(this.state.isLoggedIn){
            return (
                <div>Welcome Ouma Tony</div>
            )
        }else {
            return (
                <div>Welcome Guest</div>
            )
        }
        return (
          <div>
            <div>Welcome Ouma Tony</div>
            <div>Welcome Guest</div>
          </div>
        ); */

        // Element variables
        /* let message
        if (this.state.isLoggedIn){
            message = <div>Welcome Ouma Tony</div>
        } else {
            message = <div>Welcome Guest</div>
        }
    return <div>{message}</div> */
    }
}

export default UserGreeting
