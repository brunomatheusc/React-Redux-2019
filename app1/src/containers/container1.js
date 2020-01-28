import React, { Component } from 'react';
import Component1 from '../functional/component1';

export default class Container1 extends Component {
    constructor(props){
        super(props)

        this.state = {
            stateprop1: "Our initial state",
            stateprop2: 5,
        };
    }

    changeState = () => (
        this.setState({ 
            stateprop1: this.state.stateprop1 + "L",
            stateprop2: this.state.stateprop2 + 1
        })
    )

    render() {
        return (
            <div>
                <button onClick={() => this.changeState()}>Change state</button>
                {/* <button onClick={() => this.changeState2()}>Change state</button> */}

                <Component1 prop1={ this.state.stateprop1 }/>
                <br/>
                { this.state.stateprop2 }
                <br/>
                { this.state.stateprop1 }
            </div>
        )
    }
}