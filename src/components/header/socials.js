import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <ul class="social">
          <li><a href="https://www.facebook.com/kram3rRO" target="_blank"><i class="fa fa-facebook"></i></a></li>
          <li><a href="https://www.linkedin.com/in/claudiu-ciprian/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
          <li><a href="https://www.instagram.com/claudiu.cip/" target="_blank"><i class="fa fa-instagram"></i></a></li>
          <li><a href="skype:live:todirasclaudiu_1?chat"><i class="fa fa-skype"></i></a></li>
        </ul>
      </React.Fragment>
    );
  }
}
