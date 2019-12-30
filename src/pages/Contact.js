import React from "react";
import Particles from 'react-particles-js';

const Contact = () => {
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
      <h1>Contact</h1>
    </div>
  )
}

export default Contact;
