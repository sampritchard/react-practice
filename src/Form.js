import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class Form extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

    checkForErrors = () => {
        let isError = false;
        const errors = {
            nameError: '',
            emailError: '',
            passwordError: ''
        };

        if (this.state.name.length < 1) {
            isError = true;
            errors.nameError = true;
        }

        if (this.state.email.indexOf("@") === -1) {
            isError = true;
            errors.emailError = true;
          }
        
        if (this.state.password.length < 6) {
            isError = true;
            errors.passwordError = true;
        }

            this.setState({
                ...this.state,
                ...errors
            })

        return isError;
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state)

        const err = this.checkForErrors();
        if (!err) {
            this.setState({
                name: '',
                nameError: '', 
                email: '',
                emailError: '',
                password: '',
                passwordError: ''
            })
        }
    }

    render() {
        return (
            <form>
                <TextField
                    autoFocus
                    label="Name"
                    value={this.state.name} 
                    onChange={e => this.setState({ name: e.target.value })}
                    error={this.state.nameError}
                    errorText={this.state.nameError}
                />
                <br />        
                <TextField
                    label="Email"
                    value={this.state.email} 
                    onChange={e => this.setState({ email: e.target.value })} 
                    error={this.state.emailError}
                    errorText={this.state.emailError}
                />
                <br />                
                <TextField
                    label="Password"
                    type="Password"
                    value={this.state.password} 
                    onChange={e => this.setState({ password: e.target.value })}
                    error={this.state.passwordError}
                    errorText={this.state.passwordError}
                    helperText="Minimum 5 characters"
                />
                <br />   
                <br />             
                <Button onClick={ e => this.onSubmit(e) }variant="outlined" color="primary">
        Submit
      </Button>
            </form>
        )
    }
}