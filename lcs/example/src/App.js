import React, { Component } from "react";
import { Button } from "lcs";
export default class App extends Component {
    render() {
        return (
            <div>
                <Button>Modern React component module</Button>
                <button type="button" class="btn btn-primary">Primary</button>
            </div>
        )
    }
}