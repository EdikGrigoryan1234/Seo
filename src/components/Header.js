import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function Header() {
  const [showServiceLink, setShowServiceLink] = useState(true);

  const handleServicesClick = () => {
    setShowServiceLink(prevState => !prevState);
  };

  return (
    <header className='fixed w-full h-1/5 p-11 flex justify-between items-center bg-[rgba(31,33,46,0.33)]'>
      <div>
        <Link className='flex items-center' to='/'>
          <h3 className='text-2xl text-white'>CREATE</h3>
          <h3 className='text-5xl text-[#7772F1]'>X</h3>
        </Link>
      </div>
      <nav className='flex items-center gap-10'>
        <ul className='flex gap-10 text-white'>
          <div className=' gap-5'>
            <li>
              <div className="relative">
                <Link
                  to='/services'
                  className='text-white text-lg font-light cursor-pointer'
                  onClick={handleServicesClick}
                >
                  Services {showServiceLink ? 'ᐱ ' : 'ᐯ '}
                  {showServiceLink }
                  {!showServiceLink }
                </Link>
              </div>
            </li>
            {showServiceLink && (
              <li>
                <Link to='/service' className='text-white text-lg font-light cursor-pointer'>
                  Service
                </Link>
              </li>
            )}
          </div>
          <li>
            <Link to='/studio' className='text-white text-lg font-light cursor-pointer'>
              Case Studies
            </Link>
          </li>
          <li>
            <Link to='/about' className='text-white text-lg font-light cursor-pointer'>
              About Us
            </Link>
          </li>
          <li>
            <Link to='/blog' className='text-white text-lg font-light cursor-pointer'>
              Blog
            </Link>
          </li>
          <li>
            <Link to='/contact' className='text-white text-lg font-light cursor-pointer'>
              Contacts
            </Link>
          </li>
        </ul>
        <Link to='/careers'>
          <Button text="Talk to a human" back="#7772F1" color="white"></Button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;