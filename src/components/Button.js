import React from 'react';

function Button(props) {
  const buttonStyle = {
    backgroundColor: props.back,
    width: 'auto',
    height: 'auto',
	 color:props.color,
	 padding:'20px',
	};

  return (
    <button className="  rounded-3xl" style={buttonStyle}>{props.text}</button>
  );
}

export default Button;