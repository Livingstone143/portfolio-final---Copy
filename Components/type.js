'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function App(){
  return (
    <TypeAnimation
      sequence={[
        
        'I am batman🦇 ,just kidding',
        2000, 
        'I am a Developer',
        1000,
        'I am a tech enthusiast',
        1000,
        'I am iron man ⎊',
        1000
      ]}
      wrapper="span"
      speed={50}
      className="text-2xl py-2"
      repeat={Infinity}
    />
  );   
};
export default App;