import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';

export default function Card({value, onClick  }) {
  const [flipped, setFlipped] = useState(false);

  const { transform } = useSpring({
    transform: flipped ? 'rotateY(0deg)' : 'rotateY(180deg)',
    config: { duration: 300 },
  });

  return (
    <div
      onClick={() => {
        setFlipped(!flipped)
        onClick()
    }}
      style={{ perspective: '1000px', width: '100px', height: '150px' }}
    >
      <animated.div
        style={{
          transform,
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%',
        }}
      >
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          background: 'white',
          border: '1px solid black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px'
        }}>
          {flipped && value}
        </div>
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          background: 'gray',
          transform: 'rotateY(180deg)',
        }}>
          {/* Card Back */}
        </div>
      </animated.div>
    </div>
  );
}

Card.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
}

