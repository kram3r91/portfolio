import React from "react";
import Particles from 'react-particles-js';

import HomeWritten from '../components/home/written';
import '../css/home.css';

const Home = () => {
  return (
    <div>
      <HomeWritten />
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
  )
}

export default Home;
