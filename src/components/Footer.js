import React from 'react';
import {SocialIcon} from './ui';

const Footer = () => (
  <section className="hero is-dark is-bold" id="footer">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Reach out to us</h1>
        <div className="content">
          <p className="field">
            <SocialIcon
              url="mailto:hackescup@gmail.com"
              label="E-mail"
              icon="fas fa-envelope"
            />
            <SocialIcon
              url="https://facebook.com/hackescup"
              label="Facebook"
              icon="fab fa-facebook"
            />
            <SocialIcon
              url="https://instagram.com/hackescup"
              label="Instagram"
              icon="fab fa-instagram"
            />
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
