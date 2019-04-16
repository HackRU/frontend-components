import React, { Component } from "react";
import { Button as bsButton } from "reactstrap";
import PropTypes from "prop-types";
import "../../scss/theme.scss";

class Button extends Component {
    render() {
        return (
            <button className="name">S{this.props.children}</button>
        )
    }
}
export default Button;