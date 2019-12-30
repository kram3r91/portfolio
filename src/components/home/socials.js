import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';

import upworkLogo from './upwork.svg';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="socials">
          <a href="https://www.upwork.com/o/profiles/users/_~0183a72fd6c73daa4c/" target="_blank" rel="noopener noreferrer"><img src={upworkLogo} alt="upwork"/></a>
          <a href="https://www.linkedin.com/in/claudiu-ciprian/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          <a href="skype:live:todirasclaudiu_1?chat"><FontAwesomeIcon icon={faSkype} size="2x" /></a>
        </div>
      </React.Fragment>
    );
  }
}
