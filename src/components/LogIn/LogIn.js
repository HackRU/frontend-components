import React, { Component } from "react";
import { Container, Col, Input, InputGroup, InputGroupAddon, FormGroup, Button, FormText } from "reactstrap";
import { Icon } from "react-fa";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

/**
 * Login application for "/login"
 */
class LogIn extends Component {
    componentWillMount() {
        this.setState({
            loading: false,
            done: false,
            errors: ""
        });
    }

    render() {
        // Check if the user is already logged in
        if (this.props.profile.isLoggedIn || this.state.done) {
            return (<Redirect to="/dashboard" />);
        }
        return <AuthForm
            errors={this.state.errors}
            label="Welcome to HackRU!"
            loading={this.state.loading}
            isMobile={this.props.isMobile}
            onSubmit={this.onSubmit}
        >
            <FormGroup row>
                <Col xs={6} style={{ margin: 0, paddingLeft: 0, paddingRight: 7 }}>
                    <Input required id="first" type="text" placeholder="first name" />
                </Col>
                <Col xs={6} style={{ margin: 0, paddingRight: 0, paddingLeft: 7 }}>
                    <Input required id="last" type="text" placeholder="last name" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Input required type="email" id="email" placeholder="email" />
            </FormGroup>
            <hr style={{ background: "rgba(255, 255, 255, 0.25)" }} />
            <FormGroup row>
                <Input required type="password" id="password" placeholder="password" />
            </FormGroup>
            <FormGroup row>
                <InputGroup>
                    <Input required type="password" id="conpassword" placeholder="confirm password" />
                    <InputGroupAddon addonType="append">
                        <Button color="success" style={{ borderRadius: 0 }}>
                            <Icon name="chevron-right" />
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
            <FormText>
                <Link to="/signup" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                    Not a member? Create an Account!
                </Link>
            </FormText>
            <FormText>
                <Link to="/forgot" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                    Forgot your password?</Link></FormText>
            <FormText>
                <Link to="/" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                    Return Home
                </Link>
            </FormText>
        </AuthForm>;
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.loading) {
            this.setState({
                loading: true,
                errors: ""
            });
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            this.props.profile.Login(email, password, (msg) => {
                if (msg) {
                    this.setState({
                        loading: false,
                        errors: msg
                    });
                } else {
                    this.setState({
                        loading: false,
                        done: true,
                        errors: ""
                    });
                }
            });
        }
    }
}

export default LogIn;
