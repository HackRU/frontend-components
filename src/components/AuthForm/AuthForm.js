import React, { Component } from "react";
import { Alert, Container, Col, Form } from "reactstrap";
import { RingLoader } from "react-spinners";

const AuthForm = ({ children, errors, label, loading, isMobile, onSubmit }) => (
    <Container
        fluid
        style={{ width: "100%", minHeight: "100vh", textAlign: "center", backgroundColor: "secondary" }}
        className="d-flex align-items-center"
    >
        <Col
            xs={isMobile ? 3 : 12}
            style={{ display: "block", zIndex: 3, color: "white", background: "rgba(255, 255, 255, 0.05)" }}
        >
            <div style={{ padding: 30 }}>
                <h1 className="display-1 theme-font">Sign Up</h1>
                <p className="lead">{loading ? label: ''}</p>
                <Form onSubmit={onSubmit}>
                    {renderErrors(errors)}
                    <div>
                        {loading ? children : renderSpinner()}
                    </div>
                </Form>
            </div>
        </Col>
    </Container>
);

const renderSpinner = () => (
    <div style={{ display: "block", width: "100%" }} align="center">
        <RingLoader color={theme.primary[0]} />
    </div>
);

const renderErrors = (errors) => (
    errors !== ""
    ? (<Alert
        style={{ background: "rgba(255, 0, 0, 0.25)", border: "none", color: "white" }}
        color="danger">
            {errors}
        </Alert>)
    : null
);

export default AuthForm;
