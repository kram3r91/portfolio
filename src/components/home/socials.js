import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faSkype } from '@fortawesome/free-brands-svg-icons'

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="socials">
          <a href="https://www.facebook.com/kram3rRO" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
          <a href="https://www.linkedin.com/in/claudiu-ciprian/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          <a href="https://www.instagram.com/claudiu.cip/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
          <a href="skype:live:todirasclaudiu_1?chat"><FontAwesomeIcon icon={faSkype} size="2x" /></a>
        </div>
      </React.Fragment>
    );
  }
}
