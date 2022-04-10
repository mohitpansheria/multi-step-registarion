import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Logo from '../../assets/Headcountlogo.png';
import './Style.css';

const StepOne = ({ nextStep, handleFormData, values }) => {
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <div className="centerDiv">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="form-info">
          <p className="form-info-title">Let's Create Your Account</p>
          <p className="form-info-desc">
            The account created below will be for you organization's
            administration.
          </p>
        </div>
        <Form onSubmit={submitFormData} className="form-details">
          <Form.Group
            as={Row}
            className="form-group justify-content-between"
            controlId="firstName"
          >
            <Form.Label className="form-lable" column>
              {' '}
              Your First Name
            </Form.Label>
            <Col lg={8}>
              <Form.Control
                name="firstName"
                defaultValue={values.firstName}
                type="text"
                onChange={handleFormData('firstName')}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="form-group justify-content-between"
            controlId="lastName"
          >
            <Form.Label className="form-lable" column>
              Your Last Name
            </Form.Label>
            <Col lg={8}>
              <Form.Control
                name="lastName"
                defaultValue={values.lastName}
                type="text"
                onChange={handleFormData('lastName')}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="form-group justify-content-between"
            controlId="email"
          >
            <Form.Label className="form-lable" column>
              Your Email
            </Form.Label>
            <Col lg={8}>
              <Form.Control
                name="email"
                defaultValue={values.email}
                type="text"
                onChange={handleFormData('email')}
              />
              <span className="email-notice">
                The email address provided will be use for login and
                verification.
              </span>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="form-group justify-content-between"
            controlId="phoneNumber"
          >
            <Form.Label className="form-lable" column>
              Your Phone Number
            </Form.Label>
            <Col lg={3} className="type-select">
              <Form.Select>
                <option> select</option>
              </Form.Select>
            </Col>
            <Col lg={5} className="type-select">
              <Form.Control
                name="phoneNumber"
                defaultValue={values.phoneNumber}
                type="text"
                onChange={handleFormData('phoneNumber')}
              />
            </Col>
          </Form.Group>

          <div class="form-btn">
            <Button className="cta" size="lg" type="submit">
              Next
            </Button>
            <Button size="lg" className="arw-btn" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default StepOne;
