import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Minus from '../assets/Minus.svg';
import Plus from '../assets/Plus.svg';

const InputPdf = ({ nextStep, handleFormData, values, prevStep, props }) => {
  return (
    <div>
      <Form.Group as={Row} className="form-group-between" controlId="formFile">
        <Form.Label column>{props.title}</Form.Label>
        <Col lg={3}>
          <Form.Select>
            <option> select</option>
          </Form.Select>
        </Col>
        <Col lg={5}>
          <Form.Control
            name="orgCertificate"
            defaultValue={values.orgCertificate}
            type="file"
            onChange={handleFormData('orgCertificate')}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="form-group-start" controlId="start-date">
        <Form.Label column></Form.Label>
        <Col lg={3}>
          <Form.Control type="date" name="start-date" />
        </Col>
        <Col lg={3}>
          <Form.Control type="date" name="end-date" />
        </Col>
        <Col lg={2} className="d-flex justify-content-between">
          <img src={Plus} alt="" onClick={props.handleClickAdd} />
          <img src={Minus} alt="" onClick={props.handleClickRemove} />
        </Col>
      </Form.Group>
    </div>
  );
};

export default InputPdf;
