import React from 'react';

function PalabreriasLogo() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 200 200'
      className='h-8 w-8'
    >
      {/* Fondo circular */}
      <circle
        cx='100'
        cy='100'
        r='95'
        fill='#eab308'
        stroke='#3b82f6'
        strokeWidth='5'
      />

      {/* Elementos decorativos */}
      <ellipse
        cx='100'
        cy='100'
        rx='60'
        ry='30'
        fill='#a855f7'
        opacity='0.8'
      />
      <ellipse
        cx='100'
        cy='100'
        rx='30'
        ry='60'
        fill='#ef4444'
        opacity='0.8'
      />

      {/* Burbujas de diálogo */}
      <path
        d='M50 70 Q30 50 50 30 Q70 10 90 30 Q110 50 90 70 Z'
        fill='#3b82f6'
      />
      <circle
        cx='70'
        cy='50'
        r='5'
        fill='#ffffff'
      />
      <circle
        cx='80'
        cy='50'
        r='5'
        fill='#ffffff'
      />
      <circle
        cx='75'
        cy='60'
        r='5'
        fill='#ffffff'
      />

      <path
        d='M150 130 Q170 110 150 90 Q130 70 110 90 Q90 110 110 130 Z'
        fill='#a855f7'
      />
      <circle
        cx='130'
        cy='110'
        r='5'
        fill='#ffffff'
      />
      <circle
        cx='140'
        cy='110'
        r='5'
        fill='#ffffff'
      />
      <circle
        cx='135'
        cy='120'
        r='5'
        fill='#ffffff'
      />

      {/* Detalles dinámicos */}
      <circle
        cx='100'
        cy='100'
        r='15'
        fill='#ffffff'
        opacity='0.8'
      />
    </svg>
  );
}

export default PalabreriasLogo;
