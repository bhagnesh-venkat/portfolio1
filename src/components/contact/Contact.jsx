import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessage(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="Contact Illustration" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
          ></textarea>
          <button type="submit">Send</button>
          {message && <span className="success-message">Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
