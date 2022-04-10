import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Final from '../components/Forms/Final';
import StepFour from '../components/Forms/StepFour';
import StepOne from '../components/Forms/StepOne';
import StepThree from '../components/Forms/StepThree';
import StepTwo from '../components/Forms/StepTwo';
function FormLayout() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
  });

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  switch (step) {
    case 1:
      return (
        <>
          <div>
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                  <StepOne
                    nextStep={nextStep}
                    handleFormData={handleInputData}
                    values={formData}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </>
      );

    case 2:
      return (
        <div>
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepTwo
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 3:
      return (
        <div>
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepThree
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 4:
      return (
        <div>
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepFour
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 5:
      return (
        <div>
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Final values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );

    default:
      return <div></div>;
  }
}

export default FormLayout;
