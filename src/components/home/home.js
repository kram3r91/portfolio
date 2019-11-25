import React, { Component } from 'react';
import HeaderNav from '../header/nav';
import HomeWritten from './written';
import HomeSocials from './socials';
import '../../css/home.css';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="home">
          <HeaderNav />
          <HomeWritten />
        </section>
      </React.Fragment>
    );
  }
}
