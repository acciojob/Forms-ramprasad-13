import React from 'react';
import '../styles/App.css'

const Card = (props) => {
  return (
    <div className="card">
      {/* This is where your Form code will appear */}
      {props.children} 
    </div>
  );
};

export default Card;