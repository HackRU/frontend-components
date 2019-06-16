import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const GlowButton = ({ href, icon, text }) => (
    <Button href={href} className="glow-button" size="lg" color="info" outline>
        <br/>
        { text }
        <FontAwesomeIcon icon={icon} />
    </Button>
);

GlowButton.propTypes = {
    href: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.node,
};

export default GlowButton;
