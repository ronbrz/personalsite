import React from 'react';
import Particles from 'react-particles-js';

import Hubble from '../images/hubble.jpg';
import '../components/indexHead.css';

const IndexHeader = () => 
      <div style= {{ height: '100vh', position: 'relative'}}>
        <Particles params={{
	          "particles": {
	              "number": {
	                  "value": 50
	              },
                "color": {
                    "value": "#fff"
                },
	              "size": {
	                  "value": 3
	              },
                "line_linked": {
                    "enable": true,
                    "color" : "#fff"
                }
	          }
	      }}
                   width='100%'
                   className="indexHead"
                   height='100%'
                   style={{width: '100%',
                           height: '100%',
                           position: 'relative', 
                           backgroundImage: `URL(${Hubble})`,
                           backgroundPosition: 'center',
                           backgroundSize: 'cover'
                          }} />
        <div style={{position: 'absolute',
                     top: 0,
                     left: 0,
                     justifyContent: 'center',
                     flexDirection: 'column',
                     alignItems: 'center',
                     display: 'flex',
                     height: '100%',
                     width: '100%',
                     lineHeight: '1',
                     color: 'white'
                     }}
             className="myName">
          <div>ron</div>
          <div>brz</div>
        </div>
      </div>;

export default IndexHeader;
