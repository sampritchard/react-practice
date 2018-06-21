import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class Form extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            name: '',
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <form>
                <TextField
                    label="Name"
                    floatingLabelText="Name"
                    value={this.state.name} 
                    onChange={e => this.setState({ name: e.target.value })} 
                    floatingLabelFixed
                />
                <br />        
                <TextField
                    label="Email"
                    floatingLabelText="Email"
                    value={this.state.email} 
                    onChange={e => this.setState({ email: e.target.value })} 
                    floatingLabelFixed
                />
                <br />                
                <TextField
                    label="Password"
                    floatingLabelText="Password"
                    value={this.state.password} 
                    onChange={e => this.setState({ password: e.target.value })} 
                    floatingLabelFixed
                />
                <br />                
                <Button onClick={ e => this.onSubmit(e) }>Submit</Button>
            </form>
        )
    }
}