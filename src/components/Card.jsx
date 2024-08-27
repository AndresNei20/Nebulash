import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';
import imageCard from '../assets/images/fron-card.png'

export default function Card({card, onClick  }) {
  const [flipped, setFlipped] = useState(false);

  const { transform } = useSpring({
    transform: flipped ? 'rotateY(0deg)' : 'rotateY(180deg)',
    config: { duration: 300 },
  });

  return (
    <div
      onClick={() => {
        setFlipped(!flipped);
        onClick();
      }}
      style={{
        perspective: '1000px',
        width: '20rem',
        height: '30rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
      className="card-container"
    >
      <animated.div
        style={{
          transform,
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%',
        }}
      >
        {/* Cara frontal de la carta (contenido visible cuando está volteada) */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            background: '#FFFFFF',
            border: '2px solid #000000',
            borderRadius: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
          }}
        >
          {flipped 
          ? 
          <div className=' flex flex-col items-center'>
            <h2 className=' text-2xl font-bold'>{card.type} </h2>
            <p className='text-lg w-4/5'>{card.description} </p>
          </div>
          
          : null}
        </div>
        
        {/* Cara posterior de la carta (visible antes de voltearse) */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            background: '#5D2EC9', // Cambia el color de fondo de la parte posterior
            borderRadius: '1rem',
            transform: 'rotateY(180deg)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className='flex flex-col'
        >
          <img
            src={imageCard} // Agrega la URL de tu imagen aquí
            alt="Back of card"
            style={{
              width: '70%',
              height: '70%',
              objectFit: 'cover',
            }}
          />

            <h1 className='text-2xl font-bold text-white'>Challenges cards</h1>
        </div>
      </animated.div>
    </div>
  );
}

Card.propTypes = {
    card: PropTypes.array,
    onClick: PropTypes.func,
}

