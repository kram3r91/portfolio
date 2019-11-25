import React, { Component } from 'react';
import '../../css/navigation.css';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light">
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">about</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
