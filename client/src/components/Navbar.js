import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(
    () => {
      showButton();

      window.addEventListener('resize', showButton);

      return () => {
        window.removeEventListener('resize', showButton);
      };
    }, []
  )


  return (
    <nav className='navbar'>
      <div className='container-main'>

        <Link to="/" className='cassia-logo' onClick={closeMobileMenu}>
          My School <span style={{ color: 'transparent' }}>0</span><i class="fa-solid fa-book-open-reader nav-icon-align"></i>
        </Link>

        <div className={click ? 'ul-menu active' : 'ul-menu'}>
          <div className='nav-front'>
            <Link to='/' className='ul-links' onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to='/grades' className='ul-links' onClick={closeMobileMenu}>
              Grades
            </Link>
          </div>

          {/* ---------------- */}

          <div className='nav-end'>
            <Link to='/login' className='ul-links' onClick={closeMobileMenu}>
              Log In
            </Link>
            <Link to='/signup' className='ul-links' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </div>

          {/* ---------------- */}

          <Link
            to='/sign-up'
            className='ul-links-mobile'
            onClick={closeMobileMenu}>
            Sign Up
          </Link>



        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        {/* {button && <Button buttonStyle={'btn--outline'}>SIGN UP</Button>} */}
      </div>
    </nav>
  );
}

export default Navbar;
