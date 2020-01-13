import React, { Component } from 'react';
import NameDisplay from './nameDisplay';
import NameForm from './nameForm';

class App extends Component {
    state = { name: 'Mark' };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        this.setState({ name: 'Tim' });
    }

    render() {
        const { name } = this.state; 

        return (
            <>
                <NameDisplay name={name} />
                <NameForm onFormSubmit={this.onFormSubmit} />
            </>
        )
    }
}

export default App;