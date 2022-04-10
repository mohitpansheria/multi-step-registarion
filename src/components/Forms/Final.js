import React, { useState } from 'react';
import { Modal, ProgressBar } from 'react-bootstrap';
import Logo from '../../assets/Headcountlogo.png';

const Final = ({ values }) => {
  //destructuring the object from values
  const { firstName, lastName, age, email } = values;
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowLoginModal = () => setShowLoginModal(true);

  return (
    <>
      <div className="centerDiv">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="form-info">
          <p className="form-info-title">Congrats! You are all set.</p>
          <p className="form-info-desc mb-2">
            Click 'Done' below to submit all this data you just entered or go
            back to the previous steps to make any edits.
          </p>
          <p className="form-info-desc ">
            Here is glimpse of the information you provided.
          </p>
        </div>
        <div className="info d-flex justify-content-between">
          <div className="d-flex flex-column">
            <span>
              <strong>User Full Name </strong> {firstName}{' '}
            </span>
            <span>
              <strong>User Email Address </strong> {email}{' '}
            </span>
            <span>
              <strong>User Phone Number </strong> {age}{' '}
            </span>
          </div>
          <div>
            <a href="/">Edit</a>
          </div>
        </div>

        <div className="info d-flex justify-content-between">
          <div className="d-flex flex-column">
            <span>
              <strong>Organization Name </strong> {firstName}{' '}
            </span>
            <span>
              <strong>Organization Address </strong> {email}{' '}
            </span>
            <span>
              <strong>Organization Number </strong> {age}{' '}
            </span>
          </div>
          <div>
            <a href="/">Edit</a>
          </div>
        </div>

        <div className="info d-flex justify-content-between">
          <div className="d-flex flex-column">
            <span>
              <strong>Federal EIN</strong> {firstName}{' '}
            </span>
          </div>
          <div>
            <a href="/">Edit</a>
          </div>
        </div>

        <div className="info d-flex justify-content-between">
          <div className="d-flex flex-column">
            <span>
              <strong>PDF 1 </strong> {firstName}{' '}
            </span>
            <span>
              <strong>PDF 2 </strong> {email}{' '}
            </span>
            <span>
              <strong>PDF 3 </strong> {age}{' '}
            </span>
          </div>
          <div>
            <a href="/">Edit</a>
          </div>
        </div>

        <div class="form-btn">
          <button
            className="sign-btn"
            type="submit"
            onClick={handleShowLoginModal}
          >
            Sign me up
          </button>
        </div>
      </div>

      {/*  */}
      <Modal
        show={showLoginModal}
        onHide={handleCloseLoginModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="p-5">
          <p className="mb-5">
            Give us a minute, we're saving all this information.
          </p>
          <ProgressBar now={90} className="progress" />
        </div>
      </Modal>
    </>
  );
};

export default Final;
