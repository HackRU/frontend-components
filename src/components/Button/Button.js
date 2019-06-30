import React from "react";
import { Button as BsButton } from "reactstrap";

const Button = ({ className, children, color, onClick, style }) => (
    <BsButton
        className={`lcl-btn-${(color) ? color : "primary"} ${className}`}
        color={(color) ? color : "primary"}
        onClick={onClick}
        style={style}>
        {children}
    </BsButton>
)
export default Button;