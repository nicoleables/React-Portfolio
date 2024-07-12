import React, { useState } from "react";
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMessage, setErrorMessage] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("Please enter all the fields");
      return;
    }

    var templateParams = {
      name: name,
      email: email,
      message: message
    };

    emailjs.send("service_uhczwkr", "template_02wul1o", templateParams, "RCz6_rVPS8yn6M2xP")
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         setIsEmailSent(true);
      }, function(error) {
         console.log('FAILED...', error);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact">
      <h2>Contact me</h2>
      <p>Have a question or want to work together?</p>
      <form onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="message"
        ></textarea>
        <button type="submit">
          Submit
        </button>
      </form>
      {errMessage && (
        <div>
          <p className="error-text">{errMessage}</p>
        </div>
      )}
      {isEmailSent && (
        <div>
          <p>Message sent successfully!</p>
        </div>
      )}
    </section>
  );
}

export default Contact;