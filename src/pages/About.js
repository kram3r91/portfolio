import React from "react";
import Particles from 'react-particles-js';

const About = () => {
  return (
    <div>
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
      <h1>About</h1>
    </div>
  )
}

export default About;
