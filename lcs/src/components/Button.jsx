import React, { Component } from "react";
import { Button as bsButton } from "reactstrap";
import PropTypes from "prop-types";

class Button extends Component {
    render() {
        return (
            <bsButton>S{this.props.children}</bsButton>
        )
    }
}
export default Button;