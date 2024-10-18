import React from "react";
import "./ContactPage.css"; 

export function ContactPage() {
  return (
    <div className="ContactPage">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us. We're here to help!</p>
      <img src="https://i.pinimg.com/564x/d8/11/10/d81110f74b45542aa26eddc290592ed8.jpg" alt="Contact Us" className="contact-image" />
      <div className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button className="send-button">Send Message</button>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>1234 Bangladesh St, Wonderland, WW 56789</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <span>+374-94-633-488</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <span>lilit@example.com</span>
        </div>
      </div>
    </div>
  );
}

