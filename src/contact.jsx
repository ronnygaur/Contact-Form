import React from 'react';
import './Contact.css';

const Contact = ({ latitude, longitude }) => {
    return (
        <div className="contact-container">
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form>
                <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile No:</label>
                        <input type="tel" id="mobile" name="mobile" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject:</label>
                        <input type="text" id="subject" name="subject" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>

            </div>
            
            <div className="map-container">
                <h2>Our Location</h2>
                <iframe
                    title="Location"
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57484.73086139721!2d73.28475691915648!3d25.77731149931086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3942725536fc8e7f%3A0x8758f805e49b50!2sPali%2C%20Rajasthan%20306401!5e0!3m2!1sen!2sin!4v1711136683826!5m2!1sen!2sin`}
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};


export default Contact;
