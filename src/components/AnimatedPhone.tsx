
import React, { useState } from 'react';

// La URL proporcionada, asegurándonos de que sea una cadena literal correcta.
const imageUrl = "https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/metricas%20.webp";

const AnimatedPhone: React.FC = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="phone-mockup">
      <div className="btn1"></div>
      <div className="btn2"></div>
      <div className="btn3"></div>
      <div className="btn4"></div>
      <div className="phone-screen">
        {hasError ? (
          <div className="error-fallback">
            <div className="spinner"></div>
          </div>
        ) : (
          <img 
            key={imageUrl} // Equivalente a UniqueKey() para forzar el re-renderizado si la URL cambia
            src={imageUrl}
            alt="Panel de Calma Operativa"
            className="metrics-image"
            onError={() => setHasError(true)} // Equivalente a errorBuilder
          />
        )}
      </div>
      <div className="top">
        <div className="camera">
          <div className="int"></div>
        </div>
        <div className="speaker"></div>
      </div>
    </div>
  );
};

export default AnimatedPhone;
