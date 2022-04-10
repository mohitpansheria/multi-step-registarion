import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Logo from '../../assets/Headcountlogo.png';
import './Style.css';

const StepTow = ({ nextStep, handleFormData, values, prevStep }) => {
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <div className="centerDiv">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="form-info">
          <p className="form-info-title">
            Now lets get some of your organization details
          </p>
          <p className="form-info-desc">
            The account created below will be for you organization's
            administration.
          </p>
        </div>
        <Form
          onSubmit={submitFormData}
          className="form-details step-formOverflow"
        >
          <Form.Group
            as={Row}
            className="form-group justify-content-between"
            controlId="firstName"
          >
            <Form.Label className="form-lable" column>
              {' '}
              Your Organization Name
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
              Organization Address Line 1
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
            <Form.Label column className="form-lable2">
              {' '}
              &nbsp; Organization Address Line 2
            </Form.Label>
            <Col lg={8}>
              <Form.Control
                name="email"
                defaultValue={values.email}
                type="text"
                onChange={handleFormData('email')}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="form-group justify-content-between"
            controlId="phoneNumber"
          >
            <Form.Label className="form-lable" column>
              Organization State
            </Form.Label>
            <Col lg={8}>
              <Form.Select>
                <option> select</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="form-group justify-content-between"
            controlId="phoneNumber"
          >
            <Form.Label className="form-lable" column>
              Organization City
            </Form.Label>
            <Col lg={8}>
              <Form.Select>
                <option> select</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="form-group justify-content-between"
            controlId="lastName"
          >
            <Form.Label className="form-lable" column>
              Organization Zip Code
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
            controlId="lastName"
          >
            <Form.Label className="form-lable" column>
              Organization Phone #
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

          <div class="form-btn">
            <div>
              <Button
                size="lg"
                className="arw-btn"
                type="submit"
                onClick={prevStep}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-left-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg>
              </Button>
              <Button
                className="cta"
                size="lg"
                type="submit"
                onClick={prevStep}
              >
                Previous
              </Button>
            </div>

            <div>
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
          </div>
        </Form>
      </div>
    </>
  );
};

export default StepTow;
