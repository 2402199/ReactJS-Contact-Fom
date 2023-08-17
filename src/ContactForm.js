import React, { useState } from "react";
import "./ContactForm.css";
import axios from "axios";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState("Send");

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");

    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    
    // Convert the data to JSON format
    const requestBody = JSON.stringify(conFom);
    try {
      console.log('main')
      // Send form data to your Lambda function for processing
      await axios.post('API gateway Invoke URl', requestBody);

      setFormStatus('Success');
    } catch (error) {
      console.error(error);
      setFormStatus('Error');
    }
  };

  return (
    <>
      <div className="contact">
        <div className="container mt-5 contact-form">
          <h2 className="mb-3">CONTACT</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-control" type="email" id="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control" id="message" required />
            </div>
            <button
              className={`btn ${
                formStatus === "Submitting..."
                  ? "form-status-submitting"
                  : formStatus === "Success"
                  ? "form-status-success"
                  : "btn-danger"
              }`}
              type="submit"
            >
              {formStatus}
            </button>
            <div className="social">
            <a href="https://twitter.com/jerryisaac7">
              <img
                src="https://d1sax8z0tfd9ab.cloudfront.net/icons/twitter.svg"
                alt=""
              />
            </a>
            <a href="https://facebook.com/jerry.isaac.9469">
              <img
                src="https://d1sax8z0tfd9ab.cloudfront.net/icons/facebook.svg"
                alt=""
              />
            </a>
            <a href="https://github.com/2402199">
              <img
                src="https://d1sax8z0tfd9ab.cloudfront.net/icons/github.svg"
                alt=""
              />
            </a>
            <a href="https://in.linkedin.com/in/jerry-isaac-b97a42258">
              <img
                src="https://d1sax8z0tfd9ab.cloudfront.net/icons/linkedin.svg"
                alt=""
              />
            </a>
            <a href="mailto:jerry24isaac@gmail.com">
              <img
                src="https://d1sax8z0tfd9ab.cloudfront.net/icons/mail.svg"
                alt=""
              />
            </a>
          </div> 
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
