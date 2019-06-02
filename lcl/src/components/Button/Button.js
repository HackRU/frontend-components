import React, { Component } from "react";
import { Button as BsButton } from "reactstrap";
import PropTypes from "prop-types";

class Button extends Component {
    render() {
        let color = "primary";
        return (
            <BsButton className={`lcl-btn-${color} ${this.props.className}`} color={color} style={this.props.style}>{this.props.children}</BsButton>
        )
    }
}
export default Button;
