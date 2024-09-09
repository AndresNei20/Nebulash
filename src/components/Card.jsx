import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';
import imageEstelar from '../assets/images/estelares.png'
import imageEspecial from '../assets/images/especiales.png'
import imageIndividual from '../assets/images/individual.png'
import imageCompetitivo from '../assets/images/competitivo.png'
import imageCooperativo from '../assets/images/cooperativo.png'

export default function Card({card, type, onClick}) {
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
        height: '35rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
      className=" w-full m-auto my-6 flex justify-center"
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
            background: type === 'estelares' ? 'linear-gradient(180deg, rgba(17,0,84,1) 0%, rgba(93,46,201,1) 100%)' : 'linear-gradient(180deg, rgba(0,247,177,1) 0%, rgba(0,253,241,1) 100%)' , 
            borderRadius: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
          }}
        >
          {flipped 
          ? 
          <div className=' flex flex-col items-center justify-center h-full w-full'>
            <img
              src={card.type === 'individual' ? imageIndividual : card.type === 'cooperativo' ? imageCooperativo : card.type === 'competitivo' ? imageCompetitivo : ''} 
              alt="Back of card"
              className='w-full'
            />
            <h1 className={`text-5xl font-bold ${type === 'estelares' ?  'text-white' : 'text-blue-950' }`}>{card.line1} </h1>
            <h1 className={`text-3xl font-bold ${type === 'estelares' ?  'text-white' : 'text-blue-950' }`}>{card.line2} </h1>
            <p className={`mt-5 text-sm w-4/5 text-center font-medium ${type === 'estelares' ?  'text-white' : 'text-blue-950' }`}>{card.description} </p>
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
            background: type === 'estelares' ? 'linear-gradient(180deg, rgba(17,0,84,1) 0%, rgba(93,46,201,1) 100%)' : 'linear-gradient(180deg, rgba(0,247,177,1) 0%, rgba(0,253,241,1) 100%)' , 
            borderRadius: '1rem',
            transform: 'rotateY(180deg)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className='flex flex-col justify-center'
        >
          
          <img
            src={type === 'estelares' ? imageEstelar : imageEspecial} 
            alt="Back of card"
            className='w-full'
          />

          <h1 className={`text-5xl font-bold ${type === 'estelares' ?  'text-white' : 'text-blue-950' }`}>Misiones </h1>
          <h1 className={`text-3xl font-bold ${type === 'estelares' ?  'text-white' : 'text-blue-950' }`}>{type} </h1>
        </div>
      </animated.div>
    </div>
  );
}

Card.propTypes = {
    card: PropTypes.object,
    type: PropTypes.string,
    onClick: PropTypes.func,
}

