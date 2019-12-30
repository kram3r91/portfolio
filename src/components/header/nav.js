import React, { Component } from 'react';
import '../../css/navigation.css';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
          <img className="navbar-brand" src="logo.png" width="80" alt="Claudiu Todiras logo" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">about</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
