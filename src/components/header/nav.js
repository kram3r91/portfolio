import React, { Component } from 'react';
import '../../css/navigation.css';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light">
          <img class="navbar-brand" src="logo.png" width="80"/>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">about</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/portfolio">portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
