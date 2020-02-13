import React, { Component } from 'react';
import { connect } from 'react-redux';

class NameDisplay extends Component {
    render() {
        const { name } = this.props;
        console.log(this.props);

        return (
            <h1>{name}</h1>
        )
    };
};

const mapStateToProps = state => {
    return { name: state.name.name };
};

export default connect(mapStateToProps)(NameDisplay);