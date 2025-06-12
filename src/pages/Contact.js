import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import '../styles/Contact.css';
import Footer from '../components/Footer';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_hn8i8bc',
      'template_8r328tb',
      form.current,
      'aTJEeY5ckzZxlV4rK'
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Try again later.');
        console.error(error);
      }
    );
  };

  return (
    <div className="page-c">
      <div className="contact">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <input type="text" name="title" placeholder="Mail Subject" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <footer>
        <div className="address">
          <div className="icon"><FaMapMarkerAlt /></div>
          <p> Vill: Belia, via Tarapith, PO: Barshal, Dist: Birbhum, West Bengal
            <br />
            C-15, Surya Roshni Ltd., Moradabad Rd, Kashipur, Uttarakhand </p>
        </div>
        <div className="phone-no">
          <div className="icon"><FaPhoneAlt /></div>
          <p> (+91) 7617654425 </p>
        </div>
      </footer>
      <Footer />
    </div>
  );
}

export default Contact;
