import React, { Component } from "react";
import { Button as BsButton } from "reactstrap";
import PropTypes from "prop-types";

const Button = ({ className, children, color, onClick, style }) => (
    <BsButton
        className={`lcl-btn-${color} ${className}`}
        color={color}
        onClick={onClick}
        style={style}
    >
        {children}
    </BsButton>
)

export default Button;
