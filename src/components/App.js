import React, { Component } from 'react';
import NameDisplay from './nameDisplay';
import NameForm from './nameForm';

class App extends Component {
    render() {
        return (
            <>
                <NameDisplay />
                <NameForm />
            </>
        )
    };
};

export default App;