import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

export const Dice = () => {
  const [value, setValue] = useState(1);
  const [rolling, setRolling] = useState(false);

  // Configuración de la animación para simular rebote
  const { transform, opacity } = useSpring({
    transform: rolling
      ? 'rotateX(720deg) rotateY(720deg) scale(1.5) translateZ(50px)'
      : 'rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)',
    opacity: rolling ? 0.7 : 1,
    config: {
      tension: 400,  // Reducido para hacer la animación más lenta
      friction: 50,  // Ajustado para una animación más suave
      mass: 1,
    },
    onRest: () => setRolling(false),
  });

  function rollDice() {
    if (!rolling) {
      setRolling(true);
      setValue(Math.floor(Math.random() * 6) + 1);
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <animated.div
        style={{
          width: '5rem',
          height: '5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(145deg, #AEA2F7, #e0e0e0)',
          borderRadius: '15px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
          transform,
          opacity,
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#333',
          cursor: rolling ? 'not-allowed' : 'pointer',
          position: 'relative',
          transition: 'background 0.3s ease',
        }}
        onClick={rollDice}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(145deg, ##AEA2F7, #e0e0e0)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'linear-gradient(145deg, ##AEA2F7, #e0e0e0)';
        }}
        className=' h-full m-auto'
      >
        {value}
      </animated.div>
    </div>
  );
}
