import React from 'react';
import { motion } from 'framer-motion';

const imageUrl = "https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/metricas%20.webp";

const AnimatedPhone: React.FC = () => {
  return (
    <div className="relative w-full aspect-[9/19.5] max-w-[260px] xs:max-w-[300px] sm:max-w-[340px] mx-auto"> {/* Nuevo contenedor padre */}
      <motion.div 
          className="relative w-full h-full bg-deep-navy rounded-[40px] shadow-2xl shadow-sincro-blue/20 border-4 border-gray-800" // Clases de tamaño eliminadas y reemplazadas por w-full h-full
          style={{ 
              transformStyle: 'preserve-3d',
              transform: 'rotateY(15deg) rotateX(-10deg)'
          }}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
      >
        {/* Pantalla Interactiva con Scroll */}
        <div className="absolute inset-2 bg-black rounded-[32px] overflow-hidden z-10">
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30"></div> {/* Isla dinámica */}
          <div 
              className="absolute inset-0 overflow-y-auto no-scrollbar overscroll-contain"
              style={{ WebkitOverflowScrolling: 'touch' }}
          >
              <img
                src={imageUrl}
                className="w-full h-auto object-top" // Revertido a w-full h-auto object-top
                alt="Métricas de Kura AI pruebastrando reducción de ausentismo y aumento de ROI"
              />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedPhone;