import React, { Component } from "react";
import { Button as BsButton } from "reactstrap";
import PropTypes from "prop-types";

class Button extends Component {
    render() {
        return (
            <BsButton color="primary">S{this.props.children}</BsButton>
        )
    }
}
export default Button;