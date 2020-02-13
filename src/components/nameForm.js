import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName } from './../actions';

class NameForm extends Component {
    state = { name: '' };
    
    onFormSubmit = event => {
        event.preventDefault();

        const { name } = this.state;
        this.props.setName(name);
        this.setState({ name: '' });
    };

    onInputChange = event => this.setState({ name: event.target.value });
    
    render() {
        const { name } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Name</label>
                <input type='text' name='name' onChange={this.onInputChange} value={name} />
                <input type='submit' />
            </form>
        )
    }
}

export default connect(null, { setName })(NameForm);