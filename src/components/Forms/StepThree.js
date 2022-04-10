import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Logo from '../../assets/Headcountlogo.png';
import './Style.css';

const StepThree = ({ nextStep, handleFormData, values, prevStep }) => {
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
            We're going to need your Federal EIN
          </p>
          <p className="form-info-desc">Please upload a PDF copy of your W9.</p>
        </div>
        <Form onSubmit={submitFormData} className="form-details">
          <Form.Group
            as={Row}
            className="form-group justify-content-between"
            controlId="firstName"
          >
            <Form.Label className="form-lable" column>
              Federal EIN
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
            controlId="formFile"
          >
            <Form.Label className="form-lable" column>
              Upload W9
            </Form.Label>
            <Col lg={8}>
              <Form.Control
                name="fromFile"
                defaultValue={values.firstName}
                type="file"
                onChange={handleFormData('firstName')}
              />
              <span className="email-notice">
                Only PDF files will be accepted.
              </span>
            </Col>
          </Form.Group>

          <div className="form-btn">
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
                className="bi bi-arrow-left-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
              </svg>
            </Button>
            <Button className="cta" size="lg" type="submit" onClick={prevStep}>
              Previous
            </Button>

            <Button className="cta" size="lg" type="submit">
              Next
            </Button>
            <Button size="lg" className="arw-btn" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default StepThree;
