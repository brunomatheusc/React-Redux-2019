import React, { Component } from 'react';
import Component1 from './functional/component1';
import Container1 from './containers/container1';

export default class App extends Component {
    renderFunction1 = () => {
        if (true) {
            return(
                <div>
                    Condition 1
                </div>
            )
        } else {
            return (
                <div>
                    Condition 2
                </div>
            )
        }
    }

    render() {
        return ( 
            <div className="App">
                React
                <br/>
                { this.renderFunction1() }
                    {/* <Container1 nickName="buma"/>
                    <Component1 name="Bruno" age="24"/> */}
            </div>
        );
    }
}