import React, { Component } from 'react';
import Particles from 'react-particles-js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './css/general.css';

import HomePage from './components/home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        <Particles className="particles"
            params={{
        	    "particles": {
        	        "number": {
        	            "value": 50
        	        },
        	        "size": {
        	            "value": 3
        	        }
        	    },
        	    "interactivity": {
        	        "events": {
        	            "onhover": {
        	                "enable": true,
        	                "mode": "repulse"
        	            }
        	        }
        	    }
        	}} />
      </div>
    );
  }
}
export default App;
