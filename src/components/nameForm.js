import React, { Component } from 'react';

class NameForm extends Component {
    state = { name: '' };
    
    onInputChange = (event) => {
        this.setState({ name: event.target.value });
    }
    
    render() {
        const { name } = this.state;
        const { onFormSubmit } = this.props;

        return (
            <form onSubmit={onFormSubmit(name)}>
                <label>Name</label>
                <input type='text' name='name' onChange={this.onInputChange} value={name} />
                <input type='submit' />
            </form>
        )
    }
}

export default NameForm;