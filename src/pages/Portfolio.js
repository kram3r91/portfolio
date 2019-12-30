import React from "react";
import Particles from 'react-particles-js';

const Portfolio = () => {
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
      <h1>Portfolio</h1>
    </div>
  )
}

export default Portfolio;
