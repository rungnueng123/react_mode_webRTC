import React, { Component } from 'react'

export default class TestCallApi extends Component {

    constructor(props){
        super(props);
        this.state = {apiResponse:""};
    }

    callApi(){
        fetch("http://localhost:9000/testApi")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res}))
    }

    componentWillMount(){
        this.callApi();
    }

    render() {
        return (
            <>
                <p>{this.state.apiResponse}</p>
            </>
        )
    }
}