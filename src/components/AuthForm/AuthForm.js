import React, { Component } from "react";
import { Container, Col, Form } from "reactstrap";

const AuthForm = ({ errors, innerForm, innerText, isMobile, onSubmit }) => (
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
                <p className="lead">{innerText}</p>
                <Form onSubmit={onSubmit}>
                    {errors}
                    {innerForm}
                </Form>
            </div>
        </Col>
    </Container>
);

export default AuthForm;
