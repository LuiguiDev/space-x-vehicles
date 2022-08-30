import React from 'react';

function Spacecraft(props) {
  return (
    <div className='container'>
      <h2>{props.name}</h2>
      <img 
        className='image' 
        src={require(`../images/${props.image}.jpg`)}
        alt='images' />
      <div className='features'>
        <p><strong>Height</strong> {props.height}</p>
        <p><strong>Diameter</strong> {props.diameter}</p>
        <p><strong>Mass</strong> {props.mass}</p>
        <p><strong>Payload to LEO</strong> {props.payload}</p>
      </div>
    </div>    
  );
}

export default Spacecraft