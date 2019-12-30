import React, { Component } from 'react';
import Typing from 'react-typing-animation';

import HomeSocials from './socials';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="HomeWritten text-center">
          <Typing speed={100}>
            <h1>Hi!</h1>
            <Typing.Delay ms={1500} />
            <h1>I am Claudiu Todiras</h1>
            <Typing.Delay ms={1500} />
            <h1>Frontend web developer.</h1>
          </Typing>
          <HomeSocials />
        </div>
      </React.Fragment>
    );
  }
}
