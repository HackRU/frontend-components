import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const GlowButton = ({ href, icon, text }) => (
    <Button href={href} className="glow-button" size="lg" color="info" outline>
        <br/>
        { text }
        <FontAwesomeIcon icon={faCoffee} />
    </Button>
)
export default GlowButton;