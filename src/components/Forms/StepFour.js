import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Logo from '../../assets/Headcountlogo.png';
import Minus from '../../assets/Minus.svg';
import Plus from '../../assets/Plus.svg';
import './Style.css';

const StepFour = ({ nextStep, handleFormData, values, prevStep }) => {
  const [inputList, setInputList] = useState([]);

  const Input = () => {
    return (
      <>
        <Form.Group
          as={Row}
          className="form-group justify-content-between"
          controlId="formFile"
        >
          <Form.Label column className="form-lable2">
            Certification 1
          </Form.Label>
          <Col lg={3} className="type-select">
            <Form.Select>
              <option> select</option>
            </Form.Select>
          </Col>
          <Col lg={5} className="type-select">
            <Form.Control
              name="fromFile"
              defaultValue={values.firstName}
              type="file"
              onChange={handleFormData('firstName')}
              aria-describedby="basic-addon2"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="form-group justify-content-start"
          controlId="start-date"
        >
          <Form.Label column className="form-lable2"></Form.Label>
          <Col lg={3} className="type-select">
            <Form.Control type="date" name="start-date" />
          </Col>
          <Col lg={3} className="type-select">
            <Form.Control type="date" name="end-date" />
          </Col>
          <Col lg={2} className="d-flex justify-content-end">
            <img src={Plus} alt="" onClick={onAddBtnClick} className="mx-2" />
            <img src={Minus} alt="" className="mx-2" />
          </Col>
        </Form.Group>
      </>
    );
  };

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

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
            Does your organization hold any certifications?
          </p>
          <p className="form-info-desc mb-2">
            Upload your organizations certifications (ie. MBE, DBE, SBE and
            etc...)
          </p>
          <p className="form-info-desc mb-2">
            If you don't have any then feel free to continue to the next step.
            You may also upload them later.
          </p>
          <p className="form-info-desc">Only PDF files will be accepted.</p>
        </div>
        <Form
          onSubmit={submitFormData}
          className="form-details step-formOverflow"
        >
          <Form.Group
            as={Row}
            className="form-group justify-content-between"
            controlId="formFile"
          >
            <Form.Label column className="form-lable2">
              Certification 1
            </Form.Label>
            <Col lg={3} className="type-select">
              <Form.Select>
                <option> select</option>
              </Form.Select>
            </Col>
            <Col lg={5} className="type-select">
              <Form.Control
                name="fromFile"
                defaultValue={values.firstName}
                type="file"
                onChange={handleFormData('firstName')}
                aria-describedby="basic-addon2"
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="form-group justify-content-start"
            controlId="start-date"
          >
            <Form.Label column className="form-lable2"></Form.Label>
            <Col lg={3} className="type-select">
              <Form.Control type="date" name="start-date" />
            </Col>
            <Col lg={3} className="type-select">
              <Form.Control type="date" name="end-date" />
            </Col>
            <Col lg={2} className="d-flex justify-content-end">
              <img src={Plus} alt="" onClick={onAddBtnClick} className="mx-2" />
              <img src={Minus} alt="" className="mx-2" />
            </Col>
          </Form.Group>
          {inputList}
          <div className="form-btn">
            <Button
              className="arw-btn"
              size="lg"
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

export default StepFour;
