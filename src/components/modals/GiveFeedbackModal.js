import React, { useEffect } from 'react';
import { utilities } from '../../utilities';

function GiveFeedbackModal() {
  useEffect(() => {
    utilities.modalFeedbackSent();
  }, []);

  return (
    <div className="custom-modal-wrapper" id="feedbackModal">
      <div className="custom-modal">
        <div className="custom-modal-header">
          <div className="custom-modal-close" close-modal="feedbackModal">
            <i className="icon-close"></i>
          </div>
          <div className="custom-modal-header-set">
            {/* <img src="../public/img/p-01.png" alt="User's profile picture" className="custom-modal-header-set-img" /> */}
            <div className="custom-modal-header-set-initials">MR</div>
            <p className="custom-modal-header-set-subtitle">Give feedback to</p>
            <p className="custom-modal-header-set-title">Marko Rajkovic</p>
          </div>
        </div>

        <div className="custom-modal-body">
          <div className="rating-item">
            <p className="rating-item-name">Attitude</p>
            <div className="stars">
              <div className="star selected">
                <i className="icon-star"></i>
              </div>
              <div className="star selected">
                <i className="icon-star"></i>
              </div>
              <div className="star selected">
                <i className="icon-star"></i>
              </div>
              <div className="star selected">
                <i className="icon-star"></i>
              </div>
              <div className="star">
                <i className="icon-star"></i>
              </div>
            </div>
          </div>

          <div className="feedback-item">
            <p className="feedback-item-name">Add a compliment</p>
            <input
              className="feedback-item-input"
              type="text"
              placeholder="Write here..."
            />
          </div>

          <div className="feedback-item">
            <p className="feedback-item-name">Add an improvement idea</p>
            <input
              className="feedback-item-input"
              type="text"
              placeholder="Write here..."
            />
          </div>

          <div className="success-message">
            <i className="icon-check-circle-full"></i>
            <p className="success-message-title">Feedback sent</p>
            <p className="success-message-text">
              Window closes automatically in 3 seconds.
            </p>
          </div>
        </div>

        <div className="custom-modal-footer">
          <button className="button button-primary send-feedback-modal">
            Send feedback
          </button>
          <button className="button button-dark">Sent</button>
        </div>
      </div>
      <div className="custom-modal-backdrop"></div>
    </div>
  );
}

export default GiveFeedbackModal;
