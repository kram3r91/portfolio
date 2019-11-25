import React, { Component } from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <a href="https://www.facebook.com/kram3rRO" target="_blank"><FontAwesomeIcon icon={faHome} /></a>
        <a href="https://www.linkedin.com/in/claudiu-ciprian/" target="_blank">linkedin <FontAwesomeIcon icon="fa-linkedin" /></a>
        <a href="https://www.instagram.com/claudiu.cip/" target="_blank"><i class="fa fa-instagram"></i></a>
        <a href="skype:live:todirasclaudiu_1?chat"><i class="fa fa-skype"></i></a>
      </React.Fragment>
    );
  }
}
