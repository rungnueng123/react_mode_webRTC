import React, { Component } from 'react'
import logo from '../logo.svg';
import GoVideoBtn from '../components/goVideoBtn';
import TestCallApi from '../components/testCallApi';

export default class Dashboard extends Component {

    render() {
        return (
            <>
            <div className="App">
                <header className="App-header">
                    <TestCallApi/>
                    <GoVideoBtn />
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                </div>
            </>
        )
    }

}