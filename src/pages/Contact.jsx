import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>
          <strong>Address:</strong> 123 Main St, Anytown, USA 12345
        </p>
        <p>
          <strong>Phone:</strong> 555-555-5555
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@example.com">info@example.com</a>
        </p>
        <p>
          <strong>Hours of Operation:</strong> Monday - Friday, 9am - 5pm EST
        </p>
      </div>
    </div>
  );
};

export default Contact;
