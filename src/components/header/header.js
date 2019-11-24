import React, { Component } from 'react';
import HeaderNav from './nav';
import HeaderSocials from './socials';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <HeaderNav />
          <div class="row banner">
            <div class="banner-text">
              <h1 class="responsive-headline">I'm Claudiu Todiras.</h1>
              <hr />
              <HeaderSocials />
            </div>
          </div>
          <p class="scrolldown">
            <a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
