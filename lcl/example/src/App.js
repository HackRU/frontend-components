import React, { Component } from "react";
import { Button } from "lcl";
export default class App extends Component {
    render() {
        return (
            <div style={{ margin: 10 }}>
                <h1 className="display-1">HackRU</h1>
                <p className="lead">Testing</p>
                <p>Testing</p>
                <h1>HackRU</h1>
                <Button>Sign Up</Button>
            </div>
        )
    }
}