import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSkype, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import upworkLogo from './upwork.png';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="socials">
          <a href="https://www.upwork.com/o/profiles/users/_~0183a72fd6c73daa4c/" target="_blank" rel="noopener noreferrer"><img src={upworkLogo} alt="upwork" className="upwork"/></a>
          <a href="https://www.linkedin.com/in/claudiu-ciprian/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          <a href="https://github.com/kram3r91"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
          <a href="skype:todirasclaudiu?chat"><FontAwesomeIcon icon={faSkype} size="2x" /></a>
          <a href="mailto:me@claudiutodiras.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
        </div>
      </React.Fragment>
    );
  }
}
