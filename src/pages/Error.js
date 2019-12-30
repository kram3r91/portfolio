import React from "react";
import Particles from 'react-particles-js';

const Error = () => {
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
      <h1 class="text-center">Error 404!</h1>
      <h2 class="text-center">Page not found.</h2>
    </div>
  )
}

export default Error;
