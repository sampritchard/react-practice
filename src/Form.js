import React from 'react';

export default class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <form>
                <input 
                placeholder="First Name" 
                value={this.state.firstName} 
                onChange={e => this.setState({ firstName: e.target.value })} 
                />
                <br />
                <input 
                placeholder="Last Name" 
                value={this.state.lastName} 
                onChange={e => this.setState({ lastName: e.target.value })} 
                />
                <br />                
                <input 
                placeholder="Email" 
                value={this.state.email} 
                onChange={e => this.setState({ email: e.target.value })} 
                />
                <br />                
                <input 
                placeholder="Password"
                type="password"
                value={this.state.password} 
                onChange={e => this.setState({ password: e.target.value })} 
                />
                <br />                
                <button onClick={ e => this.onSubmit(e) }>Submit</button>
            </form>
        )
    }
}