import React from 'react';
import github from '../images/GitHub-Mark-32px.png';

const Contact = () =>
      <div style={{textAlign: 'center'}}>
        <div>
          <a href="https://github.com/ronbrz" style={{display: 'flex', justifyContent: 'center'}}>
            <img src={github} style={{paddingRight: '5px'}}/>
            github.com/ronbrz
          </a>
        </div>
        <div style={{paddingBottom: '20px'}}>
          <a href="mailto:ronbrz@protonmail.ch">ronbrz@protonmail.ch</a>
        </div>
      </div>;

export default Contact;
