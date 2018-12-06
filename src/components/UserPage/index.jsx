import React from 'react';
import User from '../../containers/User';
import './index.css'

export default class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <User/>
            </React.Fragment>
        );
    }
}


