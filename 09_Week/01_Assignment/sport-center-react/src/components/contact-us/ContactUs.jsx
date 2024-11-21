import React from "react";
import "./contact-us.css";

function ContactUs() {
  return (
    <section id="contact-us">
      <div className="contact-us-container container">
        <div className="header">
          <h2>CONTACT US</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            iusto itaque, sapiente! <br /> illum temporibus nihil.
          </p>
        </div>

        <div className="contact-us-wrapper">
          <div className="contact-us-left">
            <div className="contact-info">
              <div className="mobile">
                <p className="lead">Mobile Number</p>
                <p>+135 773 321 4442</p>
              </div>
              <div className="email">
                <p className="lead">Email Address</p>
                <p>demo@demo.com</p>
              </div>
            </div>

            <div className="appoinment">
              <p className="lead">Make An Appoinment</p>
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea
                  rows="7"
                  cols="50"
                  name="text"
                  placeholder="Your Message"
                ></textarea>
              </form>
            </div>
          </div>
          {/* google maps */}
          <div className="contact-us-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.88850531832!2d28.847372628072865!3d41.00546324300304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1728229671096!5m2!1str!2str"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* google maps end */}
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
