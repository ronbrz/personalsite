import React from 'react';
import Fresh from '../images/fresh.jpg';

const Bio = () => 
      <div style={{
          maxWidth: '800px',
          padding: '50px',
          margin: '200px auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          backgroundColor: '#dad2d8',
          borderRadius: '5px'
      }}>
        <img src={Fresh} style={{
            borderRadius : '50%',
            maxWidth: '300px'
        }}/>
        <div style={{
            padding: '0 50px 0 50px',
            maxWidth: '400px',
            textAlign: 'center'
            
        }}>
          Hello and welcome to my little corner of the internet! 
          My name is Ronny Brzezinski, I am a person and a Software Developer.
          My quest in life is truth, although I am frequently distracted. There
          are a lot of shiny things in this world. 
        </div>
      </div>;

export default Bio;
