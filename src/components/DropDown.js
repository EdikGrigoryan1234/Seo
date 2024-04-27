import React, { useState } from 'react';

function DropDown( props) {
  const [isOpen, setIsOpen] = useState(false);
	let str = props.text
	let str2 = props.content
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className=' flex items-center gap-8'> 
      <button onClick={toggleDropdown} className=' text-3xl'>
        {isOpen ? '-  ' : `+ ${str}`}
      </button>
      {isOpen && (
        <div className=' text-3xl'>
              {str2}
        </div>
      )}
    </div>
  );
}
export default DropDown