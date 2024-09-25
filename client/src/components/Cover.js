import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './Cover.css';

function Cover() {
  return (
    <div className='hero-container'>
      <h1 className='hero-title'>My School</h1>
      <p className='hero-text'>School Management System</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default Cover;