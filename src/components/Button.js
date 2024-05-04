import React from 'react';

function Button(props) {
  const buttonStyle = {
    backgroundColor: props.back,
    width: props.width, 
    height: props.height,
	 margin:'20px',
	 color:props.color,
   display:'flex',
   justyfyContent:'center',
   alignItems:'center',
	 padding:'20px',
	 border:props.bor,
	borderRadius:'10px'
	};

  return (
    <button style={buttonStyle}>{props.text}</button>
  );
}

export default Button;